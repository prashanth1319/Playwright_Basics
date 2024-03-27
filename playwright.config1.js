// @ts-nocheck
const { defineConfig, devices } = require('@playwright/test');
const { on } = require('events');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries:1,
  /* Maximum time one test can run for. */
  timeout: 30*1000,
  expect:{
    timeout: 5000
  },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Configure projects for major browsers */
   projects: 
   [
     {
       name: 'safari',
       use: {
        browserName: 'webkit',
        trace: 'retain-on-failure',//off, on
        headless: true,
        screenshot: 'off',
        video: 'retain-on-failure',
        viewport : {width:720,height:720},
      }
    },
    {
      name:"chrome",
        use: {
          browserName: 'chromium',
          trace: 'retain-on-failure',//off, on
          headless: false,
          //This property is used for ignore to https error from some websites
          ignoreHTTPSErrors: true,
          screenshot: 'on',
          video: 'retain-on-failure',
          viewport : {width:720,height:720},
        }
    },
    {
      name:"Firefox",
        use: 
        {
          browserName: 'firefox',
          trace: 'retain-on-failure',//off, on
          headless: true,
          screenshot: 'off',
          video: 'retain-on-failure',
          viewport : {width:720,height:720},
        }

    }
   ]
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  
});

