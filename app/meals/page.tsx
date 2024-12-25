// import Link from "next/link";
// import React from "react";
// import classes from "./page.module.css"
// import MealsGrid from "@/components/meals/meals-grid";

// function meals() {
//   return (
//     <>
//       <header className={classes.header}>
//         <h1>
//           Tasty meals created ,{" "}
//           <span className={classes.highlight}>by you</span>
//         </h1>
//         <p>choose your favourite recipe & cook yourself . Enjoy!!!</p>
     
//         <div className={classes.cta}>
//         <Link href="/meals/share">
//           Share your favourite Recipe
//           </Link>
//           </div>
//       </header>
//       <main className={classes . main}>
//         <MealsGrid meals ={[]}></MealsGrid>
//       </main>
//     </>
//   );
// }

// export default meals;




import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";

// Mock meal data
const fetchMeals = async () => {
  return [
    {
      id: "1",
      title: "Spaghetti Carbonara",
      slug: "spaghetti-carbonara",
      image: "/images/meal-one.jpg",
      summary: "A classic Italian pasta dish with creamy sauce.",
      creator: "Chef Luigi",
    },
    {
      id: "2",
      title: "Sushi Platter",
      slug: "sushi-platter",
      image: "/images/meal-two.jpg",
      summary: "Assorted sushi rolls with fresh fish.",
      creator: "Chef Saito",
    },
  ];
};

export default async function MealsPage() {
  const meals = await fetchMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Tasty meals created, <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favourite recipe & cook yourself. Enjoy!!!</p>

        <div className={classes.cta}>
          <Link href="/meals/share">Share your favourite Recipe</Link>
        </div>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

