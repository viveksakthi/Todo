'use client';
import { useState } from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RootLayout from "@/app/layout";

export default function PageLayout({ children, pageTabName }) {
    
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(68);
    
    return (
      <RootLayout pageTabName={pageTabName}>      
          <Header leftSidebarOpen={leftSidebarOpen} setLeftSidebarOpen={setLeftSidebarOpen} headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} />
          <LeftSidebar leftSidebarOpen={leftSidebarOpen} headerHeight={headerHeight} />      
          <main className={`${leftSidebarOpen ? "pl-[284px]" : "pl-[24px]"} pr-[24px]`} style={{ paddingTop: headerHeight + 20}}>                
            { children }
          </main>
      </RootLayout> 
    );
  }