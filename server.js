const htmls = require('./html.json');
const fs = require('fs');
const path = require('path');
const htmlPretty = require('html');

let indexhtml = fs.readFileSync(path.resolve('./dist/index.html'), 'utf-8');

//去掉 script

indexhtml = indexhtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
indexhtml = indexhtml.replace('</body>', '\n<script>\n'+fs.readFileSync('./respones.js') + '\n</script>\n</body>');
htmls.forEach((html, index) => {
  const tmp = indexhtml.replace('<div id="root"></div>', html.html);
  const prettyData = htmlPretty.prettyPrint(tmp, { indent_size: 2 });
  fs.writeFileSync(path.resolve('./dist/' + html.path + '.html'), prettyData);
})
