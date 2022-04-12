import {Given, setDefaultTimeout} from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

Given('I see the text', async () => {
  await element(by.id('HELLO'));
});
