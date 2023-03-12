"use client";

import React from "react";
import { TitleText } from "../../components/CustomTexts";
import "../../styles/hack.css";
import { BsInstagram } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const trackdata1 = [
  {
    title: "track1",
    desc: "Concept for a new version of the World Wide Web that incorporates decentralisation, blockchain technologies, and token-based economics.",
  },
  {
    title: "track2",
    desc: "Integrates internal and external concepts to create architectures and systems whose specifications are established by a business model.",
  },
  {
    title: "track3",
    desc: "The capacity of a machine to replicate intelligent human behaviour is referred to as machine learning in the field of artificial intelligence.",
  },
];

const page = () => {
  const trackscard = (cd, index) => {
    return (
      <div className="p-10">
        <h1 className="text-white text-2xl font-semi-bold pb-2 lg: text-center">
          {cd.title}
        </h1>
        <p className="text-white w-[25vw] text-center">{cd.desc}</p>
      </div>
    );
  };

  const mentorCards = (card, index) => {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        key={index}
        className="card"
      >
        <img src={card.image} alt="Person" className="card__image" />
        <p className="card__name">{card.name}</p>
        <div className="post">{card.post}</div>
        {/* <div className="grid-container"> */}
        <div className="post">{card.org}</div>
        {/* </div> */}
        <ul className="social-icons">
          <li>
            <a href={card.instaLink}>
              <i className="fa fa-instagram">
                <BsInstagram />
              </i>
            </a>
          </li>
          <li>
            <a href={card.githubLink}>
              <i className="fa fa-twitter">
                <AiOutlineTwitter />
              </i>
            </a>
          </li>
          <li>
            <a href={card.linkedinLink}>
              <i className="fa fa-linkedin">
                <AiFillLinkedin />
              </i>
            </a>
          </li>
          <li>
            <a href={card.githubLink}>
              <i className="fa fa-codepen">
                <AiOutlineGithub />
              </i>
            </a>
          </li>
        </ul>
      </motion.div>
    );
  };

  return (
    <>
      <div>
        <div className="container items-center p-20 mx-auto flex justify-center flex-wrap flex-col md:flex-row">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden "
          >
            <TitleText
              title={
                <>
                  <img
                    src="/hackEDCodeLogo.png"
                    className=" w-[300px]"
                    alt=""
                  />
                  {/* <div className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    hack
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                      EDC
                    </span>
                    ode
                  </div> */}
                </>
              }
              textStyles="text-center"
            />
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-white leading-normal text-base md:text-2xl mb-8 text-center md:text-left "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consectetur optio unde saepe aliquam nesciunt illum ex? Quod
              voluptatem autem delectus quae sint, saepe porro cumque dolorum.
              Quos, atque harum!
            </motion.p>
            <div className="flex items-center justify-center pt-4 ">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Register Here
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="w-full xl:w-2/5 p-10 overflow-hidden"
          >
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="animate relative rounded-2xl"
              src="/hacki.png"
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container pl-20 pr-20 mx-auto flex justify-center flex-wrap flex-col md:flex-row items-center"
        >
          <TitleText
            title={
              <>
                <p className="text-white text-4xl font-semi-bold pb-8 lg:pb-6 text-center">
                  Our Tracks
                </p>
              </>
            }
            textStyles="text-center"
          />

          <div
            className=" mt-4 flex justify-center lg:flex-row flex-col items-center gap-5"
            style={{
              display: "flex",
              justifyContent: "center",
              // paddingTop: "10vh",
            }}
          >
            {trackdata1.map(trackscard)}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default page;