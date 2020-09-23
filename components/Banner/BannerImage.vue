<template>
  <div class="banner">
    <client-only placeholder="Loading...">
      <nuxt-link v-if="data.url" :to="data.url">
        <div :style="getBackgroundImage(data.image.src)" :class="type">
          <div v-if="type == 'promo-large'" class="row">
            <div class="col-12 col-md-4 d-flex justify-content-center pt-3">
              <Logo variant="white"> </Logo>
            </div>
            <div class="col-12 col-md-8">
              <BannerCaption
                v-if="data.caption"
                :caption-data="data.caption"
                class="text-sm-center text-center"
              >
              </BannerCaption>
            </div>
          </div>
          <div v-else-if="type == 'hero'" class="row">
            <div class="col-12">
              <BannerCaption :caption-data="data.caption"> </BannerCaption>
            </div>
          </div>
          <BannerCaption v-else :caption-data="data.caption" class="">
          </BannerCaption>
        </div>
      </nuxt-link>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
  computed: {},
  methods: {
    getBackgroundImage(image) {
      return {
        backgroundImage: `url(${image})`,
      };
    },
  },
};
</script>

<style></style>
