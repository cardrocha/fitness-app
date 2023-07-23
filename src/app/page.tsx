import Hero from '@/components/Hero'
import Header from '@/components/Header'
import ScrollBar from '@/components/ScrollBar'
import Benefits from '@/components/Benefits'
import Plans from '@/components/Plans'
import Numbers from '@/components/Numbers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ScrollBar />
      <Benefits />
      <Plans />
      <Numbers />
      <Contact />
      <Footer />
    </div>
  )
}
