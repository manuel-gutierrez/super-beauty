<template>
  <div class="shipping-form">
    <div class="shipping-form__title">
      <p>
        {{ formSection.title }}
      </p>
    </div>
    <div class="shipping-form__inputs">
      <b-form v-if="show" inline @submit="onSubmit" @reset="onReset">
        <div class="col-md-6 shipping-form__input">
          <b-form-input
            id="name"
            v-model="form.name"
            size="md"
            required
            :placeholder="formPlaceholders.name"
            class="w-100"
          ></b-form-input>
        </div>
        <div class="col-md-6 shipping-form__input">
          <b-form-input
            id="lastName"
            v-model="form.lastName"
            size="md"
            required
            :placeholder="formPlaceholders.lastName"
            class="w-100"
          ></b-form-input>
        </div>
        <div class="col-md-6 shipping-form__input">
          <b-form-input
            id="phone"
            v-model="form.phone"
            type="tel"
            size="md"
            required
            :placeholder="formPlaceholders.phone"
            class="w-100"
          ></b-form-input>
        </div>
        <div class="col-md-6 shipping-form__input">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            size="md"
            required
            :placeholder="formPlaceholders.email"
            class="w-100"
          ></b-form-input>
        </div>
        <div class="col-md-6 shipping-form__input">
          <b-form-select
            id="documentIdType"
            v-model="form.documentIdType"
            :options="formPlaceholders.documentIdTypes"
            size="md"
            class="w-100"
          ></b-form-select>
        </div>
        <div class="col-md-6 shipping-form__input">
          <b-form-input
            id="documentId"
            v-model="form.documentId"
            type="number"
            size="md"
            :placeholder="formPlaceholders.documentId"
            class="w-100"
          ></b-form-input>
        </div>
        <div class="col-md-6 shipping-form__input">
          <b-form-input
            id="department"
            v-model="form.department"
            size="md"
            :placeholder="formPlaceholders.department"
            class="w-100"
          ></b-form-input>
        </div>
        <div class="col-md-6 shipping-form__input">
          <b-form-input
            id="city"
            v-model="form.city"
            size="md"
            :placeholder="formPlaceholders.city"
            class="w-100"
          ></b-form-input>
        </div>
        <div class="col-md-12 shipping-form__input">
          <b-form-input
            id="address"
            v-model="form.address"
            size="md"
            required
            type="text"
            :placeholder="formPlaceholders.address"
            class="w-100"
          ></b-form-input>
        </div>
        <div class="col-md-4 shipping-form__input">
          <b-form-input
            id="postal-code"
            v-model="form.postalCode"
            size="md"
            required
            type="text"
            :placeholder="formPlaceholders.postalCode"
            class="w-100"
          ></b-form-input>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      form: {
        name: null,
        lastName: null,
        phone: null,
        email: null,
        documentIdType: null,
        documentId: null,
        department: null,
        address: null,
        city: null,
        country: null,
        postalCode: null,
      },
      documentIdTypes: [
        { text: 'Tipo de Documento', value: null },
        'Cédula de Ciudadanía',
        'Pasaporte',
        'Cédula de Extranjería',
      ],
      show: true,
    };
  },
  computed: {
    ...mapGetters('pages/shippingPage', {
      section: 'getSection',
    }),
    formSection() {
      return this.section('section_1');
    },
    formPlaceholders() {
      return this.section('section_1').shippingFormPlaceholders;
    },
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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
