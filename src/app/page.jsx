
import Example from '@/components/mainPage/Example'
import styles from './styles.module.css'
import Hero from '@/components/mainPage/Hero'
import ModulePage from '@/components/modules/ModulePage'
import PricingPage from '@/components/pricing/PricingPage'

export default function Home() {

  return (
    <main>
      <section className={`${styles.gradient} ${styles.height}`}>
        {/* empty div */}
      </section>
      
      {/* hero content */}
      <section className='py-[100px]'>
        <Hero />
      </section>

      {/* example */}
      <section>
        <Example />
      </section>

      {/* modulepage */}
      <section className='py-[40px]'>
        <ModulePage />
      </section>

      {/* pricing page */}
      <section>
        <PricingPage />
      </section>
    </main>
  )
}
