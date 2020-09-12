<template>
  <div class="container-fluid footer-section-links">
    <div class="container d-flex justify-content-between flex-wrap py-2 px-4">
      <div
        v-for="{ title, items, type } in sections"
        :key="type"
        class="section"
      >
        <div v-if="type === 'links'">
          <h4>{{ title }}</h4>
          <ul>
            <li v-for="{ text, url } in items" :key="text" class="py-1">
              <a :href="url">{{ text }}</a>
            </li>
          </ul>
        </div>

        <div v-else-if="type === 'paragraphs'">
          <h4>{{ title }}</h4>
          <div v-for="{ text } in items" :key="text">
            <p>{{ text }}</p>
          </div>
        </div>
        <div v-else-if="type === 'icons'">
          <h4>{{ title }}</h4>
          <div
            v-for="{ name, url } in items"
            :key="name"
            class="d-inline-flex pr-2"
          >
            <a
              class="footer-icons d-flex align-items-center justify-content-center"
              :href="url"
              ><font-awesome-icon :icon="['fab', name]"
            /></a>
          </div>
        </div>

        <!-- <div v-else>Not A/B/C</div>  // not show-->
      </div>
    </div>
  </div>
</template>

<script>
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default {
  data() {
    return {
      sections: this.$store.state.footer.data.links,
    };
  },
  computed: {
    faGithub() {
      return faGithub;
    },
  },
};
</script>

<style></style>
