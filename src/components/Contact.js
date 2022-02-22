import React from "react";
import  ReactDOM  from "react";

function Contact() {
 
 return (
   <>
     <br />
     <br />

     <div className="d-flex justify-center">
       <div className="row">
         <div>
           <p className=" text-[#a9a9a9] text-bold  text-5xl font-mono   p-3   ">
             Contact Form
           </p>
         </div>
         <div className="col-md-9 mb-md-0 mb-5 ">
           <form
             id="contact-form"
             name="contact-form"
             action="mail.php"
             method="POST"
           >
             <div className="row">
               <div className="col-md-12">
                 <div className="md-form mb-1 mt-3">
                   <input
                     type="text"
                     id="name"
                     name="name"
                     className="form-control"
                     required
                     placeholder="Full Name"
                   />
                 </div>
               </div>

               <div className="col-md-12">
                 <div className="md-form mb-0">
                   <input
                     type="text"
                     id="email"
                     name="email"
                     className="form-control"
                     required
                     placeholder="Email"
                   />
                 </div>
               </div>
             </div>

             <div className="row">
               <div className="col-md-12">
                 <div className="md-form mb-0 mt-8">
                   <input
                     type="text"
                     id="subject"
                     name="subject"
                     className="form-control"
                     placeholder="subject"
                   />
                 </div>
               </div>
             </div>

             <div className="row">
               <div className="col-md-12">
                 <div className="md-form">
                   <textarea
                     type="text"
                     id="message"
                     name="message"
                     rows="2"
                     className="form-control md-textarea"
                     required
                     placeholder="Message"
                   ></textarea>
                 </div>
               </div>
             </div>
             <button
               className=" flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto mt-5 "
               type="submit"
             >
               Submit
             </button>
           </form>

           <div className="text-center text-md-left"></div>
           <div className="status"></div>
         </div>
       </div>
     </div>
   </>
 );
}
export default Contact;
