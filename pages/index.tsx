import Footer from "@/components/footer";
import Header from "@/components/header";
import SubHeader from "@/components/sub-header";
import Layout from "@/components/layout";
import { useIntl } from "react-intl";
import Intro from "@/components/intro"



export default function Home() {
  const intl = useIntl()


  return (
    
    <Layout>
      <Intro/>
    </Layout>
   
  )
}
