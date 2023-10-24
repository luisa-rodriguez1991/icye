import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Button({link,text,title}:any) {

  const router = useRouter();
  const {locale} = router

  return (
    <Link locale={locale} href={link} title={title} className="rounded-[40px] bg-accent-1 px-6 py-4  font-semibold text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {text}
    </Link>
  )
}
