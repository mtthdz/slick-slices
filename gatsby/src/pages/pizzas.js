import React from 'react';
import { graphql } from 'gatsby';

export default function PizzasPage({ data }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <p>Hey! There are {pizzas.length} pizzas!</p>
    </>
  );
}
// page query
// gatsby will know that you're calling graphql here and run it in and store in the props param
// note the query looks like how its written in graphiql
export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
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
