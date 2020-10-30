export const state = () => ({
  conversations: [
    {
      id: 'b4350cf9-2afa-4fc9-b04f-de34b5cc3192',
      title: '¡Comprométete a tratar tus mechones con amor!',
      dateCreated: '2019-06-30T17:55:56.646Z"',
      dateUpdated: '2020-06-18T17:55:56.646Z"',
      userId: 'b4350cf9-2afa-4fc9-b04f-de34b5cc3192',
      content:
        '    <p>\n      Este verano, Team BIC está ~ mejorando ~ nuestras rutinas de cuidado del\n      cabello para darles a nuestras trenzas un buen TLC antiguo\n    </p>\n    <img\n      src="/images/pages/community/community-conversation-content-image@2x.png"\n      alt="Cuida tus mechones"\n      width="363px"\n      height="247px"\n    />',
      comments: [],
    },
    {
      id: 'b4350cf9-2afa-4fc9-b04f-de34b5cc3192',
      title: '¡Comprométete a tratar tus mechones con amor!',
      dateCreated: '2019-06-30T17:55:56.646Z"',
      dateUpdated: '2020-06-18T17:55:56.646Z"',
      userId: 'b4350cf9-2afa-4fc9-b04f-de34b5cc3192',
      content:
        '    <p>\n      Este verano, Team BIC está ~ mejorando ~ nuestras rutinas de cuidado del\n      cabello para darles a nuestras trenzas un buen TLC antiguo\n    </p>\n    <img\n      src="/images/pages/community/community-conversation-content-image@2x.png"\n      alt="Cuida tus mechones"\n      width="363px"\n      height="247px"\n    />',
      comments: [],
    },
  ],
});
export const mutations = {};

export const getters = {
  getConversation: (state) => (id) => {
    state.conversations.find((conversation) => conversation.id === id);
  },
  getConversations: (state) => state.conversations,
};
