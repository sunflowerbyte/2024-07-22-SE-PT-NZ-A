
// Wrapping functions with Promises
function prepareBase() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Made the base");
        resolve();
      }, 1000);
    });
  }
  
  function addSauceAndCheese() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Added the sauce and cheese");
        resolve();
      }, 1000);
    });
  }
  
  const addToppings = function() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Added the pizza toppings");
        resolve();
      }, 1000);
    });
  };
  
  const cookPizza = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Cooked the pizza");
        resolve();
      }, 1000);
    });
  };
  
  const pizzaReady = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Pizza is ready");
        resolve();
      }, 1000);
    });
  };
  
  // Chain the Promises
  function startPizzaPreparation() {
    console.log("Started preparing pizza...");
    prepareBase()
      .then(addSauceAndCheese)
      .then(addToppings)
      .then(cookPizza)
      .then(pizzaReady);
  }
  
  startPizzaPreparation();
    
  