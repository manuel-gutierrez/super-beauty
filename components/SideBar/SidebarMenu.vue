<template>
  <div class="d-md-none sidebar-menu">
    <b-sidebar id="sidebar-menu" title="" backdrop shadow no-header>
      <template #default="{ hide }">
        <div class="container">
          <div class="sidebar-menu__header">
            <b-img
              class="sidebar-menu__header__logo"
              alt="Super Beauty Logo"
              src="@/assets/images/mobile-menu-logo.png"
              :srcset="require('@/assets/images/mobile-menu-logo@2x.png')"
            ></b-img>
            <div class="sidebar-menu__header__close" @click="hide">
              <em class="sidebar-menu__header__close__icon">x</em>
            </div>
          </div>
          <div class="sidebar-menu__content"></div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
export default {};
</script>

<style></style>
