import { createClient } from '@supabase/supabase-js';

// Substitua pelos valores do seu projeto Supabase
const SUPABASE_URL = 'https://ljuncnuhcvpelucygbca.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdW5jbnVoY3ZwZWx1Y3lnYmNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0MTEwNzcsImV4cCI6MjA0Nzk4NzA3N30.1ACNqIGtl25bP0ILY8Bj4qkS0u7HsotWWSEtc8GgJAk'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
