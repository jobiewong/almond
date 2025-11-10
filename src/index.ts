import consola from "consola";
import app from "./app";

const port = process.env.PORT || 3030;
app.listen(port, () => {
  consola.success(`Listening: http://localhost:${port}`);
});
