import React, { useCallback, useEffect, useState } from "react";
import BestMealContainer from "components/BestMealContainer";
import MealContainer from "components/MealContainer";
import { Container, MoreBtn } from "./style";
import { useAxios } from "hooks/useAxios";

const CATEGORY_TYPE = [
  { id: 100, title: "든든한 메인 요리", apiParams: "main" },
  { id: 200, title: "뜨끈한 국물요리", apiParams: "soup" },
  { id: 300, title: "정갈한 밑반찬", apiParams: "side" },
];

const Main = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const { response: meals } = useAxios({
    method: "get",
    url: `/api/products`,
    params: { meal: CATEGORY_TYPE[currIndex].apiParams },
  });

  const [mealsArr, setMealsArr] = useState([
    {
      mealHeader: CATEGORY_TYPE[currIndex].title,
      mealCards: meals,
    },
  ]);
  console.log("mealsArr :>> ", mealsArr);
  console.log("meals", meals);

  const addCardHandler = () => {
    setCurrIndex((prev) => prev + 1);
    setMealsArr((prev) => [
      ...prev,
      {
        mealHeader: CATEGORY_TYPE[currIndex].title,
        mealCards: meals,
      },
    ]);
    console.log(mealsArr);
  };

  return (
    <Container>
      <BestMealContainer />
      {mealsArr.map((meals) => (
        <MealContainer key={meals.mealHeader} meals={meals} />
      ))}

      {true ? <MoreBtn onClick={addCardHandler}>더 보기</MoreBtn> : <></>}
    </Container>
  );
};

export default Main;
