import ComponentsContainer from "@/components/modules/stylesMain/ComponentsContainer"
import SideNavigation from "@/components/modules/component/hamburger/SideNavigation"
import HamburgerNavigation from "@/components/modules/component/hamburger/HamburgerNavigation"
import MainTitle from "@/components/modules/stylesMain/MainTitle"

const page = () => {
  
  return (
    <main className='max-w-[1600px]'>
      <div className='px-[20px]'>
        <div>
          <MainTitle title={'components'} mainTitle={'Hamburgers'}/>
          <ComponentsContainer component={<SideNavigation />} componentName={'Bouncy Side Hamburger'} />
        </div>
        <div>
          <ComponentsContainer component={<HamburgerNavigation />} componentName={'Sliding Bottom Hamburger'}/>
        </div>  
      </div>   
    </main>
  )
}

export default page