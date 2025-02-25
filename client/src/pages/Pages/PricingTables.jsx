import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import DefaultLayout from '../../layout/DefaultLayout'
import PricingTableOne from '../../components/PricingTableOne'
import PricingTableTwo from '../../components/PricingTableTwo'

const PricingTables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Pricing Table' />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <PricingTableOne />
        <PricingTableTwo />
      </div>
    </DefaultLayout>
  )
}

export default PricingTables
