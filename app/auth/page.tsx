"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserPlus, Building2, User } from "lucide-react";

export default function AuthPage() {
  const [userType, setUserType] = useState("customer");

  return (
    <main className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-10">
      <Card className="w-full max-w-lg p-8">
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          <TabsContent value="signup">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-semibold">Create an Account</h1>
                <p className="text-sm text-muted-foreground">
                  Choose your account type and get started
                </p>
              </div>

              <RadioGroup
                defaultValue="customer"
                onValueChange={setUserType}
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

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                {userType === "agency" && (
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Travel Agency" />
                  </div>
                )}
                <Button className="w-full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create Account
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="login">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-semibold">Welcome Back</h1>
                <p className="text-sm text-muted-foreground">
                  Login to your account
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" />
                </div>
                <Button className="w-full">Login</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </main>
  );
}