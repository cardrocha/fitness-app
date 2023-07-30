import Hero from '@/components/Hero'
import Header from '@/components/Header'
import ScrollBar from '@/components/ScrollBar'
import Benefits from '@/components/Benefits'
import Plans from '@/components/Plans'
import Numbers from '@/components/Numbers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cards from '@/models/cards'

const cardsList: Cards[] = [
  {
    id: 1,
    title: "Equipe qualificada",
    description:
      "Profissionais altamente capacitados e motivados a ajudá-lo a alcançar seus objetivos.",
    image: "/sport.png",
    button: `conheça nossos
              profissionais`,
  },
  {
    id: 2,
    title: "Ambiente motivador",
    description:
      "Um ambiente seguro e inspirador para ajudá-lo a manter-se motivado durante seus treinos.",
    image: "/dumbbell.png",
    button: `Faça um tour
              virtual`,
  },
  {
    id: 3,
    title: "Aulas Diversas",
    description:
      "Oferecemos uma ampla variedade de aulas, desde musculação até dança, para atender a todos os interesses.",
    image: "/trainer.png",
    button: "Ver modalidades",
  },
  {
    id: 4,
    title: "Equipamentos Modernos",
    description:
      "Mantemos nossos equipamentos atualizados para garantir a segurança e eficiência de nossos clientes.",
    image: "/gym.png",
    button: `Faça um tour
              virtual`,
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ScrollBar />
      <Benefits card={cardsList} />
      <Plans />
      <Numbers />
      <Contact />
      <Footer />
    </div>
  )
}
