<template>
  <div class="community-conversation-card">
    <div class="community-conversation-card__title">
      <nuxt-link :to="`/comunidad/conversaciones/${conversation.id}`"
        ><h3>{{ conversation.title }}</h3>
      </nuxt-link>
    </div>
    <div class="community-conversation-card__date">
      <p>
        {{ labels.published }} 07-16-2020 08:30 | {{ labels.updated }} 3
        {{ labels.times.hours }}
      </p>
    </div>
    <div v-if="!excerpt" class="community-conversation-card__main-image">
      <b-img-lazy :src="conversation.mainImage"></b-img-lazy>
    </div>
    <div class="community-conversation-card__profile">
      <ProfilePicture profile-slug="MarsORedi" />
    </div>
    <div v-if="excerpt" class="community-conversation-card__content">
      <div v-html="conversation.excerpt"></div>
    </div>
    <div v-else class="community-conversation-card__content">
      <div v-html="conversation.content"></div>
    </div>
    <div class="community-conversation-card__actions">
      <div class="col-sm-4 community-conversation-card__actions__like">
        <svg-icon
          icon="like-icon-black"
          @click="like(conversation.id)"
        ></svg-icon>
        <p>{{ labels.like }}</p>
      </div>
      <div class="col-sm-4 community-conversation-card__actions__share">
        <svg-icon icon="share-icon" @click="share(conversation.id)"></svg-icon>
        <p>{{ labels.share }}</p>
      </div>
      <div class="col-sm-4 community-conversation-card__actions__comment">
        <svg-icon icon="comment-icon"></svg-icon>
        <p>{{ labels.respond }}</p>
      </div>
    </div>
    <div class="community-conversation-card__comment">
      <div class="community-conversation-card__comment__icon">
        <svg-icon icon="comment-icon"></svg-icon>
      </div>
      <div class="community-conversation-card__comment__input">
        <b-form-textarea
          id="textarea"
          v-model="text"
          :placeholder="labels.commentPlaceholder"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <button @click="saveComment(conversation.id, text)">
          {{ labels.sendButton }}
        </button>
      </div>
    </div>
    <div v-if="!excerpt" class="community-conversation-card__tags">
      <p class="community-conversation-card__tags__title">{{ labels.tags }}</p>
      <CommunityConversationTag
        v-for="tag in conversation.tags"
        :key="tag"
        :label="tag"
      />
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
    excerpt: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      text: '',
    };
  },
  computed: {
    ...mapGetters('conversations', { labels: 'getLabels' }),
  },
  methods: {
    share(id) {
      return false;
    },
    like(id) {
      return false;
    },
    saveComment(id, comment) {
      return false;
    },
  },
};
</script>

<style></style>
