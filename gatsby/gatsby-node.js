import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. get a template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // 2. query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // 3. loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

async function turnToppingsIntoPages(params) {
  // 1. get a template for this page
  const toppingTemplate = path.resolve('./src/templates/Topping.js');
  // 2. query all pizzas with that toppings
  // 3. loop over each topping and create a page for that toppings
}

export async function createPages(params) {
  // create pages dynamically
  // we can use a .all array to run all our await fn's concurrently
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params)
  ]);
}
