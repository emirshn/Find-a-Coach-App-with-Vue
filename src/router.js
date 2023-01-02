import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';

import Contact from './pages/requests/Contact.vue';
import Requests from './pages/requests/Requests.vue';

import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';

import store from './store/index.js';

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
    {
      path: '/register',
      component: CoachRegister,
      meta: { reguiresAuth: true },
    },
    { path: '/requests', component: Requests, meta: { reguiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { reguiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.reguiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.reguiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
