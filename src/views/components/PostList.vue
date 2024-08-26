<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
                <div v-if="post.userId" class="user-info">
                    <a  class="user-name" href="#">{{ userById(post.userId).name }}</a>
                    <a href="#">
                        <img :src=" userById(post.userId).avatar" class="avatar-large" alt="avatar">
                    </a>
                  <p class="desktop-only text-small">{{userById(post.userId).postsCount}} posts</p>
                  <p class="desktop-only text-small">{{userById(post.userId).threadsCount}} threads</p>
                </div>

                <div class="post-content">
                    <p>
                        {{ post.text }}
                    </p>
                </div>
                <HumanReadableDate :timestamp="post.publishedAt" class="post-date text-faded"/>
        </div>
    </div>
</template>

<script>
import HumanReadableDate from '@/views/components/HumanReadableDate.vue'

export default {
  name: 'PostList',
  components: {
    HumanReadableDate
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)
    },
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    userById (userId) {
      return this.$store.getters.user(userId)
      // return this.users.find(p => p.id === userId)
    }
  }
}
</script>
