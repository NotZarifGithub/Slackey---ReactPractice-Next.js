import ComponentsContainer from "@/components/ui/stylesMain/ComponentsContainer"
import SideNavigation from "@/components/ui/SideNavigation"
import HamburgerNavigation from "@/components/ui/HamburgerNavigation"
import MainTitle from "@/components/ui/stylesMain/MainTitle"

const page = () => {
  return (
    <main className='max-w-[1600px]'>
      <div className='px-[20px]'>
        <div className='py-[10px]'>
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