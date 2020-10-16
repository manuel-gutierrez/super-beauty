<template>
  <div class="container product-detail-page">
    <!-- Breadcrumbs -->
    <div class="row product-detail-page__breadcrumbs">
      <div class="col-md-4 mr-auto">
        <ProductBreadcrumbs
          class=""
          :category="product.category"
        ></ProductBreadcrumbs>
      </div>
    </div>
    <!--//END Breadcrumbs  -->

    <!-- Section 1: Image and Pricing -->
    <div class="row product-detail-page__product-details">
      <div class="col-md-4 product-detail-page__images">
        <!-- Main Image  -->
        <ProductImageCarousel class="mt-2 col-12" :dots="true">
          <div v-for="image in product.images" :key="image.ordinal">
            <ProductLabel
              :label-type="product.label.type"
              :label-text="product.label.text"
            ></ProductLabel>
            <ProductCardImage :url="image.url" :caption="image.caption">
              <b-img
                v-if="isSustainable"
                src="@/assets/images/sustainable-tag.png"
                class="sustainable-tag"
              ></b-img>
            </ProductCardImage>
          </div>
        </ProductImageCarousel>
        <!-- Image Detail -->
        <div class="product-detail-page__image-detail">
          <ProductImageCarousel
            class="mt-2 product-detail-page__image-detail__carousel"
            :items-to-display="4"
            :arrows="true"
          >
            <div
              v-for="image in product.customAttributeValues.IMAGE_DETAIL.data"
              :key="image.ordinal"
            >
              <ProductCardImage
                :url="image.url"
                :caption="image.caption"
                class="ml-3 product-detail-page__image-detail__image"
              >
              </ProductCardImage>
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
          <!-- PRICING SECTION ::: MOBILE  -->
          <section>
            <div class="d-sm-none d-block product-detail-page__pricing">
              <div
                v-for="price in product.pricing"
                :key="price.pricingType"
                class="mr-0 pr-0 product-detail-page__pricing__price"
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
          </section>
          <section class="product-detail-page__rating">
            <div class="row align-items-center justify-content-start">
              <div
                class="col-6 col-md-4 pl-0 align-items-center product-detail-page__rating__stars"
              >
                <ProductRating :rating="product.rating.score"></ProductRating>
              </div>
              <div
                class="col-3 col-md-2 pl-0 product-detail-page__rating__counter"
              >
                14 Reseñas
              </div>
              <div class="col-3 col-md-6 product-detail-page__rating__likes">
                <ProductLike> <label> 2.7K likes</label> </ProductLike>
              </div>
            </div>
          </section>
          <section class="product-detail-page__description">
            <p>{{ product.description }}</p>
          </section>
        </div>
        <!--// END Product Info -->
        <!-- Product Pricing -->
        <div
          class="d-none d-md-block justify-content-end text-right col-md-4 mr-0 pr-0 product-detail-page__pricing"
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

        <section class="col-md-12 mx-0 product-detail-page__product-variations">
          <div class="product-detail-page__product-variations__size d-flex">
            Tamaño:
            <ProductSizeTiles
              :tiles="weights"
              :selected="0"
              class="d-flex justify-content-start align-content-center"
            ></ProductSizeTiles>
          </div>
          <div
            class="row d-none d-md-flex mt-3 product-detail-page__product-variations__colors"
          >
            <div class="col-md-12 mb-2 justify-content-start">
              Color: {{ product.customAttributeValues.COLORS.name }}
            </div>
            <ProductColorTiles
              :color-tiles="product.customAttributeValues.COLORS.data"
              class="col-md-12"
            ></ProductColorTiles>
          </div>
        </section>
        <!--// END Product Variations -->
        <!-- Actions -->
        <section
          class="col-md-12 mt-4 mx-0 d-flex justify-content-start align-content-center flex-wrap product-detail-page__actions"
        >
          <div class="mr-2 product-detail-page__actions__add-to-cart">
            <ProductAddToCart :product="product"></ProductAddToCart>
          </div>
          <div class="mr-2 product-detail-page__actions__wishlist">
            <WishlistButton
              :in-wishlist="product.isInWishlist"
              @update-wishlist="toggleWishlistStatus()"
            ></WishlistButton>
          </div>
          <div class="mr-2 product-detail-page__actions__share">
            <ShareButton @shareProduct="shareProduct()" />
          </div>
        </section>
        <!-- TILES ::: MOBILE  -->
        <section
          class="col-md-12 d-md-none pl-0 product-detail-page__product-variations__colors"
        >
          <div class="">
            <ProductColorTiles
              :color-tiles="product.customAttributeValues.COLORS.data"
            ></ProductColorTiles>
          </div>
        </section>

        <!--// END Product Actions -->
      </div>
    </div>
    <!--// END Section 1 -->
    <div class="section-spacer"></div>
    <!-- Section 2: Product Tabs -->
    <div class="row product-detail-page__tabs">
      <ProductTabs class="col-md-12" :tabs="productTabs"></ProductTabs>
    </div>
    <!--//END Section 2 -->
    <div class="section-spacer"></div>

    <!-- Section 3: Related Products-->
    <div class="row product-detail-page__related-products">
      <div class="col-md-12 section-header">
        <h2>{{ relatedProducts.title }}</h2>
      </div>
      <!-- ::: DESKTOP -->
      <div
        class="col-md-12 d-none d-md-flex product-detail-page__related-products__products"
      >
        <ProductCardCarousel :items-to-display="3" :bullets="true">
          <ProductCard
            v-for="relatedProduct in recomendedProducts"
            :key="relatedProduct.ordinal"
            :product="relatedProduct"
            variation="large"
          />
        </ProductCardCarousel>
      </div>
      <!-- ::: MOBILE  -->
      <div
        class="col-md-12 d-md-none product-detail-page__related-products__products"
      >
        <ProductCard
          v-for="relatedProduct in recomendedProducts"
          :key="relatedProduct.ordinal"
          :product="relatedProduct"
          variation="large"
        />
      </div>
    </div>
    <!--//END Section 3-->

    <div class="section-spacer"></div>
    <!-- Section 4: Rating and Comments-->
    <div v-if="productRating" class="row product-detail-page__ratings">
      <div class="col-md-12 section-header">
        <h2>{{ ratingSection.title }}</h2>
      </div>
      <div class="col-md-12 product-detail-page__ratings__data">
        <div
          class="col-md-6 d-none d-md-flex product-detail-page__ratings__progress-bars"
        >
          <ProgressBarRatingGroup :rates="productRating.rates" class="w-100" />
        </div>
        <div
          class="col-md-3 d-none d-md-flex product-detail-page__ratings__stars justify-content-center align-self-center"
        >
          <ProductRating
            :rating="productRating.scoreAvg"
            :score-visible="true"
          ></ProductRating>
        </div>
        <div class="col-md-3 product-detail-page__ratings__recommended">
          <div class="row">
            <button>ESCRIBE UNA RESEÑA</button>
          </div>
          <!-- :: DESKTOP -->
          <div
            class="row d-none d-md-flex product-detail-page__ratings__percentage"
          >
            <div>
              <p class="text-center">82%</p>
              <p
                class="text-center mt-4 product-detail-page__ratings__percentage-label"
              >
                {{ ratingSection.PercentageLabel }}
              </p>
            </div>
          </div>
          <!-- :: MOBILE -->
          <section
            class="col-12 d-md-none px-0 product-detail-page__ratings__percentage"
          >
            <div class="col-6">
              <ProductRating
                :rating="productRating.scoreAvg"
                :score-visible="true"
              ></ProductRating>
            </div>
            <div class="col-6 pr-0">
              <p class="text-center">82%</p>
              <p
                class="text-center product-detail-page__ratings__percentage-label"
              >
                {{ ratingSection.PercentageLabel }}
              </p>
            </div>
          </section>
        </div>
      </div>
      <div class="col-md-12 product-detail-page__ratings__comments">
        <div
          class="col-md-12 product-detail-page__ratings__comments__filters justify-content-center align-items-center"
        >
          <Comments :feed="productRating.rates" :items-to-show="3"></Comments>
        </div>
        <div
          class="product-detail-page__ratings__comments__feed row w-100"
        ></div>
      </div>
    </div>
    <!--//END Section 4  -->
    <div class="section-spacer"></div>

    <!-- Section 5: Photos -->
    <div class="row product-detail-page__photos">
      <div class="col-md-12 section-header">
        <h2>{{ productPhotos.title }}</h2>
      </div>
      <div class="row w-100 justify-content-around">
        <div
          v-for="photo in photosToDownload"
          :key="photo.ordinal"
          class="d-none d-md-flex"
        >
          <ProductDownloadImage :url="photo.url" :caption="photo.caption" />
        </div>
        <div class="w-100">
          <ProductImageCarousel :items-to-display="2" :arrows="true">
            <div
              v-for="photo in photosToDownload"
              :key="photo.ordinal"
              class="d-sm-none"
            >
              <ProductDownloadImage :url="photo.url" :caption="photo.caption" />
            </div>
          </ProductImageCarousel>
        </div>
        <div
          class="row w-100 justify-content-center product-detail-page__photos__button"
        >
          <button
            class="d-flex justify-content-center align-items-center"
            @click="downloadProductImages(photosToDownload)"
          >
            {{ productPhotos.buttonTitle }} <SvgIcon icon="download-icon" />
          </button>
        </div>
      </div>
    </div>
    <!--//END Section 5 -->

    <div class="section-spacer"></div>
    <!-- Section 6: Similar Products -->
    <div class="row product-detail-page__similar-products">
      <div class="col-md-12 section-header">
        <h2>{{ similarProducts.title }}</h2>
      </div>
      <div class="col-md-12">
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
    <!--//END Section 6 -->
    <div class="section-spacer"></div>
    <div class="d-md-none section-spacer mb-5"></div>
    <ScrollToTop />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('login', {
      isloggedIn: 'getCurrentLoginStatus',
      sessionToken: 'getSessionToken',
    }),
    ...mapGetters('products', {
      getProduct: 'getProductById',
      recomendedProducts: 'getRecomendedProducts',
    }),
    ...mapGetters('ratings', {
      getProductRating: 'getProductRating',
    }),
    ...mapGetters('pages/product-detail', {
      getSection: 'getSection',
    }),

    relatedProducts() {
      return this.getSection('section_3');
    },
    ratingSection() {
      return this.getSection('section_4');
    },
    productRating() {
      return this.getProductRating(this.product.id);
    },
    productPhotos() {
      return this.getSection('section_5');
    },
    similarProducts() {
      return this.getSection('section_6');
    },
    product() {
      return this.getProduct(this.$route.params.id);
    },
    weights() {
      return ['1.2g', '3.4g'];
    },
    productTabs() {
      return this.getTabs();
    },
    photosToDownload() {
      return this.product.customAttributeValues.PRODUCT_DOWNLOAD_IMAGES.data;
    },
    isSustainable() {
      return this.product.tags.includes('SUSTAINABLE');
    },
  },
  methods: {
    ...mapMutations('wishlist', {
      incrementWishlistCounter: 'incrementWishlistCounter',
      decrementWishlistCounter: 'decrementWishlistCounter',
    }),
    ...mapActions('products', ['updateWishlist']),
    toggleWishlistStatus() {
      if (!this.product.isInWishlist) {
        this.incrementWishlistCounter();
        this.updateWishlist({
          id: this.product.id,
          value: true,
        });
      } else {
        this.decrementWishlistCounter();
        this.updateWishlist({
          id: this.product.id,
          value: false,
        });
      }
    },
    shareProduct() {
      // This is a place holder for future use.
      return false;
    },
    getTabs() {
      const tabsItems = [
        'DETAILS',
        'INSTRUCTIONS',
        'INGREDIENTS',
        'BRAND',
        'DELIVERY_RETURNS',
      ];
      const tabs = [];
      for (const property in this.product.customAttributeValues) {
        if (tabsItems.includes(property)) {
          tabs.push(this.product.customAttributeValues[property]);
        }
      }
      return tabs;
    },
    downloadImage(fileUrl, fileName) {
      this.$axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'blob',
      })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${fileName}.png`);
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          throw new Error(`Error downloading Image: ${error}`);
        });
    },
    async downloadProductImages(images) {
      await images.forEach((image) => {
        this.downloadImage(image.url, image.caption);
      });
    },
  },
};
</script>

<style></style>
