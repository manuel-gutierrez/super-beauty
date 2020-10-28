<template>
  <div class="container community-content-page">
    <div class="community-content-page__banner">
      <BannerImage
        :data="banner.data"
        :type="banner.type"
        class="col-12 px-md-0"
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
  },
};
</script>

<style></style>
