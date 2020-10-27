<template>
  <div class="quick-view-modal">
    <b-modal :id="productId" size="lg" hide-footer no-stacking>
      <template v-slot:modal-title class="quick-view-modal__header">
        <h3>{{ headerContent.title }}</h3>
      </template>
      <div class="col-md-6 quick-view-modal__product">
        <div class="quick-view-modal__product__image">
          <ProductCardImage
            :url="product.images[0].url"
            :caption="product.images[0].caption"
          ></ProductCardImage>
          <ProductColorTiles
            :color-tiles="product.customAttributeValues.COLORS.data"
            :items-to-show-desktop="4"
            :items-to-show-mobile="4"
            :show-arrows="false"
          ></ProductColorTiles>
        </div>
      </div>

      <div class="col-md-6 quick-view-modal__info">
        <div class="quick-view-modal__name">
          <h3>{{ product.title }}</h3>
        </div>
        <div class="quick-view-modal__reference">
          <h4>{{ product.reference }}</h4>
        </div>
        <div class="quick-view-modal__score">
          <div class="quick-view-modal__score__rating">
            <ProductRating :rating="product.rating.score"></ProductRating>
            <div class="quick-view-modal__score__rating__label">
              <p>
                {{ product.rating.score }} {{ productInfoContent.ratingLabel }}
              </p>
            </div>
          </div>
          <div class="quick-view-modal__score__like">
            <ProductLike />
            <p class="quick-view-modal__score__like_label">
              {{ productInfoContent.likes }}
            </p>
          </div>
        </div>
        <div class="quick-view-modal__description">
          <p>{{ product.description }}</p>
        </div>
        <div class="quick-view-modal__pricing">
          <div v-for="price in product.pricing" :key="price.pricingType">
            <!-- Sale Price  -->
            <div v-if="product.sale.active">
              <ProductCardCaption
                v-if="price.pricingType === 'VOLUME_PRICING'"
                :title="price.pricingLabel"
                :amount="price.priceMoney.amount"
                :discounted-price="price.salePriceMoney.amount"
                :currency="price.salePriceMoney.currency"
                type="price"
              >
              </ProductCardCaption>
              <ProductCardCaption
                v-if="price.pricingType === 'FIXED_PRICING'"
                :title="price.pricingLabel"
                :amount="price.priceMoney.amount"
                :discounted-price="price.salePriceMoney.amount"
                :currency="price.salePriceMoney.currency"
                type="price-secondary"
              >
              </ProductCardCaption>
            </div>
            <div v-else>
              <ProductCardCaption
                v-if="price.pricingType === 'VOLUME_PRICING'"
                :title="price.pricingLabel"
                :amount="price.priceMoney.amount"
                :currency="price.priceMoney.currency"
                type="price"
              >
              </ProductCardCaption>
              <ProductCardCaption
                v-if="price.pricingType === 'FIXED_PRICING'"
                :title="price.pricingLabel"
                :amount="price.priceMoney.amount"
                :currency="price.priceMoney.currency"
                type="price-secondary"
              >
              </ProductCardCaption>
            </div>
          </div>
        </div>
        <div class="quick-view-modal__sizes">
          <p>{{ productInfoContent.size }}</p>
          <ProductSizeTiles
            :tiles="product.customAttributeValues.WEIGHTS.data"
            :selected="0"
            class="d-flex justify-content-start align-content-center"
          ></ProductSizeTiles>
        </div>
        <div class="quick-view-modal__actions">
          <div class="quick-view-modal__actions__add-to-cart">
            <ProductAddToCart :product="product"></ProductAddToCart>
          </div>
          <div class="quick-view-modal__actions__wishlist">
            <WishlistButton
              :in-wishlist="product.isInWishlist"
              :only-icon="true"
              @update-wishlist="toggleWishlistStatus()"
            ></WishlistButton>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  props: {
    productId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      modalId: null,
    };
  },
  computed: {
    ...mapGetters('products', {
      getProductById: 'getProductById',
    }),
    ...mapGetters('quickViewModal', {
      getModalContent: 'getModalContent',
    }),
    headerContent() {
      return this.getModalContent('section_0');
    },
    productInfoContent() {
      return this.getModalContent('section_1');
    },
    product() {
      return this.getProductById(this.productId);
    },
    productFixedPrice() {
      return this.getPrice('FIXED_PRICING');
    },
    productVolumePrice() {
      return this.getPrice('FIXED_PRICING');
    },
  },
  methods: {
    ...mapActions('products', ['updateWishlist']),
    ...mapMutations('wishlist', {
      incrementWishlistCounter: 'incrementWishlistCounter',
      decrementWishlistCounter: 'decrementWishlistCounter',
      addProductToWishlistCart: 'addProductToWishlistCart',
      removeProductFromWishListCart: 'removeProductFromWishListCart',
    }),
    getPrice(type) {
      const pricingItem = this.product.pricing.find(
        (price) => price.pricingType === type
      );
      if (pricingItem) {
        return pricingItem.priceMoney;
      } else {
        return Error('Product do not have this price type: ' + type);
      }
    },
    toggleWishlistStatus() {
      if (!this.product.isInWishlist) {
        this.incrementWishlistCounter();
        this.updateWishlist({
          id: this.product.id,
          value: true,
        });
        this.addProductToWishlistCart(this.product.id);
      } else {
        this.decrementWishlistCounter();
        this.updateWishlist({
          id: this.product.id,
          value: false,
        });
        this.removeProductFromWishListCart(this.product.id);
      }
    },
  },
};
</script>

<style></style>
