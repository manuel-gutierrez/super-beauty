<template>
  <div
    class="product-download-image"
    :style="getBackgroundImage(url)"
    role="img"
    :aria-label="caption"
  >
    <div
      class="product-download-image__download-box"
      @click="downloadImage(url, caption)"
    >
      <SvgIcon icon="download-icon" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null,
    },
    caption: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    getBackgroundImage(image) {
      return {
        backgroundImage: `url(${image})`,
      };
    },
    downloadImage(fileUrl, fileName) {
      this.$axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'blob',
      })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${fileName}.png`);

          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => {
          console.error('Error Downloading Image', err);
        });
    },
  },
};
</script>

<style></style>
