"use client";

import { ChangeEvent, useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleChange = (event: ChangeEvent<any> | undefined) => {
    try {
      switch (event?.target?.name) {
        case "name":
          setName(event?.target?.value);
          break;
        case "email":
          setEmail(event?.target?.value);
          break;
        case "message":
          setMessage(event?.target?.value);
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    !name?.trim() ? setNameError("Enter a valid name") : setNameError("");
    !email?.trim() ? setEmailError("Enter a valid email") : setEmailError("");
    !message?.trim()
      ? setMessageError("Enter a valid message")
      : setMessageError("");

    console.log(email, name, message);
  };

  //   console.log(email, name, message);

  return (
    <section className="w-full custom-container mb-8 " id="about">
      <div className="w-full  ">
        <div className="flex items-center w-full py-8 gap-6">
          <h3 className="font-semibold tracking-wide text-xl lg:text-3xl min-w-fit text-theme">
            04. Get In Touch
          </h3>
          <span className="w-full h-[1px] bg-theme/20"></span>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex flex-col w-full gap-2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name*"
                onChange={handleChange}
                value={name}
                className="w-full focus:outline-theme focus:outline text-theme py-2 px-4 bg-transparent border-theme/20 focus-visible:outline-none border rounded-md "
              />
              {nameError && (
                <small className="tracking-wide font-medium text-red-500">
                  {nameError}
                </small>
              )}
            </div>
            <div className="flex  flex-col w-full gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email*"
                onChange={handleChange}
                value={email}
                className="w-full focus:outline-theme focus:outline text-theme py-2 px-4 bg-transparent border-theme/20 focus-visible:outline-none border rounded-md"
              />
              {emailError && (
                <small className="tracking-wide font-medium text-red-500">
                  {emailError}
                </small>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <textarea
              name="message"
              id=""
              onChange={handleChange}
              cols={20}
              rows={5}
              placeholder="Enter some messages*"
              value={message}
              className="w-full focus:outline-theme focus:outline text-theme py-2 px-4 bg-transparent border-theme/20 focus-visible:outline-none border rounded-md"
            ></textarea>
            {messageError && (
              <small className="tracking-wide font-medium text-red-500">
                {messageError}
              </small>
            )}
          </div>

          <button
            className="btn-primary w-fit mt-8 flex mx-auto relative "
            onClick={handleSubmit}
          >
            <div className="animate-ping border-theme border absolute top-0 left-0 h-full w-full rounded-md  "></div>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
