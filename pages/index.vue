<template>
  <div class="container-fluid">
    <!-- Carousel -->
    <BannerCarrousel class="row">
      <BannerImage
        :data="banners.carousel.data"
        :type="banners.carousel.type"
      />
      <BannerImage
        :data="banners.carousel.data"
        :type="banners.carousel.type"
      />
      <BannerImage
        :data="banners.carousel.data"
        :type="banners.carousel.type"
      />
    </BannerCarrousel>
    <!-- End Carousel -->
    <div class="container">
      <!-- Section 1 -->

      <div class="section-spacer"></div>
      <section v-if="topSaleProducts.length > 0">
        <div class="row">
          <h2
            class="d-flex justify-content-center w-100 my-3 home-section__header"
          >
            {{ headers.firstSection }}
          </h2>
        </div>
        <div class="row-fluid">
          <div>
            <ProductCardCarousel>
              <ProductCard
                v-for="productItem in topSaleProducts"
                :key="productItem.id"
                :product="productItem"
                class="px-3"
              />
            </ProductCardCarousel>
          </div>
        </div>
        <div class="row d-flex justify-content-center mb-5 mt-3">
          <button class="" href="#">Ver Todos</button>
        </div>
      </section>
      <div class="section-spacer"></div>
      <div class="row">
        <BannerImage
          :data="banners.promo_1.data"
          :type="banners.promo_1.type"
          class="col-12 col-sm-12 col-md-6"
        />

        <BannerImage
          :data="banners.promo_2.data"
          :type="banners.promo_2.type"
          class="col-12 col-sm-12 col-md-6"
        />
      </div>
      <!-- //End Section 1 -->
      <!-- Section 2 -->
      <section v-if="recomendedProducts.length > 0">
        <div class="section-spacer"></div>
        <div class="row">
          <h2 class="d-flex justify-content-center w-100 home-section__header">
            {{ headers.secondSection }}
          </h2>
        </div>
        <div class="row-fluid">
          <div>
            <ProductCardCarousel>
              <ProductCard
                v-for="productItem in recomendedProducts"
                :key="productItem.id"
                :product="productItem"
                class="px-3"
              />
            </ProductCardCarousel>
          </div>
        </div>
        <div class="row d-flex justify-content-center mb-5 mt-3">
          <button class="" href="#">Ver Todos</button>
        </div>
      </section>
      <!-- // End Section 2 -->
      <!-- Section 3 : Sale Products -->
      <div class="section-spacer"></div>
      <section v-if="productsInSale.length > 0">
        <div class="row">
          <h2
            class="d-flex my-3 justify-content-center w-100 my-3 home-section__header"
          >
            {{ headers.thirdSection }}
          </h2>
        </div>
        <div class="row-fluid">
          <div>
            <ProductCardCarousel>
              <ProductCard
                v-for="productItem in productsInSale"
                :key="productItem.id"
                :product="productItem"
                class="px-3"
              />
            </ProductCardCarousel>
          </div>
        </div>
        <div class="row d-flex justify-content-center mb-5 mt-3">
          <button class="" href="#">Ver Todos</button>
        </div>
      </section>
      <!-- //  End Section 3 -->
      <!-- Section 4 -->
      <div class="section-spacer"></div>
      <div class="row">
        <BannerImage
          :data="banners.promo_3.data"
          :type="banners.promo_3.type"
          class="col-12"
        />
      </div>
      <div class="row my-4">
        <BannerImage
          :data="banners.promo_4.data"
          :type="banners.promo_4.type"
          class="col-12"
        />
      </div>
      <div class="section-spacer"></div>
      <!--  //  End Section 4 -->
      <!-- Scroll to top -->
      <ScrollToTop />
      <!-- // End Scroll to top -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('login', {
      isloggedIn: 'getCurrentLoginStatus',
      sessionToken: 'getSessionToken',
    }),
    ...mapGetters('pages/home', {
      banners: 'getBanners',
      headers: 'getHeaders',
    }),
    ...mapGetters('products', {
      products: 'getProducts',
      productsInSale: 'getProductsInSale',
      recomendedProducts: 'getRecomendedProducts',
      topSaleProducts: 'getTopSaleProducts',
    }),
  },
  methods: {
    ...mapMutations('login', ['toggleLoginStatus']),
    logIn() {
      this.toggleLoginStatus();
    },
  },
};
</script>

<style></style>
