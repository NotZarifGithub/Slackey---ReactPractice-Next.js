import ComponentsContainer from '@/components/common/stylesMain/ComponentsContainer'
import MainTitle from '@/components/common/stylesMain/MainTitle'
import IconSideNav from '@/components/ui/IconSideNav'
import React from 'react'

const page = () => {
  return (
    <main className='max-w-[1500px] mx-auto'>
      <div className='px-[20px]'>
        <div className='py-[30px]'>
          <MainTitle title={'components'} mainTitle={'navigation'}/>
          <ComponentsContainer component={<IconSideNav />}/>
        </div>
        <div className='py-[30px]'>
          <ComponentsContainer component={<IconSideNav />}/>
        </div>
      </div>
      
    </main>
  )
}

export default page