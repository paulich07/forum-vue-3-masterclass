<template>
  <div class="col-full push-top">
    <h1>
      Start a new thread in {{ forum.name }}
    </h1>

      <ThreadEditor @onSubmit="onSubmit" @cancel="cancel"/>
  </div>
</template>

<script>
import ThreadEditor from '@/views/components/ThreadEditor.vue';

export default {
  props: {
    forumId: {
      type: String,
      required: true,
    },
  },
  components: {
    ThreadEditor,
  },
  computed: {
    forum  () {
      return this.$store.state.forums.find(forum => forum.id === this.forumId);
    },
  },
  methods: {
    async onSubmit ({ title, text }) {
      const thread = await this.$store.dispatch('createThread', { forumId: this.forumId, title, text });
      this.$router.push({ name: 'thread', params: { id: thread.id } });
    },
    cancel () {
      this.$router.push({ name: 'forum', params: { id: this.forumId } });
    },
  },
};
</script>

<style>

</style>
