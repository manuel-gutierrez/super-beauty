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
        class="community-conversation-page__conversations__cards col-12 col-md-8"
      >
        <CommunityConversationCard
          :key="conversation"
          :conversation="conversation"
        />
      </div>
      <div
        class="community-conversation-page__conversations__tags col-12 col-md-4"
      >
        <div class="community-conversation-page__conversations__tags__title">
          <p>Trending Tags</p>
        </div>
        <div class="community-conversation-page__conversations__tags__pills">
          <CommunityConversationTag
            v-for="tag in tags"
            :key="tag"
            :label="tag"
          />
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
    }),
    banner() {
      return this.getCommunityConversationsPage('banner');
    },
    conversation() {
      return this.getConversation(this.$route.params.id);
    },
    pageContent() {
      return this.getCommunityConversationsPage('section_0').content;
    },
    pageTitle() {
      return this.getCommunityConversationsPage('section_0').title;
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