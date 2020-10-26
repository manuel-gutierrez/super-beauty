<template>
  <div class="container important-information-page">
    <div class="important-information-page__banner">
      <BannerImage
        :data="banner.data"
        :type="banner.type"
        :link="false"
        class=""
      />
    </div>
    <div class="important-information-page__policy"></div>
    <div class="important-information-page__faq"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('pages/importantInformation', {
      getContent: 'getPolicyContent',
    }),
    banner() {
      return this.getContent('banner');
    },
    policyContent() {
      return this.getContent('section_0');
    },
    faqTitle() {
      return this.getContent('section_1').title;
    },
    faq() {
      return this.getContent('section_1').faq;
    },
  },
};
</script>

<style></style>
