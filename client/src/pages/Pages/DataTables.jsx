import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import DefaultLayout from '../../layout/DefaultLayout'
import DataTableOne from '../../components/DataTableOne'
import DataTableTwo from '../../components/DataTableTwo'

const DataTables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Data Tables' />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <DataTableOne />
        <DataTableTwo />
      </div>
    </DefaultLayout>
  )
}

export default DataTables
