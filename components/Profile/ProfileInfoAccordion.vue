<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    flipArrow(ref) {
      if (this.$refs[ref]) {
        const arrowUp = this.$refs[ref].style;
        const button = this.$refs[`${ref}-button`].style;
        if (arrowUp.transform === 'rotateX(180deg)') {
          arrowUp.transform = '';
          button.color = '#BB29BB';
        } else {
          arrowUp.transform = 'rotateX(180deg)';
          button.color = '#212529';
        }
      }
    },
  },
};
</script>

<style></style>
