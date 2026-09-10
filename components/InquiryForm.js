'use client';

import { useState } from 'react';

const TOPICS = [
  '대동맥질환 (박리·대동맥류)',
  '대동맥판막질환',
  '유전성 대동맥질환 · 가족 검진',
  '말초혈관 · 투석혈관',
  '연구 · 학술 협력',
  '강의 · 취재 요청',
  '기타',
];

export default function InquiryForm({ supabaseReady }) {
  const [state, setState] = useState({ status: 'idle', message: '' });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (!fd.get('consent')) {
      setState({ status: 'error', message: '개인정보 수집·이용에 동의해 주세요.' });
      return;
    }

    setState({ status: 'sending', message: '' });

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          topic: fd.get('topic'),
          message: fd.get('message'),
        }),
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || '전송에 실패했습니다.');

      setState({
        status: 'ok',
        message: '문의가 접수되었습니다. 확인 후 빠른 시일 내 회신드리겠습니다.',
      });
      form.reset();
    } catch (err) {
      setState({ status: 'error', message: err.message });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__grid">
        <div className="field">
          <label htmlFor="name">성함 *</label>
          <input id="name" name="name" required maxLength={40} autoComplete="name" placeholder="홍길동" />
        </div>

        <div className="field">
          <label htmlFor="phone">연락처</label>
          <input id="phone" name="phone" maxLength={30} autoComplete="tel" placeholder="010-0000-0000" />
        </div>

        <div className="field field--full">
          <label htmlFor="email">이메일 *</label>
          <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" placeholder="example@email.com" />
        </div>

        <div className="field field--full">
          <label htmlFor="topic">문의 분야</label>
          <select id="topic" name="topic" defaultValue={TOPICS[0]}>
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="field field--full">
          <label htmlFor="message">문의 내용 *</label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={2000}
            placeholder="궁금하신 내용이나 협력 의뢰사항을 적어주세요."
          />
        </div>

        <p className="form__warn">
          🔒 이 창구는 일반 문의용입니다. <strong>주민등록번호·환자번호·검사 결과 등 민감한
          개인정보나 진료기록은 적지 마세요.</strong>
        </p>

        <label className="form__consent">
          <input type="checkbox" name="consent" value="yes" />
          <span>
            문의 회신을 위한 성함·연락처·이메일 수집 및 이용에 동의합니다. 수집한 정보는 회신
            목적으로만 사용하며 처리 후 즉시 파기합니다.
          </span>
        </label>

        {!supabaseReady && (
          <p className="form__warn">
            💡 현재 백엔드(Supabase)가 미연결 상태이므로 문의 테스트가 모의 모드로 실행됩니다.
          </p>
        )}

        {state.status === 'ok' && <p className="form__msg form__msg--ok">{state.message}</p>}
        {state.status === 'error' && <p className="form__msg form__msg--err">{state.message}</p>}

        <div className="form__submit">
          <button
            className="btn btn--primary"
            type="submit"
            disabled={state.status === 'sending'}
          >
            <span>{state.status === 'sending' ? '전송 중…' : '문의 보내기'}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
