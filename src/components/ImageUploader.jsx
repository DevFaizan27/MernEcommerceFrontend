import React from 'react';

const ImageUploader = () => {
  return (
    <div className="max-w-xs mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-3">
          <div id="image-preview" className="p-3 mb-3 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg mx-auto text-center cursor-pointer">
            <input id="upload" type="file" className="hidden" accept="image/*" />
            <label htmlFor="upload" className="cursor-pointer block mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mx-auto mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <h5 className="mb-1 text-sm font-semibold text-gray-700">Upload picture</h5>
              <p className="font-normal text-xs text-gray-400">Photo size less than <b className="text-gray-600">2mb</b></p>
              <p className="font-normal text-xs text-gray-400">JPG, PNG, or GIF format.</p>
              <span id="filename" className="text-gray-500 bg-gray-200"></span>
            </label>
          </div>
          <div className="flex justify-center">
            <label htmlFor="upload" className="block text-center w-full bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-xs px-4 py-2 cursor-pointer text-white">
              Upload
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
