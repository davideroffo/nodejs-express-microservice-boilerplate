const app = require("./app");

const start = async () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`Service started on port ${PORT} at ${new Date()}`)
  );
};

start();
