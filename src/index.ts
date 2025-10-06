import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

import { RequestHandler } from "./handler/request";

const app = new Hono();

app.use(logger());
app.use("/*", cors());

app.get("/", (c) => {
  return c.text(" This is the proxy to use it after the url add /fetch?url= ");
});

app.get("/fetch", async (c) => {
  const data = await RequestHandler({ response: c.req });
  return data;
});

export default app;
