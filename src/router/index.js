import { createRouter, createWebHistory } from 'vue-router';
import HeaderPage from '../views/HeaderPage';

const routes = [
  {
    path: 'HeaderPage',
    name: 'HeaderPage',
    component: HeaderPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes,
});

export default router;
