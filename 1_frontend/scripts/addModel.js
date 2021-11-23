// Variables
const MODELS_ENDPOINT = 'https://city-bee-sim.herokuapp.com/api/models';
// -- DOM elements
const postModelFormElement = document.querySelector('#postModel');
const messageAfterPostElement = document.querySelector('#addNewModelMessage');

// Funtions
const postModel = (e) => {
  e.preventDefault();

  let model = {
    model: e.target.addNewModel.value,
    hour_price: +e.target.addPrice.value,
  };

  return fetch(MODELS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(model),
  })
    .then((res) => res.json())
    .then((data) => {
      messageAfterPostElement.innerText = data.message;

      postModelFormElement.reset();
    })
    .catch((err) => console.log(err));
};

// Events
postModelFormElement.addEventListener('submit', postModel);
