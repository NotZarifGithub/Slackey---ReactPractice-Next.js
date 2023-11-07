import ComponentsContainer from "@/components/modules/stylesMain/ComponentsContainer"
import SideNavigation from "@/components/modules/component/hamburger/SideNavigation"
import MainTitle from "@/components/modules/stylesMain/MainTitle"
import OhStudioNavbar from "@/components/modules/component/navbar/OhStudioNavbar"

const page = () => {
  
  return (
    <main className='max-w-[1600px]'>
      <div className='px-[20px]'>
        <div>
          <MainTitle title={'components'} mainTitle={'Navbars'}/>
          <ComponentsContainer component={<OhStudioNavbar />} componentName={'[oh.studio] navbar'} />
        </div>  
      </div>   
    </main>
  )
}

export default page