"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/community/Sidebar';
import MainContent from '@/components/community/MainContent';
import RightSidebar from '@/components/community/RightSidebar';
import Navbar from '@/components/CommunityNav';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-white w-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[300px,1fr,300px] gap-4">
        {/* Sidebar */}
        <div className={`bg-white ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
          <Sidebar />
        </div>
        
        {/* Main content */}
        <main className="bg-white border-r border-l border-b border-primary-container_border_color">
          <MainContent />
        </main>
        
        {/* Right Sidebar */}
        <aside className="hidden lg:block bg-white">
          <RightSidebar />
        </aside>
      </div>
      <Footer />
    </div>
  );
}
