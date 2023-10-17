import Footer from "@/components/footer";
import Header from "@/components/header";
import SubHeader from "@/components/sub-header";


const list = [
  { name: 'Quienes somos', href: '#' },
  { name: 'Proyectos', href: '#' },
  { name: 'Noticias', href: '#' },
  { name: 'Eventos', href: '#' },
  { name: 'Pagos', href: '#' },
  { name: 'Patrocinadores', href: '#' },
  { name: 'Familias hospederas', href: '#' },
]

export default function Home() {
  return (
    <div>
      <Header navigation={list}/>      
      <SubHeader navigation={list}/>      <h1 className="text-4xl">hola</h1>

      <Footer/> 

      </div>
   
  )
}
