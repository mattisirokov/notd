import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_PROJECT_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_PROJECT_API_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please check your .env file."
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
