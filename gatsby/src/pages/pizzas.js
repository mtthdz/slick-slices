import React from 'react';
import { graphql } from 'gatsby';
import ToppingsFilter from '../components/ToppingsFilter';
import PizzaList from '../components/PizzaList';

// pageContext is how we access context within toppings fn in gatsby-node
export default function PizzasPage({ data, pageContext }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <ToppingsFilter activeTopping={pageContext.topping} />
      <PizzaList pizzas={pizzas} />
    </>
  );
}
// page query
// gatsby will know that you're calling graphql here and run it in and store in the props param
// note the query looks like how its written in graphiql
// we can't use regex to filter as the code below is graphql, not js,
// so it won't interpolate what's happening between the quotes of a regex
// a way around this is to do the regex within the gatsby-node file under context (under forEach)
export const query = graphql`
  query PizzaQuery($topping: [String]) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
