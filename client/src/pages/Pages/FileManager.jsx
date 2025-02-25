import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import DefaultLayout from '../../layout/DefaultLayout'
import ChartTen from '../../components/ChartTen'
import FileDetailsList from '../../components/FileDetailsList'
import StorageChart from '../../components/StorageChart'
import StorageList from '../../components/StorageList'
import DownloadList from '../../components/DownloadList'

const FileManager = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='File Manager' />

      <FileDetailsList />

      <div className='mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5'>
        <div className='col-span-12 xl:col-span-8'>
          <ChartTen />
        </div>

        <div className='col-span-12 xl:col-span-4'>
          <div className='flex flex-col gap-4 sm:flex-row md:gap-6 xl:flex-col xl:gap-7.5'>
            <StorageChart />
            <StorageList />
          </div>
        </div>

        <DownloadList />
      </div>
    </DefaultLayout>
  )
}

export default FileManager
