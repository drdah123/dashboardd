import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { TbWorld } from 'react-icons/tb';
import Language from './Language';

const NavButton = ({ title, customfunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customfunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ backgroundColor: dotColor }}
        className="absolute w-2 h-2 right-2 top-2 inline-flex rounded-full"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    setCurrentLanguage,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="القائمة"
        customfunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customfunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customfunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="#03C9D7"
          customfunc={() => handleClick('notifications')}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <NavButton
          title="Language"
          customfunc={() => handleClick('Language')}
          color={currentColor}
          icon={<TbWorld />}
        />
        <TooltipComponent content="User profile" position="BottomCenter">
          <div
            className=" flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img className="rounded-full w-8 h-8" src={avatar} />
            <p>
              <span className="text-gray-400 text-14">hi, </span>{' '}
              <span className="text-gray-400 font-bold ml-1  text-14">
                abdlarahman
              </span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>
        {isClicked.cart && (
          <Cart setIsClicked={setIsClicked} isClicked={isClicked} />
        )}
        {isClicked.chat && <Chat />}
        {isClicked.notifications && <Notification />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.Language && <Language />}
      </div>
    </div>
  );
};

export default Navbar;
