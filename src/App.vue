<template>
  <div>
    <TheNavbar></TheNavbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/views/components/TheNavbar.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
};
</script>

<style>
@import "@/assets/css/style.css";
</style>
