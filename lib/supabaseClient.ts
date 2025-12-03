import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://obfybkeerbrvpaqjqkpy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iZnlia2VlcmJydnBhcWpxa3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzEzMzksImV4cCI6MjA4MDM0NzMzOX0.5vH51DwWzfcaPGWqLjSDiVc7UwUNjnMcDTY8hPsZ0Sk';

export const supabase = createClient(supabaseUrl, supabaseKey);