import LikeButtonInitiator from '../src/scripts/utils/likebutton-initiator';
import FavoriteRestaurantDB from '../src/scripts/data/fav-restaurant';

describe('Unliking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likedButtonContainer"></div>';
      };
      beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantDB.putRestaurant({ id: 1 });
      });
      afterEach(async () => {
        await FavoriteRestaurantDB.deleteRestaurants(1);
      });
    
      it('should display unlike widget when the restaurant has been liked', async () => {
        await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likedButtonContainer'),
        FavoriteRestaurant: FavoriteRestaurantDB,
        restaurant: {   
                restaurant: {
                id:1,
                },
            },
        });
     
        expect(document.querySelector('[aria-label="unlike this Restaurant"]'))
          .toBeTruthy();
      });
     
      it('should not display like widget when the restaurant has been liked', async () => {
        await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likedButtonContainer'),
        FavoriteRestaurant: FavoriteRestaurantDB,
        restaurant: {   
            restaurant: {
            id:1,
            },
            },
        });
     
        expect(document.querySelector('[aria-label="like this Restaurant"]'))
          .toBeFalsy();
      });
    it('should not throw error if the unliked restaurant is not in the list', async () => {
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likedButtonContainer'),
        FavoriteRestaurant: FavoriteRestaurantDB,
        restaurant: {   
            restaurant: {
            id:1,
            },
          },
      });
      // hapus dulu film dari daftar restaurant yang disukai
      await FavoriteRestaurantDB.deleteRestaurants(1);
      document.querySelector('[aria-label="unlike this Restaurant"]').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurantDB.getAllRestaurants()).toEqual([]);
    });
  });