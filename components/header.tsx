"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Plane, Map, Phone, User } from "lucide-react";
import Link from "next/link";


export default function Header() {
  let isAuthorized = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex justify-evenly items-center gap-80 h-24  ">
        <Link href="/" className="flex items-center space-x-2">
          <Plane className="h-6 w-6" />
          <span className="text-xl font-bold">Travelia</span>
        </Link>

        {
          isAuthorized ?

          <NavigationMenu>
          <NavigationMenuList className="flex gap-10">
            <NavigationMenuItem className="hover:underline-offset-2">
              <Link href = "./" target="_self">
                <NavigationMenuLink className="group flex items-center gap-2 font-medium hover:underline ease-in-out">
                  <Map className="h-8 w-8" />
                  Destinations
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href = "" >
                <NavigationMenuLink className="group flex items-center gap-2 font-medium hover:underline ease-in-out" >
                  <Phone className="h-8 w-8" />
                  Support
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> 
        : <>
        <div className="w-44" />
        </>
        }

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" size="icon">

            <Link href={"/auth"}> <User className="h-8 w-8" /></Link>

            

          </Button>
        </div>
      </div>
    </header>
  );
}