import { useIntl } from "react-intl";

const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        '/img/blog2.png',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'ICYE', href: '#' },
      author: {
        name: 'Laura Moreno',
        role: 'Co-Founder / ICYE',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
        '/img/blog2.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'ICYE', href: '#' },
        author: {
          name: 'Diego Pacheco',
          role: 'Host / ICYE',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
        '/img/blog2.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'ICYE', href: '#' },
        author: {
          name: 'Camila Suarex ',
          role: 'volunteer / ICYE',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
        '/img/blog2.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'ICYE', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
          id: 5,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          imageUrl:
          '/img/blog2.png',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { title: 'ICYE', href: '#' },
          author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          id: 6,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          imageUrl:
          '/img/blog2.png',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { title: 'ICYE', href: '#' },
          author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
     
   
    // More posts...
  ]
  
  export default function Blog({showAll}) {

    const getFirst3Post = posts.filter((post) => (post.id<4) )

    const first3 = getFirst3Post.map((post) =>  ( 
      
      <article key={post.id} className="flex flex-col items-start justify-between">
        <div className="relative w-full">
          <img
            src={post.imageUrl}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime={post.datetime} className="text-gray-500">
              {post.date}
            </time>
            <a
              href={post.category.href}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {post.category.title}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href={post.author.href}>
                  <span className="absolute inset-0" />
                  {post.author.name}
                </a>
              </p>
              <p className="text-gray-600">{post.author.role}</p>
            </div>
          </div>
        </div>
      </article>
    ))

    const all = posts.map((post) =>  (
      <article key={post.id} className="flex flex-col items-start justify-between">
        <div className="relative w-full">
          <img
            src={post.imageUrl}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime={post.datetime} className="text-gray-500">
              {post.date}
            </time>
            <a
              href={post.category.href}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {post.category.title}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href={post.author.href}>
                  <span className="absolute inset-0" />
                  {post.author.name}
                </a>
              </p>
              <p className="text-gray-600">{post.author.role}</p>
            </div>
          </div>
        </div>
      </article>
    ))








    return (

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl ">From the blog</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {showAll ? all : first3}
          </div>
        </div>
    )
  }
  