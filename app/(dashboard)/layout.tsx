import React from 'react'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import { PropsWithChildren } from 'react'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid lg:grid-cols-5">
      {/* First-col hide on small screen */}
      <div className="hide lg:block lg:col-span-1 lg:min-h-screen">
        <SideBar />
      </div>
      {/* second-col hide dropdown on big screen */}
      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  )
}

export default layout
