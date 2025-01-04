import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Flip, Hinge, Zoom } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SendMessage = () => {
  const form = useRef();
  const naviagte = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
    .sendForm('service_ld8yias', 'template_yqzasxp', form.current, {
      publicKey:'ED2iJ9d4ngKsnUa92'
    })
      .then(
        () => {
          Swal.fire("Thank your for your email");
         e.target.reset()
         naviagte('/projects')
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          
          });
        },
      );
  };
    return (
      //   <div className="flex  flex-col items-center  mt-24 mb-4 w-full md:w-10/12 mx-auto ">
      //   <div className="w-11/12 md:w-full mx-auto  bg-white rounded-lg">
      //     <Zoom>
        
      //     </Zoom>
      //   </div>
      // </div>
        <form ref={form} onSubmit={sendEmail} className="  my-8 w-11/12 md:w-10/12 mx-auto space-y-4">
            
        <div className='   md:flex justify-around gap-8'>
        <div className='w-full space-y-6'>
         {/* Name Input */}
        <div>
           <input
             type="text"
             placeholder="Name"
             name='name'
            className="w-full transition-all shadow-lg  hover:shadow-inner px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
           />
         </div>

         {/* Email Input */}
         <div>
           <input
             type="email"
             placeholder="Email"
             name='email'
             className="w-full transition-all shadow-lg  hover:shadow-inner px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
           />
         </div>

         {/* Subject Input */}
         <div>
           <input
             type="text"
             placeholder="Subject"
             name='subject'
           className="w-full transition-all shadow-lg  hover:shadow-inner px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
           />
         </div>
        </div>
        {/* Message Input */}

     <div className='w-full mt-6 md:mt-0'>
           
           <div className='h-full'>
           <textarea
             placeholder="Message"
             name='message'
             className="w-full transition-all shadow-lg  hover:shadow-inner px-4 py-2 bg-gray-100 rounded-md  h-full focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
             rows="4"
           ></textarea>
         </div>

        
       </div>  
        </div>
         {/* Submit Button */}
         <div className="text-right">
           <input
             type="submit"
             className="px-6  py-2 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
           value='send'
             
           />
         </div>
       </form>
    //   <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    );
};

export default SendMessage;