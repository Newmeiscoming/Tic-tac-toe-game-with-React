// import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
// import LandingPage from './LandingPage';
// import Squares from './Squares';

function Game() {
  let initialState = ["","","","","","","","",""]
  
  
  const [arr,setArr] = useState(initialState);
  const [turn,setTurn] = useState(true);
  const[count,setCount] = useState(0);

  function handleClick(index){  
    setCount(count+1);
    console.log(count);
     let chances = Array.from(arr);
     if(turn){
      chances[index] = "O";
      setTurn(false);
    }
    else{

      chances[index] = "X";
    setTurn(true);
    }
    setArr(chances);
  }
   useEffect(()=>{

      let winner = winnerChecker();
      if(winner){
        alert(`Hurray!!! player ${winner} has won the match `)
        setCount(0);
    }
    else if(count===9){
        alert("Its a draw")
    }
      
   },[arr]) 
  function winnerChecker(){
      const winningLines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
      for(let i=0;i<winningLines.length;i++){
        let [a,b,c] = winningLines[i];
        if(arr[a]&&arr[a]===arr[b]&&arr[b]===arr[c]){
                return arr[b];
        }
        
      }
      return false;
  }
  function resetHandler(){
    setArr(initialState);
    setCount(0);
  }

  return (
    <div className="Game">
      
      
      <div>
        <table>
          <tr>
            <td onClick={()=>{handleClick(0)}}>{arr[0]}</td>
            <td onClick={()=>{handleClick(1)}}>{arr[1]}</td>
            <td onClick={()=>{handleClick(2)}}>{arr[2]}</td>
          </tr>
          <tr>
            <td onClick={()=>{handleClick(3)}}>{arr[3]}</td>
            <td onClick={()=>{handleClick(4)}}>{arr[4]}</td>
            <td onClick={()=>{handleClick(5)}}>{arr[5]}</td>
          </tr>
          <tr>
            <td onClick={()=>{handleClick(6)}}>{arr[6]}</td>
            <td onClick={()=>{handleClick(7)}}>{arr[7]}</td>
            <td onClick={()=>{handleClick(8)}}>{arr[8]}</td>
          </tr>
        </table>
      </div>
      <button onClick={resetHandler} type="button" class="btn btn-info my-3" style={{color:"white"}}>Reset Game</button>

      
    </div>
  );
}

export default Game;
