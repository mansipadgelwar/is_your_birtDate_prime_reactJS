import React, { useState } from "react";
import "./styles.css";

let inputDate = "";
let userName = "";
var numberOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function App() {
  const [output, setOutput] = useState("");

  function isPrime(birthDate) {
    var isPrimeNumber = true;
    birthDate = Number(birthDate);
    if (birthDate > 1) {
      for (let i = 2; i < birthDate; i++) {
        if (birthDate % i === 0) {
          isPrimeNumber = false;
          break;
        }
      }
    } else {
      isPrimeNumber = false;
    }
    return isPrimeNumber;
  }

  function clickHandler(e) {
    e.preventDefault();
    var output = "";
    var userBirthDate = inputDate.split("/");

    var DD = Number(userBirthDate[0]);
    var MM = Number(userBirthDate[1]);

    if (inputDate === "") {
      output = "Please enter your birthdate.";
    } else if (userName === "") {
      output = "Please enter your name.";
    } else {
      if (DD < 31 || MM < 12 || DD > 0 || MM > 0 || !isNaN(DD) || !isNaN(MM)) {
        if (DD < numberOfDays[MM - 1]) {
          if (isPrime(DD)) {
            output = "Hey, your birth date is a prime number";
          } else {
            output = "Hey, your birth date is not a prime number";
          }
        } else {
          output = "Error !! Invalid Date format.";
        }
      } else {
        output = "Error !! Invalid Date format.";
      }
    }
    setOutput(output);
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>enter name and DOB to check if your birth day is prime birthDate.</h2>

      <div>
        <input
          className="input"
          type="text"
          onChange={(e) => {
            userName = e.target.value;
          }}
          placeholder="Enter name"
        />
      </div>

      <div>
        <input
          className="input"
          id="txt-input"
          type="text"
          onChange={(e) => {
            inputDate = e.target.value;
          }}
          placeholder="DD/MM"
        />
      </div>
      <div>
        <button onClick={clickHandler} type="submit">
          Is Prime
        </button>
      </div>
      <div className="output">
        <h1>{output}</h1>
      </div>
    </div>
  );
}
