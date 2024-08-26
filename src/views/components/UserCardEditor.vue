<template>
    <div class="profile-card">
        <form @submit.prevent="saveUser">
            <p class="text-center">
                <img :src="user.avatar" :alt="`${user.avatar} profile picture`" class="avatar-xlarge img-update">
            </p>

            <div class="">
                <label class="form-label" for="user_username">Username</label>
                <input autocomplete="off" id="user_username" type="text" class="form-input text-lead text-bold" placeholder="Username" v-model="activeUser.username" @keydown.enter.prevent=""/>
            </div>

            <div class="form-group">
                <label class="form-label" for="user_name">Full name</label>
                <input autocomplete="off" id="user_name" type="text" class="form-input text-lead text-bold" placeholder="Full name" v-model="activeUser.name" @keydown.enter.prevent=""/>
            </div>

            <div class="form-group">
                <label class="form-label" for="user_bio">Bio</label>
                <textarea id="user_bio" rows="5" class="form-input text-lead text-bold" placeholder="Write a few word about yourself" v-model="activeUser.bio"/>
            </div>

            <div class="stats">
                <span>{{ user.countPosts }} posts</span>
                <span>{{ user.countThreads }} threads</span>
            </div>

            <div class="form-group">
                <label class="form-label" for="user_website">Website</label>
                <input autocomplete="off" id="user_website" class="form-input text-lead text-bold" placeholder="Write a few word about yourself" v-model="activeUser.website" @keydown.enter.prevent=""/>
            </div>

            <div class="form-group">
                <label class="form-label" for="user_email">Email</label>
                <input autocomplete="off" id="user_email" class="form-input text-lead text-bold" placeholder="Email" v-model="activeUser.email" @keydown.enter.prevent=""/>
            </div>

            <div class="form-group">
                <label class="form-label" for="user_location">Location</label>
                <input autocomplete="off" id="user_location" class="form-input text-lead text-bold" placeholder="Email" v-model="activeUser.location"/>
            </div>

            <div class="btn-group space-between">
                <button type="reset" @click.prevent="cancel()" class="btn-ghost">Cancel</button>
                <button type="submit" class="btn-blue">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  data () {
    return {
      activeUser: { ...this.user },
    };
  },
  methods: {
    saveUser () {
      this.$store.dispatch('updateUser', { ...this.activeUser });
      this.$router.push({ name: 'me' });
    },
    cancel () {
      this.$router.push({ name: 'me' });
    },
  },
};
</script>

<style>

</style>
