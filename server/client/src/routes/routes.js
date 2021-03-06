import {
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  HOME_ROUTE,
  STOCK_ROUTE,
  PROFILE_ROUTE
} from '../utils/consts';
import SignPage from '../pages/SignPage/SignPage';
import HomePage from '../pages/HomePage/HomePage';
import StockPage from '../pages/StockPage/StockPage';
import Profile from '../pages/Profile/Profile';


// export const authRoutes = [
//   {
//     path: SOME_ROUTE,
//     Component: SomePage,
//   },
// ];

export const publicRoutes = [
  {
    path: SIGNIN_ROUTE,
    Component: SignPage,
  },
  {
    path: SIGNUP_ROUTE,
    Component: SignPage,
  },
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: STOCK_ROUTE,
    Component: StockPage,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
  // {
  //   path: `${ACTION_ROUTE}/:id`,
  //   Component: Toy,
  // },
];
