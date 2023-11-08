"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import AnimatedSections from "../../../ui/animation/AnimatedSections"

const FaqPage = () => {

  // data for faq
  const faqData = [
    {
      question: "What are Dynamic and Animated UI Components?",
      answer: "Dynamic and Animated UI Components are pre-designed user interface elements that seamlessly integrate with React and Tailwind CSS. These components come to life with dynamic features and animations, enhancing the visual appeal and functionality of your web applications.",
    },
    {
      question: "How can I integrate these components into my React project?",
      answer: "Integrating our Dynamic and Animated UI Components is simple. We provide clear documentation and code examples to guide you through the integration process. You can quickly enhance your React project by copying and pasting the component code.",
    },
    {
      question: "What benefits do these components offer to my web application?",
      answer: "Our UI Components add interactivity and engagement to your web application. They improve user experience, increase user retention, and make your site more visually appealing. With pre-built animations and dynamic features, you can save development time and resources.",
    },
    {
      question: "Do I need to have experience in animation or design to use these components?",
      answer: "No prior experience in animation or design is required. Our UI Components are designed to be user-friendly and easily customizable. You can use them out of the box or tweak them to match your project's unique style without any design or animation expertise.",
    },
    {
      question: "What support and updates can I expect as a subscriber?",
      answer: "Subscribers enjoy access to our support team for assistance and troubleshooting. We also provide regular updates, including new components and feature enhancements. Your subscription ensures you have access to the latest and greatest UI Components for your projects.",
    },
  ]
  
  const [activeItems, setActiveItems] = useState(new Array(faqData.length).fill(false));

  const handleItemClick = (index) => {
    const updatedItems = [...activeItems];
    updatedItems[index] = !updatedItems[index];
    setActiveItems(updatedItems);
  };

  return (
    <AnimatedSections > 
      <section className='h-[calc(100vh-84px)] px-[20px] max-w-[800px] mx-auto pt-[60px] md:py-[60px]'>
        <div className='flex flex-col items-center h-screen gap-5'>
          
          {/* title */}
          <div className="text-center py-[10px] md:py-[30px]">
            <h1 className='text-3xl font-bold capitalize md:text-5xl'>
              frequently asked questions
            </h1>
          </div>

          {faqData.map((item, index) => (

            <button
              key={index}
              className="w-full border-b border-black/30 py-[20px] z-10"
              onClick={() => handleItemClick(index)}
            >

              {/* question */}
              <motion.div
                className="flex items-center justify-between text-xl font-semibold md:text-2xl text-start"
              >
                <motion.div
                  animate={{ color: activeItems[index] ? "#974ae8" : "#000000" }}
                  transition={{ duration: 0.6 }}
                >
                  {item.question}
                </motion.div>
                <motion.div
                  className="text-3xl"
                  animate={{
                    rotate: activeItems[index] ? 180 : 0,
                    color: activeItems[index] ? "#974ae8" : "#000000",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <MdOutlineKeyboardArrowDown />
                </motion.div>
              </motion.div>
              
              {/* answer */}
              <motion.div
                className={`text-start pt-[10px] font-semibold text-black/70 md:text-xl`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeItems[index] ? "auto" : 0,
                  opacity: activeItems[index] ? 1 : 0,
                  x: activeItems[index] ? 10 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </motion.div>
            </button>
          ))}
        </div>
      </section>
    </AnimatedSections>
  );
};

export default FaqPage;