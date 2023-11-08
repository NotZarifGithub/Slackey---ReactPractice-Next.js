import ComponentsContainer from "@/components/modules/stylesMain/ComponentsContainer"
import MainTitle from "@/components/modules/stylesMain/MainTitle"
import FaqPage from "@/components/modules/sections/faq/FaqPage"

const page = () => {
  
  return (
    <main className='max-w-[1600px]'>
      <div className='px-[20px]'>
        <div className="h-[110vh]">
          <MainTitle title={'components'} mainTitle={'Hamburgers'}/>
          <ComponentsContainer component={<FaqPage />} componentName={'Basic FAQ'} />
        </div>   
      </div>   
    </main>
  )
}

export default page