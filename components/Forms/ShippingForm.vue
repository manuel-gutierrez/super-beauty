<template>
  <div class="shipping-form">
    <section>
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
    </section>
    <section v-if="storedAddress.length > 0">
      <div class="shipping-form__title--second">
        <p>
          {{ formSection.title_2 }}
        </p>
      </div>
      <div class="shipping-form__saved">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-radio
            v-for="addressItem in storedAddress"
            :key="addressItem.id"
            v-model="savedAddressSelect"
            name="saved-address"
            :value="addressItem.id"
            ><div class="shipping-form__saved__item">
              <div
                class="shipping-form__saved__item__dots"
                @click="removeSavedAddress(addressItem.id)"
              >
                <b-icon icon="three-dots-vertical"></b-icon>
              </div>
              <div class="col-12">{{ addressItem.address }}</div>
              <div class="shipping-form__saved__item__address-details">
                <div class="col-12">
                  {{ addressItem.name }} {{ addressItem.lastName }} -
                  {{ addressItem.phone }}
                </div>
              </div>
            </div>
          </b-form-radio>
        </b-form>
      </div>
    </section>
    <section>
      <div class="shipping-form__title--second">
        <p>
          {{ formSection.title_3 }}
        </p>
      </div>
      <div class="shipping-form__shipping-methods">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-radio
            v-for="shipping in shippingMethods"
            :key="shipping.value.amount"
            v-model="savedAddressSelect"
            name="shipping-methods"
            :value="shipping.value.amount"
          >
            <div class="shipping-form__shipping-methods__item">
              <div class="shipping-form__shipping-methods__item__price">
                <money-format
                  :value="shipping.value.amount"
                  :locale="'es-co'"
                  :currency-code="shipping.value.currency"
                  :subunits-value="false"
                  :hide-subunits="true"
                  class="shipping-form__shipping-methods__item__amount"
                ></money-format>
              </div>
              <div class="shipping-form__shipping-methods__item__labels">
                <div
                  class="shipping-form__shipping-methods__item__labels__label-1"
                >
                  {{ shipping.label_1 }}
                </div>
                <div
                  class="shipping-form__shipping-methods__item__labels__label-2"
                >
                  {{ shipping.label_2 }}
                </div>
              </div>
            </div>
          </b-form-radio>
        </b-form>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-button
            type="submit"
            variant="primary"
            class="shipping-form__button"
            >{{ formSection.buttonLabel }}
          </b-button>
        </b-form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
      savedAddressSelect: [],
    };
  },
  computed: {
    ...mapGetters('pages/shippingPage', {
      content: 'getShippingContent',
    }),
    ...mapGetters('shippingAddress', {
      storedAddress: 'getSavedItems',
    }),
    formSection() {
      return this.content('section_1');
    },
    formPlaceholders() {
      return this.content('section_1').shippingFormPlaceholders;
    },
    shippingMethods() {
      return this.content('section_1').shippingMethods;
    },
  },

  methods: {
    ...mapActions('shippingAddress', ['removeItem']),
    removeSavedAddress(itemId) {
      this.removeItem({ id: itemId });
    },
    onSubmit(evt) {
      evt.preventDefault();
      // const data =
      //   JSON.stringify(this.form) + JSON.stringify(this.savedAddressSelect);
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
