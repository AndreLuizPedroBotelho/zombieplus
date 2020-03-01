require('babel-core/register');

const chromedriver = require('chromedriver');

const testUrl = 'http://zombie-web:5000';
const defaultTimeout = 15000;

module.exports = {
  src_folders: ['tests'],

  page_objects_path: './pages',

  globals_path: './hooks/globals.js',

  webdriver: {
    start_process: true,
  },

  /*test_workers: {
    enabled: true,
    workers: 2
  },*/

  /*screenshots: {
    enabled: true,
    on_failure: true,
    on_error: true,
    path: 'tests_output/'
  },*/

  test_settings: {
    default: {
      launch_url: testUrl,
      globals: {
        waitForConditionTimeout: defaultTimeout
      },
      webdriver: {
        server_path: chromedriver.path,
        port: 9515
      },
      desiredCapabilities: {
        browserName: "chrome"
      }
    },
    headless: { //Execute Command 
      launch_url: testUrl,
      globals: {
        waitForConditionTimeout: defaultTimeout
      },
      webdriver: {
        server_path: chromedriver.path,
        port: 9515
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          w3c: false,
          args: ['--headless', '--no-sandbox']
        }
      }
    },
    stage: {
      launch_url: 'http://stage.zombieplus.com.br',
    }
  }
};
