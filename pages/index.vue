<template>
  <div>
    <SfHeader
      :class="customClass"
      :title="title"
      :logo="logo"
      :active-icon="activeIcon"
      :search-placeholder="searchPlaceholder"
      :search-value="searchValue"
      :cart-icon="cartIcon"
      :wishlist-icon="wishlistIcon"
      :is-sticky="isSticky"
      :account-icon="accountIcon"
      :style="spacer"
      :cart-items-qty="cartItemsQty"
      :wishlist-items-qty="wishlistItemsQty"
      @click:cart="alert('@click:cart')"
      @click:wishlist="alert('@click:wishlist')"
      @click:account="alert('@click:account')"
      @change:search="searchValue = $event"
    >
      <template #navigation>
        <SfHeaderNavigationItem v-for="item in navigation" :key="item">
          <template slot="desktop-navigation-item">
            <SfLink href="#">{{ item }}</SfLink>
          </template>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 155vh;
        background-color: #f2f2f2;
      "
    >
      [page content]
    </div>
  </div>
</template>
<script>
import { SfHeader } from '@storefront-ui/vue'
import { SfLink } from '@storefront-ui/vue'
export default {
  components: {
    SfHeader,
    SfLink,
  },
  data() {
    return {
      isMobile: false,
      navigation: ['women', 'man', 'kids'],
      searchValue: '',
      title: 'Storefront UI',
      logo: {
        mobile: { url: '/assets/logo.svg' },
        desktop: { url: '/assets/logo.svg' },
      },
      activeIcon: 'account',
      isSticky: true,
      searchPlaceholder: 'Search for items',
      cartIcon: 'empty_cart',
      wishlistIcon: 'heart',
      accountIcon: 'profile',
      cartItemsQty: '0',
      wishlistItemsQty: '0',
    }
  },
}
</script>
