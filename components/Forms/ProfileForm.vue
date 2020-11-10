<template>
  <section>
    <!-- User Section -->
    <b-form
      v-if="section === 'user'"
      class="profile-form"
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-form-input
        id="name"
        v-model="form.user.name"
        size="md"
        required
        :placeholder="labels.name"
        type="text"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="lastName"
        v-model="form.user.lastName"
        size="md"
        required
        :placeholder="labels.lastName"
        type="text"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="phoneNumber"
        v-model="form.user.phoneNumber"
        size="md"
        required
        :placeholder="labels.phoneNumber"
        type="tel"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="email"
        v-model="form.user.email"
        size="md"
        required
        :placeholder="labels.email"
        type="email"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="title"
        v-model="form.user.title"
        size="md"
        required
        :placeholder="labels.title"
        type="text"
        class="profile-form__input"
      ></b-form-input>
      <b-form-input
        id="businessName"
        v-model="form.business.name"
        size="md"
        type="text"
        required
        :placeholder="labels.businessName"
        class="profile-form__input"
      ></b-form-input>
    </b-form>
    <!-- Business Basic Information -->
    <b-form
      v-if="section === 'business-basic-info'"
      class="profile-form"
      @submit="onSubmit"
      @reset="onReset"
    ></b-form>
    <!-- Business Additional Information -->
    <b-form
      v-if="section === 'business-additional-info'"
      class="profile-form"
      @submit="onSubmit"
      @reset="onReset"
    >
    </b-form>
    <!-- Form End  -->
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
      form: {
        user: {
          photo: '',
          name: null,
          lastName: null,
          phoneCode: '+57',
          phoneNumber: null,
          email: null,
          title: null,
        },
        business: {
          name: null,
          description: null,
          slug: null,
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
            type: null,
          },
          locations: [
            {
              id: null,
              type: null,
              number: null,
              employees: null,
              phone: null,
            },
            {
              id: null,
              type: null,
              number: null,
              employees: null,
              phone: {
                code: null,
                number: null,
              },
              meta: {
                followers: null,
                url: null,
              },
            },
          ],
        },
      },
    };
  },
  computed: {
    ...mapGetters('profileForm', { labels: 'getProfileFormLabels' }),
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const data = JSON.stringify(this.userProfileForm);
      this.$emit('userForm', data);
      alert(data);
      return false;
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset  values
      this.userProfileForm = {};
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
