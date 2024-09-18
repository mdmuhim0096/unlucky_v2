import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { secWrap } from "../hoc";
import { textVariant } from "../utils/motion";

function ExpCard({experience}) {
   return (
      <>
         <VerticalTimelineElement
            contentStyle={{background: "#1d1836", color: "#fff"}}
            contentArrowStyle={{borderRightStyle: "7px solid #232631"}}
            date={experience.date}
            iconStyle={{background: experience.iconBg}}
            icon={
               <div className="flex justify-center items-center h-full w-full">
                  <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
               </div>
            }
         >
            <div>
               <h3 className="text-white text-[24px] text-bold">{experience.title}</h3>
               <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
            </div>
            <ul className="mt-20 list-disc ml-5 space-y-2">
               {
                  experience.points.map((point, idx) => (
                     <li key={`experience-point-${idx}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                        {point}
                     </li>
                  ))
               }
            </ul>
         </VerticalTimelineElement>
      </>
   )
}

function Experience() {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>What i have done so far</p>

            <h2 className={`${styles.sectionHeadText}`}>Work Experiance.</h2>
         </motion.div>
         <div className="mt-20 flex flex-col">
            <VerticalTimeline>
               {
                  experiences.map((exp, idx) => (
                     <ExpCard key={idx} experience={exp} />
                  ))
               }
            </VerticalTimeline>
         </div>
      </>
   )
}

export default secWrap(Experience, "work");