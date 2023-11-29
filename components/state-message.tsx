import { ArchiveBoxXMarkIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

export default function StateMessage({h1, p, p2, icon, a}:any) {
  return (
    <div>
        <div className="shadow-xl p-6 bg-accent-2 h-[400px] flex flex-col items-center justify-center mt-6 rounded-xl">
            {icon==="checkicon"?(<CheckCircleIcon className="text-green-600 h-16 w-16" />):(<ArchiveBoxXMarkIcon className="text-gray-600 h-16 w-16" />)}
            
            {icon==="checkicon"?(
            <h1 className=" text-base text-green-600">
            {h1}
            </h1>
            ):(
              <h1 className="text-base text-gray-600">
                {h1}
            </h1>
            )}

            <p className="mt-2 text-2xl text-accent-1 font-bold tracking-tight">
              {p}
            </p>
            <p className="mt-2 text-base text-gray-600">
              {p2}
            </p>
            <a className="mt-2 text-base text-gray-900" href="https://wa.link/2bk6ie">
              {a}
            </a>
        </div>
    </div>
    
  );
}
