import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const MessageContent = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const ResultContent = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ result }) => {
  return result === 0 ? (
    <MessageContent>Elige marca, año y plan</MessageContent>
  ) : (
    <ResultContainer>
      <TransitionGroup component="span" className="result">
        <CSSTransition
          classNames="result"
          key={result}
          timeout={{ enter: 500, exit: 500 }}
        >
          <ResultContent>El total es $<span>{result}</span></ResultContent>
        </CSSTransition>
      </TransitionGroup>
    </ResultContainer>
  );
};

Result.propTypes = {
  result: PropTypes.number.isRequired
}

export default Result;
