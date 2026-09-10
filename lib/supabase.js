import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

/** 읽기용(공개 데이터, RLS의 anon SELECT 정책에 의존). */
export function getPublicClient() {
  if (!isSupabaseConfigured) return null;
  return createClient(url, anonKey, { auth: { persistSession: false } });
}

/**
 * 쓰기용(문의 접수). 서버에서만 쓴다.
 * service_role 키가 없으면 anon 키로 떨어지고, 이때는 RLS의 anon INSERT 정책이 필요하다.
 */
export function getServerClient() {
  if (!url) return null;
  const key = serviceKey || anonKey;
  if (!key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
