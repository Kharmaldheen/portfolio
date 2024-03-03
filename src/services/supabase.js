import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://inmvtsjhrnvbhvnnqlss.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlubXZ0c2pocm52Ymh2bm5xbHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyODAyNTAsImV4cCI6MjAyNDg1NjI1MH0.TfedWI-sCu77LRQpOsALbDYIouR6eZD6najCAj7-tQc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
