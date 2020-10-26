<template>
  <div class="banner">
    <client-only placeholder="Cargando..">
      <nuxt-link v-if="link" :to="data.url">
        <div :style="getBackgroundImage(data.image.src)" :class="type">
          <!-- Large Banner -->
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
          <!-- Page Header -->
          <div
            v-else-if="type == 'page-header'"
            class="row justify-content-center h-100"
          >
            <BannerCaption
              v-if="data.caption"
              :caption-data="data.caption"
              class="col-12 h-100"
            >
            </BannerCaption>
          </div>
          <!-- hero -->
          <div v-else-if="type == 'hero'" class="row">
            <div class="col-12">
              <BannerCaption v-if="data.caption" :caption-data="data.caption">
              </BannerCaption>
            </div>
          </div>
          <BannerCaption v-else :caption-data="data.caption" class="">
          </BannerCaption>
        </div>
      </nuxt-link>
      <div v-else :style="getBackgroundImage(data.image.src)" :class="type">
        <!-- Large Banner -->
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
        <!-- Page Header -->
        <div v-else-if="type == 'page-header'">
          <BannerCaption
            v-if="data.caption"
            :caption-data="data.caption"
            class="d-flex align-items-center justify-content-center text-center"
          >
          </BannerCaption>
        </div>
        <!-- hero -->
        <div v-else-if="type == 'hero'" class="row">
          <div class="col-12">
            <BannerCaption v-if="data.caption" :caption-data="data.caption">
            </BannerCaption>
          </div>
        </div>
        <BannerCaption v-else :caption-data="data.caption" class="">
        </BannerCaption>
      </div>
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
    link: {
      Boolean,
      default: true,
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
