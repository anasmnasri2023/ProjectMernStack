import React from 'react';
import DropdownDefault from './DropdownDefault';
import User14 from '../images/user/user-14.png'
import User15 from '../images/user/user-15.png'
import User16 from '../images/user/user-16.png'

const Feedback = () => {
  return (
    <div className='col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6'>
      <div className='flex items-start justify-between border-b border-stroke py-5 px-6 dark:border-strokedark'>
        <div>
          <h2 className='text-title-md2 font-bold text-black dark:text-white'>
            Feedback
          </h2>
        </div>
        <DropdownDefault />
      </div>

      <div className='p-6'>
        <div className='flex flex-col gap-7'>
          <div className='relative z-1 flex gap-5.5'>
            <div className='h-16 w-full max-w-16 rounded-full border-[3px] border-stroke dark:border-strokedark'>
              <img src={User14} alt='User' />
            </div>

            <div>
              <p className='text-black dark:text-white'>
                <span className='font-medium'>Timothy Smith</span>
                Commented on Cloud
                <span className='font-medium'>Killan James</span>
              </p>
              <span className='mt-1 block text-sm'>1 hour ago</span>
              <p className='mt-2.5 text-black dark:text-white'>
                It's an Affiliate commissions SaaS application that allows you
                to track your affiliate revenue.
              </p>
            </div>

            <span className='absolute left-8 -z-1 block h-[300%] w-[1px] border-l border-dashed border-stroke dark:border-strokedark'></span>
          </div>

          <div className='relative z-1 flex gap-5.5'>
            <div className='h-16 w-full max-w-16 rounded-full border-[3px] border-stroke dark:border-strokedark'>
              <img src={User15} alt='User' />
            </div>

            <div>
              <p className='text-black dark:text-white'>
                <span className='font-medium'>Nancy Martino</span>
                Commented on Cloud
                <span className='font-medium'>Matney</span>
              </p>
              <span className='mt-1 block text-sm'>2 hour ago</span>
              <p className='mt-2.5 text-black dark:text-white'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
          </div>

          <div className='relative z-1 flex gap-5.5'>
            <div className='h-16 w-full max-w-16 rounded-full border-[3px] border-stroke dark:border-strokedark'>
              <img src={User16} alt='User' />
            </div>

            <div>
              <p className='text-black dark:text-white'>
                <span className='font-medium'>Michael Morris</span>
                Commented on
                <span className='font-medium'>Williams Son</span>
              </p>
              <span className='mt-1 block text-sm'>3 hour ago</span>
              <p className='mt-2.5 text-black dark:text-white'>
                There are many variations of passages of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback;
