"use server"
import* as z from "zod";
import { LoginSchema } from "@/schemas";
/*
Steps for server actions:
1. Validate credentials
2. Connect to DB
3. Find user.
4. 
*/

export const Login = async (values : z.infer<typeof LoginSchema> ) => {

    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }
    return { success: "Email sent!" }

    console.log(values);

    
}