<template>
  <div class="comments-card">
    <div class="col-md-12 comments-card__comment_rating">
      <ProductRating :rating="comment.score"></ProductRating>
      <CommentsVerifiedTag
        :verified="comment.verified"
        label="Verificado"
      ></CommentsVerifiedTag>
    </div>
    <div class="col-md-12 pl-1 comments-card__comment_color">
      <CommentsColorTag
        label="Color"
        :color-name="comment.color.name"
        :color="comment.color.value"
      ></CommentsColorTag>
    </div>
    <div class="col-md-12 comments-card__comment__content">
      <p>{{ comment.comment }}</p>
      <p class="comments-card__comment__content__recommend">
        <svg-icon icon="check" /> Recomienda este producto
      </p>
      <div class="comments-card__comment__content___buttons">
        <button>ME FUE UTIL (1)</button>
        <button>NO ME FUE UTIL (0)</button>
      </div>
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
