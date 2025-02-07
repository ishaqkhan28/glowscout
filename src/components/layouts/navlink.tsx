"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-2xl gap-5">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/treatment" legacyBehavior passHref>
        <NavigationMenuLink>
        Goals
        </NavigationMenuLink>
        </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/spa" legacyBehavior passHref>
        <NavigationMenuLink>
          Spas
        </NavigationMenuLink>
        </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none group no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-muted-foreground group-hover:text-myOrange">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-myBlackpara">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"