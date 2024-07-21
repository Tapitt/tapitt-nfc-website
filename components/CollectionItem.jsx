import React, { useState } from 'react';
import UserAvatar from './ImageName';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { LuRefreshCw } from 'react-icons/lu';
import { TbArrowFork } from 'react-icons/tb';
import { FaRegThumbsUp } from 'react-icons/fa';

function CollectionItem({ item }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const handleMouseEnter = (event) => {
    event.target.src = item.back;
  };

  const handleMouseLeave = (event) => {
    event.target.src = item.image;
  };

  return (
    <div className="relative border-2 md:border-4 h-min w-full group bg-theme-light-purple-50 border-theme-light-purple-50 p-1 md:p-2 rounded-2xl overflow-hidden">
      <img src={item.image} alt={item.title} className="rounded-xl object-cover w-full" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>
      <div className={`absolute inset-0 ${showOverlay ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 opacity-0 duration-100 bg-black/25 p-3 md:m-2 rounded-xl`}>
        <div className="flex flex-col md:flex-row w-full absolute bottom-0 left-0 px-3 pb-3 justify-between md:items-center space-x-0 md:space-x-2">
						<UserAvatar isVerified={true} username={item.name} size="xs" />
					</div>
      </div>
    </div>
  );
}

export default CollectionItem;
