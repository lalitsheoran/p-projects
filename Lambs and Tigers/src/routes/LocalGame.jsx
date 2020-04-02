import React from "react";
import './Swal.css';
import styles from "./Game.module.css";
import {Prompt, Redirect} from "react-router-dom";
import swal from '@sweetalert/with-react'
import { connect } from 'react-redux';
import { who_won, game_complete, opponent} from '../redux/gameDetails/actions';

class LocalGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameEnded:false,
      whoseTurn: "lamb",
      tigerMove: true,
      lambMove: false,
      elementToMove: null,
      lambsgenerated: 0,
      tigersgenerated: 3,
      lambsgone: 0,
      dX: 0,
      dY: 0,
      selectedAnimal: 0,
      matrix: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
      ],
      xmatrix : [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
      ],
      ymatrix : [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
      ]
    };
  }
  selectAni = element => {
    element.persist();
    let tempselectedAnimal = element.target.getAttribute("valuex");
    this.setState({
      selectedAnimal: tempselectedAnimal
    });
    if (this.state.selectedAnimal == this.state.whoseTurn) {
      console.log("this is it", element.target);
      element.target.style.height = "85px";
      setTimeout(function() {
        element.target.style.height = "80px";
      }, 300);
    }
    console.log(this.state.selectedAnimal);
  };

  playSound = () => {
    let sound = document.getElementById("audio");
    sound.play();
  };

  tigerMoveChecker = (coord, matrix) => {
    let grossPossibleMoves = [];
    let tempgrossPossibleMoves = [];
    if (coord == "03") {
      let tempgrossPossibleMoves = [11, 12, 13, 14];
      if (matrix[1][1] == "lamb") {
        tempgrossPossibleMoves[0] = 21;
      }
      if (matrix[1][2] == "lamb") {
        tempgrossPossibleMoves[1] = 22;
      }
      if (matrix[1][3] == "lamb") {
        tempgrossPossibleMoves[2] = 23;
      }
      if (matrix[1][4] == "lamb") {
        tempgrossPossibleMoves[3] = 24;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "10") {
      let tempgrossPossibleMoves = [11, 20];
      if (matrix[1][1] == "lamb") {
        tempgrossPossibleMoves[0] = 12;
      }
      if (matrix[2][0] == "lamb") {
        tempgrossPossibleMoves[1] = 30;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "20") {
      let tempgrossPossibleMoves = [10, 30, 21];
      if (matrix[2][1] == "lamb") {
        tempgrossPossibleMoves[2] = 22;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "30") {
      let tempgrossPossibleMoves = [31, 20];
      if (matrix[3][1] == "lamb") {
        tempgrossPossibleMoves[0] = 32;
      }
      if (matrix[2][0] == "lamb") {
        tempgrossPossibleMoves[1] = 10;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "41") {
      let tempgrossPossibleMoves = [42, 31];
      if (matrix[4][2] == "lamb") {
        tempgrossPossibleMoves[0] = 43;
      }
      if (matrix[3][1] == "lamb") {
        tempgrossPossibleMoves[1] = 21;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "42") {
      let tempgrossPossibleMoves = [41, 32, 43];
      if (matrix[3][2] == "lamb") {
        tempgrossPossibleMoves[1] = 22;
      }
      if (matrix[4][3] == "lamb") {
        tempgrossPossibleMoves[2] = 44;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "43") {
      let tempgrossPossibleMoves = [42, 44, 33];
      if (matrix[4][2] == "lamb") {
        tempgrossPossibleMoves[0] = 41;
      }
      if (matrix[3][3] == "lamb") {
        tempgrossPossibleMoves[2] = 23;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "44") {
      let tempgrossPossibleMoves = [43, 34];
      if (matrix[4][3] == "lamb") {
        tempgrossPossibleMoves[0] = 42;
      }
      if (matrix[3][4] == "lamb") {
        tempgrossPossibleMoves[1] = 24;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "15") {
      let tempgrossPossibleMoves = [14, 25];
      if (matrix[1][4] == "lamb") {
        tempgrossPossibleMoves[0] = 13;
      }
      if (matrix[2][5] == "lamb") {
        tempgrossPossibleMoves[1] = 35;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "25") {
      let tempgrossPossibleMoves = [15, 24, 35];
      if (matrix[2][4] == "lamb") {
        tempgrossPossibleMoves[1] = 23;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "35") {
      let tempgrossPossibleMoves = [25, 34];
      if (matrix[2][5] == "lamb") {
        tempgrossPossibleMoves[0] = 15;
      }
      if (matrix[3][4] == "lamb") {
        tempgrossPossibleMoves[1] = 33;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "11") {
      let tempgrossPossibleMoves = [10, 21, 12, "03"];
      if (matrix[2][1] == "lamb") {
        tempgrossPossibleMoves[1] = 31;
      }
      if (matrix[1][2] == "lamb") {
        tempgrossPossibleMoves[2] = 13;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "12") {
      let tempgrossPossibleMoves = [11, 22, 13, "03"];
      if (matrix[1][1] == "lamb") {
        tempgrossPossibleMoves[0] = 10;
      }
      if (matrix[2][2] == "lamb") {
        tempgrossPossibleMoves[1] = 32;
      }
      if (matrix[1][3] == "lamb") {
        tempgrossPossibleMoves[2] = 14;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "13") {
      let tempgrossPossibleMoves = [12, 23, 14, "03"];
      if (matrix[1][2] == "lamb") {
        tempgrossPossibleMoves[0] = 11;
      }
      if (matrix[2][3] == "lamb") {
        tempgrossPossibleMoves[1] = 33;
      }
      if (matrix[1][4] == "lamb") {
        tempgrossPossibleMoves[2] = 15;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "14") {
      let tempgrossPossibleMoves = [13, 24, 15, "03"];
      if (matrix[1][3] == "lamb") {
        tempgrossPossibleMoves[0] = 12;
      }
      if (matrix[2][4] == "lamb") {
        tempgrossPossibleMoves[1] = 34;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "21") {
      let tempgrossPossibleMoves = [20, 11, 22, 31];
      if (matrix[1][1] == "lamb") {
        tempgrossPossibleMoves[1] = "03";
      }
      if (matrix[2][2] == "lamb") {
        tempgrossPossibleMoves[2] = 23;
      }
      if (matrix[3][1] == "lamb") {
        tempgrossPossibleMoves[3] = 41;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "22") {
      let tempgrossPossibleMoves = [21, 12, 23, 32];
      if (matrix[2][1] == "lamb") {
        tempgrossPossibleMoves[0] = 20;
      }
      if (matrix[1][2] == "lamb") {
        tempgrossPossibleMoves[1] = "03";
      }
      if (matrix[2][3] == "lamb") {
        tempgrossPossibleMoves[2] = 24;
      }
      if (matrix[3][2] == "lamb") {
        tempgrossPossibleMoves[3] = 42;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "23") {
      let tempgrossPossibleMoves = [22, 13, 24, 33];
      if (matrix[2][2] == "lamb") {
        tempgrossPossibleMoves[0] = 21;
      }
      if (matrix[1][3] == "lamb") {
        tempgrossPossibleMoves[1] = "03";
      }
      if (matrix[2][4] == "lamb") {
        tempgrossPossibleMoves[2] = 25;
      }
      if (matrix[3][3] == "lamb") {
        tempgrossPossibleMoves[3] = 43;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "24") {
      let tempgrossPossibleMoves = [23, 14, 25, 34];
      if (matrix[2][3] == "lamb") {
        tempgrossPossibleMoves[0] = 22;
      }
      if (matrix[1][4] == "lamb") {
        tempgrossPossibleMoves[1] = "03";
      }
      if (matrix[3][4] == "lamb") {
        tempgrossPossibleMoves[3] = 44;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "31") {
      let tempgrossPossibleMoves = [30, 21, 32, 41];
      if (matrix[2][1] == "lamb") {
        tempgrossPossibleMoves[1] = 11;
      }
      if (matrix[3][2] == "lamb") {
        tempgrossPossibleMoves[2] = 33;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "32") {
      let tempgrossPossibleMoves = [31, 22, 33, 42];
      if (matrix[3][1] == "lamb") {
        tempgrossPossibleMoves[0] = 30;
      }
      if (matrix[2][2] == "lamb") {
        tempgrossPossibleMoves[1] = 12;
      }
      if (matrix[3][3] == "lamb") {
        tempgrossPossibleMoves[2] = 34;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "33") {
      let tempgrossPossibleMoves = [32, 23, 34, 43];
      if (matrix[3][2] == "lamb") {
        tempgrossPossibleMoves[0] = 31;
      }
      if (matrix[2][3] == "lamb") {
        tempgrossPossibleMoves[1] = 13;
      }
      if (matrix[3][4] == "lamb") {
        tempgrossPossibleMoves[2] = 35;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "34") {
      let tempgrossPossibleMoves = [33, 24, 35, 44];
      if (matrix[3][3] == "lamb") {
        tempgrossPossibleMoves[0] = 32;
      }
      if (matrix[2][4] == "lamb") {
        tempgrossPossibleMoves[1] = 14;
      }
      grossPossibleMoves = tempgrossPossibleMoves;
    }
    grossPossibleMoves = grossPossibleMoves.map(e => e.toString());
    let netPossibleMoves = [];
    for (let i = 0; i < grossPossibleMoves.length; i++) {
      let x = Number(grossPossibleMoves[i][0]);
      let y = Number(grossPossibleMoves[i][1]);
      if (matrix[x][y] == null) {
        netPossibleMoves.push(grossPossibleMoves[i]);
      }
    }

    return netPossibleMoves;
  };

  lambMoveChecker = (coord, matrix) => {
    let grossPossibleMoves = [];
    let tempgrossPossibleMoves = [];
    if (coord == "03") {
      let tempgrossPossibleMoves = [11, 12, 13, 14];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "10") {
      let tempgrossPossibleMoves = [11, 20];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "20") {
      let tempgrossPossibleMoves = [10, 30, 21];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "30") {
      let tempgrossPossibleMoves = [31, 20];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "41") {
      let tempgrossPossibleMoves = [42, 31];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "42") {
      let tempgrossPossibleMoves = [41, 32, 43];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "43") {
      let tempgrossPossibleMoves = [42, 44, 33];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "44") {
      let tempgrossPossibleMoves = [43, 34];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "15") {
      let tempgrossPossibleMoves = [14, 25];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "25") {
      let tempgrossPossibleMoves = [15, 24, 35];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "35") {
      let tempgrossPossibleMoves = [25, 34];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "11") {
      let tempgrossPossibleMoves = [10, 21, 12, "03"];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "12") {
      let tempgrossPossibleMoves = [11, 22, 13, "03"];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "13") {
      let tempgrossPossibleMoves = [12, 23, 14, "03"];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "14") {
      let tempgrossPossibleMoves = [13, 24, 15, "03"];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "21") {
      let tempgrossPossibleMoves = [20, 11, 22, 31];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "22") {
      let tempgrossPossibleMoves = [21, 12, 23, 32];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "23") {
      let tempgrossPossibleMoves = [22, 13, 24, 33];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "24") {
      let tempgrossPossibleMoves = [23, 14, 25, 34];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "31") {
      let tempgrossPossibleMoves = [30, 21, 32, 41];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "32") {
      let tempgrossPossibleMoves = [31, 22, 33, 42];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "33") {
      let tempgrossPossibleMoves = [32, 23, 34, 43];

      grossPossibleMoves = tempgrossPossibleMoves;
    } else if (coord == "34") {
      let tempgrossPossibleMoves = [33, 24, 35, 44];

      grossPossibleMoves = tempgrossPossibleMoves;
    }
    grossPossibleMoves = grossPossibleMoves.map(e => e.toString());
    let netPossibleMoves = [];
    for (let i = 0; i < grossPossibleMoves.length; i++) {
      let x = Number(grossPossibleMoves[i][0]);
      let y = Number(grossPossibleMoves[i][1]);
      if (matrix[x][y] == null) {
        netPossibleMoves.push(grossPossibleMoves[i]);
      }
    }

    return netPossibleMoves;
  };

  lambGen = (x, y, i, coord) => {
    const { lambMove, elementToMove, matrix } = this.state;
    let img = document.createElement("img");
    img.src = "/images/lambgame.png";
    img.style.position = "absolute";
    img.style.height = "55px";

    img.setAttribute("coord", coord);
    img.setAttribute("ima", "lamb");
    img.classList.add("iamlamb");

    img.style.cursor = "pointer";
    img.style.top = x - 25 + "px";
    img.style.left = y - 20 + "px";

    img.id = "lamb" + i;
    let src = document.querySelector("body");
    img.addEventListener("click", async(e) =>{
      console.log("my id is ", e.target.id);
      if (this.state.lambMove == true && this.state.whoseTurn=="lamb" && this.state.gameEnded==false) {
       await this.setState({
          elementToMove: e.target.id
        });
        let elementToMove = e.target.id;
        // elementToMove.style.cursor = "pointer"
        console.log("whom to move ", elementToMove);
        let toMoveCoord = e.target.getAttribute("coord");
        let lambPossibleMoves = this.lambMoveChecker(
          toMoveCoord.toString(),
          this.state.matrix
        );
        this.possibleMarker(lambPossibleMoves);
        setTimeout(()=> {
          this.clearMarker();
        }, 500);
      }
      else if(this.state.lambMove == true && this.state.gameEnded==true){
        swal(
          <div>
              <h1 className={styles.swalText}>Move on</h1>
              <img src="/images/lambgame.png" alt="lamb" height="60px"/>
              <p className={`text-white h3 ${styles.swalText}`}>
              Game is over now
              </p>
          </div>
        )
      }
    });
    src.appendChild(img);
  };

  tigerGen = (x, y, i, coord) => {
    // const { tigerMove,elementToMove,matrix } = this.state
    let img2 = document.createElement("img");
    // img2.src = "https://cdn4.iconfinder.com/data/icons/animals-45/755/Tiger-512.png";
    img2.src = "/images/tigergame.png";
    // img.style.visibility="hidden"
    img2.setAttribute("coord", coord);
    console.log(img2.getAttribute("coord"));
    img2.style.position = "absolute";
    img2.style.cursor = "pointer";
    img2.style.height = "55px";
    img2.setAttribute("ima", "tiger");
    img2.style.top = x - 25 + "px";
    img2.style.left = y - 20 + "px";
    img2.classList.add("iamtiger");
    img2.id = "tiger" + i;
    this.setState(
      state => {
        let tempMat = state.matrix;
        tempMat[Number(coord[0])][Number(coord[1])] = "tiger";
        return { matrix: tempMat };
      }
    );
    // console.log("this is my idddd",img2.id)
    img2.addEventListener("click", e => {
      console.log("my id is ", e.target.id);
      // let elementToMove = e.target.id
      if (this.state.tigerMove == true && this.state.whoseTurn=="tiger" && this.state.gameEnded==false) {
        this.setState({
          elementToMove: e.target.id
        });
        e.target.style.cursor = "pointer";
        console.log("whom to move ", e.target.id);
        let toMoveCoord = e.target.getAttribute("coord");
        let tigerPossibleMoves = this.tigerMoveChecker(
          toMoveCoord.toString(),
          this.state.matrix
        );
        this.possibleMarker(tigerPossibleMoves);
        setTimeout(() => {
          this.clearMarker();
        }, 500);
      }
      else if(this.state.tigerMove == true && this.state.gameEnded==true){
        swal(
          <div>
              <h1 className={styles.swalText}>Move on</h1>
              <img src="/images/tigergame.png" alt="lamb" height="60px"/>
              <p className={`text-white h3 ${styles.swalText}`}>
              Game is over now
              </p>
          </div>
        )
      }
      // this.style.borderRadius = "60px"
      // this.style.border = "5px solid yellow"
    });
    let src = document.querySelector("body");
    src.appendChild(img2);
  };

  handleClick = e => {
    let temp = e.target.getAttribute("coord");
    let rect = e.target.getBoundingClientRect();
    let dX = Math.floor(rect.x);
    let dY = Math.floor(rect.y);
    if (
      this.state.selectedAnimal == "lamb" &&
      this.state.lambsgenerated < 15 &&
      this.state.whoseTurn == "lamb"
    ) {
      this.lambGen(dY, dX, this.state.lambsgenerated, temp);
      let tagname = "lamb" + this.state.lambsgenerated;
      // document.getElementById(tagname).style.visibility="visible"
      let animaltype = document.getElementById(tagname).getAttribute("ima");
      // console.log(animaltype)
      this.setState(
        state => {
          let mat = state.matrix;
          mat[Number(temp[0])][Number(temp[1])] = "lamb";
          return { matrix: mat };
        },
        () => {
          if (this.state.lambsgenerated == 14) {
            this.setState({
              lambMove: true
            });
          }
        }
      );

      // console.log(matrix)
      let tempLambGen = this.state.lambsgenerated + 1;
      this.setState({
        lambsgenerated: tempLambGen,
        whoseTurn: "tiger"
      });
      // lambsOnBoard.textContent = "Lambs onboard : " + lambsgenerated

      // upTurn = whoseTurn.charAt(0).toUpperCase() + whoseTurn.slice(1)
      // takeYourTurn.textContent = "Take your turn : " + upTurn
      let selectLamb = document.getElementById("selectLamb");
      let selectTiger = document.getElementById("selectTiger");
      selectLamb.style.opacity = "0.5";
      selectTiger.style.opacity = "1";
      selectTiger.classList.remove("tigerInvalid");
      selectTiger.classList.add("tigerValid");
      selectLamb.classList.remove("tigerValid");
      selectLamb.classList.add("tigerInvalid");
    //   if (this.state.tigersgenerated > 2) {
        
    //     setTimeout(() => {
    //       this.tigerAI();
    //     }, 0);
    // }
    } else if (
      this.state.selectedAnimal == "tiger" &&
      this.state.tigersgenerated < 3 &&
      this.state.whoseTurn == "tiger"
    ) {
      this.tigerGen(dY, dX, this.state.tigersgenerated, temp);
      let tagname = "tiger" + this.state.tigersgenerated;
      // document.getElementById(tagname).style.visibility="visible"
      let animaltype = document.getElementById(tagname).getAttribute("ima");
      // matrix[Number(temp[0])][Number(temp[1])] = "tiger"
      // console.log(matrix)
      // if (tigersgenerated == 2) {
      //     tigerMove = true
      // }
      // tigersgenerated++

      this.setState(
        state => {
          let mat = state.matrix;
          mat[Number(temp[0])][Number(temp[1])] = "tiger";
          return { matrix: mat };
        },
        () => {
          if (this.state.tigersgenerated == 2) {
            this.setState({
              tigerMove: true
            });
          }
        }
      );

      // console.log(matrix)
      let tempTigerGen = this.state.tigersgenerated + 1;
      console.log("temppp", tempTigerGen);
      this.setState(
        {
          tigersgenerated: tempTigerGen,
          whoseTurn: "lamb"
        },
        () => console.log("tempppnextt", this.state.tigersgenerated)
      );

      console.log("tigersgenereated", this.state.tigersgenerated);
      // upTurn = whoseTurn.charAt(0).toUpperCase() + whoseTurn.slice(1)
      // takeYourTurn.textContent = "Take your turn : " + upTurn
      let selectLamb = document.getElementById("selectLamb");
      let selectTiger = document.getElementById("selectTiger");
      selectTiger.style.opacity = "0.5";
      selectLamb.style.opacity = "1";
      selectTiger.classList.remove("tigerValid");
      selectTiger.classList.add("tigerInvalid");
      // selectTiger.classList.add("flip","tigerInvalid","animated" , "delay-0s")

      selectLamb.classList.remove("tigerInvalid");
      selectLamb.classList.add("tigerValid");
    } else if (
      this.state.tigersgenerated >= 3 &&
      this.state.whoseTurn == "tiger" &&
      this.state.elementToMove != null
    ) {
      console.log("round two !!");
      console.log(this.state.matrix);
      let elementToMovex = document.getElementById(this.state.elementToMove);
      if(elementToMovex==null){
        alert("Check it again")
        return
      }
      let validateTigerBeforeMove = elementToMovex.getAttribute("ima");
      let toMoveCoord = elementToMovex.getAttribute("coord");
      let tigerPossibleMoves = this.tigerMoveChecker(
        toMoveCoord.toString(),
        this.state.matrix
      );
      let currentMoveVerify = tigerPossibleMoves.includes(temp);
      console.log(tigerPossibleMoves, temp, toMoveCoord);
      if (validateTigerBeforeMove == "tiger" && currentMoveVerify) {
        let x1 = Number(toMoveCoord[0]);
        let y1 = Number(toMoveCoord[1]);
        let x2 = Number(temp[0]);
        let y2 = Number(temp[1]);
        let lamb2kill = ((x1 + x2) / 2).toString() + ((y1 + y2) / 2).toString();
        if (
          (toMoveCoord == "03" || toMoveCoord == "21") &&
          (temp == "03" || temp == "21")
        ) {
          lamb2kill = "11";
        } else if (
          (toMoveCoord == "03" || toMoveCoord == "22") &&
          (temp == "03" || temp == "22")
        ) {
          lamb2kill = "12";
        } else if (
          (toMoveCoord == "03" || toMoveCoord == "23") &&
          (temp == "03" || temp == "23")
        ) {
          lamb2kill = "13";
        } else if (
          (toMoveCoord == "03" || toMoveCoord == "24") &&
          (temp == "03" || temp == "24")
        ) {
          lamb2kill = "14";
        }

        this.lambKill(lamb2kill);
        elementToMovex.setAttribute("coord", temp);
        elementToMovex.style.left = dX - 25 + "px";
        elementToMovex.style.top = dY - 25 + "px";
        let tempMat = this.state.matrix;
        tempMat[Number(toMoveCoord[0])][Number(toMoveCoord[1])] = null;
        // matrix[Number(toMoveCoord[0])][Number(toMoveCoord[1])] = null
        // matrix[Number(temp[0])][Number(temp[1])] = "tiger"
        tempMat[Number(temp[0])][Number(temp[1])] = "tiger";
        this.setState({
          matrix: tempMat,
          whoseTurn: "lamb"
        });
        console.log(this.state.matrix);
        // whoseTurn = "lamb"
        // upTurn = whoseTurn.charAt(0).toUpperCase() + whoseTurn.slice(1)
        // takeYourTurn.textContent = "Take your turn : " + upTurn
        let selectLamb = document.getElementById("selectLamb");
        let selectTiger = document.getElementById("selectTiger");
        selectTiger.style.opacity = "0.5";
        selectLamb.style.opacity = "1";
        selectTiger.classList.remove(`${styles.tigerValid}`);
        selectTiger.classList.add(`${styles.tigerInvalid}`);
        selectLamb.classList.remove(`${styles.lambInvalid}`);
        selectLamb.classList.add(`${styles.tigerValid}`);
      } else if (validateTigerBeforeMove == "tiger" && !currentMoveVerify) {
        // alert("Invalid Move")
        this.invalidMove();
        console.log("invalid");
      } else {
        alert("Choose correct piece to move");
      }
    } else if (
      this.state.lambsgenerated >= 15 &&
      this.state.whoseTurn == "lamb" &&
      this.state.elementToMove != null
    ) {
      console.log("round two for lamb !!");
      console.log(this.state.matrix);
      let elementToMovex = document.getElementById(this.state.elementToMove);
      if(elementToMovex==null){
        alert("Check it again")
        return
      }
      let validateLambBeforeMove = elementToMovex.getAttribute("ima");
      let toMoveCoord = elementToMovex.getAttribute("coord");
      let lambPossibleMoves = this.lambMoveChecker(
        toMoveCoord.toString(),
        this.state.matrix
      );
      console.log(lambPossibleMoves, temp, toMoveCoord);
      let currentMoveVerify = lambPossibleMoves.includes(temp);
      if (validateLambBeforeMove == "lamb" && currentMoveVerify) {
        elementToMovex.setAttribute("coord", temp);
        elementToMovex.style.left = dX - 25 + "px";
        elementToMovex.style.top = dY - 25 + "px";
        let tempMat = this.state.matrix;
        tempMat[Number(toMoveCoord[0])][Number(toMoveCoord[1])] = null;
        // matrix[Number(toMoveCoord[0])][Number(toMoveCoord[1])] = null
        // matrix[Number(temp[0])][Number(temp[1])] = "lamb"
        tempMat[Number(temp[0])][Number(temp[1])] = "lamb";
        this.setState({
          matrix: tempMat,
          whoseTurn: "tiger"
        });
        console.log(this.state.matrix);
        // whoseTurn = "tiger"
        // upTurn = whoseTurn.charAt(0).toUpperCase() + whoseTurn.slice(1)
        // takeYourTurn.textContent = "Take your turn : " + upTurn
        let selectLamb = document.getElementById("selectLamb");
        let selectTiger = document.getElementById("selectTiger");
        selectLamb.style.opacity = "0.5";
        selectTiger.style.opacity = "1";
        // selectTiger.classList.remove("tigerInvalid");
        // selectTiger.classList.add("tigerValid");
        // selectLamb.classList.remove("tigerValid");
        // selectLamb.classList.add("tigerInvalid");

        selectTiger.classList.remove(`${styles.tigerInvalid}`);
        selectTiger.classList.add(`${styles.tigerValid}`);
        selectLamb.classList.remove(`${styles.lambValid}`);
        selectLamb.classList.add(`${styles.tigerInvalid}`);
      } else if (validateLambBeforeMove == "lamb" && !currentMoveVerify) {
        this.invalidMove();
      } else {
        alert("Choose correct piece to move");
      }
    //   if (this.state.tigersgenerated > 2) {
        
    //     setTimeout(() => {
    //       this.tigerAI();
    //     }, 0);
    // }
    } else if (
      this.state.lambsgenerated >= 15 &&
      this.state.whoseTurn == "lamb" &&
      this.state.elementToMove == null
    ) {
      alert("Select the piece to move ");
    } else if (
      this.state.tigersgenerated >= 3 &&
      this.state.whoseTurn == "tiger" &&
      this.state.elementToMove == null
    ) {
      alert("Select the piece to move ");
    }
    // console.log(dX,dY,lambsgenerated)

    // alert(temp);
  };
  clearMarker = () => {
    let dots = document.getElementsByTagName("ellipse");
    for (let i = 0; i < dots.length; i++) {
      dots[i].style.fill = "#F15A29";
    }
  };

  possibleMarker = pMoves => {
    let dots = document.getElementsByTagName("ellipse");
    for (let i = 0; i < dots.length; i++) {
      let pCoord = dots[i].getAttribute("coord");
      if (pMoves.indexOf(pCoord) > -1) {
        dots[i].style.fill = "green";
      }
    }
  };

  lambKill = coord => {
    let allLambs = document.getElementsByClassName("iamlamb");
    for (let i = 0; i < allLambs.length; i++) {
      let tempCoord = allLambs[i].getAttribute("coord");
      if (coord == tempCoord) {
        allLambs[i].classList.add("flip", "animated", "delay-0s");
        let tempMat = this.state.matrix;
        let tempLambsGone = this.state.lambsgone + 1;
        // matrix[Number(coord[0])][Number(coord[1])] = null
        tempMat[Number(coord[0])][Number(coord[1])] = null;
        this.setState({
          matrix: tempMat,
          lambsgone: tempLambsGone
        });
        this.playSound();

        setTimeout(() => {
          allLambs[i].remove();
        }, 700);

        // this.playSound();
        // lambsgone++
        // lambsLost.textContent = "Lambs lost : " + lambsgone
        if (this.state.lambsgone >= 14) {
          // lambsLost.textContent = "All lambs lost !"
          swal(
            <div>
              <h1 className={styles.swalText}>Game Over</h1>
              <img src="/images/tigergame.png" alt="" height="60px"/>
              <p className={`text-white h3 ${styles.swalText}`}>
               Tiger Won
              </p>
          </div>
        )
          this.setState({
            gameEnded:true
          })
          this.props.who_wonx("Opponent")
          this.props.game_completex()
        }
        
        console.log(this.state.lambsgone);
      }
    }
  };
  invalidMove = () => {
    let bkg = document.getElementsByClassName("forinvalid");
    document.body.style.backgroundColor = "red";
    for (let i = 0; i < bkg.length; i++) {
      bkg[i].style.backgroundColor = "red";
      bkg[i].style.fill = "red";
      bkg[i].style.stopColor = "red";
    }
    setTimeout(function() {
      document.body.style.backgroundColor = "#2F2F2B";
      for (let i = 0; i < bkg.length; i++) {
        bkg[i].style.backgroundColor = "#2F2F2B";
        bkg[i].style.fill = "#2F2F2B";
        bkg[i].style.stopColor = "#2F2F2B";
      }
    }, 500);
  };

  placeTiger=()=>{
    this.tigerGen(this.state.ymatrix[0][3],this.state.xmatrix[0][3],0,"03")
    this.tigerGen(this.state.ymatrix[1][2],this.state.xmatrix[1][2],1,"12")
    this.tigerGen(this.state.ymatrix[1][3],this.state.xmatrix[1][3],2,"13")
    console.log("tigers placed successfully")
}

  componentDidMount() {
    let bkg = document.getElementsByClassName("forinvalid");
    for (let i = 0; i < bkg.length; i++) {
      bkg[i].style.backgroundColor = "#2F2F2B";
      bkg[i].style.fill = "#2F2F2B";
      bkg[i].style.stopColor = "#2F2F2B";
    }
    this.xyMatrixGen()
    this.placeTiger()

  }
  componentWillUnmount(){
    let allimages=document.querySelectorAll("img")
    for(let i=0; i < allimages.length; i++){
      allimages[i].remove()
    }
    
  }

  lambKillChecker=(toMoveCoord, temp)=> {
    let x1 = Number(toMoveCoord[0])
    let y1 = Number(toMoveCoord[1])
    let x2 = Number(temp[0])
    let y2 = Number(temp[1])
    let lamb2kill = ((x1 + x2) / 2).toString() + ((y1 + y2) / 2).toString()
    if ((toMoveCoord == "03" || toMoveCoord == "21") && (temp == "03" || temp ==
            "21")) {
        lamb2kill = "11"
    } else if ((toMoveCoord == "03" || toMoveCoord == "22") && (temp == "03" || temp ==
            "22")) {
        lamb2kill = "12"
    } else if ((toMoveCoord == "03" || toMoveCoord == "23") && (temp == "03" || temp ==
            "23")) {
        lamb2kill = "13"
    } else if ((toMoveCoord == "03" || toMoveCoord == "24") && (temp == "03" || temp ==
            "24")) {
        lamb2kill = "14"
    }


    let allLambs = document.getElementsByClassName("iamlamb")
    for (let i = 0; i < allLambs.length; i++) {
        let tempCoord = allLambs[i].getAttribute("coord")
        if (lamb2kill == tempCoord) {
            return true
        }
    }
}

  tigerAI=()=>{
    let isKillPossible = false

    let selectedTigerbyAI = ""
    let aiMovebyAI = ""
    let toMoveCoordbyAI = ""



    let tigerIDs = ['tiger0', 'tiger1', 'tiger2']
    let chooseID = Math.floor(Math.random() * 3)
    let selectedTiger = document.getElementById(tigerIDs[chooseID])
    // console.log(selectedTiger)
    let toMoveCoord = selectedTiger.getAttribute("coord")
    // console.log(toMoveCoord)
    let tigerPossibleMoves = this.tigerMoveChecker(toMoveCoord.toString(), this.state.matrix)
    let numberOfMovesAvailable = tigerPossibleMoves.length
    let selectedMoveNumber = Math.floor(Math.random() * numberOfMovesAvailable)
    let aiMove = tigerPossibleMoves[selectedMoveNumber]
    console.log("aimove ", aiMove)
    // let p=0

    if (aiMove == undefined) {
      let isPossible=false
        for (let i = 0; i < 3; i++) {
            let selectedTigerx = document.getElementById(tigerIDs[i])
            let toMoveCoordx = selectedTigerx.getAttribute("coord")
            let tigerPossibleMovesx = this.tigerMoveChecker(toMoveCoordx.toString(), this.state.matrix)
            let numberOfMovesAvailablex = tigerPossibleMovesx.length
            for (let j = 0; j < numberOfMovesAvailablex; j++) {
                let cooX = Number(tigerPossibleMovesx[j][0])
                let cooY = Number(tigerPossibleMovesx[j][1])

                if (this.state.matrix[cooX[cooY]] == null) {
                    isPossible=true
                    selectedTiger = selectedTigerx
                    aiMove = tigerPossibleMovesx[j]
                    toMoveCoord = toMoveCoordx
                    console.log("repaired undefined one")
                }
            }

        }
        if(!isPossible){
          swal(
            <div>
              <h1 className={styles.swalText}>Game Over</h1>
              <img src="/images/lambgame.png" alt="" height="60px"/>
              <p className={`text-white h3 ${styles.swalText}`}>
               Lamb Won
              </p>
          </div>
        )
          this.setState({
            gameEnded:true
          })
          this.props.who_wonx("Opponent")
          this.props.game_completex()
          return
        }
    }

    console.log(selectedTiger)
    console.log(toMoveCoord)

    for (let i = 0; i < 3; i++) {
        let selectedTigerx = document.getElementById(tigerIDs[i])
        let toMoveCoordx = selectedTigerx.getAttribute("coord")
        let tigerPossibleMovesx = this.tigerMoveChecker(toMoveCoordx.toString(), this.state.matrix)
        let numberOfMovesAvailablex = tigerPossibleMovesx.length
        for (let j = 0; j < numberOfMovesAvailablex; j++) {
            if (this.lambKillChecker(toMoveCoordx, tigerPossibleMovesx[j])) {
                isKillPossible = true
                selectedTigerbyAI = selectedTigerx
                aiMovebyAI = tigerPossibleMovesx[j]
                toMoveCoordbyAI = toMoveCoordx
            }
        }

    }
    if (isKillPossible) {
        selectedTiger = selectedTigerbyAI
        aiMove = aiMovebyAI
        toMoveCoord = toMoveCoordbyAI
    }
    console.log(isKillPossible, selectedTiger)
    let x1 = Number(toMoveCoord[0])
    let y1 = Number(toMoveCoord[1])
    let x2 = Number(aiMove[0])
    let y2 = Number(aiMove[1])
    console.log("aiii", aiMove)
    let lamb2kill = ((x1 + x2) / 2).toString() + ((y1 + y2) / 2).toString()
    if ((toMoveCoord == "03" || toMoveCoord == "21") && (aiMove == "03" || aiMove ==
            "21")) {
        lamb2kill = "11"
    } else if ((toMoveCoord == "03" || toMoveCoord == "22") && (aiMove == "03" || aiMove ==
            "22")) {
        lamb2kill = "12"
    } else if ((toMoveCoord == "03" || toMoveCoord == "23") && (aiMove == "03" || aiMove ==
            "23")) {
        lamb2kill = "13"
    } else if ((toMoveCoord == "03" || toMoveCoord == "24") && (aiMove == "03" || aiMove ==
            "24")) {
        lamb2kill = "14"
    }

    this.lambKill(lamb2kill)
    isKillPossible = false
    selectedTiger.setAttribute("coord", aiMove)
    selectedTiger.style.left = this.state.xmatrix[x2][y2] - 25 + 'px'
    selectedTiger.style.top = this.state.ymatrix[x2][y2] - 25 + 'px'
    console.log("selectedTigerX ", this.state.xmatrix[x2][y2])
    console.log("selectedTigerY ", this.state.ymatrix[x2][y2])

    // let tempMat = this.state.matrix;
    //     tempMat[Number(toMoveCoord[0])][Number(toMoveCoord[1])] = null;
    //     tempMat[Number(aiMove[0])][Number(aiMove[1])] = "tiger";
    //     this.setState({
    //       matrix: tempMat,
    //       whoseTurn: "lamb"
    //     });

        this.setState(
          state => {
            let tempMat = state.matrix;
            tempMat[Number(aiMove[0])][Number(aiMove[1])] = "tiger";
            tempMat[Number(toMoveCoord[0])][Number(toMoveCoord[1])] = null;
            return { matrix: tempMat,whoseTurn:"lamb" };
          }
        );
    // matrix[Number(toMoveCoord[0])][Number(toMoveCoord[1])] = null
    // matrix[Number(aiMove[0])][Number(aiMove[1])] = "tiger"
    // console.log(matrix)
    // whoseTurn = "lamb"
    // upTurn = whoseTurn.charAt(0).toUpperCase() + whoseTurn.slice(1)
    // takeYourTurn.textContent = "Take your turn : " + upTurn
    let selectLamb = document.getElementById("selectLamb");
    let selectTiger = document.getElementById("selectTiger");
    selectTiger.style.opacity = "0.5"
    selectLamb.style.opacity = "1"
    selectTiger.classList.remove("tigerValid")
    selectTiger.classList.add("tigerInvalid")
    selectLamb.classList.remove("tigerInvalid")
    selectLamb.classList.add("tigerValid")
    console.log(this.state.matrix)
};

xyMatrixGen=()=>{
  let ellipse=document.getElementsByTagName("ellipse")
  let tempx=this.state.xmatrix
  let tempy=this.state.ymatrix
  for(let i=0;i<ellipse.length;i++){
     let currentCoord= ellipse[i].getAttribute("coord")
     let rect = ellipse[i].getBoundingClientRect();
      let dX = Math.floor(rect.x)
      let dY = Math.floor(rect.y)
      console.log("dX",dX," dY ",dY)
      let tempx=this.state.xmatrix
      let tempy=this.state.ymatrix
      tempx[Number(currentCoord[0])][Number(currentCoord[1])]=dX
      tempy[Number(currentCoord[0])][Number(currentCoord[1])]=dY
      console.log("working",i)
      
  }
  this.setState({
    xmatrix:tempx,
    ymatrix:tempy
  },()=>{
  console.log(this.state.xmatrix)
  console.log(this.state.ymatrix)}
  )
  // console.log(ymatrix)
  // console.log(xmatrix)
}

  render() {
    return (
      <div className={styles.forinvalid}>
        {this.state.whoseTurn == "tiger" ? (
          <>
          <img
            onClick={this.selectAni}
            id="selectTiger"
            valuex="tiger"
            className={styles.tigerValid}
            style={{ position: "absolute", height: "75px", margin: "15px" }}
            src="/images/tigergame.png"
            alt="tiger"
          />
           <p className={`h3 text-white col-2 ${styles.text90}`}>{this.props.player1}</p>
          </>
        ) : (
          <>
          <img
            onClick={this.selectAni}
            id="selectTiger"
            valuex="tiger"
            className={styles.tigerInvalid}
            style={{ position: "absolute", height: "75px", margin: "15px" }}
            src="/images/tigergame.png"
            alt="tiger"
          />
           <p className={`h3 text-white col-2 ${styles.text90}`}>{this.props.player1}</p>
          </>
        )}
        {this.state.whoseTurn == "lamb" ? (
          <>
          <img
            onClick={this.selectAni}
            id="selectLamb"
            valuex="lamb"
            className={styles.lambValid}
            style={{
              position: "absolute",
              height: "80px",
              marginLeft: "15px",
              marginTop: "80px"
            }}
            src="/images/lambgame.png"
            alt="lamb"
          />
          <p className={`h3 text-white col-2 ${styles.text180}`}>{this.props.player2}</p>
          </>
        ) : (
          <>
          <img
            onClick={this.selectAni}
            id="selectLamb"
            valuex="lamb"
            className={styles.lambinValid}
            style={{
              position: "absolute",
              height: "80px",
              marginLeft: "15px",
              marginTop: "80px"
            }}
            src="/images/lambgame.png"
            alt="lamb"
          />
           <p className={`h3 text-white col-2 ${styles.text180}`}>{this.props.player2}</p>
          </>
        )}
        {/* <audio id="audio" type="audio/mp3" src={sound}></audio> */}
        {this.props.isAuth && <Prompt
          when={!this.state.gameEnded}
          message={'Do you want to quit the game ?'}
          
          />}
        <div
          style={{ position: "absolute",right:"1px"}}
          className="text-white font-weight-bold h3 mr-4"
        >
         
          <p>
            Lambs Placed:{this.state.lambsgenerated} <br />
          </p>
          <p>
            Lambs Lost: {this.state.lambsgone}
            <br />
          </p>
          <p>
            Whose turn:{" "}
            <span className="text-danger">{this.state.whoseTurn=="lamb" ? <span style={{color:"#EB6052"}}>Lamb</span> : <span style={{color:"#FED452"}}>Tiger</span>}</span> <br />
          </p>
        </div>
        <audio
          id="audio"
          autoPlay="false"
          ref="audio_tag"
          src="/images/roar.mp3"
        />
        <svg
          style={{  marginTop: "0px",marginLeft:"350px" }}
          className=" "
          height="75vh"
          viewBox="0 0 938 706"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M28 8H911V698H28V8Z" fill="url(#paint0_linear)" />
          <line
            y1="-3"
            x2="822.633"
            y2="-3"
            transform="matrix(0.544485 -0.838771 0.792993 0.609231 28 698)"
            stroke="white"
            strokeWidth="6"
          />
          <line
            y1="-3"
            x2="818.933"
            y2="-3"
            transform="matrix(0.538602 0.84256 -0.836031 0.548682 469.921 8)"
            stroke="white"
            strokeWidth="6"
          />
          <line
            y1="-3"
            x2="705.549"
            y2="-3"
            transform="matrix(-0.208783 0.977962 -0.976812 -0.2141 469.921 8)"
            stroke="white"
            strokeWidth="6"
          />
          <line
            y1="-3"
            x2="705.549"
            y2="-3"
            transform="matrix(0.208783 0.977962 -0.976812 0.2141 469.921 8)"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="28"
            y1="695"
            x2="911"
            y2="695"
            stroke="white"
            strokeWidth="6"
          />
          <line
            y1="-3"
            x2="730"
            y2="-3"
            transform="matrix(0.999999 -0.00102138 0.000994919 1 102.934 356.844)"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="10.9992"
            y1="482"
            x2="923.999"
            y2="481.767"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="196.934"
            y1="225.055"
            x2="746.934"
            y2="225.055"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="198.432"
            y1="223.757"
            x2="13.4315"
            y2="479.757"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="745.453"
            y1="226.273"
            x2="926.453"
            y2="483.273"
            stroke="white"
            strokeWidth="6"
          />

          <ellipse
            onClick={this.handleClick}
            coord="03"
            style={{ cursor: "pointer" }}
            cx="472.557"
            cy="13.9342"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="10"
            style={{ cursor: "pointer" }}
            cx="194.894"
            cy="225.734"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="11"
            style={{ cursor: "pointer" }}
            cx="328.921"
            cy="225.734"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="12"
            style={{ cursor: "pointer" }}
            cx="425.534"
            cy="225.734"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="13"
            style={{ cursor: "pointer" }}
            cx="517.871"
            cy="225.734"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="14"
            style={{ cursor: "pointer" }}
            cx="611.918"
            cy="225.734"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="15"
            style={{ cursor: "pointer" }}
            cx="744.221"
            cy="225.734"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="20"
            style={{ cursor: "pointer" }}
            cx="108.184"
            cy="351.142"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="21"
            style={{ cursor: "pointer" }}
            cx="251.973"
            cy="351.142"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="22"
            style={{ cursor: "pointer" }}
            cx="398.174"
            cy="351.142"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="23"
            style={{ cursor: "pointer" }}
            cx="544.375"
            cy="351.142"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="24"
            style={{ cursor: "pointer" }}
            cx="691.431"
            cy="351.142"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="25"
            style={{ cursor: "pointer" }}
            cx="833.221"
            cy="351.142"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="30"
            style={{ cursor: "pointer" }}
            cx="13.1839"
            cy="477.479"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="31"
            style={{ cursor: "pointer" }}
            cx="167.331"
            cy="477.479"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="32"
            style={{ cursor: "pointer" }}
            cx="371.670"
            cy="477.479"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="33"
            style={{ cursor: "pointer" }}
            cx="573.444"
            cy="477.479"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="34"
            style={{ cursor: "pointer" }}
            cx="774.364"
            cy="477.479"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="35"
            style={{ cursor: "pointer" }}
            cx="924.221"
            cy="477.479"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="41"
            style={{ cursor: "pointer" }}
            cx="28.8246"
            cy="692.066"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="42"
            style={{ cursor: "pointer" }}
            cx="327.211"
            cy="692.066"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="43"
            style={{ cursor: "pointer" }}
            cx="617.048"
            cy="692.066"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />
          <ellipse
            onClick={this.handleClick}
            coord="44"
            style={{ cursor: "pointer" }}
            cx="905.175"
            cy="692.066"
            rx="12.8246"
            ry="13.9342"
            fill="#F15A29"
          />

          <defs>
            <linearGradient
              id="paint0_linear"
              x1="469.5"
              y1="8"
              x2="469.5"
              y2="698"
              gradientUnits="userSpaceOnUse"
            >
              {/* <stop className="forinvalid" offset="0.9999" /> */}
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {!this.props.isAuth && <Redirect to="/login" />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  player1:state.authReducer.userInfo.displayName,
  player2:state.gameDetailsReducer.opponent,
  isAuth:state.authReducer.isAuth
})

const mapDispatchToProps =dispatch=> ({
  who_wonx:(value)=>dispatch(who_won(value)),
  game_completex:()=>dispatch(game_complete())
})
export default connect(mapStateToProps,mapDispatchToProps)(LocalGame);
