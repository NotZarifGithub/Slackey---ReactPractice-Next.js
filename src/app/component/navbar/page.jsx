import ComponentsContainer from '@/components/ui/stylesMain/ComponentsContainer'
import MainTitle from '@/components/ui/stylesMain/MainTitle'
import HamburgerNavigation from '@/components/ui/HamburgerNavigation'
import SideNavigation from '@/components/ui/SideNavigation'
import React from 'react'

const page = () => {
  return (
    <main className='max-w-[1500px] mx-auto'>
      <div className='px-[20px]'>
        <div className='py-[30px]'>
          <MainTitle title={'components'} mainTitle={'navigation'}/>
          <ComponentsContainer component={<SideNavigation />} componentName={'Side Navigation'}/>
        </div>
        <div className='py-[30px]'>
          <ComponentsContainer component={<HamburgerNavigation />} componentName={'Hamburger Navigation'}/>
        </div>
      </div>
      
    </main>
  )
}

export default page