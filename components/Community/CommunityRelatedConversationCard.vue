<template>
  <div v-if="conversation" class="community-related-conversation-card">
    <div class="col-12 pl-0 community-related-conversation-card__title">
      <nuxt-link :to="`/comunidad/conversaciones/${conversation.id}`"
        ><h3>{{ conversation.title }}</h3></nuxt-link
      >
    </div>
    <div class="col-12 pl-0 community-related-conversation-card__profile">
      <ProfilePicture profile-slug="MarsORedi" />
    </div>
    <div class="col-12 pl-0 community-related-conversation-card__date">
      <p>{{ labels.published }} 07-16-2020 08:30</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    conversation: {
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
