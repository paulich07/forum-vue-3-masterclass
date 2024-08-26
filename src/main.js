import { createApp } from 'vue';
import App from './App.vue';
import router from '@/config/routes.js';
import store from '@/config/store.js';
import ClickOutsideDirective from './plugins/ClickOutsideDirective'; // v-click-outside="()=> openThing = false"

// Firebase
// import { initializeApp } from 'firebase/compat/app';
// import 'firebase/compat/firestore'
// import firebaseConfig from '@/config/firebase.js'
//
// initializeApp(firebaseConfig);

// App initialization
const app = createApp(App);

app.use(router);
app.use(store);
app.use(ClickOutsideDirective);
app.mount('#app');
