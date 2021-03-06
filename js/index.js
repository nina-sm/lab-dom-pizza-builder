// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}


  // Iteration 1: set the visibility of `<section class="mushroom">`

  function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(oneMushroom => {
      if (state.mushrooms) {
        oneMushroom.style.visibility = 'visible';
      } else {
        oneMushroom.style.visibility = 'hidden';
      }
    });
  } 


  // Iteration 1: set the visibility of `<section class="green-pepper">`


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
 
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  });
  
} 
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
 
  if (state.glutenFreeCrust) {
    console.log(document.querySelector(".crust").classList);
    document.querySelector(".crust").classList.add ("crust-gluten-free");
  } else { 
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }

} 
 

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  document.querySelectorAll('.btn:active').forEach(activeButton => {
    if (state.activeButton) {
      activeButton.style.visibility = 'visible';
    } else {
      activeButton.style.visibility = 'hidden';
    }
  });

}

function renderPrice() {

  document.querySelector('.price ul').innerHTML = "";
  let newText = "";
  let sum = basePrice;
  for (const element in state) {
    if (state[element]) {
      sum += ingredients[element].price;
      newText += `<li>${ingredients[element].price} ${ingredients[element].name} </li>`;
    }
  
  }

  document.querySelector("strong").innerText = `$${sum}`;
  document.querySelector(".price ul").innerHTML = newText;

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});