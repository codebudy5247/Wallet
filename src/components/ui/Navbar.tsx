import React from "react";
import Link from "next/link";
import { buttonVariants } from "./button";
import { IndianRupee } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="py-2 bg-zinc-100 border-b border-m-zinc-200 fixed w-full z-10 top-0">
        <div className="container flex items-center justify-between">
          <Link href="/">
            {" "}
            <div className="flex items-center justify-between gap-1">
              <IndianRupee size={20} /> <span className="font-bold">PAY</span>{" "}
            </div>
          </Link>
          <Link className={buttonVariants()} href="/signin">
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
