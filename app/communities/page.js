"use client"

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
    <div className="bg-white">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="min-h-screen mx-auto flex bg-white">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
          <Sidebar />
        </div>
        
        {/* Main content */}
        <main className="flex-1 flex flex-col border-r border-l border-b border-primary-container_border_color bg-white">
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
