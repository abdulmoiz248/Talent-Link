import React from 'react';

export default function Loading() {
  return (
    <div>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-white animate-bounce"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-white animate-bounce"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-white animate-bounce"></div>
      </div>
    </div>
  );
}
