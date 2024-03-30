import React from 'react';
import { Link } from 'react-router-dom';
import client from '../assets/Client.png';

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center justify-center">
        <img
          src={client}
          alt="E-ihsaan-logo"
          className="cursor-pointer w-32 md:w-36 lg:w-44 h-auto "
        />
      </div>
    </Link>
  );
};

export default Logo;
