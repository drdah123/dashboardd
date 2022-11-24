import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Button, SparkLine } from '../componenets';
import { earningData, SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const { currentColor, currentLanguage } = useStateContext();
  const arabic = currentLanguage === 'Arabic';
  const english = currentLanguage === 'English';
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div
          className="bg-white dark:text-gray-200
         dark:bg-secondary-dark-bg h-36 
         rounded-xl w-full lg:w-80 p-8 pt-9 
         m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center lg:mt-14"
        >
          <div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-green-600">
                  {arabic && ' 💵 الارباح'}
                  {english && ' 💵 earnings'}
                </p>
                <p className="text-2xl">500,577$</p>
              </div>
            </div>

            <div>
              <Button
                text={`${arabic ? 'تنزيل' : ''}${english ? 'download' : ''}`}
                color="white"
                bgColor={currentColor}
                borderRadius="10px"
                size="md"
              />
            </div>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center mt-10">
          {earningData.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:text-gray-200
               dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl lg:flex-1 "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl p-4 rounded-full opacity-0.9 hover:drop-shadow-xl "
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
                <p className="text-gray-400 text-sm">
                  {arabic && item.title.arabic}
                  {english && item.title.english}
                </p>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center ">
        <div
          className="bg-white dark:bg-secondary-dark-bg
         m-3 p-4 rounded-2xl md:w-780"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl dark:text-white">Last yields</p>
            <div>
              <p>
                <span className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <GoPrimitiveDot />
                </span>
                <span className="dark:text-white">
                  {arabic && ' المصاريف'}
                  {english && 'Expenses'}
                </span>
              </p>

              <p>
                <span className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                  <GoPrimitiveDot />
                </span>
                <span className="dark:text-white">
                  {arabic && ' الموازنة'}
                  {english && 'budget'}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span
                    className="p-1.5 mr-3 hover:drop-shadow-xl cursor-pointer
                  rounded-full text-white text-xs bg-green-400"
                  >
                    23%
                  </span>
                  <span className="text-3xl font-semibold dark:text-gray-200">
                    $93,225
                  </span>
                </p>
                <p className="text-gray-400 mt-1 ml-32  ">
                  {arabic && ' الموازنة'}
                  {english && 'budget'}
                </p>
                <div>
                  <p>
                    <span className="text-3xl font-semibold ml-12 dark:text-gray-200">
                      $48,766
                    </span>
                  </p>
                  <p className="text-gray-400 mt-1 ml-28 ">
                    {arabic && ' المصاريف'}
                    {english && 'Expenses'}
                  </p>
                  {/*<div className='mt-5'>
                <SparkLine
                  currentColor='blue'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='280px'
                  data={SparklineAreaData}
                  color='blue'
                  tooltipSettings={{
                    visible: true,
                    format: '${x}: data ${y}',
                    trackLineSettings: {
                      visible: true,
                    }
                  }}
                />
                </div> */}
                  <div className="mt-5">
                    <SparkLine
                      currentColor={currentColor}
                      id="line-sparkLine"
                      type="Line"
                      height="80px"
                      width="250px"
                      data={SparklineAreaData}
                      color="blue"
                    />
                  </div>
                  <div className="mt-10">
                    <Button
                      bgColor={currentColor}
                      color="white"
                      text={`${arabic ? ' تنزيل القرير' : ''}${
                        english ? 'download report' : ''
                      }`}
                      borderRadius="10px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
