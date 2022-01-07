module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5558b07ffffa3c1998c3ca9e407b30e2'),
  },
});
