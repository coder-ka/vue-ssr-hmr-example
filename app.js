const Vue = require("vue");
const express = require("express");
const app = express();

const { createRenderer } = require(process.env.NODE_ENV === "production"
  ? "./server-side-render"
  : "./server-side-render.dev");

["/", "/items/*", "/stores"].forEach(url =>
  app.get(url, async (req, res) => {
    const context = { url: req.url };

    (await createRenderer()).renderToString(context, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end("Page not found");
        } else {
          res.status(500).end("Internal Server Error");
        }
      } else {
        res.end(html);
      }
    });
  })
);

module.exports = app;
