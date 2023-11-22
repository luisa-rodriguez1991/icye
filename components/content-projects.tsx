import Project from "./project";

export default function ContentProjects({ list }: any) {
  return (
    <div className="lg:col-span-3">
      {list.map((i: any) => (
        <Project key={i.id} item={i} />
      ))}
    </div>
  );
}
