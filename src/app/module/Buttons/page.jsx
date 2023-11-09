import KakaoWcopilotButton from "@/components/modules/component/buttons/KakaoWcopilotButton.jsx"
import ComponentsContainer from "@/components/modules/stylesMain/ComponentsContainer"
import MainTitle from "@/components/modules/stylesMain/MainTitle"
import SlackeyButton from "@/components/modules/component/buttons/SlackeyButton"

const page = () => {
  
  return (
    <main className='max-w-[1600px]'>
      <div className='px-[20px]'>
        <div>
          <MainTitle title={'components'} mainTitle={'Buttons'}/>
          <ComponentsContainer component={<KakaoWcopilotButton />} componentName={'[kakao-wcopilot.webflow.io] Button'} />
        </div>
        <div>
          <ComponentsContainer component={<SlackeyButton />} componentName={'[slackey.vercel.app] Button'} />
        </div>
      </div>   
    </main>
  )
}

export default page