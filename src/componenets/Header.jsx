import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Header = ({ category, title }) => {
  const { currentLanguage } = useStateContext();
  return (
    <div
      className={`mb-4  ${currentLanguage === 'Arabic' ? 'text-right' : ''}${
        currentLanguage === 'English' ? 'text-left' : ''
      }`}
    >
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 ">
        {title}
      </p>
    </div>
  );
};

export default Header;
