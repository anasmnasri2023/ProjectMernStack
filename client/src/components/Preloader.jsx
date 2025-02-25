import React from 'react';

const Preloader = () => {
  return (
    <div x-show='loaded' x-init="window.addEventListener('DOMContentLoaded', () => {setTimeout(() => loaded = false, 500)})" className='!hidden fixed left-0 top-0 z-999999 table h-screen w-screen bg-white'
    >
      {/* <!-- loader --> */}
      <div className='table-cell text-center align-middle'>
        {/* <!-- spinner --> */}
        <div className='pointer-events-none absolute left-1/2 top-1/2 z-20 -ml-8 w-16'>
          {/* <!-- container --> */}
          <div className='pointer-events-none absolute left-1/2 top-1/2 -ml-[50%] -mt-[50%] w-full animate-linspin pb-[100%]'>
            {/* <!-- rotator --> */}
            <div className='absolute h-full w-full animate-easespin'>
              {/* <!-- spinner-left --> */}
              <div className='absolute top-0 left-0 bottom-0 right-1/2 overflow-hidden'>
                {/* <!-- spinner-circle --> */}
                <div className='absolute left-0 -right-full box-border h-full w-[200%] animate-left-spin rounded-[50%] border-6 border-t-primary border-l-stroke border-b-stroke border-r-primary'></div>
              </div>
              {/* <!-- spinner-right --> */}
              <div className='absolute top-0 left-1/2 bottom-0 right-0 overflow-hidden'>
                {/* <!-- spinner-circle --> */}
                <div className='absolute -left-full right-0 box-border h-full w-[200%] animate-right-spin rounded-[50%] border-6 border-t-primary border-l-primary border-b-stroke border-r-stroke'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader;
