<template>
  <div class="container profile-page">
    <BannerImage
      :data="banner.data"
      :type="banner.type"
      :link="false"
      class="col-12 px-md-0 profile-page__banner"
    >
      <template v-slot:hero-caption>
        <div class="profile-page__banner__content">
          <div class="profile-page__banner__content__image">
            <b-img
              v-bind="profileImage"
              rounded="circle"
              alt="Profile image"
              class="d-none d-md-flex"
            ></b-img>
            <b-img
              v-bind="profileImage"
              rounded="circle"
              alt="Profile image"
              class="d-md-none"
              width="103"
              height="103"
            ></b-img>
          </div>
          <div class="profile-page__banner__content__slug">
            <p>{{ user.slug }}</p>
          </div>
          <div class="profile-page__banner__content__merchant">
            <p>{{ merchant.name }}</p>
            <p>{{ merchant.slug }}</p>
          </div>
        </div>
      </template>
    </BannerImage>
    <div class="profile-page__description">
      <p>{{ description }}</p>
    </div>
    <div class="profile-page__conversations">
      <h2>{{ conversationsSection.title }}</h2>
      <div class="profile-page__conversations__cards">
        <CommunityConversationCard
          v-for="conversation in conversations"
          :key="conversation.id"
          :conversation="conversation"
          :excerpt="true"
          class="profile-page__conversations__cards__card"
        />
        <nuxt-link :to="`/perfil/${user.id}`">
          <button class="profile-page__conversations__cards__button">
            {{ conversationsSection.button.label }}
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      profileImage: {
        src: '/images/pages/community/post-image-1.png',
        width: 209,
        height: 209,
        class: 'm1',
      },
    };
  },
  computed: {
    ...mapGetters('pages/profile', ['getProfilePageContent']),
    ...mapGetters('user', { user: 'getUserData' }),
    ...mapGetters('merchant', { merchant: 'getMerchantData' }),
    ...mapGetters('conversations', {
      conversations: 'getConversations',
    }),
    banner() {
      return this.getProfilePageContent('banner');
    },
    description() {
      return this.getProfilePageContent('section_0').content;
    },
    conversationsSection() {
      return this.getProfilePageContent('section_1');
    },
  },
  head: {
    title: 'Perfil - Inicio',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Página de Inicio de perfil de usuario',
      },
    ],
  },
};
</script>

<style></style>
