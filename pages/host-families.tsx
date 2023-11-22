import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useState } from "react";

export default function HostFamilies() {
  const [open, setOpen] = useState(false);

  return (
    <Layout onOpenForm={setOpen} openForm={open}>
      <Breadcrumb miVariable={"Host families"} />
      esto es Host families
    </Layout>
  );
}
