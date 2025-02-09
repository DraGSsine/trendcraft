import { PricingDialog } from '@/components/dashboard/pricing-dialog'
import { Sidebar } from '@/components/dashboard/sidebar'
import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <main className=' flex h-screen w-screen'>
        <PricingDialog />
        <Sidebar />
        {children}
    </main>
  )
}

export default Layout