import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import { useState } from "react";

export default function Pay() {
  const [open, setOpen] = useState(false)

  return (
    <Layout footerInfo={false} onOpenForm={setOpen} openForm={open}>

          <Breadcrumb miVariable={"Pay"}/>

esto es pay
    </Layout>
   
  )
}