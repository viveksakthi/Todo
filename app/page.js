import Image from "next/image";
import Header from "@/components/Header"
import LeftSidebar from "@/components/LeftSidebar"
import { useState } from "react";

export default function Home() {
  
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);

  return (
    <main className={`${leftSidebarOpen ? "ml-[260px]" : "ml-[0px]"} `}>
      <Header leftSidebarOpen={leftSidebarOpen} setLeftSidebarOpen={setLeftSidebarOpen} />
      <LeftSidebar />
    </main>
  );
}
