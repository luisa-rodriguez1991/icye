import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {IntlProvider} from 'react-intl'
import {useRouter} from "next/router";

const languages:any = {
  en: require('../lang/en.json'),
  es: require('../lang/es.json')
};

interface Local {
  locale:String,
  defaultLocale: String
}

export default function App({ Component, pageProps }: AppProps) {


  const router = useRouter()
  const { locale, defaultLocale }:any = router;


  
  const messages = languages[locale];


  return <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale} >
          <Component {...pageProps} />
</IntlProvider>
}









