"use client";

import { useSession } from "next-auth/react";

export const User = (props: any) => {
  const { data: session } = useSession();

  return (
    <div>
      {JSON.stringify(props.userInfo)}
    </div>
  )
};
