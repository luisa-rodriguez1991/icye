export async function getAllPost({language}) {

  const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?categories=3&_fields=jetpack_featured_media_url,id,content,slug,date,title&lang=${language}`)
  const list = await data.json();
    return list
  }



  export async function getAllEvents() {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?categories=5&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title`)
    const list = await data.json();
      return list
  }


  
  export async function getAllProjects() {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?categories=4&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title`)
    const list = await data.json();
      return list
  }

  export async function getPage(id) {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/pages/${id}?acf_format=standard&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title`)
    const page = await data.json();
      return page
  }