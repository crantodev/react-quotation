import React, { useState } from "react";
import styled from "@emotion/styled";

import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = useState({
    result: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const { result, data } = summary;

  return (
    <Container>
      <Header title="Cotizador de seguros" />

      <FormContainer>
        <Form setSummary={setSummary} setLoading={setLoading} />

        <Summary data={data} />

        {loading ? <Spinner /> : <Result result={result} />}
      </FormContainer>
    </Container>
  );
}

export default App;
