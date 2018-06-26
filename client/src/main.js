import Vue from 'vue';
import ResonantGeo from 'resonantgeo/src';
import { Session } from 'resonantgeo/src/rest';
import { API_URL } from './constants';
import eventstream from './utils/eventstream';
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App.vue';
import router from './router';
import store from './store';
import girder from './girder';

Vue.config.productionTip = false;
Vue.use(ResonantGeo);

eventstream.open();
girder.rest = new Session({ apiRoot: API_URL });
girder.rest.$refresh().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
});
