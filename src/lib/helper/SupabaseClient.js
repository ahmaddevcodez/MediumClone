import { createClient } from "@supabase/supabase-js";
import conf from "../../conf/conf";

const supabaseUrl = conf.supabaseUrl;
const supabaseKey = conf.supabaseAnonKey;

const SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default SupabaseClient;
