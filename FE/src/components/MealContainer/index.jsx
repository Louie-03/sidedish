import React from "react";
import Loader from "components/Loader";
import Carousel from "components/Carousel";
import { Container, Header } from "./style";

const MealContainer = ({ meals }) => {
  console.log("meals :>> ", meals);
  const { mealHeader, mealCards } = meals;
  return (
    <Container>
      <Header>{mealHeader}</Header>
      {mealCards.length ? <Carousel cards={mealCards} /> : <Loader />}
    </Container>
  );
};

export default MealContainer;
