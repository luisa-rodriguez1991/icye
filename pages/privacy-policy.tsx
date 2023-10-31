import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useIntl } from "react-intl";

export default function Privacy() {
  const intl = useIntl()



  return (
    <Layout>
      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_privacy"})}/>
      Privacy Policy
    </Layout>
   
  )
}
