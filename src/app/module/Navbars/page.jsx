import ComponentsContainer from "@/components/modules/stylesMain/ComponentsContainer"
import SideNavigation from "@/components/modules/component/hamburger/SideNavigation"
import MainTitle from "@/components/modules/stylesMain/MainTitle"
import OhStudioNavbar from "@/components/modules/component/navbar/OhStudioNavbar"
import KakaoWcopilotNavbar from "@/components/modules/component/navbar/KakaoWcopilotNavbar"

const page = () => {
  
  return (
    <main className='max-w-[1600px]'>
      <div className='px-[20px]'>
        <div>
          <MainTitle title={'components'} mainTitle={'Navbars'}/>
          <ComponentsContainer component={<OhStudioNavbar />} componentName={'[oh.studio] Navbar'} />
        </div>  
        <div className="py-[30px]">
          <ComponentsContainer component={<KakaoWcopilotNavbar />} componentName={'[kakao-wcopilot.webflow.io] Navbar'} />
        </div>
      </div>   
    </main>
  )
}

export default page