<template>
  <div class="container community-page">
    <div class="community-page__banner">
      <BannerImage
        :data="banner.data"
        :type="banner.type"
        class="col-12 px-md-0"
      />
    </div>
    <div class="community-page__intro">
      <h2>{{ intro.title }}</h2>
      <p v-html="intro.content"></p>
    </div>
    <div class="community-page__sections">
      <div class="community-page__digital-content">
        <b-img
          :alt="digitalContent.image.caption"
          :src="digitalContent.image.src"
        ></b-img>
        <h2>{{ digitalContent.title }}</h2>
        <p>{{ digitalContent.content }}</p>
        <nuxt-link :to="digitalContent.button.url">
          <button>{{ digitalContent.button.label }}</button>
        </nuxt-link>
      </div>
      <div class="community-page__conversations">
        <b-img
          :alt="conversations.image.caption"
          :src="conversations.image.src"
        ></b-img>
        <h2>{{ conversations.title }}</h2>
        <p>{{ conversations.content }}</p>
        <nuxt-link :to="conversations.button.url">
          <button>{{ conversations.button.label }}</button>
        </nuxt-link>
      </div>
    </div>
    <div class="section-spacer"></div>
    <ScrollToTop />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('pages/community', ['getCommunityContent']),
    banner() {
      return this.getCommunityContent('banner');
    },
    intro() {
      return this.getCommunityContent('section_0');
    },
    digitalContent() {
      return this.getCommunityContent('section_1');
    },
    conversations() {
      return this.getCommunityContent('section_2');
    },
  },
  head: {
    title: 'Comunidad - Inicio',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Comunidad SuperBeauty',
      },
    ],
  },
};
</script>

<style></style>
