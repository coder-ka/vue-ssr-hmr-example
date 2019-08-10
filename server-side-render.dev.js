const { compileRenderer } = require("./server-side-render");

module.exports.createRenderer = async function() {
  return await compileRenderer();
};
