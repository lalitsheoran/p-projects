import React from "react";
import styles from "./About.module.css";

const About = () => {
  
 
  return (
    <div>
      
      <div className={`display-3 text-center my-3 ${styles.ColorOrange}`}>
        General Gameplay
      </div>
      <div className={styles.BackGroundOrange}>
        {/* <div className="text-center p-5 display-4">Steps</div>
        <div className="p-5">
          <img src="/images/downarrow.svg" alt="down1" />
        </div>
        <div className="p-5">
          <img src="/images/downarrow.svg" alt="down2" />
        </div>
        <div className="p-5">
          <img src="/images/downarrow.svg" alt="down3" />
        </div> */}
       <p className="text-left h5">
       At the start of the game all the 3 tigers are placed on the apex, and 2 inner places closest to the apex. All lambs start off the board.<br/>

The pieces must be put at the intersect of the board lines and moves follow these lines.<br/>

The player controlling the lambs moves first by placing a lamb onto a free intersection on the board. Then it is the tiger's turn. One lamb is then moved to an adjacent position along the lines that indicate the valid moves. Moves alternate between players.<br/>

A tiger captures a lamb by jumping over it to an adjacent free position. Lambs can not move until all 15 have been put on the board.<br/>
<br/>
The Tigers must move according to these rules:<br/>
<ul>
  <li>They can start capturing lambs any moment after the match has started.</li>
  <li>They can jump over a lamb in any direction, but it must be to an adjacent intersection following any of the lines drawn on the board.</li>
  <li>They can capture only one lamb at a time.</li>
  <li>A tiger cannot jump over another tiger.</li>
</ul>

The Lambs must move according to these rules:<br/>
<ul>
  <li>They must leave the board when captured.</li>
  <li>They can not jump over the Tigers or other lambs.</li>
  <li>They can only move after all 15 lambs have been put on the board.</li>
  <li>Tigers' wins if all the lambs are captured. Lambs' side win if all Tigers are blocked from movement.</li>
</ul>

       </p>
      </div>
    </div>
  );
};

export default About;
