import React from "react";
import  ReactDOM  from "react";

function Contact() {
 
 return (
   <>
    
      

       <br />
       <br />
       <br />
       <br />
       <br />

       <div className="d-flex justify-center">
         

         

         <div className="row">
           <div className="col-md-9 mb-md-0 mb-5">
             <form
               id="contact-form"
               name="contact-form"
               action="mail.php"
               method="POST"
             >
               <div className="row">
                 <div className="col-md-12">
                   <div className="md-form mb-0">
                     <input
                       type="text"
                       id="name"
                       name="name"
                       className="form-control"
                       required
                     />
                     <label for="name" className="">
                       Your name
                     </label>
                   </div>
                 </div>

                 <div className="col-md-6">
                   <div className="md-form mb-0">
                     <input
                       type="text"
                       id="email"
                       name="email"
                       className="form-control"
                       required
                     />
                     <label for="email" className="">
                       Your email
                     </label>
                   </div>
                 </div>
               </div>

               <div className="row">
                 <div className="col-md-12">
                   <div className="md-form mb-0">
                     <input
                       type="text"
                       id="subject"
                       name="subject"
                       className="form-control"
                     />
                     <label for="subject" className="">
                       Subject
                     </label>
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
                     ></textarea>
                     <label for="message">Your message</label>
                   </div>
                 </div>
               </div>

               <button
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-10"
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
