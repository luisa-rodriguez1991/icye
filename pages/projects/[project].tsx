
import { DocumentArrowDownIcon } from '@heroicons/react/20/solid'
import Layout from "@/components/layout";
import { getAllProjects, getCategoryNameById, getDetailProject } from "@/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import Breadcrumb from '@/components/breadcrump';
import Flag from 'react-world-flags';


const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

// vista projecto

export default function Project({page, listCategories}) {


  return (
    <Layout>
      <Breadcrumb miVariable={page.title.rendered}/>
        <div className="bg-white">
            <div className="pt-6">
      

              {/* Image gallery */}
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 ">
                <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                      src={product.images[1].src}
                      alt={product.images[1].alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                      src={product.images[2].src}
                      alt={product.images[2].alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                  <img
                    src={product.images[3].src}
                    alt={product.images[3].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Product info */}
              <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 px-6 py-6 rounded-t-xl bg-accent-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex items-center">
                    {page.title.rendered} 
                    <span className="ml-auto inline-flex items-center gap-x-1.5 rounded-full bg-white px-2 py-1 text-xs font-medium text-accent-1">
                      <svg className="h-1.5 w-1.5 fill-gray-400" viewBox="0 0 6 6" aria-hidden="true">
                        <circle cx={3} cy={3} r={3} />
                      </svg>
                      {page.acf.project_code}
                    </span>               
                  </h1>
                </div>

                {/* Options */}
                <div className="pt-4 lg:row-span-3 px-6 lg:mt-0 bg-accent-2 lg:bg-white">
                  <h2 className='text-3xl text-accent-1 font-bold mb-6'>Basic Information</h2>
                  <div className='flex flex-col'>
                    Categories: 
                    <div className='flex items-center gap-2 my-3'>
                      {listCategories.map((category)=>(
                        <span className="inline-flex items-center  rounded-full bg-accent-2 px-2 py-1 text-xs font-medium text-accent-1">
                         
                          {category}
                        </span>
                      ))}

                    </div>
                    
                    

                  </div>
                  <div className='flex items-center mb-4 mt-2'>
                    Country: <Flag className="ml-4 mt-1" code={page.acf.country} width="20" height="16"/>
                  </div>
                  {page.acf.pdf && (
                    <div className='flex items-center'>
                    Download PDF: <a href={page.acf.pdf} target='_blank' title={`Download PDF file about the project: ${page.title.rendered}`}><DocumentArrowDownIcon className='text-accent-1 h-6 w-6'/></a>
                  </div>
                  )} 

                </div>

                <div className="py-10 px-6 rounded-b-xl  bg-accent-2  lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6" dangerouslySetInnerHTML={{__html:page.content.rendered}} />
                      
                
                  </div>

            

                </div>
              </div>
            </div>
          </div>
    </Layout>
  
  )
}



export const getStaticProps: GetStaticProps = async ({params}) => { 
    const pageInfo = await getDetailProject(params?.project) 
    const listCategoriesIds = pageInfo[0].categories
    const categoryNames = await getCategoryNameById(listCategoriesIds) 





    
    return {
        props: {page: pageInfo[0], listCategories: categoryNames}
    }
  }

  export const getStaticPaths: GetStaticPaths = async () => {
    const allProjects = await getAllProjects()
    let finalArray = []
    const en = allProjects.map((i) => `/en/projects/${i.slug}`)
    const es = allProjects.map((i) => `/es/projects/${i.slug}`)
    finalArray = [...es, ...en]


    return {
      paths: finalArray || [],
      fallback: false,
    }
  }