import React from "react";
import styled from "styled-components/macro";
import FullScreen from "layouts/FullScreen";
import Background from "layouts/Background";
import NavBar from "components/NavBar";
import SeperateBar from "components/SeperateBar";

const Attractions = () => {
  return (
    <FullScreen>
      <Background>
        <NavBar />
        <SeperateBar />
      </Background>
    </FullScreen>
  );
};

const Container = styled.section`
  /* height: 100vh; */
`;

const Wrap = styled.div`
  background-color: red;
  /* height: 100%; */
`;

export default Attractions;
