import { supabase } from './supabase';

export interface EmailSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  source: string;
  created_at: string;
  updated_at: string;
}

// Download email list as CSV
export const downloadEmailListAsCSV = async () => {
  if (!supabase) {
    console.error('Supabase not configured');
    return;
  }

  try {
    const { data, error } = await supabase
      .from('email_subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });

    if (error) {
      console.error('Error fetching emails:', error);
      return;
    }

    if (!data || data.length === 0) {
      alert('No email subscribers found.');
      return;
    }

    // Create CSV content
    const headers = ['Email', 'Subscribed Date', 'Source'];
    const csvContent = [
      headers.join(','),
      ...data.map(row => [
        `"${row.email}"`,
        `"${new Date(row.subscribed_at).toLocaleDateString()}"`,
        `"${row.source}"`
      ].join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    console.log(`Downloaded ${data.length} email subscribers`);
  } catch (error) {
    console.error('Error downloading emails:', error);
  }
};

// Download email list as JSON
export const downloadEmailListAsJSON = async () => {
  if (!supabase) {
    console.error('Supabase not configured');
    return;
  }

  try {
    const { data, error } = await supabase
      .from('email_subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });

    if (error) {
      console.error('Error fetching emails:', error);
      return;
    }

    if (!data || data.length === 0) {
      alert('No email subscribers found.');
      return;
    }

    // Create JSON content
    const jsonContent = JSON.stringify(data, null, 2);

    // Create and download file
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email-subscribers-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    console.log(`Downloaded ${data.length} email subscribers`);
  } catch (error) {
    console.error('Error downloading emails:', error);
  }
};

// Get email list as plain text (for copy/paste)
export const getEmailListAsText = async (): Promise<string> => {
  if (!supabase) {
    console.error('Supabase not configured');
    return '';
  }

  try {
    const { data, error } = await supabase
      .from('email_subscribers')
      .select('email')
      .order('subscribed_at', { ascending: false });

    if (error) {
      console.error('Error fetching emails:', error);
      return '';
    }

    if (!data || data.length === 0) {
      return 'No email subscribers found.';
    }

    return data.map(row => row.email).join('\n');
  } catch (error) {
    console.error('Error fetching emails:', error);
    return '';
  }
};

// Get subscriber count
export const getSubscriberCount = async (): Promise<number> => {
  if (!supabase) {
    return 0;
  }

  try {
    const { count, error } = await supabase
      .from('email_subscribers')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Error counting subscribers:', error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error('Error counting subscribers:', error);
    return 0;
  }
};
