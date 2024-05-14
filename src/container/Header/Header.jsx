import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hola, soy</p>
            <a
              className="head-text"
              href="https://www.github.com/shekingw"
              target="_blank"
              rel="noreferrer"
            >
              Alan
            </a>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Fullstack Developer</p>
        </div>
        <br />
        <div className="app__header-low">
          <p>
            Soy un desarollador Full Stack, enfocado en las últimas tecnologías
            para el diseño web, en continuo aprendizaje.
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.javascript, images.node, images.redux].map(
        (circle, index) => (
          console.log("index", circle),
          (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              {index === 0 ? (
                <a
                  href="https://es.react.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={circle} alt="profile_bg" />
                </a>
              ) : index === 1 ? (
                <a
                  href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={circle} alt="profile_bg" />
                </a>
              ) : index === 2 ? (
                <a
                  href="https://nodejs.org/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={circle} alt="profile_bg" />
                </a>
              ) : index === 3 ? (
                <a
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={circle} alt="profile_bg" />
                </a>
              ) : null}
              {/* <a href="https://www.github.com/shekingw">
              <img src={circle} alt="profile_bg" />
            </a> */}
            </div>
          )
        )
      )}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
