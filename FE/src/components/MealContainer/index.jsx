import React from "react";
import Carousel from "components/Carousel";
import { Container, Header } from "./style";

const MealContainer = ({ containerInfo }) => {
  const { mealHeader, mealCards } = containerInfo;
  return (
    <Container>
      <Header>{mealHeader}</Header>
      <Carousel cards={mealCards} />
    </Container>
  );
};

export default MealContainer;
