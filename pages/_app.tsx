import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {IntlProvider} from 'react-intl'
import {useRouter} from "next/router";



export default function App({ Component, pageProps }: AppProps) {


  const router = useRouter()
  const { locale, defaultLocale }:any = router;



  const langs:ObjectType = languages;
  

  
  // Solution 1: When the type of the object is known
  const temp = langs[locale as keyof ObjectType]
  
  // Solution 2: When the type of the object is not known







  


  return <IntlProvider messages={temp} locale={locale} defaultLocale={defaultLocale} >
          <Component {...pageProps} />
</IntlProvider>
}









