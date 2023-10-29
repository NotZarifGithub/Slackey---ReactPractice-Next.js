import ComponentsContainer from '@/components/ui/stylesMain/ComponentsContainer'
import MainTitle from '@/components/ui/stylesMain/MainTitle'
import React from 'react'

const page = () => {
  return (
    <main className='max-w-[1500px] mx-auto'>
      <div className='px-[20px]'>
        <div className='py-[30px]'>
          <MainTitle title={'components'} mainTitle={'buttons'}/>
          <ComponentsContainer />
        </div>
      </div>
    </main>
  )
}

export default page