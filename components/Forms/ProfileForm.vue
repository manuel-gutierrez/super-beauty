<template>
  <section>
    <!-- User Profile -->
    <b-form
      v-if="section === 'user-profile'"
      class="profile-form"
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-form-group
        id="user-profile-label"
        :label="labels.profile"
        label-for="user-profile"
      >
        <b-form-textarea
          id="user-profile"
          v-model="newProfile.profile"
          rows="3"
          max-rows="6"
          class="profile-form__input"
        ></b-form-textarea>
      </b-form-group>
    </b-form>
    <!-- User details + Biz main Info -->
    <b-form
      v-if="section === 'user-details'"
      class="profile-form"
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-form-input
        id="name"
        v-model="newUser.name"
        size="md"
        required
        :placeholder="labels.name"
        type="text"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="lastName"
        v-model="newUser.lastName"
        size="md"
        required
        :placeholder="labels.lastName"
        type="text"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="phoneNumber"
        v-model="newUser.phoneNumber"
        size="md"
        required
        :placeholder="labels.phoneNumber"
        type="tel"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="email"
        v-model="newUser.email"
        size="md"
        required
        :placeholder="labels.email"
        type="email"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="title"
        v-model="newUser.title"
        size="md"
        required
        :placeholder="labels.title"
        type="text"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="businessName"
        v-model="businessBasicInfo.name"
        size="md"
        type="text"
        required
        :placeholder="labels.businessName"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="businessSlug"
        v-model="businessBasicInfo.slug"
        size="md"
        type="text"
        required
        :placeholder="labels.businessSlug"
        class="profile-form__input"
      ></b-form-input>
    </b-form>
    <!-- Business Legal Information -->
    <b-form
      v-if="section === 'business-basic-info'"
      class="profile-form"
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-form-group
        id="business-description-label"
        :label="labels.businessDescription"
        label-for="business-description"
      >
        <b-form-textarea
          id="business-description"
          v-model="businessLegalInfo.description"
          rows="3"
          max-rows="6"
          class="profile-form__input"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="business-legal-type-label"
        :label="labels.legal.type"
        label-for="business-legal-type"
      >
        <b-form-input
          id="business-legal-type"
          v-model="businessLegalInfo.legal.type"
          class="profile-form__input"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="business-legal-category-label"
        :label="labels.legal.category"
        label-for="business-legal-category"
      >
        <b-form-input
          id="business-legal-category"
          v-model="businessLegalInfo.legal.category"
          class="profile-form__input"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="business-legal-id-label"
        :label="labels.legal.id"
        label-for="business-legal-id"
      >
        <b-form-input
          id="business-legal-id"
          v-model="businessLegalInfo.legal.id"
          class="profile-form__input"
          type="number"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="business-legal-idDocument-label"
        :label="labels.legal.idDocument"
        label-for="business-legal-id"
      >
        <b-form-file
          v-model="businessLegalInfo.legal.idDocument"
          :placeholder="labels.legal.idDocumentButton"
          :drop-placeholder="labels.legal.idDocumentButton"
        ></b-form-file>
      </b-form-group>
      <b-form-group
        id="business-state-label"
        :label="labels.state"
        label-for="business-state"
      >
        <b-form-input
          id="business-state"
          v-model="businessLegalInfo.state"
          class="profile-form__input"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="business-city-label"
        :label="labels.city"
        label-for="business-city"
      >
        <b-form-input
          id="business-city"
          v-model="businessLegalInfo.city"
          class="profile-form__input"
          type="text"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <!-- Business Additional Information -->
    <b-form
      v-if="section === 'business-additional-info'"
      class="profile-form__additional-info"
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-form-group
        id="business-category-label"
        :label="labels.category"
        label-for="business-category"
        :description="labels.categoryDescription"
      >
        <b-form-input
          id="business-category"
          v-model="businessAdditionalInfo.category"
          class="profile-form__input"
          :placeholder="labels.categoryPlaceholder"
          type="text"
        ></b-form-input>
      </b-form-group>
      <p>{{ labels.locationTitle }}</p>
      <b-form-checkbox
        id="physical-location"
        v-model="businessAdditionalInfo.locations.physical.selected"
        name="physical-location"
        :value="true"
        :unchecked-value="false"
        class="profile-form__checkbox"
      >
        {{ labels.locations.physical.title }}
      </b-form-checkbox>
      <b-form-group
        id="physical-location-number-label"
        :label="labels.locations.physical.number"
        label-for="physical-location-number"
      >
        <b-form-input
          id="physical-location-number"
          v-model="businessAdditionalInfo.locations.physical.number"
          class="profile-form__input"
          type="number"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="physical-location-size-label"
        :label="labels.locations.physical.size"
        label-for="physical-location-size"
      >
        <b-form-input
          id="physical-location-size"
          v-model="businessAdditionalInfo.locations.physical.employees"
          class="profile-form__input"
          type="text"
          :placeholder="labels.locations.physical.sizePlaceHolder"
        ></b-form-input>
      </b-form-group>
      <b-form-checkbox
        id="virtual-location"
        v-model="businessAdditionalInfo.locations.virtual.selected"
        name="virtual-location"
        :value="true"
        :unchecked-value="false"
        class="profile-form__checkbox"
      >
        {{ labels.locations.virtual.title }}
      </b-form-checkbox>
      <div class="profile-form__virtual-location-group">
        <p>{{ labels.locations.virtual.channels.title }}</p>
        <b-form-checkbox
          id="virtual-location-instagram"
          v-model="businessAdditionalInfo.locations.virtual.instagram"
          name="virtual-location-instagram"
          :value="true"
          :unchecked-value="false"
          class="profile-form__checkbox"
        >
          {{ labels.locations.virtual.channels.instagram }}
        </b-form-checkbox>
        <b-form-group
          id="virtual-location-instagram-slug-label"
          :label="labels.locations.virtual.channels.instagramSlug"
          label-for="virtual-location-instagram-slug"
        >
          <b-form-input
            id="virtual-location-instagram-slug"
            v-model="
              businessAdditionalInfo.locations.virtual.channels.instagramSlug
            "
            class="profile-form__input"
            :placeholder="
              labels.locations.virtual.channels.instagramSlugPlaceholder
            "
            type="text"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="virtual-location-instagram-followers-label"
          :label="labels.locations.virtual.channels.instagramFollowersNumber"
          label-for="virtual-location-instagram-followers"
        >
          <b-form-input
            id="virtual-location-instagram-followers"
            v-model="
              businessAdditionalInfo.locations.virtual.channels
                .instagramFollowersNumber
            "
            class="profile-form__input"
            type="number"
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox
          id="virtual-location-whatsapp"
          v-model="businessAdditionalInfo.locations.virtual.whatsapp"
          name="virtual-location-whatsapp"
          :value="true"
          :unchecked-value="false"
          class="profile-form__checkbox"
        >
          {{ labels.locations.virtual.channels.whatsapp }}
        </b-form-checkbox>
        <b-form-checkbox
          id="virtual-location-web"
          v-model="businessAdditionalInfo.locations.virtual.web"
          name="virtual-location-web"
          :value="true"
          :unchecked-value="false"
          class="profile-form__checkbox"
        >
          {{ labels.locations.virtual.channels.web }}
        </b-form-checkbox>
        <b-form-group
          id="virtual-location-web-url-label"
          :label="labels.locations.virtual.channels.webDescription"
          label-for="virtual-location-web-url"
        >
          <b-form-input
            id="virtual-location-web-url"
            v-model="businessAdditionalInfo.locations.virtual.channels.url"
            class="profile-form__input"
            :placeholder="
              labels.locations.virtual.channels.webDescriptionPlaceholder
            "
            type="url"
          ></b-form-input>
        </b-form-group>
      </div>
    </b-form>
    <!-- Form End  -->
    <!-- Form Button -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    section: {
      type: String,
      default: 'user',
    },
  },
  data() {
    return {
      newProfile: {
        profile: '',
      },
      newUser: {
        photo: '',
        profile: '',
        name: null,
        lastName: null,
        phoneCode: '+57',
        phoneNumber: null,
        email: null,
        title: null,
      },
      businessBasicInfo: {
        name: null,
        slug: null,
      },
      businessLegalInfo: {
        description: null,
        type: null,
        city: null,
        state: null,
        mail: null,
        phone: {
          code: null,
          number: null,
        },
        legal: {
          id: null,
          idDocument: null,
          type: null,
          category: null,
        },
      },
      businessAdditionalInfo: {
        category: null,
        locations: {
          physical: {
            selected: null,
            type: null,
            number: null,
            employees: null,
            phone: null,
          },
          virtual: {
            selected: null,
            type: null,
            number: null,
            employees: null,
            phone: {
              code: null,
              number: null,
            },
            channels: {
              instagram: null,
              instagramSlug: null,
              instagramFollowersNumber: null,
              whatsapp: null,
              web: null,
              url: null,
            },
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters('profileForm', { labels: 'getProfileFormLabels' }),
    ...mapGetters('user', { userData: 'getUserData' }),
  },
  beforeMount() {
    if (this.userData.profile && this.section === 'user-profile') {
      this.newProfile.profile = this.userData.profile;
    }
  },
  methods: {
    onSubmit(formName) {
      return false;
    },
    onReset(formName) {
      // Reset  values
      this.form = {};
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style></style>
