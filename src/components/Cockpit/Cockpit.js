import React from 'react';
import styled from 'styled-components';
import img from '../../assets/55452.jpg'; // with import

const StyledCockpit = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  .image {
    width: 100%;
    position: relative;
  }
  .nadpis {
    position: absolute;
    top: -10%;
    left: 5%;
    font-family: 'Yusei Magic', sans-serif;
    font-size: 10vw;
    color: steelblue;
  }
  .citat {
    margin-top: 0;
    font-size: 14px;
    text-align: center;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
  }
  @media (min-width: 600px) {
    .image {
      width: 50%;
    }
    .nadpis {
      font-size: 5vw;
      top: -11%;
      left: 29%;
    }
    .citat {
      font-size: 16px;
    }
  }
  @media (min-width: 1150px) {
    .image {
      width: 40%;
    }
    .nadpis {
      font-size: 4vw;
      left: 33%;
    }
  }
`;

const Cockpit = () => {
  return (
    <StyledCockpit>
      <img className="image" src={img} alt="obraz" />

      <p className="nadpis">Moje úkoly</p>
      <p className="citat">„Prokrastinace je duše vzpouzející se uvěznění.“</p>
    </StyledCockpit>
  );
};
export default Cockpit;
