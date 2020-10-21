<template>
  <div class="d-md-none sidebar-menu">
    <b-sidebar id="sidebar-menu" title="" backdrop shadow no-header>
      <template #default="{ hide }">
        <div class="container">
          <div class="sidebar-menu__header">
            <nuxt-link to="/">
              <b-img
                class="sidebar-menu__header__logo"
                alt="Super Beauty Logo"
                src="@/assets/images/mobile-menu-logo.png"
                :srcset="require('@/assets/images/mobile-menu-logo@2x.png')"
              ></b-img>
            </nuxt-link>
            <div class="sidebar-menu__header__close" @click="hide">
              <em class="sidebar-menu__header__close__icon">x</em>
            </div>
          </div>

          <div class="sidebar-menu__accordion" role="tab-list">
            <b-card
              v-for="(tab, index) in menuItems"
              :key="tab.text"
              no-body
              class="mb-1"
            >
              <b-card-header
                header-tag="header"
                class="sidebar-menu__accordion__title"
                role="tab"
              >
                <div v-if="!tab.subMenu">
                  <nuxt-link :to="tab.url">
                    <p>{{ tab.text }}</p>
                  </nuxt-link>
                </div>
                <div v-else>
                  <b-button
                    v-b-toggle="`tab-${index}`"
                    :aria-controls="`tab-${index}`"
                    block
                  >
                    <nuxt-link :to="tab.url">
                      {{ tab.text }}
                    </nuxt-link>
                    <span class="ml-auto">
                      <b-icon
                        :id="`tab-chevron-down-${index}`"
                        ref="arrowUp"
                        icon="chevron-up"
                      ></b-icon>
                    </span>
                  </b-button>
                </div>
              </b-card-header>
              <b-collapse
                :id="`tab-${index}`"
                accordion="sidebar-menu__accordion__item"
                role="tab-panel"
                @input="flipArrow(index)"
              >
                <b-card-body
                  v-if="tab.subMenu"
                  class="sidebar-menu__accordion__item__body"
                >
                  <nuxt-link
                    v-for="sub in categoryData(tab.categoryId).SubCategories"
                    :key="sub.id"
                    :to="`/productos/${tab.text.toLowerCase()}?filter=category&categoryId=${
                      sub.id
                    }`"
                  >
                    <b-card-text>
                      {{ sub.name }}
                    </b-card-text>
                  </nuxt-link>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </template>
    </b-sidebar>
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
    flipArrow(index) {
      if (this.$refs.arrowUp[index - 1]) {
        const arrowUp = this.$refs.arrowUp[index - 1].style;
        if (arrowUp.transform === 'rotateX(180deg)') {
          arrowUp.transform = '';
        } else {
          arrowUp.transform = 'rotateX(180deg)';
        }
      }
    },
  },
};
</script>

<style></style>
