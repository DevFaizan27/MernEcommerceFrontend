import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="relative overflow-hidden mt-5">
      <div id="categoriesContainer" className="flex lg:justify-center hide-scroll-bar">
        {/* Placeholder skeleton items */}
        {[...Array(5).keys()].map((index) => (
          <div key={index} className="px-2 lg:px-3 animate-pulse">
            <div className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-gray-300 mb-1"></div>
            <div className="h-4 bg-gray-300 mb-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
