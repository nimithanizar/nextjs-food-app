// import React from "react";
// import MealItem from "./meal-item";
// import classes from "./meals-grid.module.css"

// function MealsGrid({ meals }: any) {
//   return (
//     <ul className={classes.meals}>
//       {meals.map((meal: any) => (
//         <li key={meal.id}>
//           <MealItem {...meal}></MealItem>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default MealsGrid;


import React from "react";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

function MealsGrid({ meals }: { meals: any[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;

