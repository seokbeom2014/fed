import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

/** 읽기용(공개 데이터, RLS의 anon SELECT 정책에 의존). */
export function getPublicClient() {
  if (!isSupabaseConfigured) return null;
  return createClient(url, anonKey, { auth: { persistSession: false } });
}
