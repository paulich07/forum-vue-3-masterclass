<template>
    <div class="col-full push-top">
        <h1>
            Welcome to the forum
        </h1>
        <CategoryList :categories="categories"/>
    </div>
</template>

<script>
import CategoryList from '@/views/components/CategoryList.vue'

export default {
  components: {
    CategoryList
  },
  data () {
    return {

    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  mounted () {
  }
}
</script>
