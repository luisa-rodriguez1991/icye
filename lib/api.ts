
export async function getAllPost(locale:any) {
    const data = await fetch(`https://editingwp.icyecolombia.com/wp-json/wp/v2/posts?categories=3&_fields=jetpack_featured_media_url,id,content,slug,date,title&lang=${locale}`)
    const list = await data.json();
      return list
  }



  export async function getAllEvents(locale:any) {
    const data = await fetch(`https://editingwp.icyecolombia.com/wp-json/wp/v2/posts?_embed&categories=5&orderby=id&orderasc&lang=${locale}`)
    const list = await data.json();
      return list
  }


  
  export async function getAllProjects(locale:any) {
    const data = await fetch(`https://editingwp.icyecolombia.com/wp-json/wp/v2/posts?categories=4&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title,excerpt,categories&lang=${locale}`)
    const list = await data.json();
      return list
  }

  export async function getPage(id:any, locale:any) {
    const data = await fetch(`https://editingwp.icyecolombia.com/wp-json/wp/v2/pages/${id}?acf_format=standard&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title&lang=${locale}`)
    const page = await data.json();
      return page
  }

export async function getPost(id:any, locale:any) {
  const data = await fetch(`https://editingwp.icyecolombia.com/wp-json/wp/v2/posts/${id}?acf_format=standard&_fields=acf&lang=${locale}`)
  const post = await data.json();
  return post
}


  export async function getDetailProject(slug:any, locale:any) {
    const data = await fetch(`https://editingwp.icyecolombia.com/wp-json/wp/v2/posts?_embed&slug=${slug}&acf_format=standard&lang=${locale}`)
    const info = await data.json();
      return info
  }


  

  export async function getCategoriesByParent(id:any, locale:any,order:any) {
    const data = await fetch(`https://editingwp.icyecolombia.com/wp-json/wp/v2/categories?parent=${id}&acf_format=standard&_fields=name,id,slug&lang=${locale}`)
    const info = await data.json();

    let sortedCategories = order ? info.sort(function(a:any, b:any) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      } 
  }) : info

    


  return sortedCategories


}

  export async function getCategoryNameById(list:any, locale:any) {
    let listNames: any = []
    return Promise.all(list.map((item: any) => {
      //item.full_name returns the repositorie name
      return fetch(`https://editingwp.icyecolombia.com/wp-json/wp/v2/categories?include=${item}&lang=${locale}`)
        .then(data => {
          return data.json()
        }).then((obj)=>{
          listNames.push(obj[0].name)
        })
    })).then(()=>listNames);

  }

