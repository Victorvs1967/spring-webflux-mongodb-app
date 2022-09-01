const carsList = document.querySelector('.cars'),
      linkData = document.querySelector('.data');

const BASE_URL = 'http://localhost:8888/api/v1/cars';

const getData = () => fetch(BASE_URL)
  .then(res => res.json())
  .then(result => result);
  
linkData.addEventListener('click', () => {
  carsList.innerHTML = '';
  getData()
    .then(cars => cars.forEach(car => {
      carsList.insertAdjacentHTML('beforeend', `
        <li class="car">
          <span>${ car.brand }</span><b><span>${ car.model }</span></b>
        </li>
      `);
    }));
  }
);
