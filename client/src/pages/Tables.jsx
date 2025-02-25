import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';
import TableTwo from '../components/TableTwo';
import TableThree from '../components/TableThree';
import FeaturedCampaigns from '../components/FeaturedCampaigns';
import TopContent from '../components/TopContent';
const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Tables' />
      <br></br>
      <FeaturedCampaigns />
      <br></br>
        {/* <!-- ====== Top Content Start --> */}
        <TopContent/>
          {/* <!-- ====== Top Content End --> */}
      <div className='flex flex-col gap-10'>
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  )
}

export default Tables;
