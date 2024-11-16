"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Plane, Map, Phone, User, Divide } from "lucide-react";
import Link from "next/link";
import ExploreModal from "./exploremodal";
import { divMode } from "@tsparticles/engine";


export default function Header() {
  let isAuthorized = false;

  return (
    <header className="px-10 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center h-24  ">
        <Link href="/" className="flex items-center space-x-2">
          <Plane className="h-6 w-6" />
          <span className="text-xl font-bold">Travelia</span>
        </Link>
          <NavigationMenu>
          <NavigationMenuList className="flex gap-10">
            <NavigationMenuItem className="hover:underline-offset-2">
              <Link href = "#Explore" target="_self">
                <NavigationMenuLink className="group flex items-center gap-2 font-medium hover:underline ease-in-out">
                  <Map className="h-8 w-8" />
                  <div>Explore</div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href = "#Contact-us" >
                <NavigationMenuLink className="group flex items-center gap-2 font-medium hover:underline ease-in-out" >
                  <Phone className="h-8 w-8" />
                  Support
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> 

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant={isAuthorized?"outline":null} size={isAuthorized?"icon":null}>
            <Link href={"/auth/sign-up"}> {isAuthorized?<User className="h-8 w-8" />: <div className="bg-blue-600 text-white text-md font-bold p-3 rounded-xl">SignUp</div>}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}