<template>
  <div class="shipping-form">
    <b-form v-if="show" inline @submit="onSubmit" @reset="onReset">
      <div class="col-md-6 shipping-form__input">
        <b-form-input
          id="name"
          v-model="form.name"
          size="md"
          required
          placeholder="Nombres*"
          class="w-100"
        ></b-form-input>
      </div>
      <div class="col-md-6 shipping-form__input">
        <b-form-input
          id="lastName"
          v-model="form.lastName"
          size="md"
          required
          placeholder="Apellidos*"
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
          placeholder="Celular*"
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
          placeholder="Email*"
          class="w-100"
        ></b-form-input>
      </div>
      <div class="col-md-6 shipping-form__input">
        <b-form-select
          id="documentIdType"
          v-model="form.documentIdType"
          :options="documentIdTypes"
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
          placeholder="Enter email"
          class="w-100"
        ></b-form-input>
      </div>
      <div class="col-md-6 shipping-form__input">
        <b-form-input
          id="department"
          v-model="form.department"
          size="md"
          placeholder="Departamento"
          class="w-100"
        ></b-form-input>
      </div>
      <div class="col-md-6 shipping-form__input">
        <b-form-input
          id="city"
          v-model="form.city"
          size="md"
          placeholder="Ciudad"
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
          placeholder="Dirección*"
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
          placeholder="Código Postal*"
          class="w-100"
        ></b-form-input>
      </div>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: 'Andrea',
        lastName: 'Avendano',
        phone: '3504754110 ',
        email: 'andrea@superbeauty.com',
        documentIdType: null,
        documentId: '1032456231',
        department: 'Bogota',
        address: 'Carrera 50a #122-56, Apartamento 201, Suba',
        city: 'Bogotá D.C.',
        country: 'CO',
        postalCode: '1111121',
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
