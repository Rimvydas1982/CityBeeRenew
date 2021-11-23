const VECHILES_ENDPOINT = 'https://city-bee-sim.herokuapp.com/api/vechiles/';
//Variables

const vechilesList = document.querySelector('#vechilesList');
const vechilesCityBeeBtn = document.querySelector('#vechilesCityBee');
const vechilesLtBtn = document.querySelector('#vechilesLt');
const vechilesLvBtn = document.querySelector('#vechilesLv');
const vechilesEeBtn = document.querySelector('#vechilesEe');
//Functions
const getAllVechiles = () => {
  return fetch(VECHILES_ENDPOINT)
    .then((response) => response.json())
    .then((result) => {
      let cars = result;
      let output = '';

      for (let car of cars) {
        output += `
          <div>
          <h3>Car model:${car.model} and our special hour rent price: ${(
          car.hour_price +
          car.hour_price * 0.21
        ).toFixed(2)} € (With PVM)</h3>
        
          <p>This model number plates: ${car.vechiles.map(
            (item) => item.number_plate
          )}</p>
          <p>This model locations: ${car.vechiles.map(
            (item) => item.country_location
          )}</p>
           </div>
  `;
      }
      vechilesList.innerHTML = output;
    });
};

const getVechilesLt = () => {
  return fetch(VECHILES_ENDPOINT + 'LT')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      vechilesList.innerHTML = data.reduce((total, currentItem) => {
        total += `    
          <div>
            <h5>Model ID: ${currentItem.model_id}</h5>
            <h4>Vechile Number Plate: ${currentItem.number_plate}</h4>
          </div>
              `;
        return total;
      }, '');
    });
};
const getVechilesLv = () => {
  return fetch(VECHILES_ENDPOINT + 'LV')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      vechilesList.innerHTML = data.reduce((total, currentItem) => {
        total += `
        <div>
        <h5>Model ID: ${currentItem.model_id}</h5>
        <h4>Vechile Number Plate: ${currentItem.number_plate}</h4>
      </div>
                `;
        return total;
      }, '');
    });
};
const getVechilesEe = () => {
  return fetch(VECHILES_ENDPOINT + 'EE')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      vechilesList.innerHTML = data.reduce((total, currentItem) => {
        total += `
        <div>
        <h5>Model ID: ${currentItem.model_id}</h5>
        <h4>Vechile Number Plate: ${currentItem.number_plate}</h4>
      </div>
                `;
        return total;
      }, '');
    });
};
//Events
vechilesCityBeeBtn.addEventListener('click', getAllVechiles);
vechilesLtBtn.addEventListener('click', getVechilesLt);
vechilesLvBtn.addEventListener('click', getVechilesLv);
vechilesEeBtn.addEventListener('click', getVechilesEe);
