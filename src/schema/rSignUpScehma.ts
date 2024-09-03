import { z } from "zod";

export const usernameValidation=z.
 string().
 min(3,"Not Proper Length").
 max(20,"Not Proper Length")

export const rSignUpSchema=z.object({
    email: z.string().email().min(1).max(255),
    password: z.string().min(6,"Not Proper Length").max(8,"Not Proper Length"),
    company:z.string(),
    userName:usernameValidation
})