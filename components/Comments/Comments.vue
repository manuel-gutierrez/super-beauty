<template>
  <div class="product-comments">
    <CommentsFilter></CommentsFilter>
    <CommentsFeed
      v-for="content in feedItems"
      :key="content.id"
      :comment="content"
    ></CommentsFeed>
    <div class="product-comments__button">
      <button v-if="!disableButton" @click="loadNextItems(lastIndex)">
        Ver {{ itemsToShow }} Más
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feed: {
      type: Array,
      default: null,
    },
    itemsToShow: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      lastIndex: 0,
      disableButton: null,
      feedItems: this.getFeedItems(this.itemsToShow),
    };
  },
  methods: {
    loadNextItems() {
      if (this.feedItems.length !== this.feed.length) {
        const newItems = this.feed.slice(
          this.lastIndex,
          this.itemsToShow + this.lastIndex
        );
        this.feedItems = this.feedItems.concat(newItems);
        this.lastIndex = this.itemsToShow + this.lastIndex;
        if (this.lastIndex >= this.feedItems.length) {
          this.disableButton = true;
        }
      }
    },
    getFeedItems(itemsToShow) {
      if (itemsToShow < this.feed.length) {
        this.disableButton = false;
        return this.feed.slice(0, itemsToShow);
      }
      if (itemsToShow !== 0) {
        this.disableButton = true;
        return this.feed;
      } else {
        this.disableButton = true;
        return [];
      }
    },
  },
};
</script>

<style></style>
