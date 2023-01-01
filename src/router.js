import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';

import Contact from './pages/requests/Contact.vue';
import Requests from './pages/requests/Requests.vue';

import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: Contact }],
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: Requests },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
