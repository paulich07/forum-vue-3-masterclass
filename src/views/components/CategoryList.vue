<template>
    <div class="col-full">
        <ForumList v-for="category in categories" :key="category.id" :forums="getForumsByCategory(category)" :title="category.name" :categoryId="category.id"/>
    </div>
</template>

<script>
import ForumList from '@/views/components/ForumList.vue';

export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  components: {
    ForumList,
  },
  methods: {
    getForumsByCategory (category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id);
    },
  },
};
</script>
