
function buildConfig(env) {
  
  return require("./webpack." + Object.keys(env)[0] + ".js")(env);
}

module.exports = buildConfig;
