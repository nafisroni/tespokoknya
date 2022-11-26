import CONFIG from '../scripts/globals/config';

const restaurantItemTemp = (restaurant) => `
        <div class="col">
        <a href="#/detail/${restaurant.id}" tabindex="0">
            <div class="card" >
                <div class="card-img">
                    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_M + restaurant.pictureId}" alt="restoran ${restaurant.name}">
                </div>
                <div class="description">
                    <span class="city">Kota ${restaurant.city}</span>
                    <h3 class="title">${restaurant.name}</h3>
                    <p class="subtitle">${restaurant.description}</p>
                </div>
            </div>
            </a>
        </div>`;


const creatRestaurantDetailTemp = (restaurant) =>`
    <h2 class="restaurant_title">${restaurant.name}</h2>
    <div>
        <img class="img-res2" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL_M}${restaurant.pictureId}" crossorigin="anonymous"/>
    </div>
    <div class="detailRestaurant">
        <h3 class="detail_information">Information :</h3>
        <h4 class="detail_description">Deskripsi</h4>
            <p>${restaurant.description}</p>
        <h4 class="detail_location">Kota / Daerah</h4>
            <p>${restaurant.city}</p>
        <h4 class="detail_rating">Rating</h4>
            <p>${restaurant.rating}</p>
        <h4 class="detail_address">Lokasi</h4>
            <p>${restaurant.address}</p>
        <h4 class="detail_category">Kategori</h4>
            <p>${restaurant.categories.map((kategori) => `${kategori.name}`).join(' ')}</p>
        <h3 class="detail_menu">Menu</h3>
            <h4>Makanan</h4>
            <p>${restaurant.menus.foods.map((food) => `${food.name}`)} </p>
            <h4>Minuman</h4>
            <p>${restaurant.menus.drinks.map((drink) => `${drink.name}`)} </p>
        <h4 class="reviews">Reviews</h4>
        <div class ="detail_reviews">
            ${restaurant.customerReviews.map((review) => `
            <div class="hasil_reviews">
                <div><p>${review.name}</p></div>
                <div><p>${review.review}</p></div>
                <div><p>${review.date}</p></div>
            </div>
            `).join('')}
        </div>
            <br>
    </div>
`;

const createLikeButtonTempl = () =>`
  <button aria-label="like this Restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;
const createLikedButtonTempl = () => `
  <button aria-label="unlike this Restaurant" id="likeButton" class="like">
  <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
restaurantItemTemp,
creatRestaurantDetailTemp,
createLikeButtonTempl,
createLikedButtonTempl,
};