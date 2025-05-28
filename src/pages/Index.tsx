
import React from 'react';
import Navbar from '@/components/Navbar';
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 lg:col-start-2">
            <Feed />
          </div>
          
          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
