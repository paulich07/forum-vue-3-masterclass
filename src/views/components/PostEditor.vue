<template>
    <div class="col-full">
        <form @submit.prevent="savePost()">
            <div class="form-group">
                <textarea v-model="postText" class="form-input" cols="30" rows="5" name="newPost" id="newPost"></textarea>
            </div>
            <div class="form-actions">
                <button class="btn-blue">Rispondi</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      postText: ''
    }
  },
  methods: {
    savePost () {
      const post = {
        text: this.postText
      }
      this.$emit('savePost', { post })

      this.postText = ''
    }
  }
}
</script>
