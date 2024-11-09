import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }), // Don't restrict min length for backward compatibility
});

export const RegisterSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Valid email is required" }),
    password: z.string().min(6, { message: "Minimum 6 characters required" }),
    role: z.enum(["customer", "agency"], { message: "Role must be customer or agency" }),
    company: z.string().optional().refine((val, ctx) => {       // new thing !!!
        // Make company required if role is "agency"
        if (ctx.parent.role === "agency" && !val) {
            return false;
        }
        return true;
    }, { message: "Company name is required for agencies" })
});
