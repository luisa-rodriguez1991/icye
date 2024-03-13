import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";
import Form from "./form";
import Script from 'next/script';

export default function Layout({
  children,
  onOpenForm,
  openForm,
  footerInfo,
}: any) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TQ9M4CN6M5"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TQ9M4CN6M5', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />

     
      <Meta />

      <div className="min-h-screen bg-white">
        <Form openIndicator={openForm} onSetOpen={onOpenForm} />
        <Header onOpenForm={onOpenForm} />
        <main>{children}</main>
      </div>
      <Footer info={footerInfo} />
    </>
  );
}
