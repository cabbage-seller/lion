<template>
  <div class="feed-list-container">
    <div v-if="feedStore.feedData.length > 0">
      <feedItem v-for="feed in feedStore.feedData" :key="feed.id" :feed="feed"/>
    </div>
    <div v-else>
      <div>피드가 없습니다.</div>
    </div>
  </div>
</template>

<script>
import FeedItem from "./FeedItem.vue"
import { useFeedStore } from '../store/feed'
export default {
    name: "FeedList",
    data() {
      return {
        feedStore: useFeedStore()
      }
    },
    components: { FeedItem },
    created() {
        this.feedStore.getFeedData()
    }
}
</script>

<style scoped>
.feed-list-container {
    height: 60vh;
    overflow-y: auto;
}

</style>