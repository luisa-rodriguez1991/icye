import { useIntl } from "react-intl";
import Button from "./button";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";


export default function ContactContent({text}:any) {
  const router = useRouter();
  const {locale} = router
  const intl = useIntl()
  const [userData, setUserData] = useState()
  const [confirmation, setConfirmation] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => setUserData(data);


  useEffect(()=>{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
  };
     
    userData && fetch("http://localhost:5001/contact", requestOptions) // ⬅️ 1) llamada a la API, el resultado es una Promise
    .then((response) => response.status === 200 && setConfirmation(true)); // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto

  
  },[userData])







  return (

    

    <div className="bg-white">
    <div className="mx-auto max-w-7xl px-6 pb-8 py-8  lg:px-8 relative">
      <div className="lg:absolute lg:top-0 lg:bottom-0 lg:left-1/2 lg:right-1">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-[70%]"
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          alt=""
        />
      </div>
      <div className="pb-24  sm:pb-32 sm:pb-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pb-24">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
             {intl.formatMessage({id:"contact_content_title"})}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              {text}
            </p>





          
    
      {/* <select {...register("Programm")}>
        <option value="1 Year">1 Year</option>
        <option value=" 6 Months"> 6 Months</option>
        <option value=" 3 Months"> 3 Months</option>
        <option value=" Workcamp"> Workcamp</option>
      </select>
      
            <input type="checkbox" placeholder="Privacy" {...register("Privacy", {required: true})} />

      
      
      */}

  






          
            {confirmation?(

                <div className="shadow-xl p-6 bg-accent-2 h-[400px] flex flex-col items-center justify-center mt-6 rounded-xl">
                  <CheckCircleIcon className="text-green-600 h-16 w-16" />
                  <h1 className="text-base font-medium text-green-600">Gracias por tu interes!</h1>
                  <p className="mt-2 text-2xl text-accent-1 font-bold tracking-tight">Estaremos pronto en contacto!</p>
                  <p className="mt-2 text-base text-gray-500">Si tienes preguntas, comunicate al: TODO </p>
                </div>



            ):(
                <form onSubmit={handleSubmit(onSubmit)} className="mt-16 pb-24">
                    <input
                        type="hidden"
                        {...register("locale")}
                        value={locale}
                      />
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                     {intl.formatMessage({id:"contact_form_firstname"})}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        {...register("firstname", {required: true, maxLength: 80})}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                            {errors.firstname && <span className="text-red-400">{intl.formatMessage({id:"contact_form_firstname_confirmation"})}</span>}
  
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                   {intl.formatMessage({id:"contact_form_lastname"})}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        {...register("lastname", {required: true, maxLength: 100})} 
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                                                {errors.lastname && <span className="text-red-400">{intl.formatMessage({id:"contact_form_lastname_confirmation"})}</span>}
  
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {intl.formatMessage({id:"contact_form_email"})}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                       {errors.email && <span className="text-red-400">{intl.formatMessage({id:"contact_form_email_confirmation"})}</span>}
  
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="phone"
                        className="block font-semibold text-gray-900"
                      >
                       {intl.formatMessage({id:"contact_form_phone"})}
                      </label>
                      <p id="phone-description" className="text-gray-400">
                       {intl.formatMessage({id:"contact_form_phone_optional"})}
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        {...register("Phone", {maxLength: 20})}
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
  
  
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                     {intl.formatMessage({id:"contact_form_hcwh"})}
                      </label>
                      <p id="message-description" className="text-gray-400">
                       {intl.formatMessage({id:"contact_form_hcwh_size"})}
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea 
                        {...register("Message", {})}
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button type="submit" className="rounded-[40px] bg-accent-1 px-6 py-4  font-semibold text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >  {intl.formatMessage({id:"contact_form_button"})} </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      </div>
      </div>
    
  );
}
