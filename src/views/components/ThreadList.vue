<template>
    <div class="col-full push-top">
        <div class="thread-list">
            <h2 class="list-title">Threads</h2>
            <div v-for="thread in threads" :key="thread.id" class="thread">
                <div>
                    <router-link :to="{ name: 'thread', params: { id: thread.id }} ">
                        {{thread.title}}
                    </router-link>
                    <p class="text-faded text-xsmall">
                        By <a href="#"> {{ userById(thread.userId).name }}</a>
                        <HumanReadableDate :timestamp="thread.publishedAt"/>
                    </p>
                </div>

                <div class="activity">
                    <p class="replies-count">
                        {{thread.repliesCount}} replies
                    </p>

                    <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="profile image">
                    <div>
                        <p class="text-xsmall"><a href="#">{{ userById(thread.userId).name }}</a></p>
                        <p class="text-xsmall text-faded">
                            <HumanReadableDate :timestamp="thread.publishedAt"/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HumanReadableDate from '@/views/components/HumanReadableDate.vue';

export default {
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
  components: {
    HumanReadableDate,
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id);
    },
    posts () {
      return this.$store.state.posts;
    },
    users () {
      return this.$store.state.users;
    },
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId);
    },
    userById (userId) {
      return this.users.find(p => p.id === userId);
    },
  },
};
</script>
