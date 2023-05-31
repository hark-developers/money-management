import { Route } from '../types/route';
import authRoute from './auth/auth.routes';
import emiRoute from './emi/emi.routes';
import incomeRoute from './income/income.routes';
import pingRoute from './ping/ping.routes';
import userRoute from './users/users.routes';

const allRoutes: Route[] = [
    ...pingRoute,
    ...userRoute,
    ...authRoute,
    ...incomeRoute,
    ...emiRoute,
]

export default allRoutes;