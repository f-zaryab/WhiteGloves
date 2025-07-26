"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TitleMain from "@/Components/TitleMain";
import { Button } from "@/Components/ui/button";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First Name is required."),
  lastName: z.string().min(1, "Last Name is required."),
  email: z.email("Please provide valid email.").nonempty(),
  phone: z.string().min(1, "Phone is required."),
});

type IFormInput = z.infer<typeof contactFormSchema>;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "all",
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitForm: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <section
      className="w-full flex justify-center items-center relative"
      id="Contact"
    >
      <div className="flex justify-center flex-col items-center w-full">
        <div className="w-full px-4 md:px-24">
          <TitleMain
            preTitle="Contact us"
            title="Drop us an email and lets connect"
          />
        </div>
        <div className="grid grid-cols-6 w-full">
          <div className="hidden sm:flex sm:col-span-1 items-center">
            <hr className="w-full border-4 border-primary/90" />
          </div>
          <div className="col-span-6 sm:col-span-4 px-4 sm:px-0">
            <div className="col-span-5 border-8 border-primary rounded-2xl px-8 py-4 bg-primary/90 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-lg/6 font-medium text-white"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        type="text"
                        {...register("firstName")}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                      <div className="h-4">
                        {errors.firstName && (
                          <span className="text-sm text-red-600">
                            {errors.firstName?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-lg/6 font-medium text-white"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        type="text"
                        {...register("lastName")}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                      <div className="h-4">
                        {errors.lastName && (
                          <span className="text-sm text-red-600">
                            {errors.lastName?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="email"
                      className="block text-lg/6 font-medium text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                      <div className="h-4">
                        {errors.email && (
                          <span className="text-sm text-red-600">
                            {errors.email?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="phone-number"
                      className="block text-lg/6 font-medium text-white"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone-number"
                        type="text"
                        {...register("phone")}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                      <div className="h-4">
                        {errors.phone && (
                          <span className="text-sm text-red-600">
                            {errors.phone?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-4 w-full flex justify-end">
                  <Button
                    type="submit"
                    variant="secondary"
                    className="px-6 py-4"
                  >
                    Submit form
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden sm:flex sm:col-span-1 items-center">
            <hr className="w-full border-4 border-primary/90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
