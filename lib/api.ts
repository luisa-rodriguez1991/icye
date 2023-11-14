
export async function getAllPost(locale) {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?categories=3&_fields=jetpack_featured_media_url,id,content,slug,date,title&lang=${locale}`)
    const list = await data.json();
      return list
  }



  export async function getAllEvents(locale) {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?categories=5&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title&orderby=id&orderasc&lang=${locale}`)
    const list = await data.json();
      return list
  }


  
  export async function getAllProjects(locale) {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?categories=4&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title,excerpt,categories&lang=${locale}`)
    const list = await data.json();
      return list
  }

  export async function getPage(id, locale) {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/pages/${id}?acf_format=standard&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title&lang=${locale}`)
    const page = await data.json();
      return page
  }


  export async function getDetailProject(slug, locale) {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/posts?slug=${slug}&acf_format=standard&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title,categories&lang=${locale}`)
    const info = await data.json();
      return info
  }

  export async function getCategoriesByParent(id, locale) {
    const data = await fetch(`http://184.72.130.92/wp-json/wp/v2/categories?parent=${id}&acf_format=standard&_fields=name,id,slug&lang=${locale}`)
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

