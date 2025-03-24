import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gwfijosvkdxaibroogyh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3Zmlqb3N2a2R4YWlicm9vZ3loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwODUyMTUsImV4cCI6MjA1NjY2MTIxNX0.moNtky6RHvOsyPYtNQ9FE_Kz3GqPcDLBDJAiM5cKdJQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
