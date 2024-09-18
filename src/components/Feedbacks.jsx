import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { secWrap } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from '../constants';

function TestiCard({ testi, testimonial, index, name, designation, company, image }) {
  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className="mt-1">
          <p className='text-white text-[18px] tracking-wider'>{testimonial}</p>
          <div className='mt-7 flex jusitfy-between items-center gap-1'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white text-[16px] font-medium'>
                <span className='blue-text-gradient'>@</span>
                {name}
              </p>
              <p className='mt-1 text-secondary text-[12px]'>
                {`${designation} of ${company}`}
              </p>
            </div>

            <img src={image} alt={name} className="h-10 w-10 rounded-full object-cover"/>
          </div>
        </div>
      </motion.div>
    </>
  )
};

function Feedbacks() {
  return (
    <>
      <div className='mt-12 bg-black-100 rounded-[20px]'>
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div
            variants={textVariant()}
          >
            <p className={`${styles.sectionSubText}`}>What others say.</p>
            <h3 className={`${styles.sectionHeadText}`}>Testimonials.</h3>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-5`}>
          {testimonials.map((testi, idx) => (
            <TestiCard testi={testi.name} index={idx} {...testi} />
          ))}
        </div>
      </div>
    </>
  )
}

export default secWrap(Feedbacks, "")