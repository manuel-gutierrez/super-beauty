<template>
  <div>
    <div class="container">
      <p>This is the envirment{{ enviroment }}</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
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
    };
  },
  computed: {
    enviroment() {
      return process.env.TEST_VARIABLE;
    },
  },
};
</script>
