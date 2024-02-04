'use client'
import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { IndianRupee } from "lucide-react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <>
      <div className="py-4 px-4 bg-zinc-100 border-b border-m-zinc-200 w-full z-10 top-0 mt-5 rounded-lg">
        <div className="container flex items-center justify-between">
          <Link href="/">
            {" "}
            <div className="flex items-center justify-between gap-1">
              <IndianRupee size={20} /> <span className="font-bold">PAY</span>{" "}
            </div>
          </Link>
          <Button onClick={() => signOut()}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
