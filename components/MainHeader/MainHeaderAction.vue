<template>
  <div role="banner" class="container-fluid header-section-actions">
    <div
      class="container header-icons d-flex align-items-center justify-content-center"
    >
      <font-awesome-icon
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
        <Wishlist />
        <Cart />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style></style>
