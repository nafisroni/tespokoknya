import restaurantSource from "../../data/restaurant-source";
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/likebutton-initiator'
import {creatRestaurantDetailTemp} from '../../../templates/template-creator';
import FavoriteRestaurantDB from "../../data/fav-restaurant";

const Detail = {
    async render() {
      return `
      <div id="restaurant" class="restaurant" tabindex="0"></div>
      <div id="likeButtonContainer" aria-label="like this Restaurant"></div>
      `;
    },
   
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurantContainer = document.querySelector('#restaurant');

          const restaurant = await restaurantSource.detailRestaurants(url.id);
          restaurantContainer.innerHTML += creatRestaurantDetailTemp(restaurant.restaurant);
          await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            FavoriteRestaurant: FavoriteRestaurantDB,
            restaurant,
          });
      },
  };
            // : {
            //     id: restaurant.id,
            //     name: restaurant.name,
            //     city: restaurant.city,
            //     picture: restaurant.pictureId,
            //     description: restaurant.description,
            //     rating: restaurant.rating,
            //     address: restaurant.address,
            //   },
  export default Detail;