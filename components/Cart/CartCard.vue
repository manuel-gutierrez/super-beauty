<template>
  <div class="cart-card">
    <div class="col-3 col-md-3 cart-card__image">
      <ProductCardImage
        :url="product.images[0].url"
        :caption="product.images[0].caption"
      />
    </div>
    <div class="col-9 cart-card__content-wrapper">
      <div class="col-md-4 cart-card__caption">
        <div class="cart-card__caption__title">
          <h2>{{ product.title }}</h2>
        </div>
        <div class="cart-card__caption__reference">
          {{ product.reference }}
        </div>
        <div class="cart-card__caption__sku">sku: {{ product.sku }}</div>
        <div class="cart-card__caption__color">
          Color: {{ product.color.name }}
        </div>
      </div>
      <div class="col-md-2 cart-card__counter">
        <ProductAddToCart :product="product" :modal="false" :button="false">
        </ProductAddToCart>
      </div>
      <div class="col-12 col-md-3 cart-card__price-actions">
        <div class="cart-card__price"></div>
        <div class="cart-cart__actions"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
