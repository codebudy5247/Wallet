import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getUserByEmail } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Container from "@/components/ui/Container";
import AccountBalance from "@/components/AccountBalance";
import AccountInfo from "@/components/AccountInfo";
import TransactionList from "@/components/TransactionList";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email as string;
  const userInfo:any = await getUserByEmail(userEmail);

  return (
    <>
      <Container>
        <Navbar />
        <div className="grid md:grid-cols-[2fr_3fr] gap-6 mt-5">
          <div className="flex flex-col gap-10">
            <AccountBalance accountBalance={userInfo?.accountBalance} />
            <AccountInfo user={userInfo} />
          </div>
          <div className="h-screen">
           <TransactionList />
          </div>
        </div>
      </Container>
    </>
  );
}
