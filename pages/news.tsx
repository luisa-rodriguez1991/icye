import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import { useState } from "react";

export default function News() {
  const [open, setOpen] = useState(false)

  return (
    <Layout onOpenForm={setOpen} openForm={open}>

          <Breadcrumb miVariable={"Blog"}/>

esto es news
    </Layout>
   
  )
}
