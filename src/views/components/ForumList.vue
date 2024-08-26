<template>
    <div class="col-full push-top forum-list">
        <h2 class="list-title">
            <router-link v-if="categoryId" :to="{ name: 'category', params: {id: categoryId}}">
                {{ title }}
            </router-link>
            <span v-else>Forums</span>
        </h2>

        <div v-for="forum in forums" :key="forum.id" class="forum-listing">
            <div class="forum-details">
                <router-link :to="{ name: 'forum', params: { id: forum.id }}" class="text-xlarge">{{ forum.name }}</router-link>
                <p>{{ forum.description }}</p>
            </div>

            <div class="threads-count">
                <p>
                    <span class="count">{{ forum.threads?.length }}</span>
                    {{ numOfThreads(forum) }}
                </p>
            </div>

            <div class="last-thread">

            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    forums: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: 'Forums',
    },
    categoryId: {
      type: String,
      required: false,
    },
  },
  methods: {
    numOfThreads (forum) {
      if (forum.threads?.length) {
        return forum.threads.length > 1 ? 'threads' : 'thread';
      } else {
        return 'no threads';
      }
    },
  },
};
</script>
