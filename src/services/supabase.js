import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dpdlxqvyothcxqcsibqo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwZGx4cXZ5b3RoY3hxY3NpYnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMDYwOTcsImV4cCI6MjA5MDg4MjA5N30.ISGUsLVEV1WRPlh8kcseQTkwgCk1lpLmoHCOxUj7A_A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
