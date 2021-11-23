const MODELS_ENDPOINT = 'https://city-bee-sim.herokuapp.com/api/models';
const VECHILES_ENDPOINT = 'https://city-bee-sim.herokuapp.com/api/vechiles/';
//Variables
const allModels = document.querySelector('#all_models');
const modelsAndVechiles = document.querySelector('#modelsAndVechiles');
//Functions
const showAllModels = () => {
  return fetch(MODELS_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      allModels.innerHTML = data.reduce((total, currentitem) => {
        total += `
        <div class="row table table-dark table-responsive">
        <div class="col-sm-10">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Model: ${currentitem.model}</h5>
              <p class="card-text">Price: ${currentitem.hour_price} per hour</p>
            </div>
          </div>
        </div>
        </div>
        `;
        return total;
      }, '');
    });
};

const showModelsWithVechiles = () => {
  return fetch(VECHILES_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      modelsAndVechiles.innerHTML = data.reduce((total, currentitem) => {
        total += `
        <div class="row table table-dark">
        <div class="col-sm-10">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Model: ${currentitem.model}</h5>
              <p class="card-text">Amouth of Vechiles for this model: ${currentitem.vechiles.length}</p>
            </div>
          </div>
        </div>
        </div>
        `;
        return total;
      }, '');
    });
};

//Events
document.addEventListener('DOMContentLoaded', showAllModels);
document.addEventListener('DOMContentLoaded', showModelsWithVechiles);
