import React from "react";
import styles from "./Home.module.css";
import styles2 from "./About.module.css";

const Home = () => {
  return (
    <>
     
      <embed className={styles.bulb} src="./images/bulb.svg" />
     <div className="d-flex justify-content-between">
     
     <embed className={styles.lamb} src="./images/lamb.svg" />
     <div>
        <p className={`animated  fadeInLeft delay-0s ${styles.gamehead1}`}>Lambs</p>
        <p className={`animated  flipInX delay-0s ${styles.gamehead2}`}>and</p>
        <p className={`animated  fadeInRight delay-0s ${styles.gamehead3}`}>Tigers</p>
      </div>
      <embed className={styles.tiger} src="./images/tiger.png" />
     </div>
     <p className={`h3 py-4 px-5 text-center my-3 ${styles2.forQ}`}><q>This game helps people to develop strategy and concept of teamwork by teaching that even though weak, if united, one can vanquish the stronger enemy as a team.</q></p>
     <div className={styles2.ColorOrange}>
      <div className={`display-3 text-center mt-4 mb-3 ${styles2.ColorOrange}`}>
       <p> How do I play this?</p>
      </div>
      <div className={styles2.BackGroundOrange}>
        <div className="text-center p-5 display-4">Steps</div>
        {/* three tigers fight against 15 lambs on a 23-square board. The tigers can jump over (and "eat") the lambs; the lambs must try to crowd the tigers to prevent them from moving. */}
        <div className="p-5">
          <img src="/images/downarrow.svg" alt="down1" />
          <p className="my-4 h5">You need to login first</p>
        </div>
        <div className="p-5">
          <img src="/images/downarrow.svg" alt="down2" />
          <p className="my-4 h5">Then choose from available game modes</p>
        </div>
        <div className="p-5">
          <img src="/images/downarrow.svg" alt="down3" />
          <p className="my-4 h5">Enjoy the game</p>
        </div>
      </div>
    </div>
    <div className="mb-5">
    <div className={`display-3 text-center my-3 ${styles2.ColorOrange2}`}>
      Game Gist
    </div>
    <p className="col-6 mx-auto text-center h4 text-white">
    Three tigers fight against 15 lambs on a 23-square board. The tigers can jump over (and "eat") the lambs; the lambs must try to crowd the tigers to prevent them from moving.
    </p>
    </div>
    </>
  );
};

export default Home;
