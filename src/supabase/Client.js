import { createClient } from "@supabase/supabase-js"


 export const supabase =    createClient(
   'https://owapcnevgbxibipugbys.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93YXBjbmV2Z2J4aWJpcHVnYnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE2NTU4MjIsImV4cCI6MTk3NzIzMTgyMn0.IxALztANC_NfkbNYEgXnIkQbQ4v680Vr6yZUNH0Njgk'
    )