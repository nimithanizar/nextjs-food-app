import Image from "next/image";
import classes from "../page.module.css";


type MealData = {
  [key: string]: {
    title: string;
    image: string;
    summary: string;
    creator: string;
  };
};


const fetchMealData = async (): Promise<MealData> => {
  return {
    "spaghetti-carbonara": {
      title: "Spaghetti Carbonara",
      image: "/images/meal-one.jpg",
      summary: "A classic Italian pasta dish with creamy sauce.",
      creator: "Chef Luigi",
    },
    "sushi-platter": {
      title: "Sushi Platter",
      image: "/images/meal-two.jpg",
      summary: "Assorted sushi rolls with fresh fish.",
      creator: "Chef Saito",
    },
  };
};

// Pre-generate paths
export async function generateStaticParams() {
  const meals = await fetchMealData();
  return Object.keys(meals).map((slug) => ({ slug }));
}

export default async function MealDetailPage({ params }: { params: { slug: string } }) {
  const mealData = await fetchMealData();
  const meal = mealData[params.slug as keyof typeof mealData]; 

  if (!meal) {
    return <p>Meal not found!</p>;
  }

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <h1>{meal.title}</h1>
        <p>by {meal.creator}</p>
      </header>
      <div className={classes.content}>
        <p>{meal.summary}</p>
      </div>
    </article>
  );
}
