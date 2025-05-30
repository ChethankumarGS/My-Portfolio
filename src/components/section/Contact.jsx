import { useRef, useState } from "react"; // Import useRef
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // useRef to get a reference to the form element
  const formRef = useRef();

 // Make sure this is your EmailJS Public Key

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, import.meta.env.VITE_PUBLIC_KEY) // Use formRef.current here
      .then((result) => { // Removed extra parenthesis around result
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => { // Added 'error' parameter for better debugging
        console.error("EmailJS Error:", error); // Log the error for debugging
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form
            className="space-y-6"
            id="contact-form"
            onSubmit={handleSubmit}
            ref={formRef} // Assign the ref to the form
          >
            {/* Hidden fields for all required template variables - ensure these match your EmailJS template */}
            {/* If your template uses {{title}}, {{name}}, {{parameters}}, these hidden inputs are correct */}
            {/* Otherwise, you might not need them, or they should match your template's variable names. */}
            {/* Ensure 'from_name' and 'email' field names match your EmailJS template variables */}
            <input type="hidden" name="title" value="Offer letter" />
            <input type="hidden" name="name" value="ChethanKumar G S" /> {/* This might be confusing if you also have a 'from_name' for the user's input */}
            <input type="hidden" name="parameters" value="" /> {/* This input likely isn't needed unless your template explicitly uses 'parameters' */}


            <div className="relative">
              <input
                type="text"
                id="from_name" // Ensure this ID is unique and semantically correct
                name="from_name" // This name is crucial for EmailJS to pick up the value
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email" // Ensure this ID is unique and semantically correct
                name="email" // This name is crucial for EmailJS to pick up the value
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message" // Ensure this ID is unique and semantically correct
                name="message" // This name is crucial for EmailJS to pick up the value
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};