import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  input {
    width: 150px;
    padding: 1%;
    background-color: azure;
    // border: 2px solid lightseagreen;
    border-radius: 3px;
    -webkit-transition: width 0.35s ease-in-out;
    transition: width 0.35s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    outline: none;
    border: 1px solid #dddddd;
  }
  input[type='text']:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
    width: 230px;
  }
  .validation {
    font-size: 12px;
    margin: 5px 0 8px 0;
  }
  button {
    border: none;
    border-radius: 8px;
    padding: 2% 3%;
    background-color: lightseagreen;
    cursor: pointer;
    color: #3d1800;
    font-size: 14px;
    font-family: 'Yusei Magic', sans-serif;
    box-shadow: 7px 10px 17px -7px rgba(0, 0, 0, 0.22) inset;
    -webkit-box-shadow: 7px 10px 17px -7px rgba(0, 0, 0, 0.22) inset;
    -moz-box-shadow: 7px 10px 17px -7px rgba(0, 0, 0, 0.22) inset;
    :hover {
      background-color: #00e4d8;
    }
  }
  button:focus {
    background-color: #8ee2d5;
    border: 0px;
  }
  @media (min-width: 1150px) {
    margin-top: 2%;
  }
`;

const UserInput = (props) => {
  return (
    <StyledInput>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      ></input>
      <p className="validation">{props.validation}</p>
      <button type="submit" onClick={props.onClick} onFocus={props.onFocus}>
        {props.buttonText}
      </button>
    </StyledInput>
  );
};

export default UserInput;
