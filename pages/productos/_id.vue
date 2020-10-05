<template>
  <div class="container product-detail-page">
    <!-- Breadcrumbs -->
    <div class="row">
      <div class="col-4 mr-auto">
        <ProductBreadcrumbs
          class="product-detail-page__breadcrumbs"
          :category="product.category"
        ></ProductBreadcrumbs>
      </div>
    </div>
    <!--//END Breadcrumbs  -->
    <!-- Product First Section -->
    <div class="row">
      <div class="col-4 product-detail-page__images">
        <ProductImageCarousel class="col-12">
          <div v-for="image in product.images" :key="image.orinal">
            <ProductCardImage
              :url="image.url"
              :caption="image.caption"
            ></ProductCardImage>
          </div>
        </ProductImageCarousel>
        <div class="col-12">Imagen Opciones</div>
      </div>
      <div class="col-8 d-flex justify-content-start flex-wrap">
        <!-- Product Info -->
        <div class="col-8 product-detail-page__info">
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
          class="col-4 mr-0 pr-0 product-detail-page__pricing d-flex-block justify-content-end text-right"
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
        <section class="product-detail-page__product-variations">
          <div class="col-12 product-detail-page__pproduct-variations__size">
            Size
          </div>
          <div class="col-12 product-detail-page__product-variations__colors">
            Colors
          </div>
        </section>
        <!--// END Product Variations -->
        <!-- Actions -->
        <sections
          class="col-12 product-detail-page__product-variations__actions"
        >
          Actions
        </sections>
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
  },
  mounted() {},
};
</script>

<style></style>
