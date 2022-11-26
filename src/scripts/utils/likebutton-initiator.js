// import FavoriteRestaurantDB from '../data/fav-restaurant';
import {createLikeButtonTempl,createLikedButtonTempl} from '../../templates/template-creator';

const LikeButtonInitiator = {
    async init({ likeButtonContainer, FavoriteRestaurant, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = FavoriteRestaurant;
    this._restaurant = restaurant.restaurant;

    await this._renderButton();
    },

    async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
        this._renderLiked();
    } else {
        this._renderLike();
    }
    },

    async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
    },
        
    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTempl();
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
        await this._favoriteRestaurants.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },
    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTempl();
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
        await this._favoriteRestaurants.deleteRestaurants(this._restaurant.id);
            console.log('unlike');
            this._renderButton();
        });
    },
};

export default LikeButtonInitiator;