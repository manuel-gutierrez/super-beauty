<template>
  <div class="container profile-edit-page">
    <BannerImage
      :data="banner.data"
      :type="banner.type"
      :link="false"
      class="col-12 px-md-0 profile-edit-page__banner"
    >
      <template v-slot:hero-caption>
        <div class="profile-edit-page__banner__content">
          <div class="profile-edit-page__banner__content__image">
            <!-- Desktop -->
            <b-img
              v-bind="editOverlayImage"
              rounded="circle"
              alt="Profile image Overlay"
              class="d-none d-md-flex profile-edit-page__banner__content__image--overlay"
              @click="uploadImage()"
            ></b-img>
            <div class="profile-edit-page__banner__content__image__label">
              <svg-icon icon="camera-edit-icon" />
              <p>Editar</p>
            </div>
            <b-img
              v-bind="profileImage"
              rounded="circle"
              alt="Profile image"
              class="d-none d-md-flex"
            ></b-img>
            <!-- Mobile -->
            <b-img
              v-bind="editOverlayImage"
              rounded="circle"
              alt="Profile image Overlay"
              class="d-md-none profile-edit-page__banner__content__image--overlay"
              width="103"
              height="103"
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
          <div class="profile-edit-page__banner__content__slug">
            <p>{{ user.slug }}</p>
          </div>
          <div class="profile-edit-page__banner__content__merchant">
            <p>{{ merchant.name }}</p>
            <p>{{ merchant.slug }}</p>
          </div>
        </div>
      </template>
    </BannerImage>
    <div class="profile-edit-page__description">
      <p>{{ description }}</p>
    </div>
    <div class="profile-edit-page__info">
      <div class="profile-edit-page__info__title">
        <h2>{{ profileSection.title }}</h2>
      </div>

      <div class="profile-edit-page__info__data">
        <ProfileInfoAccordion />
      </div>
    </div>
    <div class="profile-edit-page__conversations">
      <h2>{{ conversationsSection.title }}</h2>
      <div class="profile-edit-page__conversations__cards">
        <CommunityConversationCard
          v-for="conversation in conversations"
          :key="conversation.id"
          :conversation="conversation"
          :excerpt="true"
          class="profile-edit-page__conversations__cards__card"
        />
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
      editOverlayImage: {
        blank: true,
        blankColor: '#FFF',
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
    profileSection() {
      return this.getProfilePageContent('section_2');
    },
    conversationsSection() {
      return this.getProfilePageContent('section_1');
    },
  },
  methods: {
    uploadImage() {
      return false;
    },
  },
};
</script>

<style></style>
