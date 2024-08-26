<template>
  <form @submit.prevent="save">
    <div class="form-group">
        <label class="form-label" for="thread_title">Title</label>
        <input  v-model="form.title" autocomplete="off" id="thread_title" name="title" type="text" class="form-input text-lead text-bold" placeholder="A short description of the topic" @keydown.enter.prevent=""/>
    </div>

    <div class="form-group">
        <label class="form-label" for="thread_text">Text</label>
        <textarea v-model="form.text" id="thread_text" rows="5" class="form-input text-lead text-bold" name="text" placeholder="Write something here"/>
    </div>

    <div class="btn-group space-between">
        <button type="reset" @click.prevent="cancel" class="btn-ghost">Cancel</button>
        <button type="submit" class="btn-blue">
          {{existing ? 'Update' : 'Publish'}}
        </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
      form: {
        title: this.title,
        text: this.text,
      }
    };
  },
  computed: {
    existing () {
      return !!this.title;
    }
  },
  methods: {
    save () {
      this.$emit('onSubmit', { ...this.form });
    },
    cancel () {
      this.$emit('cancel');
    },
  },
};
</script>
