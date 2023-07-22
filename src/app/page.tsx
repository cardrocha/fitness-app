import Hero from '@/components/Hero'
import Header from '@/components/Header'
import ScrollBar from '@/components/ScrollBar'
import Benefits from '@/components/Benefits'
import Plans from '@/components/Plans'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ScrollBar />
      <Benefits />
      <Plans />
    </div>
  )
}
