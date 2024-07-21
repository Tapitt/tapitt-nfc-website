import React from 'react';
import CollectionItem from './CollectionItem';

function getAspectRatio(width, height) {
  if (!width || !height) return 1;
  return width / height;
}

function Collection({ collection }) {
  if (!Array.isArray(collection)) {
    console.error('Collection is not an array:', collection);
    return null;
  }

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 w-full">
      {collection.map((item, index) => {
        const aspectRatio = getAspectRatio(item?.width, item?.height);
        return <CollectionItem key={index} item={item} />;
      })}
    </div>
  );
}

export default Collection;
