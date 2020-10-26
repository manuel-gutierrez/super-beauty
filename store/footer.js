export const state = () => ({
  data: {
    copy: {
      business: 'SUPERBEAUTY Todoos los derechos reservados',
      dev: 'Creado con ',
      dev_aux: ' en Colombia.',
    },
    brands: {
      images: [
        {
          url: '/footer/Rectángulo 58@2x.png',
          alt: 'PSE',
          width: '29.5px',
          height: '29.5px',
        },
        {
          url: '/footer/Rectángulo 59@2x.png',
          alt: 'Visa Debit',
          width: '35px',
          height: '18px',
        },
        {
          url: '/footer/Rectángulo 57@2x.png',
          alt: 'Master Card Debit',
          width: '29px',
          height: '30px',
        },
        {
          url: '/footer/Rectángulo 55@2x.png',
          alt: 'Efecty',
          width: '73px',
          height: '41px',
        },
        {
          url: '/footer/Rectángulo 54@2x.png',
          alt: 'Diners',
          width: '90px',
          height: '24px',
        },
        {
          url: '/footer/Rectángulo 53@2x.png',
          alt: 'Davivienda',
          width: '80px',
          height: '12px',
        },
        {
          url: '/footer/Rectángulo 52@2x.png',
          alt: 'Bancolombia',
          width: '71px',
          height: '17px',
        },
        {
          url: '/footer/Rectángulo 51@2x.png',
          alt: 'Via Baloto',
          width: '71px',
          height: '18px',
        },
        {
          url: '/footer/Rectángulo 50@2x.png',
          alt: 'Amex Logo',
          width: '30px',
          height: '30px',
        },
        {
          url: '/footer/Rectángulo 60@2x.png',
          alt: 'Visa',
          width: '37px',
          height: '12px',
        },
        {
          url: '/footer/Rectángulo 56@2x.png',
          alt: 'Master Card',
          width: '29px',
          height: '25px',
        },
      ],
    },
    links: [
      {
        title: 'Conócenos',
        items: [
          { text: 'Nuestra Historia', url: 'nuestra-historia' },
          { text: 'Comunidad', url: 'comunidad' },
        ],
        type: 'links',
      },
      {
        title: 'Servicio al cliente',
        items: [
          { text: '9:00 am a 6:00 pm' },
          { text: 'Horario: Lunes a Viernes' },
          { text: 'hola@superbeauty.com.co' },
        ],
        type: 'paragraphs',
      },
      {
        title: 'Links de Interés',
        items: [
          { text: 'Nuestras Políticas', url: './informacion-importante' },
          { text: 'Preguntas Frecuentes', url: './informacion-importante' },
        ],
        type: 'links',
      },
      {
        title: 'Siguenos en:',
        items: [
          { name: 'instagram', url: 'https://google.com' },
          { name: 'facebook-f', url: 'https://google.com' },
          { name: 'youtube', url: 'https://google.com' },
        ],
        type: 'icons',
      },
    ],
  },
});
export const mutations = {};
export const getters = {
  getBrands(state) {
    return state.data.brands.images;
  },
};
