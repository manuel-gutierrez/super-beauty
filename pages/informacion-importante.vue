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
    <!-- Start Content -->
    <div class="important-information-page__accordion" role="tab-list">
      <b-card no-body class="mb-1">
        <div class="important-information-page__accordion__policy">
          <b-card-header
            header-tag="header"
            class="important-information-page__accordion__title"
            role="tab"
          >
            <b-button
              ref="policy-button"
              v-b-toggle="`policy`"
              :aria-controls="`tab`"
              block
            >
              {{ policyContent.title }}
              <span class="">
                <b-icon
                  :id="`tab-chevron-up`"
                  ref="policy"
                  icon="chevron-up"
                ></b-icon>
              </span>
            </b-button>
          </b-card-header>
          <b-collapse
            :id="`policy`"
            accordion="important-information-page__accordion__item"
            role="tab-panel"
            @input="flipArrow('policy')"
          >
            <b-card-body
              class="important-information-page__accordion__item__body"
            >
              <b-card-text>
                <p v-html="policyContent.content"></p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </div>
        <div class="important-information-page__faq">
          <b-card-header
            header-tag="header"
            class="important-information-page__accordion__title"
            role="tab"
          >
            <b-button
              ref="faq-button"
              v-b-toggle="`faq`"
              :aria-controls="`tab`"
              block
            >
              {{ faq.title }}
              <span class="">
                <b-icon
                  :id="`tab-chevron-up`"
                  ref="faq"
                  icon="chevron-up"
                ></b-icon>
              </span>
            </b-button>
          </b-card-header>
          <b-collapse
            :id="`faq`"
            accordion="important-information-page__accordion__item"
            role="tab-panel"
            @input="flipArrow('faq')"
          >
            <b-card-body
              class="important-information-page__accordion__item__body"
            >
              <b-card-text>
                <p v-html="faq.content"></p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </div>
      </b-card>
    </div>
    <!-- // End Content -->
    <!-- Scroll to top -->
    <ScrollToTop />
    <!-- // End Scroll to top -->
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
    faq() {
      return this.getContent('section_1');
    },
  },
  methods: {
    flipArrow(ref) {
      if (this.$refs[ref]) {
        const arrowUp = this.$refs[ref].style;
        const button = this.$refs[`${ref}-button`].style;
        if (arrowUp.transform === 'rotateX(180deg)') {
          arrowUp.transform = '';
          button.color = '#BB29BB';
        } else {
          arrowUp.transform = 'rotateX(180deg)';
          button.color = '#212529';
        }
      }
    },
  },
  head: {
    title: 'Información Importante',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Página de Información Importante',
      },
    ],
  },
};
</script>

<style></style>
