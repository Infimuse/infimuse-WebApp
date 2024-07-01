import React from 'react';
import Sidebar from '@/components/community/Sidebar';
import MainContent from '@/components/community/MainContent';
import RightSidebar from '@/components/community/RightSidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  return(
  <div className="bg-white ">
        <Navbar/>
      <div className="min-h-screen mx-auto  flex bg-white ">
              <Sidebar/>
          <main className="flex-1 flex flex-col  border-r border-l border-b border-primary-container_border_color bg-white">
              <MainContent/>         
          </main>
          <aside className="bg-white w-350">
              <RightSidebar/>
          </aside>
      </div>
        <Footer/>
  </div>
  )
}


