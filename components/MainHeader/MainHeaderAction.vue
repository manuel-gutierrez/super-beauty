<template>
  <div role="banner" class="container-fluid header-section-actions">
    <div
      class="container header-icons d-flex align-items-center justify-content-center"
    >
      <font-awesome-icon
        v-b-toggle="'sidebar-menu'"
        :icon="['fas', 'bars']"
        class="d-sm-none mr-1 mobile-hamburger"
      />
      <div><Search /></div>
      <div class="d-flex header-icons flex-grow-1">
        <Logo />
      </div>
      <div
        class="d-flex justify-content-center align-items-center header-icons"
      >
        <Profile />
        <nuxt-link to="/favoritos"><WishlistCart /></nuxt-link>
        <nuxt-link to="/carrito" prefetch> <Cart /></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style></style>
