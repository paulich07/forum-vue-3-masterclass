<template>
    <div class="col-full push-top">
        <h1>{{ category.name }}</h1>
        <ForumList :forums="getForumsByCategory(category)" :title="category.name"/>
    </div>
</template>

<script>
import ForumList from '@/views/components/ForumList.vue'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    ForumList
  },
  computed: {
    category () {
      return this.$store.state.categories.find(category => category.id === this.id)
    }
  },
  methods: {
    getForumsByCategory (category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>
