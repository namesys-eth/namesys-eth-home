const replace = require("replace-in-file");
const optionsHTML = {
  files: "./out/*.html",
  from: [/namesys.xyz/g],
  to: ["namesys.eth.limo"],
};
(async function () {
  try {
    const resultsHTML = await replace(optionsHTML);
  } catch (error) {}
})();
