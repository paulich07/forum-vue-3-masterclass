<template>
  <div class="col-full push-top">
    <div class="col-full">
        <div class="forum-header">
            <div class="forum-details">
                <h1>{{forum.name}}</h1>
                <p class="text-lead">{{forum.description}}</p>
            </div>
            <router-link :to="{name: 'createThread', params: {forumId: forum.id}}" class="btn-green btn-small">Start a thread</router-link>
        </div>
    </div>
    <div class="col-full push-top">
        <ThreadList :threads="threads"/>
    </div>
  </div>
</template>

<script>
import ThreadList from '@/views/components/ThreadList.vue';

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  components: {
    ThreadList,
  },
  computed: {
    forum () {
      return this.$store.state.forums.find(forum => forum.id === this.id);
    },
    threads () {
      return this.forum.threads.map(threadId => this.$store.getters.thread(threadId))
      // return this.$store.state.threads.filter(thread => thread.forumId === this.id);
    },
  },
};
</script>
