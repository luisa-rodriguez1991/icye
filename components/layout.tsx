import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";
import Form from "./form";

export default function Layout({ children, onOpenForm, openForm, footerInfo }: any) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Form openIndicator={openForm} onSetOpen={onOpenForm} />
        <Header onOpenForm={onOpenForm} />
        <main>{children}</main>
      </div>
      <Footer info={footerInfo}/>

    </>
  );
}
