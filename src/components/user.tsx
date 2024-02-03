"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Client Session
      </h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
};
