<template>
    <div class="profile-card">
        <div class="text-center">
            <img :src="user.avatar" :alt="`${user.avatar} profile picture`"  class="avatar-xlarge">
        </div>
        <h1 class="title"> {{ user.username }}</h1>
        <p class="text-lead"> {{ user.name }}</p>
        <p class="text-justify">
            {{ user.bio || 'No bio specified' }}
        </p>

        <span class="online">{{ user.name }} is online</span>

        <div class="stats">
            <span>{{ user.countPosts }} posts</span>
            <span>{{ user.countThreads }} threads</span>
        </div>

        <div class="text-center">
            <router-link :to="{name: 'meEdit'}" class="btn-green btn-small">Edit Profile</router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>

<style>

</style>
