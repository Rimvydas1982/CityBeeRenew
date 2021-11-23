// Variables
const VECHILES_ENDPOINT = 'https://city-bee-sim.herokuapp.com/api/vechiles';
// -- DOM elements
const postVechileFormElement = document.querySelector('#postVechile');
const messageAfterPostElement = document.querySelector('#addNewVechileMessage');
const vechilesSelect = document.querySelector('#vechiles_select');

// -- logic
let carIdForPostMethod;

// Funtions
const postVechile = (e) => {
  e.preventDefault();

  let vechile = {
    model_id: e.target.vechiles_select.value,
    number_plate: e.target.addNumberPlate.value,
    country_location: e.target.addCountryLocation.value,
  };

  return fetch(VECHILES_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vechile),
  })
    .then((res) => res.json())
    .then((data) => {
      messageAfterPostElement.innerText = data.message;

      postVechileFormElement.reset();
    })
    .catch((err) => console.log(err));
};

const addDataToSelectElement = () => {
  return fetch(VECHILES_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      let selectOptions = data.reduce((total, currentItem) => {
        total += `<option value=${currentItem._id}>${currentItem.model}</option>`;

        return total;
      }, '');

      // PUT (update) method select
      vechilesSelect.innerHTML = selectOptions;

      //adding id value to carId
      if (data.length > 0) {
        carIdForPostMethod = data[0].model_id;
      } else {
        carIdForPostMethod = undefined;
      }
    });
};
const changePostCarId = (e) => (carIdForPostMethod = e.target.value);

// Events
postVechileFormElement.addEventListener('submit', postVechile);
document.addEventListener('DOMContentLoaded', addDataToSelectElement);
vechilesSelect.addEventListener('change', changePostCarId);
