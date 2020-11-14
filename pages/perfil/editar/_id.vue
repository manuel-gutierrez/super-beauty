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
      <ProfileForm ref="userProfile" section="user-profile" />
    </div>
    <div class="profile-edit-page__info">
      <div class="profile-edit-page__info__title">
        <h2>{{ profileSection.title }}</h2>
      </div>
      <div class="profile-edit-page__info__edit-login">
        <nuxt-link to="#"
          ><h4>{{ profileSection.changeUser }}</h4></nuxt-link
        >
        <nuxt-link to="#"
          ><h4>{{ profileSection.changePassword }}</h4></nuxt-link
        >
      </div>
      <div class="profile-edit-page__info__data">
        <div class="profile-info-edit-accordion" role="tab-list">
          <ProfileInfoAccordionItem
            id="user-form"
            :title="labels.firstTab.title"
          >
            <template v-slot:item-body>
              <ProfileForm ref="userDetails" section="user-details" />
            </template>
          </ProfileInfoAccordionItem>
          <ProfileInfoAccordionItem
            id="business-form-1"
            :title="labels.secondTab.title"
          >
            <template v-slot:item-body>
              <ProfileForm ref="legalInfo" section="business-basic-info" />
            </template>
          </ProfileInfoAccordionItem>
          <ProfileInfoAccordionItem
            id="businessAdditionalInfo"
            :title="labels.thirdTab.title"
          >
            <template v-slot:item-body>
              <p>{{ labels.thirdTab.description }}</p>
              <ProfileForm
                ref="additionalInfo"
                section="business-additional-info"
              />
            </template>
          </ProfileInfoAccordionItem>
        </div>
        <div class="profile-edit-page__submit-button">
          <b-button type="submit" variant="primary" @click.prevent="submit"
            >{{ submitLabel }}
          </b-button>
        </div>
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
    ...mapGetters('enums', { getEnums: 'getEnum' }),
    ...mapGetters('profileForm', { submitLabel: 'getSubmitButtonLabel' }),
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
    labels() {
      return this.getProfilePageContent('section_2').profileTabsLabels;
    },
    physicalLocation() {
      return this.merchant.locations[0];
    },
    virtualLocation() {
      return this.merchant.locations[1];
    },
    locationEnums() {
      return this.getEnums('locations');
    },
  },
  methods: {
    uploadImage() {
      // to be defined.
      return false;
    },
    submit() {
      //*  Uncomment the following block to get the data *//
      // const userData = {
      //   ...this.$refs.userDetails.newUser,
      //   ...this.$refs.userProfile.newProfile,
      // };
      // const businessData = {
      //   ...this.$refs.userProfile.businessBasicInfo,
      //   ...this.$refs.legalInfo.businessLegalInfo,
      //   ...this.$refs.additionalInfo.businessAdditionalInfo,
      // };
      return false;
    },
  },
  head: {
    title: 'Perfil - Editar',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Editar perfil de usuario',
      },
    ],
  },
};
</script>

<style></style>
