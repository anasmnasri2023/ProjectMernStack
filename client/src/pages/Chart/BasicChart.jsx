import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import DefaultLayout from '../../layout/DefaultLayout'
import ChartOne from '../../components/ChartOne'
import ChartTwo from '../../components/ChartTwo'
import ChartTen from '../../components/ChartTen'
import StorageChart from '../../components/StorageChart'
import StorageList from '../../components/StorageList'
import DataStatsThree from '../../components/DataStatsThree'

const BasicChart = () => {
 return (
      <DefaultLayout>
        <Breadcrumb pageName='Task Chart Infographics' />
        <DataStatsThree />
        <br></br>
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          <ChartOne />
          <ChartTwo />
          </div>
  <div className='mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5'>
    <div className=' col-span-12 xl:col-span-8'>
      <ChartTen />
    </div>
  
    <div className=' col-span-12 xl:col-span-4'>
      <div className='flex flex-col gap-4 sm:flex-row md:gap-6 xl:flex-col xl:gap-7.5'>
        <StorageChart />
        <StorageList />
      </div>
    </div>
     </div>
      </DefaultLayout>
    )
  }
  
export default BasicChart
