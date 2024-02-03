import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@/components/user";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-5">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Server Session
      </h1>
      <pre>{JSON.stringify(session)}</pre>
      <User />
    </main>
  );
}
