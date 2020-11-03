<template>
  <div class="container community-conversation-page">
    <div class="community-conversation-page__banner">
      <BannerImage
        :data="banner.data"
        :type="banner.type"
        class="col-12 px-0"
      />
    </div>
    <div class="community-conversation-page__header">
      <div class="community-conversation-page__header__title">
        <h2>{{ pageTitle }}</h2>
      </div>
      <div class="community-conversation-page__header__search">
        <CommunityContentSearch @do-search="search(...arguments)" />
      </div>
      <div
        class="community-conversation-page__header__start-conversation"
        @click="toggleConversationForm()"
      >
        <h3>{{ pageContent.startConversationTitle }}</h3>
      </div>
    </div>
    <div class="community-conversation-page__form">
      <CommunityConversationForm
        :show="conversationForm.show"
        :placeholders="pageContent.conversationFormPlaceholders"
      />
    </div>
    <div class="community-conversation-page__filter">
      <CommunityContentFilter
        :counter="{
          label: pageContent.filterTitle,
          value: 2,
        }"
        :first-filter="filter_1"
        :second-filter="filter_2"
        @do-filter="filterContent(...arguments)"
      />
    </div>
    <div class="community-conversation-page__conversations">
      <div
        v-if="conversation"
        class="community-conversation-page__conversations__card col-12 col-md-8"
      >
        <CommunityConversationCard :conversation="conversation" />
        <div
          v-if="conversation.comments.length > 0"
          class="community-conversation-page__conversations__card__comments"
        >
          <CommunityConversationCommentCard
            v-for="comment in conversation.comments"
            :key="comment.id"
            :comment="comment"
          />
        </div>
      </div>
      <div
        class="community-conversation-page__conversations__side-bar col-12 col-md-4"
      >
        <div class="community-conversation-page__conversations__side-bar__info">
          <h4
            class="community-conversation-page__conversations__side-bar__info__title"
          >
            {{ sidebarContent.infoTitle }}
          </h4>
          <div
            class="community-conversation-page__conversations__side-bar__data"
          >
            <div
              class="community-conversation-page__conversations__side-bar__data__shared"
            >
              <p>
                <svg-icon icon="share-icon" />
                <strong>{{ conversation.shared }}</strong>
                {{ sidebarContent.infoLabels.shared }}
              </p>
            </div>
            <div
              class="community-conversation-page__conversations__side-bar__data__views"
            >
              <p>
                <svg-icon icon="views-icon" />
                <strong>{{ conversation.views }}</strong>
                {{ sidebarContent.infoLabels.views }}
              </p>
            </div>
            <div
              class="community-conversation-page__conversations__side-bar__data__likes"
            >
              <p>
                <svg-icon icon="like-icon" />
                <strong>{{ conversation.likes }}</strong>
                {{ sidebarContent.infoLabels.likes }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="community-conversation-page__conversations__side-bar__images"
        >
          <h4
            class="community-conversation-page__conversations__side-bar__images__title"
          >
            <svg-icon icon="image-camera-icon" />
            {{ conversation.images.length }}
            {{ sidebarContent.infoLabels.images }}
          </h4>
          <div
            class="community-conversation-page__conversations__side-bar__images__items"
          >
            <b-img
              v-for="(image, index) in conversation.images"
              :key="index"
              :src="image.url"
            ></b-img>
          </div>
        </div>
        <div
          class="community-conversation-page__conversations__side-bar__related-posts"
        >
          <h4
            class="community-conversation-page__conversations__side-bar__related-posts__title"
          >
            {{ sidebarContent.relatedConversationsTitle }}
          </h4>
          <div
            class="community-conversation-page__conversations__side-bar__related-posts__items"
          >
            <CommunityRelatedConversationCard
              v-for="(post, index) in relatedConversations"
              :key="index"
              :conversation="post"
            />
          </div>
        </div>
        <div class="community-conversation-page__conversations__side-bar__tags">
          <div
            class="community-conversation-page__conversations__side-bar__tags__title"
          >
            <h4>{{ sidebarContent.tagsTitle }}</h4>
          </div>
          <div
            class="community-conversation-page__conversations__side-bar__tags__pills"
          >
            <CommunityConversationTag
              v-for="tag in tags"
              :key="tag"
              :label="tag"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="section-spacer"></div>
    <ScrollToTop />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      conversationForm: {
        show: false,
      },
    };
  },
  computed: {
    ...mapGetters('pages/communityConversations', [
      'getCommunityConversationsPage',
    ]),
    ...mapGetters('conversations', {
      getConversation: 'getConversation',
      tags: 'getTags',
      getRelatedConversations: 'getRelatedConversations',
    }),
    banner() {
      return this.getCommunityConversationsPage('banner');
    },
    conversation() {
      return this.getConversation(this.$route.params.id);
    },
    relatedConversations() {
      return this.getRelatedConversations(this.conversation.relatedPosts);
    },
    pageTitle() {
      return this.getCommunityConversationsPage('section_0').title;
    },
    pageContent() {
      return this.getCommunityConversationsPage('section_0').content;
    },
    filter_1() {
      return {
        label: this.pageContent.filterLabel_1,
        options: this.pageContent.filterOptions_1,
      };
    },
    filter_2() {
      return {
        label: this.pageContent.filterLabel_2,
        options: this.pageContent.filterOptions_2,
      };
    },
    sidebarContent() {
      return this.getCommunityConversationsPage('section_1');
    },
  },
  methods: {
    filterContent(filterData) {
      return false;
    },
    search(filterData) {
      return false;
    },
    showMoreImages() {
      return false;
    },
    toggleConversationForm() {
      this.conversationForm.show = !this.conversationForm.show;
    },
  },
};
</script>

<style></style>
