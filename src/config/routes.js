import { createRouter, createWebHistory } from 'vue-router';

// import routes from './config/routes';
import PageHome from '@/views/pages/PageHome.vue';
import PageThread from '@/views/pages/PageThread.vue';
import PageThreadCreate from '@/views/pages/PageThreadCreate.vue';
import PageThreadEdit from '@/views/pages/PageThreadEdit.vue';
import NotFound from '@/views/pages/NotFound.vue';
import PageForum from '@/views/pages/PageForum.vue';
import PageCategory from '@/views/pages/PageCategory.vue';
import PageUser from '@/views/pages/PageUser.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome,
  },
  {
    path: '/category/:id',
    name: 'category',
    component: PageCategory,
    props: true,
  },
  {
    path: '/forum/:id',
    name: 'forum',
    component: PageForum,
    props: true,
  },
  {
    path: '/forum/:forumId/thread/create',
    name: 'createThread',
    component: PageThreadCreate,
    props: true,
  },
  {
    path: '/thread/:id/edit',
    name: 'editThread',
    component: PageThreadEdit,
    props: true,
  },
  {
    path: '/thread/:id',
    name: 'thread',
    component: PageThread,
    props: true,
    /* to do sourceData -> store
        beforeEnter (to, from, next) {
          const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);

          if (threadExists) {
            return next()
          } else {
            next({ name: 'notFound', params: { pathMatch: to.path.substring(1).split( separator: '/' ), //breaks active path into an array
            // preserving existing query and hash
              query: to.query,
              hash: to.hash,
            }})
          }
        }
        */
  },
  {
    path: '/user/me',
    name: 'me',
    component: PageUser,
    props: true,
    meta: {
      toTop: true,
      smoothScroll: true,
    },
  },
  {
    path: '/user/me/edit',
    name: 'meEdit',
    component: PageUser,
    props: {
      edit: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior (to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = 'smooth';
    return scroll;
  },
});
