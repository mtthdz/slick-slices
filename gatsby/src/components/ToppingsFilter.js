import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

function countPizzasInToppings(pizzas) {
  // return the pizzas with counts
  // flat will make an array of arrays
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      // if it is, increment; else, create new entry in acc and set to 1
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        existingTopping.count += 1;
      }
      acc[topping.id] = {
        id: topping.id,
        name: topping.name,
        count: 1,
      };
      return acc;
    }, {});

  // sort toppings based on their count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

export default function ToppingsFilter() {
  // 1. get a list of all toppings
  // 2. get a list of all pizzas with their toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  // countPizzasInToppings fn call
  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  console.log(toppingsWithCounts);
  // count how many pizzas are in each toppings
  // loop over list of toppings to display toppings and amount of pizzas for each

  return (
    <div>
      <p>Toppings </p>
    </div>
  );
}
