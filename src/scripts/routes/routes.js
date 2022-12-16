import RestoList from '../views/pages/resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': RestoList, // default page
  '/restorants': RestoList,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
