import API_ENDPOINT from '../globals/api-endpoint';

class DataRestaurantSource {
    static async restaurantSourceList() {
      const response = await fetch(API_ENDPOINT.RESTAURANT);
      const responseJson = await response.json();
      return responseJson.restaurants;
    }

    static async detailRestaurants(id) {
        const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
        return response.json();
    }
}
    export default DataRestaurantSource;