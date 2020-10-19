<template>
  <div class="payment-form">
    <section class="payment-form__credit-card">
      <b-form inline @submit="onSubmit" @reset="onReset">
        <b-form-radio
          v-model="paymentMethodSelected"
          name="credit-card"
          :options="paymentMethodOptions"
          :value="paymentMethods.CREDIT_CARD"
        >
          <p class="payment-form__credit-card__title">
            {{ this.formContent.creditCard.title }}
          </p>
        </b-form-radio>
      </b-form>
      <b-form
        inline
        class="payment-form__credit-card__inputs"
        @submit="onSubmit"
        @reset="onReset"
      >
        <b-form-input
          id="pan"
          v-model="creditCardForm.pan"
          size="md"
          required
          :placeholder="formContent.creditCard.placeholders.pan"
          class="w-100 payment-form__credit-card__inputs__input"
        ></b-form-input>
        <b-form-input
          id="name"
          v-model="creditCardForm.name"
          size="md"
          required
          :placeholder="formContent.creditCard.placeholders.name"
          class="w-100 payment-form__credit-card__inputs__input"
        ></b-form-input>
        <b-form-group
          :label="formContent.creditCard.placeholders.expDateTitle"
          class="payment-form__credit-card__inputs__group"
        >
          <b-form-input
            id="expDateMonth"
            v-model="creditCardForm.expDateMonth"
            size="md"
            required
            :placeholder="formContent.creditCard.placeholders.expDateMonth"
            class="col-3 col-md-3 mr-2 payment-form__credit-card__inputs__input"
          ></b-form-input>
          <b-form-input
            id="expDateYear"
            v-model="creditCardForm.expDateYear"
            size="md"
            required
            :placeholder="formContent.creditCard.placeholders.expDateYear"
            class="col-4 col-md-4 mr-2 payment-form__credit-card__inputs__input"
          ></b-form-input>
          <b-form-input
            id="cvv"
            v-model="creditCardForm.cvv"
            size="md"
            required
            :placeholder="formContent.creditCard.placeholders.cvv"
            class="col-4 col-md-4 payment-form__credit-card__inputs__input"
          ></b-form-input>
          <b-form-radio
            v-model="creditCardForm.saveCard"
            name="save-card"
            :value="true"
          >
            <div class="credit-card__inputs__radio">
              <p class="credit-card__inputs__radio__label">
                {{ formContent.creditCard.placeholders.saveCard }}
              </p>
            </div>
          </b-form-radio>
        </b-form-group>
      </b-form>
    </section>
    <section class="payment-form__address">
      <p class="payment-form__address__title">
        {{ formContent.address.title }}
      </p>
      <b-form inline @submit="onSubmit" @reset="onReset">
        <b-form-radio
          v-if="currentAddress"
          v-model="invoiceAddress"
          name="invoice-address"
          :value="currentAddress"
        >
          <div class="payment-form__address__item">
            <p class="payment-form__address__item__label">
              {{ formContent.address.placeholders.option_1 }}
            </p>
            <p class="payment-form__address__item__value">
              {{ currentAddress.address }}
            </p>
          </div>
        </b-form-radio>
        <b-form-radio
          v-model="invoiceAddress"
          name="invoice-address"
          value="other"
        >
          <div class="payment-form__address__item">
            <p class="payment-form__address__item__label">
              {{ formContent.address.placeholders.option_2 }}
            </p>
          </div>
        </b-form-radio>
      </b-form>
    </section>
    <section class="payment-form__debit-card">
      <b-form inline @submit="onSubmit" @reset="onReset">
        <b-form-radio
          v-model="paymentMethodSelected"
          name="debit-card"
          :options="paymentMethodOptions"
          :value="paymentMethods.DEBIT_CARD"
        >
          <p class="payment-form__debit-card__title">
            {{ formContent.debitCard.title }}
          </p>
        </b-form-radio>
      </b-form>
    </section>
    <section class="payment-form__efecty">
      <b-form inline @submit="onSubmit" @reset="onReset">
        <b-form-radio
          v-model="paymentMethodSelected"
          name="efecty"
          :options="paymentMethodOptions"
          :value="paymentMethods.EFECTY"
        >
          <p class="payment-form__efecty__title">
            {{ formContent.efecty.title }}
          </p>
        </b-form-radio>
      </b-form>
    </section>
    <section class="payment-form__baloto">
      <b-form inline @submit="onSubmit" @reset="onReset">
        <b-form-radio
          v-model="paymentMethodSelected"
          name="baloto"
          :options="paymentMethodOptions"
          :value="paymentMethods.BALOTO"
        >
          <p class="payment-form__baloto__title">
            {{ formContent.efecty.title }}
          </p>
        </b-form-radio>
      </b-form>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      creditCardForm: {
        pan: null,
        name: null,
        expDateMonth: null,
        expDateYear: null,
        cvv: null,
        saveCard: null,
      },
      paymentMethodSelected: '',
      paymentMethodOptions: [],
      invoiceAddress: '',
    };
  },
  computed: {
    ...mapGetters('pages/paymentPage', {
      content: 'getPaymentContent',
    }),
    ...mapGetters('shippingAddress', {
      currentAddress: 'getCurrentAddress',
    }),
    ...mapGetters('enums', {
      enumItem: 'getEnum',
    }),
    formContent() {
      return this.content('section_3').form;
    },
    shippingMethods() {
      return this.content('section_1').shippingMethods;
    },
    paymentMethods() {
      return this.enumItem('paymentMethods');
    },
  },
  beforeMount() {
    this.paymentMethodOptions.push(
      {
        text: this.formContent.creditCard.title,
        value: this.paymentMethods.CREDIT_CARD,
      },
      {
        text: this.formContent.debitCard.title,
        value: this.paymentMethods.DEBIT_CARD,
      },
      {
        text: this.formContent.efecty.title,
        value: this.paymentMethods.EFECTY,
      },
      {
        text: this.formContent.baloto.title,
        value: this.paymentMethods.BALOTO,
      }
    );
    this.paymentMethodSelected = this.paymentMethods.CREDIT_CARD;
  },
  methods: {
    ...mapActions('shippingAddress', ['removeItem']),
    removeSavedAddress(itemId) {
      this.removeItem({ id: itemId });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const data =
        JSON.stringify(this.form) + JSON.stringify(this.savedAddressSelect);
      alert(data);
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
