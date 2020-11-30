const app = require("./src/app.js")
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Aplicação está rodando na porta ${port}.`);
  })