import { supabase } from '../supabaseClient';

export async function getFacts(setFacts, setIsLoading, currentCategory) {
  setIsLoading(true);

  let query = supabase.from('facts').select('*');

  if (currentCategory !== 'all') query = query.eq('category', currentCategory);

  const { data: facts, error } = await query
    .order('votesInteresting', { ascending: false })
    .limit(1000);

  if (!error) setFacts(facts);
  else alert('There was a problem getting data');
  setIsLoading(false);
}
