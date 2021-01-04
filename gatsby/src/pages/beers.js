import React from 'react';
import { graphql } from 'gatsby';

export default function BeersPage({ data }) {
  return (
    <>
      <h2 className="center">
        We have ${data.beers.nodes.length} Beers Available. Dine in Only!
      </h2>
      <div>
        {data.beers.nodes.map((beer) => {
          console.log(beer);
          return (
            <div key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
            </div>
          );
        })}
      </div>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
