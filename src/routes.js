import Vue from 'vue';
import VueRouter from 'vue-router';
import News from './components/News.vue';
import AccountSettings from './components/AccountSettings.vue';
import BeepPoints from './components/BeepPoints.vue';
import Referrals from './components/Referrals.vue';
import Promotions from './components/Promotions.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: News },
  { path: '/account', component: AccountSettings },
  { path: '/beeppoints', component: BeepPoints },
  { path: '/referrals', component: Referrals },
  { path: '/promotions', component: Promotions },
];

export default routes;
