<template>
  <div v-if="comment" class="community-conversation-comment-card">
    <div class="community-conversation-comment-card__meta">
      <div class="community-conversation-comment-card__meta__profile">
        <ProfilePicture profile-slug="MarsORedi" />
      </div>
      <div class="community-conversation-comment-card__meta__date">
        <p>07-16-2020 08:30</p>
      </div>
    </div>
    <div class="community-conversation-comment-card__comment">
      {{ comment.content }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    comment: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters('conversations', { labels: 'getLabels' }),
  },
};
</script>

<style></style>
