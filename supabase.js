import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://nmtymllfcnkpmpooszvn.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_9fLzWGfYrXBvQRJFFlUNwg_TXRiuzXW";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);