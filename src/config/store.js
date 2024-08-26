import { createStore } from 'vuex';
// import firebase from './firebase';
// import 'firebase/compat/firestore';
import sourceData from '@/data';
import { findById, upsert } from '@/helpers/index'

export default createStore({
  state: {
    ...sourceData,
    authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1',
  },
  /*
        categories: [],
        forums: [],
        threads: [],
        posts: [],
        users: [],

    actions: {

        createPost (context, post) {
            context.commit('setPost', { post }) // set the post
            context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId}) // append post to thread
        }
    },
    mutations: {
        setPost (state, { post }) {
            state.posts.push(post)
        },
        setThread (state, { thread }) {
            state.threads.push(thread)
        },
        appendPostToThread (state, {postId, threadId}) {
            const thread = state.thread.find(thread => thread.id === threadId)
            thread.post.push(postId)
        },
        fetchThread ({ state, commit }, { id }) {
            console.log("Broviamoci")
            return new Promise((res)=>{
                firebase.firestore().collection('threads').doc(id).onSnapshot(doc => {
                    const thread = {...doc.data(), id: doc.id}
                    commit('setThread', { thread })
                    resolve(thread)
                })
            })
        },
        fetchUser ({ state, commit }, { id }) {
            console.log("Broviamoci utenti")
            return new Promise((res)=>{
                firebase.firestore().collection('users').doc(id).onSnapshot(doc => {
                    const thread = {...doc.data(), id: doc.id}
                    commit('setUser', { user })
                    resolve(user)
                })
            })
        },
        fetchPosts ({ state, commit }, { id }) {
            console.log("Broviamoci posts")
            return new Promise((res)=>{
                firebase.firestore().collection('posts').doc(id).onSnapshot(doc => {
                    const thread = {...doc.data(), id: doc.id}
                    commit('setPosts', { posts })
                    resolve(post)
                })
            })
        },
    }
    */
  getters: {
    authUser: (state, getters) => {
      return getters.user(state.authId)
    },
    user: state => {
      return (id) => {
        const user = findById(state.users, id);

        if (!user) { return null; }

        return {
          ...user,
          get posts () {
            return state.posts.filter(post => post.userId === user.id)
          },
          get threads () {
            return state.threads.filter(thread => thread.userId === user.id) // è giusto?
          },
          get postsCount () {
            return this.posts.length;
          },
          get threadsCount () {
            return this.threads.length;
          },
        }
      }
    },
    thread: state => {
      return (id) => {
        const thread = findById(state.threads, id)
        return {
          ...thread,
          get author () {
            return findById(state.users, thread.userId)
          },
          get repliesCount () {
            return thread.posts.length - 1
          },
          get contributorsCount () {
            return thread.contributors.length || 0
          }
        }
      }
    },
  },
  actions: {
    createPost ({ commit, state }, post) {
      post.id = 'gggg' + Math.random();
      post.userId = state.authId;
      post.publishedAt = Math.floor(Date.now() / 1000);
      // add post to posts list
      commit('setPost', { post });
      // appends post to thread
      commit('appendPostToThread', { childId: post.id, parentId: post.threadId });
      commit('appendContributorToThread', { childId: state.authd, parentId: post.threadId });
    },
    async createThread ({ commit, state, dispatch }, { title, text, forumId }) {
      const id = 'gggg' + Math.random();
      const userId = state.authId;
      const publishedAt = Math.floor(Date.now() / 1000);
      const thread = { forumId, title, id, publishedAt, userId };
      commit('setThread', { thread });
      commit('appendThreadToUser', { parentId: userId, childId: id });
      commit('appendThreadToForum', { parentId: forumId, childId: id });
      dispatch('createPost', { text, threadId: id });
      return findById(state.threads, id);
    },
    updateUser ({ commit }, user) {
      commit('setUser', { user, userId: user.id }); // why not authId?
    },
    async updateThread ({ commit, state }, { title, text, id }) {
      const thread = findById(state.threads, id);
      const post = findById(state.posts, thread.posts[0]);
      const newThread = { ...thread, title };
      const newPost = { ...post, text };
      commit('setThread', { thread: newThread });
      commit('setPost', { post: newPost });
      return newThread;
    },
  },
  mutations: {
    setPost (state, { post }) {
      upsert(state.posts, post);
    },
    setThread (state, { thread }) {
      upsert(state.threads, thread);
    },
    setUser (state, { user, userId }) {
      upsert(state.users, userId)
    },
    appendPostToThread: appendChildToParent({ parent: 'threads', child: 'posts' }),
    appendThreadToForum: appendChildToParent({ parent: 'forums', child: 'threads' }),
    appendThreadToUser: appendChildToParent({ parent: 'users', child: 'threads' }),
    appendContributorToThread: appendChildToParent({ parent: 'threads', child: 'contributors' }),
  },
})

// higher order function
function appendChildToParent ({ parent, child }) {
  return (state, { childId, parentId }) => {
    const resource = findById(state[parent], parentId); // state[parent] === state.parent
    resource[child] = resource[child] || [];
    if (!resource[child].includes(childId)) {
      resource[child].push(childId);
    }
  }
}
