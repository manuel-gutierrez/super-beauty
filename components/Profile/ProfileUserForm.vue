<template>
  <b-form
    class="profile-info-accordion-form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <b-form-input
      id="name"
      v-model="userProfileForm.name"
      size="md"
      required
      :placeholder="labels.name"
      type="text"
      class="profile-info-accordion-form__input"
    ></b-form-input>
    <b-form-input
      id="lastName"
      v-model="userProfileForm.lastName"
      size="md"
      required
      :placeholder="labels.lastName"
      type="text"
      class="profile-info-accordion-form__input"
    ></b-form-input>
    <b-form-input
      id="phoneNumber"
      v-model="userProfileForm.phoneNumber"
      size="md"
      required
      :placeholder="labels.phoneNumber"
      type="tel"
      class="profile-info-accordion-form__input"
    ></b-form-input>
    <b-form-input
      id="email"
      v-model="userProfileForm.email"
      size="md"
      required
      :placeholder="labels.email"
      type="email"
      class="profile-info-accordion-form__input"
    ></b-form-input>
    <b-form-input
      id="title"
      v-model="userProfileForm.title"
      size="md"
      required
      :placeholder="labels.title"
      type="text"
      class="profile-info-accordion-form__input"
    ></b-form-input>
    <b-form-input
      id="businessName"
      v-model="userProfileForm.pan"
      size="md"
      type="text"
      required
      :placeholder="labels.businessName"
      class="profile-info-accordion-form__input"
    ></b-form-input>
  </b-form>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      userProfileForm: {
        name: null,
        lastName: null,
        phoneCode: '+57',
        phoneNumber: null,
        email: null,
        title: null,
        businessName: null,
      },
    };
  },
  computed: {
    ...mapGetters('profileForm', { labels: 'getUserFormLabels' }),
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
      this.userProfileForm = {
        name: null,
        lastName: null,
        phoneCode: '+57',
        phoneNumber: null,
        email: null,
        title: null,
        businessName: null,
      };
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
