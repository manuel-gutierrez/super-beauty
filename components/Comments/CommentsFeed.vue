<template>
  <div class="row comments-feed">
    <div class="col-md-4 comments-feed__profile">
      <ProfilePicture profile-slug="TheOtherAL"></ProfilePicture>
    </div>
    <div class="col-md-8 comments-feed__cards">
      <CommentsCard :comment="comment"></CommentsCard>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
