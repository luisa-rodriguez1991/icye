import { HomeIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router';



export default function Breadcrumb({middleRoute,middleRouteName,miVariable}:any) {
  const router = useRouter();
  const {locale} = router
 
  return (
    <div className="bg-accent-2 py-6">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <Link locale={locale} href="/" className="text-accent-1">
                <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          {middleRouteName && (
             <li >
             <div className="flex items-center">
               <svg
                 className="h-5 w-5 flex-shrink-0 text-accent-1"
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 aria-hidden="true"
               >
                 <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
               </svg>
               {middleRoute ? (
                <Link locale={locale} target='_self' title={`Back to ${middleRouteName}`}
                href={middleRoute}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {middleRouteName}
              </Link>
               ) : (
                <span 
                 className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
               >
                 {middleRouteName}
               </span>
               )}
               
             </div>
           </li>
          )}
         
          <li >
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-accent-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <span
                  className="ml-4 text-sm font-medium text-gray-700"
                >
                  {miVariable}
                </span>
              </div>
            </li>
        </ol>
      </nav>
    </div> 
  </div>
  )
}
