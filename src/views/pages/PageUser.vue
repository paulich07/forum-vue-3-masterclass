<template>
    <div class="container">
        <div class="flex-grid">
            <div class="col-3 push-top">
                <UserCardEditor v-if="edit" :user="user"/>
                <UserCard v-else :user="user"/>
            </div>
            <div class="col-7 push-top">
                <div class="profile-header">
                    <span class="text-lead">
                        {{ user.name }}'s recent activity
                    </span>
                </div>
                <hr>
                <PostList :posts="user.posts"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostList from '@/views/components/PostList.vue'
import UserCard from '@/views/components/UserCard.vue'
import UserCardEditor from '@/views/components/UserCardEditor.vue'

export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PostList,
    UserCard,
    UserCardEditor
  },
  computed: {
    ...mapGetters({ user: 'authUser' })
  }
}
</script>

<style>

</style>
