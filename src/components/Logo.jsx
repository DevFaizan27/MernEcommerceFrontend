import React from 'react';
import logoicon from '../assets/logoicon.png';

const Logo = () => {
  return (
    <div className="flex items-center">
      <h3 className="flex items-center text-xl font-bold">
        <img src={logoicon} alt="Logo Icon" className="w-10 h-10 mr-2" />
        <span className="md:inline-block whitespace-nowrap">E-ihsaan</span> {/* Added whitespace-nowrap class */}
      </h3>
    </div>
  );
};

export default Logo;
