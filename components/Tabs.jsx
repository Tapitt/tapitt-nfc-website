"use client"
import { cn } from '@/lib/utils';
import { useState } from 'react';

function Tabs({ tabs, active, setActive, className, isTabStyle = true }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActive(tab);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div className="hidden md:flex flex-row items-center space-x-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cn(
              'cursor-pointer text-3xl px-6 py-1.5 rounded-full font-medium transition-all duration-300',
              {
                'bg-[#B071EC]': tab === active && isTabStyle,
                'text-[#EFECFF]': tab === active && isTabStyle,
                'border-b-2 border-[#B071EC]': tab === active && !isTabStyle,
                'font-semibold': tab === active,
              },
              className
            )}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      
      {/* Dropdown for mobile view */}
      <div className="md:hidden flex flex-col -mx-4 md:py-10 md:px-20">
        <div
          className="cursor-pointer text-3xl py-1.5 rounded-full font-medium bg-[#B071EC] text-[#EFECFF] transition-all duration-300 w-screen text-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {active}
        </div>
        {dropdownOpen && (
          <div className="absolute z-10 mt-18 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-screen">
            <div className="py-10">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className="cursor-pointer px-4 py-2 text-lg text-gray-800 hover:bg-gray-100 w-full"
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;