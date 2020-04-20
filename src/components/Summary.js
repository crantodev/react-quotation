import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { capitilize } from "../helpers";

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {
  const { brand, year, plan } = data;
  if (brand === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <SummaryContainer>
      <h2>Summary</h2>
      <ul>
        <li>Marca: {capitilize(brand)}</li>
        <li>Año: {year}</li>
        <li>Plan: {capitilize(plan)}</li>
      </ul>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  data: PropTypes.object.isRequired
}

export default Summary;
