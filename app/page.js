import Image from "next/image";
import Header from "@/components/Header"
import LeftSidebar from "@/components/LeftSidebar"

export default function Home() {
  return (
    <main className="ml-[260px]">
      <Header />
      <LeftSidebar />
    </main>
  );
}
