import { createClient } from './server';

/**
 * Typed Supabase queries for marketing content.
 * All queries use the anon key (public read via RLS).
 */

export async function getServiceCategories() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('service_categories')
    .select('*')
    .order('rank', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getServices() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('services')
    .select('*, service_categories(*)')
    .eq('is_public', true)
    .order('rank', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getServiceBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('services')
    .select('*, service_categories(*), offerings(*)')
    .eq('slug', slug)
    .eq('is_public', true)
    .single();

  if (error) throw error;
  return data;
}

export async function getSupportPlans() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('support_plans')
    .select('*')
    .eq('is_public', true)
    .order('rank', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getCustomerStories() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('customer_stories')
    .select('*')
    .eq('is_public', true)
    .order('rank', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getCustomerStoryBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('customer_stories')
    .select('*')
    .eq('slug', slug)
    .eq('is_public', true)
    .single();

  if (error) throw error;
  return data;
}
