import React from 'react';

import BrandOne from '../images/brand/brand-01.svg'
import BrandTwo from '../images/brand/brand-02.svg'
import BrandFour from '../images/brand/brand-04.svg'
import BrandFive from '../images/brand/brand-05.svg'
import BrandSix from '../images/brand/brand-06.svg'
import DropdownDefault from './DropdownDefault';

const TableFour = () => {
  return (
    <div className='col-span-12 xl:col-span-7'>
      <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
        <div className='mb-6 flex justify-between'>
          <div>
            <h4 className='text-title-sm2 font-bold text-black dark:text-white'>
              Top Channels
            </h4>
          </div>
          <DropdownDefault />
        </div>

        <div className='flex flex-col'>
          <div className='grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4'>
            <div className='p-2.5 xl:p-4'>
              <h5 className='text-sm font-medium uppercase xsm:text-base'>
                Source
              </h5>
            </div>
            <div className='p-2.5 text-center xl:p-4'>
              <h5 className='text-sm font-medium uppercase xsm:text-base'>
                Visitors
              </h5>
            </div>
            <div className='p-2.5 text-center xl:p-4'>
              <h5 className='text-sm font-medium uppercase xsm:text-base'>
                Revenues
              </h5>
            </div>
            <div className='hidden p-2.5 text-center sm:block xl:p-4'>
              <h5 className='text-sm font-medium uppercase xsm:text-base'>
                Conversion
              </h5>
            </div>
          </div>

          <div className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4'>
            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
              <div className='max-w-9 h-9 w-full flex-shrink-0'>
                <img src={BrandOne} alt='Brand' />
              </div>
              <p className='hidden font-medium text-black dark:text-white sm:block'>
                Google
              </p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-black dark:text-white'>3.5K</p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-meta-3'>$5,768</p>
            </div>

            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
              <p className='font-medium text-meta-5'>4.8%</p>
            </div>
          </div>

          <div className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4'>
            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
              <div className='max-w-9 h-9 w-full flex-shrink-0'>
                <img src={BrandTwo} alt='Brand' />
              </div>
              <p className='hidden font-medium text-black dark:text-white sm:block'>
                Twitter
              </p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-black dark:text-white'>2.2K</p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-meta-3'>$4,635</p>
            </div>

            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
              <p className='font-medium text-meta-5'>4.3%</p>
            </div>
          </div>

          <div className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4'>
            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
              <div className='max-w-9 h-9 w-full flex-shrink-0'>
                <img src={BrandSix} alt='Brand' />
              </div>
              <p className='hidden font-medium text-black dark:text-white sm:block'>
                Youtube
              </p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-black dark:text-white'>2.1K</p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-meta-3'>$4,290</p>
            </div>

            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
              <p className='font-medium text-meta-5'>3.7%</p>
            </div>
          </div>

          <div className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4'>
            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
              <div className='max-w-9 h-9 w-full flex-shrink-0'>
                <img src={BrandFour} alt='Brand' />
              </div>
              <p className='hidden font-medium text-black dark:text-white sm:block'>
                Vimeo
              </p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-black dark:text-white'>1.5K</p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-meta-3'>$3,580</p>
            </div>

            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
              <p className='font-medium text-meta-5'>2.5%</p>
            </div>
          </div>

          <div className='grid grid-cols-3 sm:grid-cols-4'>
            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
              <div className='max-w-9 h-9 w-full flex-shrink-0'>
                <img src={BrandFive} alt='Brand' />
              </div>
              <p className='hidden font-medium text-black dark:text-white sm:block'>
                Facebook
              </p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-black dark:text-white'>1.2K</p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='font-medium text-meta-3'>$2,740</p>
            </div>

            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
              <p className='font-medium text-meta-5'>1.9%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableFour;
