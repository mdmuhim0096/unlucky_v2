import { React, useEffect, useState, useRef } from "react"
import { secWrap } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import EarthCanvas from './canvas/Earth';
import { slideIn } from "../utils/motion";
import Stars from "./canvas/Stars";
// import axios from "axios";
function Contact() {

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loding, setLoading] = useState(false)

  const submitHandel = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      // axios.post("http://localhost:5001/send", form);
      const res = await fetch('http://localhost:5001/send', { // Replace with your API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicating the content type
        },
        body: JSON.stringify(form), // Convert formData to JSON string
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json(); // Parse the JSON response
      console.log(data); // Set the response data
    } catch (error) {
      console.log(error); // Handle any errors
    } finally {
      setLoading(false); // Stop the loading state
    }

  }

  const changeHandel = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={`${styles.sectionSubText}`}>get i touch.</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form ref={formRef} onSubmit={submitHandel}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={changeHandel} placeholder="What's your name" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-ls outlined-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="text" name="email" value={form.email} onChange={changeHandel} placeholder="What's your email" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-ls outlined-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={changeHandel} placeholder="What do you want to say." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-ls outlined-none border-none font-medium" />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loding ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
        <Stars />
      </motion.div>
    </div>
  )
}

export default secWrap(Contact, "contact");