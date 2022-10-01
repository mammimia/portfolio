import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import PageTitle from "../Common/PageTitle";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:muhammedaliaydin97@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-xl px-10 justify-evenly mx-auto items-center md:mt-0 mt-20">
      <PageTitle title="Contact" />

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center">
          I have got just what you need. <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg xs:text-xl sm:text-2xl break-all">muhammedaliaydin97@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg xs:text-xl sm:text-2xl">Ankara, Turkey</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fix mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input {...register("name")} autoComplete="off" placeholder="Name" className="contact-input" type="text" />
            <input
              {...register("email")}
              autoComplete="off"
              placeholder="Email"
              className="contact-input mt-2 md:mt-0"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            autoComplete="off"
            placeholder="Subject"
            className="contact-input"
            type="text"
          />
          <textarea {...register("message")} autoComplete="off" placeholder="Message" className="contact-input" />
          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
