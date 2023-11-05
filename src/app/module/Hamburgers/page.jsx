import ComponentsContainer from "@/components/modules/stylesMain/ComponentsContainer"
import SideNavigation from "@/components/modules/component/hamburger/SideNavigation"
import HamburgerNavigation from "@/components/modules/component/hamburger/HamburgerNavigation"
import MainTitle from "@/components/modules/stylesMain/MainTitle"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const page = () => {
  
  return (
    <main className='max-w-[1600px]'>
      <div className='px-[20px]'>
        <div>
          <MainTitle title={'components'} mainTitle={'Hamburgers'}/>
          <ComponentsContainer component={<SideNavigation />} componentName={'Bouncy Side Hamburger'} />
        </div>
        <div className='py-[30px]'>
          <ComponentsContainer component={<HamburgerNavigation />} componentName={'Sliding Bottom Hamburger'}/>
        </div>
        <div className="overflow-hidden">
        </div>   
      </div>   
    </main>
  )
}

export default page