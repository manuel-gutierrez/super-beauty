<template>
  <div class="container community-conversations-page">
    <div class="community-conversations-page__banner">
      <BannerImage
        :data="banner.data"
        :type="banner.type"
        class="col-12 px-0"
      />
    </div>
    <div class="community-conversations-page__header">
      <div class="community-conversations-page__header__title">
        <h2>{{ pageTitle }}</h2>
      </div>
      <div class="community-conversations-page__header__search">
        <CommunityContentSearch @do-search="search(...arguments)" />
      </div>
    </div>
    <div class="community-conversations-page__filter">
      <CommunityContentFilter
        :counter="{
          label: pageContent.imageCounterTitle,
          value: images.length,
        }"
        :first-filter="filter_1"
        :second-filter="filter_2"
        @do-filter="filterContent(...arguments)"
      />
    </div>

    <div class="section-spacer"></div>
    <ScrollToTop />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('pages/communityConversations', [
      'getCommunityConversationsPage',
    ]),
    banner() {
      return this.getCommunityContentPage('banner');
    },
    pageContent() {
      return this.getCommunityContentPage('section_0').content;
    },
    pageTitle() {
      return this.getCommunityContentPage('section_0').title;
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
  },
};
</script>

<style></style>
