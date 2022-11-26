import FavoriteRestaurantDB from '../../data/fav-restaurant';
import { restaurantItemTemp } from '../../../templates/template-creator';
    
    const Like = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Restaurant Yang Kamu Sukai</h2>
            <div id="restaurant" class="restaurant_like">
            </div>
        </div>
        `;  
    },
    
    async afterRender() {
        const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
        const restaurantContainer = document.querySelector('#restaurant');
        
        restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += restaurantItemTemp(restaurant);
        });
    },
    };
    
    export default Like;