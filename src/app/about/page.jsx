"use client";
import Brain from "../components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            Hey, Im Reis Bashaija, originally from Uganda and currently studying in Nairobi, Kenya. Im in my final year pursuing a Bachelors degree in Business Information Technology at Strathmore University.</p>
            <p className="text-lg">In my free time, youll find me immersed in the latest tech trends, indulging in some gaming sessions, or curled up with a good book.</p>
            <p className="text-lg">With a keen interest in both front-end and back-end development, Im always eager to learn and apply new technologies to solve real-world problems.</p>
            
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Saying It Like It Is.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="110"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
        <path d="M14 72C45.6667 72 77.3333 72 109 72C112.938 72 110.72 71.5574 108.944 73.1111C103.564 77.8188 96.5136 80.3313 89.9444 83C79.3249 87.3142 65.0121 91.8837 62.5 104.444C61.6767 108.561 60.8373 115.66 63 119.444C66.979 126.408 78.8317 124 85.2222 124C94.013 124 107.738 126.63 115.944 122.722C121.399 120.125 126.428 116.202 131.944 113.444C135.938 111.447 141.122 108.98 144.444 106.056C146.182 104.527 150.478 103.011 150.944 100.444C151.527 97.2414 151 93.4799 151 90.2222C151 86.6508 152.148 84 148 84C141.429 84 138.553 84.3328 133 88C129.208 90.5039 125.747 92.6604 122.222 95.5556C119.972 97.4038 118.994 101.67 117.444 104.222C116.248 106.193 117.988 114.754 120.222 115.778C123.336 117.205 123.948 119.632 128 120C129.493 120.136 137.831 123.207 138.778 124.444C141.842 128.451 150.262 128.2 154.667 129.778C175.083 137.091 195.993 124.323 207.556 108.556C209.062 106.501 220.263 87.3276 209.5 92.1111C206.627 93.3882 204.619 99.9819 203.5 102.444C201.42 107.02 201.198 114.976 205.056 118.833C209.753 123.531 216.015 130.015 223.667 126.444C227.603 124.607 232.589 123.459 235 119.556C239.442 112.363 240.701 103.985 244 96.2222C248.603 85.3928 260.83 76.4915 272 73.2222C276.711 71.8434 279.208 81.5036 281.333 85.1111C286.987 94.7085 292.424 105.516 296.222 116C298.47 122.204 300.145 131.848 293 135.778C289.344 137.789 277 130.823 277 136" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path d="M27 2C27 46.6229 28.3747 91.0126 30.0556 135.556C30.1465 137.967 29.6679 144.641 31.2222 146.778C31.7769 147.54 33.4382 147.725 33.2222 148.444C32.0173 152.461 34 161 34 161" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path d="M2 12C8.20295 13.1278 13.3318 14.772 20 15C28.1669 15.2792 36.3321 15.7176 44.5 15.9444C47.4958 16.0277 51.216 15.4168 54.1667 16.1111C54.2849 16.1389 57.0871 20.0483 57.3333 20.4444C60.4183 25.4072 51.6298 36.6021 49.1111 40C38.5839 54.2018 24.9556 68.7975 8.5 76.1111C5.10685 77.6192 10.4559 78.8837 11.4444 79C20.2968 80.0415 29.4142 81.0744 38 83.6111C47.5427 86.4306 58.5564 89.377 63.4444 98.8889C70.3115 112.252 69.6434 132.491 63 145.778C57.7138 156.35 43.29 160.841 32.4444 162.778C29.8292 163.245 24 163.472 24 160" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path d="M213 74L214 75" stroke="white" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - Present{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;