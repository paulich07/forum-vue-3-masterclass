<template>
  <div class="col-full push-top">
    <h1>
      Edit your thread {{thread.title}}
    </h1>

      <!--<ThreadEditor :title="thread.title" :text="thread.text" @onSubmit="onSubmit" @cancel="cancel"/>-->
      <ThreadEditor :title="thread.title" :text="text" @onSubmit="onSubmit" @cancel="cancel"/>
  </div>
</template>

<script>
import ThreadEditor from '@/views/components/ThreadEditor.vue';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    ThreadEditor,
  },
  computed: {
    thread () {
      return this.$store.state.threads.find(thread => thread.id === this.id);
    },
    text () {
      return this.$store.state.posts.find(post => post.id === this.thread.posts[0]).text;
    },
  },
  methods: {
    async onSubmit ({ title, text }) {
      const thread = await this.$store.dispatch('updateThread', { id: this.id, title, text });
      this.$router.push({ name: 'thread', params: { id: thread.id } })
    },
    cancel () {
      this.$router.push({ name: 'thread', params: { id: this.id } })
    },
  },
};
</script>

<style>

</style>
