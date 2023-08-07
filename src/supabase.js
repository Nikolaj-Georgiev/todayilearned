
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sqghliaxjbqxyapstzaf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZ2hsaWF4amJxeHlhcHN0emFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5ODQxNjUsImV4cCI6MjAwNjU2MDE2NX0.-m7ynn19K9hFaaw3Fwj9msg4QV6iFjU5Z3DdX2SPYd4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;