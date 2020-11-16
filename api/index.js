const bodyParser = require('body-parser');
const app = require('express')();
const VentasPOP = require('./ventaspop');

const api = new VentasPOP();

app.use(bodyParser.json());
app.get('/banners', async (req, res, next) => {
  let banners;
  try {
    banners = await api.post('/Banner/list', {
      position: req.query.position,
    });
    banners.banners = banners.banners.map(api.parseBanner);
  } catch (err) {
    next(err);
  }
  res.json(banners);
});

app.get('/products', async (req, res) => {
  res.json(await api.post('/Product/list'));
});

app.use((err, req, res, next) => {
  res.status(500).json({ ok: false, error: err.message });
});

module.exports = app;
