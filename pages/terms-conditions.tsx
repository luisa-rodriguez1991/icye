import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useIntl } from "react-intl";

export default function Terms() {
  const intl = useIntl()



  return (
    <Layout>
      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_terms"})}/>
      Terms and conditions
    </Layout>
   
  )
}
