import Application from './infrastructure/configurations/application';

try {
  new Application().initialize();
} catch (error) {
  console.log(error);
}
