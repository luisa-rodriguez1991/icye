export async function getAllPost() {

  const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?categories=3&_fields=jetpack_featured_media_url,id,content,slug,date,title`)
  const list = await data.json();
    return list
  }



  export async function getAllEvents() {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?categories=5&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title&orderby=id&orderasc`)
    const list = await data.json();
      return list
  }


  
  export async function getAllProjects() {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?categories=4&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title,excerpt,categories`)
    const list = await data.json();
      return list
  }

  export async function getPage(id) {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/pages/${id}?acf_format=standard&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title`)
    const page = await data.json();
      return page
  }


  export async function getDetailProject(slug) {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?slug=${slug}&acf_format=standard&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title,categories`)
    const info = await data.json();
      return info
  }

  export async function getCategoryNameById(list) {
    let listNames: any = []
    return Promise.all(list.map(item => {
      //item.full_name returns the repositorie name
      return fetch(`http://184.72.130.92/wp-json/wp/v2/categories?include=${item}`)
        .then(data => {
          return data.json()
        }).then((obj)=>{
          listNames.push(obj[0].name)
        })
    })).then(()=>listNames);

  }
