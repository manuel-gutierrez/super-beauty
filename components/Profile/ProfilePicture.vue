<template>
  <div class="profile-picture">
    <b-img
      v-bind="imgProps"
      src="/images/profile/profile_picture_ratings@2x.png"
      alt="Imagen de Perfil"
    ></b-img>
    <span v-if="profileSlug"> {{ profileSlug }}</span>
  </div>
</template>

<script>
export default {
  props: {
    profileSlug: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      imgProps: {
        width: 37,
        height: 37,
        class: 'm-1',
        rounded: 'circle',
      },
    };
  },
};
</script>

<style></style>
