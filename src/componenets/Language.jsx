import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Language = () => {
  const { currentLanguage, languageChanger, currentColor } = useStateContext();

  return (
    <div>
      <select
        onChange={languageChanger}
        defaultValue={currentLanguage}
        className="    mt-2 text-center pl-2 bg-white hover:drop-shadow-xl active:border-0 rounded-[5px] dark:text-white dark:bg-secondary-dark-bg text-lg"
        style={{ color: currentColor }}
      >
        <option value="English">English</option>
        <option value="Arabic">العربية</option>
      </select>
    </div>
  );
};

export default Language;
