const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

const { createBundleRenderer } = require("vue-server-renderer");

async function compileRenderer() {
  const template = await readFile("./src/index.html", "utf8");
  const serverBundle = JSON.parse(
    await readFile("./vue-ssr-server-bundle.json")
  );
  const clientManifest = JSON.parse(
    await readFile("./dist/vue-ssr-client-manifest.json")
  );

  return createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
  });
}

let renderer;

module.exports.createRenderer = async function() {
  if (renderer === undefined) renderer = await compileRenderer();

  return renderer;
};

module.exports.compileRenderer = compileRenderer;
