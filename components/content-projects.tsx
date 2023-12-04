import Project from "./project";
import StateMessage from "./state-message";

export default function ContentProjects({ list }: any) {
  return (
    <div className="col-span-4 lg:col-span-3">
      {list.length > 0 ? (
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
          <StateMessage
            h1="project_faild_message_faild"
            p="project_faild_message_faild_blue"
            p2="project_faild_message_faild_contact"
            a="+57 310 7346918"
            icon="box"
          />
        </div>
      )}
    </div>
  );
}
