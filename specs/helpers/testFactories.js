import LikeButtonInitiator from '../../src/scripts/utils/likebutton-initiator';
import FavoriteRestaurantDB from '../../src/scripts/data/fav-restaurant';
 
const createLikeButtonPresenterWithRestaurant = async () => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
            FavoriteRestaurant: FavoriteRestaurantDB,
            restaurant: {
              restaurant: {
              id:1,
              },
            },
  });
};
// eslint import/prefer-default-export
export {createLikeButtonPresenterWithRestaurant};