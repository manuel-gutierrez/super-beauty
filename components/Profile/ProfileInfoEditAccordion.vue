<template>
  <div class="profile-info-edit-accordion" role="tab-list">
    <ProfileInfoAccordionItem id="user-form" :title="labels.firstTab.title">
      <template v-slot:item-body>
        <ProfileForm section="user" />
      </template>
    </ProfileInfoAccordionItem>
    <ProfileInfoAccordionItem
      id="business-form-1"
      :title="labels.secondTab.title"
    >
      <template v-slot:item-body>
        <ProfileForm section="business-basic-info" />
      </template>
    </ProfileInfoAccordionItem>
    <ProfileInfoAccordionItem
      id="business-additional-info"
      :title="labels.thirdTab.title"
    >
      <template v-slot:item-body>
        <ProfileForm section="business-additional-info" />
      </template>
    </ProfileInfoAccordionItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('merchant', {
      merchant: 'getMerchantData',
    }),
    ...mapGetters('user', {
      user: 'getUserData',
    }),
    ...mapGetters('enums', {
      getEnums: 'getEnum',
    }),
    ...mapGetters('pages/profile', ['getProfilePageContent']),
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
};
</script>

<style></style>
