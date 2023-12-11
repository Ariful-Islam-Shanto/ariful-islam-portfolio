import React, { useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import emailjs from '@emailjs/browser';
import swal from "sweetalert";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      swal({
        title: "Are you sure?",
        text: "Once clicked, you message will send as email to Ariful Islam!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            emailjs.sendForm('service_p8tiin2', 'template_azoe898', form.current, 'UbTME6GzJVjIOtO-k')
            .then((result) => {
                console.log(result.text);
                swal("Your message has been send!", {
                    icon: "success",
                  });
                  e.target.reset();
            }, (error) => {
                console.log(error.text);
                swal ( "Oops" ,  error.text ,  "error" )
                e.target.reset();
            });
          
        } else {
          swal("Your message is not sent!");
          e.target.reset();
        }
      });
  
     
    };
  
  return (
    <div className="border-t-2 border-b-2 border-[#03045E] py-8">
      <h1 className="text-8xl flex items-center text-[#8f8b54] font-medium ">
        Contact <IoIosArrowRoundForward className="text-8xl" />
      </h1>
      <div className="hero min-h-[calc(100vh-120px)] bg-transparent backdrop-blur-2xl  ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-3">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center text-[#03045E] font-bold">Les’t talk on something great together!</h1>
            <p className="py-6">
            
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r  from-[#13192d] to-[#1c2d5f]">
            <form ref={form} onSubmit={sendEmail} className="card-body text-white">
              <div className="form-control text-white">
                <label className="label">
                  <span className="label-text text-white">Your name</span>
                </label>
                <input
                name="user_name"
                  type="text"
                  placeholder="your name"
                  className="p-3 text-white border-b-2 bg-transparent border-[white] rounded-lg input-bordered"
                  required
                />
              </div>
              <div className="form-control text-white">
                <label className="label">
                  <span className="label-text text-white">Your Email</span>
                </label>
                <input
                name="user_email"
                  type="email"
                  placeholder="email"
                  className="p-3  text-white border-b-2 bg-transparent border-[white] rounded-lg  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea type="text"
                  placeholder="message"
                  className=" text-white p-3 rounded-lg border-b-2 bg-transparent border-[white] input-bordered" name="message" id="" cols="30" rows="3"></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn border-none bg-[#e3dd84] text-gray-700 hover:text-white">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
