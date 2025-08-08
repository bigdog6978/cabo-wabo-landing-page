import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Only create the client if we have the required environment variables
export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Email collection function
export const saveEmail = async (email: string) => {
  if (!supabase) {
    console.warn('Supabase not configured - skipping email save');
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    const { error } = await supabase
      .from('email_subscribers')
      .insert([{ 
        email, 
        subscribed_at: new Date().toISOString(),
        source: 'landing_page'
      }]);
    
    if (error) {
      console.error('Error saving email:', error);
      throw error;
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error saving email:', error);
    return { success: false, error };
  }
}; 