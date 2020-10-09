<template>
  <div class="comments-card">
    <div class="row justify-content-start align-items-center">
      <div class="col-md-3 pr-1 comments-card__comment_rating">
        <ProductRating :rating="comment.score"></ProductRating>
      </div>
      <div class="col ml-0 pl-0">
        <CommentsVerifiedTag
          :verified="comment.verified"
          label="Verificado"
        ></CommentsVerifiedTag>
      </div>
    </div>
    <div class="col-md-12 comments-card__comment_color">
      {{ comment.color }}
    </div>
    <div class="col-md-12 comments-card__comment_comment">
      <p>{{ comment.comment }}</p>
    </div>
    <div class="col-md-12 comments-card__comment_recommendation"></div>
    <div class="col-md-12 comments-card__comment_buttons"></div>
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
