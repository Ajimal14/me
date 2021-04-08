import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  .toggle-container {
    width: 70px;
    background-color: #c4c4c475;
    cursor: pointer;
    user-select: none;
    border-radius: 20px;
    padding: 2px;
    height: 30px;
    position: relative;
    .material-icons {
      font-size: 15px;
    }
  }

  .dialog-button {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
    padding: 8px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 30px;
    min-width: unset;
    border-radius: 30px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 34px;
    transition: all 0.3s ease;
  }

  .disabled {
    background-color: #002b49;
    left: 2px;
    .material-icons {
      color: #ffc40c;
    }
  }

  @media only screen and (max-width: 480px) {
    .toggle-container {
      width: 50px;
      padding: 2px;
      height: 20px;
      position: relative;
      .material-icons {
        font-size: 15px;
      }
    }

    .dialog-button {
      padding: 0;
      width: 20px;
      height: 20px;
      left: 30px;
    }
    .disabled {
      left: 2px;
    }
  }
`;
const Toggle = ({ theme, changeTheme }) => {
  const onChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };
  return (
    <Container>
      <div className="toggle-container" onClick={onChange}>
        <div className={`dialog-button ${theme === "light" ? "" : "disabled"}`}>
          {theme === "light" ? (
            <span className="material-icons">brightness_5</span>
          ) : (
            <span className="material-icons">nights_stay</span>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Toggle;
