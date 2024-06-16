import { createClient } from "@supabase/supabase-js";
import conf from "../../conf/conf";

const SupabaseClient = createClient(conf.supabaseUrl, conf.supabaseAnonKey);

export default SupabaseClient;
