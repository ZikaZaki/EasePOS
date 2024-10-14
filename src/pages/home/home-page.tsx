import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared/components/ui";
import Product from "./product";

import { Link } from "react-router-dom";

import { Button } from "@shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared/components/ui/card";
import { Input } from "@shared/components/ui/input";
import { Label } from "@shared/components/ui/label";
import Panel from "./panel";

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

const HomePage: React.FC = () => {
  return (
    // <div className="flex h-full items-center justify-center ">
    //   <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    //     <form>
    //       <div className="relative">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
    //         >
    //           <circle cx="11" cy="11" r="8"></circle>
    //           <path d="m21 21-4.3-4.3"></path>
    //         </svg>
    //         <input
    //           className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
    //           placeholder="Search"
    //         />
    //       </div>
    //     </form>
    //   </div>
    //   {/* <h1 className="text-3xl">Welcome to Our App</h1> */}
    //   {/* <Product /> */}
    //   <Card className="mx-auto max-w-md">
    //     <CardHeader>
    //       <CardTitle className="text-xl">Sign Up</CardTitle>
    //       <CardDescription>
    //         Enter your information to create an account
    //       </CardDescription>
    //     </CardHeader>
    //     <CardContent>
    //       <div className="grid gap-4">
    //         <div className="grid grid-cols-2 gap-4">
    //           <div className="grid gap-2">
    //             <Label htmlFor="first-name">First name</Label>
    //             <Input id="first-name" placeholder="first name" required />
    //           </div>
    //           <div className="grid gap-2">
    //             <Label htmlFor="last-name">Last name</Label>
    //             <Input id="last-name" placeholder="last name" required />
    //           </div>
    //         </div>
    //         <div className="grid gap-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="name@example.com"
    //             required
    //           />
    //         </div>
    //         <div className="grid gap-2">
    //           <Label htmlFor="password">Password</Label>
    //           <Input
    //             id="password"
    //             type="password"
    //             placeholder="enter your password"
    //           />
    //         </div>
    //         <Button type="submit" className="w-full">
    //           Create an account
    //         </Button>
    //         <Button variant="outline" className="w-full">
    //           Sign up with GitHub
    //         </Button>
    //       </div>
    //       <div className="mt-4 text-center text-sm">
    //         Already have an account?{" "}
    //         <Link to="#" className="underline">
    //           Sign in
    //         </Link>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>

    // <section className="hidden md:block bg-red-500 h-full">
    //   <div className="overflow-hidden rounded-lg border bg-background shadow">
    //     <div className="hidden flex-col md:flex">
    //       <div className="flex w-full data-[panel-group-direction=vertical]:flex-col h-full max-h-[800px] items-stretch"></div>
    //     </div>
    //   </div>
    // </section>
    <Panel />
  );
};

export default HomePage;
