<template>
  <div class="container community-content-page">
    <div class="community-content-page__banner">
      <BannerImage
        :data="banner.data"
        :type="banner.type"
        class="col-12 px-0"
      />
    </div>
    <div class="community-content-page__header">
      <div class="community-content-page__header__title">
        <h2>{{ pageTitle }}</h2>
      </div>
      <div class="community-content-page__header__search">
        <CommunityContentSearch @do-search="search(...arguments)" />
      </div>
    </div>
    <div class="community-content-page__filter">
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
    ...mapGetters('pages/communityContent', ['getCommunityContentPage']),
    banner() {
      return this.getCommunityContentPage('banner');
    },
    images() {
      return this.getCommunityContentPage('section_0').content.images;
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
      console.log(filterData);
    },
    search(filterData) {
      console.log(filterData);
    },
  },
};
</script>

<style></style>
