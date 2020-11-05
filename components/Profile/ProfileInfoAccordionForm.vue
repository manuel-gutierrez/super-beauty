<template>
  <div class="profile-info-accordion-form" role="tab-list">
    <ProfileInfoAccordionItem id="contact-info" :title="labels.firstTab.title">
      <template v-slot:item-body>
        <ProfileUserForm />
      </template>
    </ProfileInfoAccordionItem>
    <ProfileInfoAccordionItem id="biz-info" :title="labels.secondTab.title">
      <template v-slot:item-body>
        <p>{{ merchant.type }}</p>
        <p>{{ merchant.merchantIdType }} : {{ merchant.merchantId }}</p>
        <p>{{ merchant.state }}, {{ merchant.city }}</p>
      </template>
    </ProfileInfoAccordionItem>
    <ProfileInfoAccordionItem id="biz-more-info" :title="labels.thirdTab.title">
      <template v-slot:item-body>
        <div>
          <p>{{ merchant.description }}</p>
          <!-- Physical Location -->
          <p>
            <strong>{{ locationEnums[physicalLocation.type] }}</strong>
          </p>
          <p>{{ physicalLocation.number }} {{ labels.thirdTab.stores }}</p>
          <p>
            {{ physicalLocation.employees }} {{ labels.thirdTab.employees }}
          </p>
        </div>

        <!-- Virtual Location -->
        <div>
          <strong>
            <p>
              {{ locationEnums[virtualLocation.type] }}
            </p>
          </strong>
          <p>{{ merchant.email }}</p>
          <p>
            {{ new Intl.NumberFormat().format(virtualLocation.meta.followers) }}
            {{ labels.thirdTab.followers }}
          </p>
          <p>+ {{ merchant.phone.code }} {{ merchant.phone.number }}</p>
          <a :href="virtualLocation.meta.url"
            ><p>
              {{ virtualLocation.meta.url }}
            </p></a
          >
        </div>
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
