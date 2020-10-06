<template>
  <div class="container product-detail-page">
    <!-- Breadcrumbs -->
    <div class="row">
      <div class="col-md-4 mr-auto">
        <ProductBreadcrumbs
          class="product-detail-page__breadcrumbs"
          :category="product.category"
        ></ProductBreadcrumbs>
      </div>
    </div>
    <!--//END Breadcrumbs  -->
    <!-- Product First Section -->
    <div class="row">
      <div class="col-md-4 product-detail-page__images">
        <ProductImageCarousel class="col-12" :dots="true">
          <div v-for="image in product.images" :key="image.ordinal">
            <ProductLabel
              :label-type="product.label.type"
              :label-text="product.label.text"
            ></ProductLabel>
            <ProductCardImage
              :url="image.url"
              :caption="image.caption"
            ></ProductCardImage>
          </div>
        </ProductImageCarousel>
        <div class="product-detail-page__image-detail">
          <ProductImageCarousel class="" :items-to-display="4" :arrows="true">
            <div
              v-for="image in product.customAttributeValues.IMAGE_DETAIL.data"
              :key="image.ordinal"
            >
              <ProductCardImage
                :url="image.url"
                :caption="image.caption"
                class="ml-3 product-detail-page__image-detail__image"
              ></ProductCardImage>
            </div>
          </ProductImageCarousel>
        </div>
      </div>
      <div class="col-md-8 d-flex justify-content-start flex-wrap">
        <!-- Product Info -->
        <div class="col-md-8 product-detail-page__info">
          <section class="product-detail-page__product-detail">
            <div class="product-detail-page__product-name">
              <h2>{{ product.title }}</h2>
            </div>
            <div class="product-detail-page__product-reference">
              {{ product.reference }}
            </div>
            <div class="product-detail-page__product-sku">
              sku: {{ product.sku }}
            </div>
          </section>
          <section class="product-detail-page__rating">
            <div class="row d-flex align-items-center">
              <span
                class="col-4 pl-0 align-items-center product-detail-page__rating__stars"
                ><ProductRating :rating="product.rating.score"></ProductRating
              ></span>
              <span class="col-2 pl-0 product-detail-page__rating__counter"
                >14 Reseñas</span
              >
              <span class="col-6 product-detail-page__rating__likes"
                ><ProductLike>
                  <span>2.7K likes</span>
                </ProductLike>
              </span>
            </div>
          </section>
          <section class="product-detail-page__description">
            <p>{{ product.description }}</p>
          </section>
        </div>
        <!--// END Product Info -->
        <!-- Product Pricing -->
        <div
          class="col-md-4 mr-0 pr-0 product-detail-page__pricing d-flex-block justify-content-end text-right"
        >
          <div
            v-for="price in product.pricing"
            :key="price.pricingType"
            class="ml-auto mr-0 pr-0 product-detail-page__pricing__price"
          >
            <h3
              v-if="price.pricingType == 'VOLUME_PRICING'"
              v-b-tooltip.hover="{
                id: `${price.pricingType}`,
                variant: 'primary',
                placement: 'top',
                customClass: 'product-detail-page__pricing__price__tooltip',
              }"
              title="Compra $600.000 y recibe el envío gratis"
              class="product-detail-page__pricing__price__label"
            >
              {{ price.pricingLabel }}
            </h3>
            <h3 v-else class="product-detail-page__pricing__price__label">
              {{ price.pricingLabel }}
            </h3>

            <money-format
              :value="price.priceMoney.amount"
              :locale="'es-co'"
              :currency-code="price.priceMoney.currency"
              :subunits-value="false"
              :hide-subunits="true"
              class="product-detail-page__pricing__price__amount"
            ></money-format>
          </div>
        </div>
        <!--// END Product Pricing -->
        <!-- Variations -->
        <section class="col-12 product-detail-page__product-variations">
          <div class="product-detail-page__pproduct-variations__size d-flex">
            Tamaño:
            <ProductSizeTiles
              :tiles="weights"
              :selected="0"
              class="d-flex justify-content-start align-content-center"
            ></ProductSizeTiles>
          </div>
          <div class="product-detail-page__product-variations__colors">
            <p>Color: {{ product.customAttributeValues.COLORS.name }}</p>
            <ProductColorTiles
              :color-tiles="product.customAttributeValues.COLORS.data"
            ></ProductColorTiles>
          </div>
        </section>
        <!--// END Product Variations -->
        <!-- Actions -->
        <section class="col-12 d-flex product-detail-page__actions">
          <ProductAddToCart class="col-md-4"></ProductAddToCart>
          <div class="col-md-4"><button>WISHLIST</button></div>
          <div class="col-md-4"><button>SHARE</button></div>
        </section>
        <!--// END Product Actions -->
      </div>
    </div>
    <!--// END Product First Section -->
    <!-- Product Second Section -->
    <div class="row"></div>
    <!--//END Product Second Section -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('login', {
      isloggedIn: 'getCurrentLoginStatus',
      sessionToken: 'getSessionToken',
    }),
    ...mapGetters('products', {
      getProduct: 'getProductById',
    }),
    product() {
      return this.getProduct(this.$route.params.id);
    },
    weights() {
      return ['1.2g', '3.4g'];
    },
  },
  methods: {},
};
</script>

<style></style>
