"use server"
import* as z from "zod";
import { RegisterSchema } from "@/schemas";
/*
Steps for server actions:
1. Validate credentials
2. Connect to DB
3. Find user.
4. 
*/

export const register = async (values : z.infer<typeof RegisterSchema> ) => {
    console.log("Working..");
    

    const validatedFields = RegisterSchema.safeParse(values);

    console.log(validatedFields);
    

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }
    return { success: "Email sent!" }

   

    
}