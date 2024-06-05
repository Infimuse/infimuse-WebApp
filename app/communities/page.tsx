import React from 'react';
import Sidebar from '@/components/community/Sidebar';
import MainContent from '@/components/community/MainContent';
import RightSidebar from '@/components/community/RightSidebar';

export default function HomePage() {
  return(
  <>
      <div className="min-h-screen mx-auto max-w-7xl flex ">
              <Sidebar/>
          <main className="flex-1 flex flex-col border-r border-l border-b border-primary-container_border_color bg-black">
              <MainContent/>         
          </main>
          <aside className="bg-black w-350">
              <RightSidebar/>
          </aside>
      </div>
  </>
  )
}


