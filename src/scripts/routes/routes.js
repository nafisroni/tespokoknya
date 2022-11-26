import restaurant from '../views/pages/restaurant';
import detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
    '/': restaurant, // default page
    '/restaurant': restaurant,
    // '/favorite': Favorite,
    '/detail/:id': detail,
    '/like': Like,
  };

export default routes;