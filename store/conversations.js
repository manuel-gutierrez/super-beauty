export const state = () => ({
  conversations: [
    {
      id: 'b4350cf9-2afa-4fc9-b04f-de34b5cc3192',
      title: '¡Comprométete a tratar tus mechones con amor!',
      dateCreated: '2019-06-30T17:55:56.646Z"',
      dateUpdated: '2020-06-18T17:55:56.646Z"',
      userId: 'b4350cf9-2afa-4fc9-b04f-de34b5cc3192',
      content:
        '    <p>\n   <b>   Este verano, Team BIC está ~ mejorando ~ nuestras rutinas de cuidado del\n      cabello para darles a nuestras trenzas un buen TLC antiguo\n   </b> </p>\n    <img\n      src="/images/pages/community/community-conversation-content-image@2x.png"\n      alt="Cuida tus mechones"\n      width="297px"\n      height="203px"\n    />',
      comments: [],
    },
    {
      id: 'b4350cf9-2afa-4fc9-b04f-de34b5cc3192',
      title: '¡Comprométete a tratar tus mechones con amor!',
      dateCreated: '2019-06-30T17:55:56.646Z"',
      dateUpdated: '2020-06-18T17:55:56.646Z"',
      userId: 'b4350cf9-2afa-4fc9-b04f-de34b5cc3192',
      mainImage:
        '/images/pages/community/community-conversation-content-image@2x.png',
      content:
        '    <p>\n      <b>Este verano, Team BIC está ~ mejorando ~ nuestras rutinas de cuidado del\n      cabello para darles a nuestras trenzas un buen TLC antiguo\n  </b>  </p>\n    <img\n      src="/images/pages/community/community-conversation-content-image@2x.png"\n      alt="Cuida tus mechones"\n      width="297px"\n      height="203px"\n    />',
      comments: [],
    },
  ],
  labels: {
    published: 'Publicado',
    updated: 'Actualizado hace:',
    times: {
      hours: 'horas',
      minutes: 'minutos',
      seconds: 'segundos',
    },
    like: 'Me gusta',
    share: 'compartir',
    respond: 'responder',
    commentPlaceholder: 'Escribe aquí..',
    sendButton: 'Enviar',
  },
  tags: [
    'Cuidado pelo',
    'Rostro',
    'Acné',
    'Maquillaje',
    'Cabello largo',
    'Ojos',
  ],
});
export const mutations = {};

export const getters = {
  getConversation: (state) => (id) => {
    state.conversations.find((conversation) => conversation.id === id);
  },
  getConversations: (state) => state.conversations,
  getLabels: (state) => state.labels,
  getTags: (state) => state.tags,
};
