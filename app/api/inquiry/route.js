import { NextResponse } from 'next/server';
import { getServerClient } from '../../../lib/supabase';

export const runtime = 'nodejs';

const MAX = { name: 40, email: 120, phone: 30, topic: 80, message: 2000 };

function clean(value, limit) {
  return String(value ?? '').trim().slice(0, limit);
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: '요청 형식이 올바르지 않습니다.' }, { status: 400 });
  }

  const name = clean(payload.name, MAX.name);
  const email = clean(payload.email, MAX.email);
  const phone = clean(payload.phone, MAX.phone);
  const topic = clean(payload.topic, MAX.topic);
  const message = clean(payload.message, MAX.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: '성함·이메일·문의 내용은 필수입니다.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: '이메일 형식을 확인해 주세요.' }, { status: 400 });
  }

  const supabase = getServerClient();
  if (!supabase) {
    // Supabase 미설정 상태에서도 폼이 죽지 않도록 안내만 하고 끝낸다.
    console.warn('[inquiry] Supabase 미설정 — 저장하지 않음:', { name, email, topic });
    return NextResponse.json(
      { error: '문의 저장소가 아직 연결되지 않았습니다. 이메일로 보내주세요.' },
      { status: 503 }
    );
  }

  const { error } = await supabase.from('inquiries').insert({
    name,
    email,
    phone: phone || null,
    topic: topic || null,
    message,
  });

  if (error) {
    console.error('[inquiry] insert 실패:', error.message);
    return NextResponse.json({ error: '전송 중 오류가 발생했습니다.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
