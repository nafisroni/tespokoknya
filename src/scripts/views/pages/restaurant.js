import RestaurantSource from '../../data/restaurant-source';
import { restaurantItemTemp } from '../../../templates/template-creator';

const restaurantDef = {
    async render() {
        return `
        <div class="container">
            <h2 class="text-heading">Explore Restaurant</h2>
            <div id="loading">
            </div>
            <div id="restaurants" class="restaurants" tabindex="0">
            </div>
        </div>`;
    },
    async afterRender() {
        const restaurants = await RestaurantSource.restaurantSourceList();
        const restaurantContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += restaurantItemTemp(restaurant);
        });
    },
};

export default restaurantDef;