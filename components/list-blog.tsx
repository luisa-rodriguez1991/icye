import Link from "next/link";
import { useRouter } from "next/router";

export default function Blog({ text, posts }: any) {
  const router = useRouter();
  const { locale } = router;
  const all = posts.map((post: any) => (
    <article
      key={post.slug}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
    >
      <img
        src={post.jetpack_featured_media_url}
        alt={post.title.rendered}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        <time dateTime={post.date} className="mr-8">
          
            <time dateTime={post.date}>
                            <span className="capitalize">
                            {new Date(post.date).toLocaleDateString(locale, {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true
                            })}
                            </span>
                          </time>
        </time>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <Link locale={locale} href={`/blog/${post.slug}`}>
          <span className="absolute inset-0" />
          {post.title.rendered}
        </Link>
      </h3>
    </article>
  ));

  return (
    // page list blog
    <div className="bg-white pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
        <div className="mx-auto max-w-4xl text-center ">
          <p className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
            Blog
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 ">
          {text}
        </p>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {all}
        </div>
      </div>
    </div>
  );
}
