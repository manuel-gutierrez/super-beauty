const axios = require('axios');

class VentasPOP {
  token = null;

  async post(endpoint, data = {}, appendToken = true) {
    if (appendToken) {
      const token = await this.getAccessToken();
      data.access_token = token.access_token;
    }

    return axios
      .post(`${process.env.VP_ENDPOINT}${endpoint}`, data)
      .then((response) => response.data);
  }

  async getAccessToken() {
    if (!this.token || this.token.expires < new Date().getTime()) {
      const token = await this.post(
        '/OAuth/token',
        {
          grant_type: 'client_credentials',
          client_id: process.env.VP_CLIENT_ID,
          client_secret: process.env.VP_CLIENT_SECRET,
          scope: process.env.VP_SCOPE,
        },
        false
      );

      token.expires = new Date().getTime() + token.expires_in;
      this.token = token;
    }

    return this.token;
  }

  parseBanner(banner) {
    return {
      url: banner.link,
      caption: {
        title: banner.name,
        discount: '',
        description: '',
        button: {
          text: 'Ver más',
          url: banner.link,
        },
      },
      image: {
        src: banner.image,
      },
      button: {
        text: 'Ver más',
        url: banner.link,
      },
    };
  }
}

module.exports = VentasPOP;
