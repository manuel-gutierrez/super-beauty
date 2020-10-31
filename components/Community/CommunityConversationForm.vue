<template>
  <div v-if="show" class="community-conversation-form">
    <div class="community-conversation-form__profile">
      <ProfilePicture />
      <p>MarsORedi</p>
    </div>

    <b-form @submit="onSubmit" @reset="onReset">
      <div class="community-conversation-form__inputs">
        <b-form-input
          id="title"
          v-model="form.title"
          size="lg"
          required
          :placeholder="placeholders.title"
        ></b-form-input>
        <b-form-textarea
          id="comment"
          v-model="form.comment"
          required
          size="lg"
          :placeholder="placeholders.comment"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-form-input
          id="tags"
          v-model="form.tags"
          size="lg"
          required
          :placeholder="placeholders.tags"
        ></b-form-input>
      </div>
    </b-form>
    <div class="community-conversation-form__actions">
      <div class="community-conversation-form__actions__upload-icon">
        <svg-icon icon="upload-camera-icon" @click="upload()"></svg-icon>
      </div>
      <div class="community-conversation-form__actions__submit-button">
        <button>{{ placeholders.button }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    placeholders: {
      type: Object,
      default: () => {
        return {
          title: 'Agregar título de conversación...',
          comment: 'Iniciar conversación...',
          tags: 'Agregar tags',
        };
      },
    },
  },
  data() {
    return {
      form: {
        title: null,
        comment: null,
        tags: null,
        upload: null,
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // const data =
      //   JSON.stringify(this.form) ;
      // alert(data);

      this.$router.push({ path: 'finalizar-pedido' });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style></style>
