import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://egcfiulpxehcdgbogbmd.supabase.co";

// eslint-disable-next-line no-undef
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnY2ZpdWxweGVoY2RnYm9nYm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NTE4MjUsImV4cCI6MjAyODQyNzgyNX0.63hAsN1Dbz9SwlOpWS0x7ty-OLw3kdVMGOuXMm2S0pk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
