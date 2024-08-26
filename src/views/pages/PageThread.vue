<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <router-link
    :to="{ name: 'editThread', id: this.id }"
    class="btn-green btn-small"
    tag="button"
    >
      Edit thread
    </router-link>

    <div>
      By {{ thread.author.name }} <HumanReadableDate :timestamp="thread.publishedAt"> </HumanReadableDate>/ {{ thread.repliesCount }} replies by {{ thread.contributorsCount }} contributors
    </div>

    <PostList :posts="threadPosts"/>

    <PostEditor @savePost="addPost"/>
  </div>
</template>

<script>
import PostList from '@/views/components/PostList.vue'
import PostEditor from '@/views/components/PostEditor.vue'
import HumanReadableDate from '@/views/components/HumanReadableDate.vue'

export default {
  name: 'PageThread',
  components: {
    PostList,
    PostEditor,
    HumanReadableDate,
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
    }
  },
  computed: {
    thread () {
      return this.$store.getters.thread(this.id)
    },
    categories () {
      return this.$store.state.categories
    },
    posts () {
      return this.$store.state.posts
    },
    threads () {
      return this.$store.state.threads
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    },
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(p => p.id === userId)
    },
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }

      this.$store.dispatch('createPost', post)
    }
  }
  /*
    async created () {
        // fetch the thread
        const thread = await this.$store.dispatch('fetchThread', {id: this.id})

        // fetch the user
        this.$store.dispatch('fetchUser', {id: thread.userId})

        // fetch the posts
        thread.posts.forEach( async postId => {
            const post = await this.$store.dispatch('fetchPost', { id: postId })
            // fetch the user for each post
            this.$store.dispatch('fetchUser', {id: post.userId})
        })

    }
    */
}
</script>
