const yargs = require('yargs');
const fs = require('fs');

// Create 'app' directory if not exists
if (!fs.existsSync('app')) {
  fs.mkdirSync('app');
}

// Create 'controllers', 'models', and 'views' directories if not exists
['controllers', 'models', 'views'].forEach((dir) => {
  if (!fs.existsSync(`app/${dir}`)) {
    fs.mkdirSync(`app/${dir}`);
  }
});

function renderController(name) {
  return `class ${name}Controller{

}
module.exports = new ${name}Controller();
  `
} 


// Command for creating controller
yargs.command({
  command: 'make:controller <name>',
  describe: 'Create a controller',
  handler: (argv) => {
    const controllerName = argv.name;
    fs.writeFileSync(`app/controllers/${controllerName}Controller.js`,renderController(controllerName));
    console.log(`Controller ${controllerName}Controller.js created.`);
  }
});

// Command for creating model
yargs.command({
  command: 'make:model <name>',
  describe: 'Create a model',
  handler: (argv) => {
    const modelName = argv.name;
    fs.writeFileSync(`app/models/${modelName}.js`, `// Model definition for ${modelName}`);
    console.log(`Model ${modelName}.js created.`);
  }
});


// Command for creating view
yargs.command({
  command: 'make:view <name>',
  describe: 'Create a view',
  handler: (argv) => {
    const viewName = argv.name;
    fs.writeFileSync(`app/views/${viewName}.html`, `<!-- HTML content for ${viewName} -->`);
    console.log(`View ${viewName}.html created.`);
  }
});

// Parse the arguments
yargs.parse();
