import { motion } from "framer-motion";

export default function Skills({title, skills}) {
    const skillsAnimation = (index) => {
        if (index%3 === 1) {
          return { y: [0, 5, 0], transition: { repeat: Infinity, duration: 2 } }
        }
        
        return { y: [0, -5, 0], transition: { repeat: Infinity, duration: 2 } }
    }

    return <>
        <h3 className='text-2xl font-bold text-white text-center my-4'>{title}</h3>
        <div className="grid grid-cols-5 gap-6 my-6 text-gray-300 text-4xl flex flex-wrap justify-center">
          {skills.map((Icon, index) => (
            <motion.div
              key={index}
              className="p-4 flex justify-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              animate={skillsAnimation(index)}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
    </>
}