<template>
  <div class="container header-section-desktop-nav">
    <div class="header-section-desktop-nav__wrapper">
      <div
        v-for="(item, idx) in menuItems"
        :key="item.text"
        class="header-section-desktop-nav__item"
        @mouseover="showSubMenu(idx)"
        @mouseleave="hideSubMenu(idx)"
      >
        <nuxt-link :to="item.url">{{ item.text }} </nuxt-link>
        <MainHeaderSubMenu
          v-if="item.subMenu"
          ref="subMenu"
          :category-items="categoryData(item.categoryId)"
          @hide="hideSubMenu(idx)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('menu', { menuItems: 'getMenu' }),
    ...mapGetters('categories', {
      categoryData: 'getCategory',
    }),
  },
  methods: {
    showSubMenu(index) {
      if (this.$refs.subMenu[index - 1]) {
        const itemInMenu = this.$refs.subMenu[index - 1].$el.style;
        if (itemInMenu.display === '') {
          itemInMenu.display = 'flex';
        }
      }
    },
    hideSubMenu(index) {
      if (this.$refs.subMenu[index - 1]) {
        const itemInMenu = this.$refs.subMenu[index - 1].$el.style;
        if (itemInMenu.display === 'flex') {
          itemInMenu.display = '';
        }
      }
    },
  },
};
</script>

<style></style>
