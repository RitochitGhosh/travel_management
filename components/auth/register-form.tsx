"use client";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { register } from "@/actions/register";


import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { User, Building2 } from "lucide-react";

export const RegisterForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [userType, setUserType] = useState<"customer" | "agency">("customer");

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: "customer", // Default role is customer
            company: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            register(values).then((data) => {
                if (data.error) {
                    setError(data.error);
                    setSuccess(undefined); // Clear success if there’s an error
                } else if (data.success) {
                    setSuccess(data.success);
                    setError(undefined); // Clear error if successful
                }
            });
        });
        
    };

    return (
        <CardWrapper
            headerLabel="Create an Account"
            backButtonLabel="Already have an account?"
            backButtonHref="/auth/log-in"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Enter your name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Enter your email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="space-y-2">
                            <Label>Account Type</Label>
                            <RadioGroup
                                defaultValue="customer"
                                onValueChange={(value) => {
                                    setUserType(value as "customer" | "agency");
                                    form.setValue("role", value); // Update role field
                                }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div>
                                    <RadioGroupItem
                                        value="customer"
                                        id="customer"
                                        className="peer sr-only"
                                    />
                                    <Label
                                        htmlFor="customer"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        <User className="mb-3 h-6 w-6" />
                                        <span className="text-sm font-medium">Customer</span>
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem
                                        value="agency"
                                        id="agency"
                                        className="peer sr-only"
                                    />
                                    <Label
                                        htmlFor="agency"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        <Building2 className="mb-3 h-6 w-6" />
                                        <span className="text-sm font-medium">Travel Agency</span>
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {userType === "agency" && (
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Enter your company name"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                    </div>

                    <FormError message={error} />
                    <FormSuccess message={success} />

                    <Button disabled={isPending} type="submit" className="w-full">
                        Sign Up
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};
