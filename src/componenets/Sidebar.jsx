import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {Linke, links} from '../data/dummy'
import { itemClick } from '@syncfusion/ej2/treemap'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor, currentLanguage } = useStateContext();
  const hanleClosSidebar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }
  const activeLink = 'flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink ='flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black dark:hover:bg-light-gray m-2 '
  return (
    <div className='ml-3 h-screen 
    md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10 '>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to='./' onClick={hanleClosSidebar } className='items-center gap-3 ml-3 mt-4 flex text-lg font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware /> <span>SHOPY</span>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button type='button' 
            onClick={()=> setActiveMenu((prevActiveMenu)=> !prevActiveMenu )} 
            className='text-lg p-3 rounded-full hover:bg-light-gray mt-4 block md:hidden'
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
            {links.map(link =>(
              <div key={link.titleEnglish} >
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {currentLanguage === 'Arbic'&& link.titleArabic}{currentLanguage === 'English'&& link.titleEnglish}
                </p>
                {link.links.map(item => (
                  <NavLink to={item.nameEnglish}
                  key={item.nameEnglish}
                  onClick={hanleClosSidebar}
                  style={({isActive}) => ({
                    backgroundColor : isActive ? currentColor : ''
                  })}
                  className={({isActive})=> isActive? activeLink: normalLink}
                  >
                    {item.icon}
                    <span className='capitalize'>{currentLanguage === 'Arbic' && item.nameArabic}{currentLanguage === 'English'&& item.nameEnglish}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
      </>)}
    </div>
  )
}

export default Sidebar