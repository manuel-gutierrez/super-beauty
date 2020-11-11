export const state = () => ({
  user: {
    photo: '',
    name: 'Nombre*',
    lastName: 'Apellido*',
    phoneCode: '+57',
    phoneNumber: 'Teléfono de contacto (WhatsApp)*',
    email: 'Email*',
    title: 'Cargo*',
    slug: '',
    description: '',
    profile: 'Cuéntanos sobre tí',
  },
  business: {
    businessName: 'Nombre comercial de tu negocio*',
    businessSlug: 'Usuarios de registro superbeauty negocios',
    businessDescription: 'Cuéntanos tu historia de emprendimiento/ negocio.',
    city: 'Ciudad (ubicación principal de tu negocio)*',
    state: 'Departamento (ubicación principal de tu negocio)*',
    category: 'Tipo de tienda',
    categoryPlaceholder: 'Tienda de Maquillaje / Tienda de Belleza…',
    categoryDescription:
      'Selecciona Tienda de Belleza si vendes múltiples categorías de Belleza (ej: Maquillaje, Cuidado Capilar, Fragancias)',
    locationTitle: '¿Por dónde comercializas?*',
    legal: {
      type: 'Tipo de persona*',
      category: 'Razón social*',
      id: 'NIT*',
      idDocument: 'Adjunta tu RUT*',
      idDocumentButton: 'Seleccionar archivo',
    },
    locations: {
      physical: {
        title: 'Tienda Física',
        number: 'Número de tiendas',
        size: 'Tamaño promedio de tu(s) tienda(s)',
        sizePlaceHolder:
          'De 1 a 3 empleados / De 4 a 10 em.. / Más de 10 empleados',
      },
      virtual: {
        title: 'Tienda Virtual',
        channels: {
          title: 'Canales de Venta',
          instagram: 'Instagram',
          instagramSlug: 'Nombre de tu cuenta en Instagram',
          instagramSlugPlaceholder: '@superbeautynegocios',
          instagramFollowersNumber:
            '# de seguidores en Instagram (ingresa solo números)',
          whatsapp: 'Whatsapp',
          web: 'Web',
          webDescription: 'URL de tu Web',
          webDescriptionPlaceholder: 'http://superbeauty.com.co/negocios',
        },
      },
    },
  },
  button: 'Guardar',
});
export const mutations = {
  // For future use.
};
export const actions = {
  // For future use.
};

export const getters = {
  getProfileFormLabels: (state) => {
    const labels = { ...state.user, ...state.business };
    return labels;
  },
  getSubmitButtonLabel: (state) => state.button,
};
