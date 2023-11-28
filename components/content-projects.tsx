import Project from "./project";
import StateMessage from "./state-message";

export default function ContentProjects({ list }: any) {
  console.log(list)
  return (
    <div className="col-span-4 lg:col-span-3">
       {list.length>0?(
         <div>
              <div>
            <span className="inline-flex  items-center rounded-md bg-accent-2 mt-12 px-1.5 py-0.5 text-md mx-6 font-medium text-accent-1">
            Total Projects : {list.length}
            </span>
          </div>
          {list.map((i: any) => (
            <Project key={i.id} item={i} />
          ))}
         </div>
       ) : (
          <div>
            <StateMessage h1="No hay proyectos en esta seleccion" p="Remueve algunos filtros para ver tus proyectos favoritos" p2=" Si tienes preguntas, comunicate al: TODO" icon="box"/>
          </div>
       )}
    </div>
  );
}
