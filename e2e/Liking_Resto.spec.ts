const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.amOnPage('/');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.grid-list');
  I.amOnPage('/');
  I.waitForElement('.grid-list');
  I.seeElement('.anchor');

  const firstResto = locate('.anchor').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.grid-list');
  const likedRestoTitle = await I.grabTextFrom('.anchor');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('.grid-list');
  I.amOnPage('/');
  I.waitForElement('.grid-list');
  I.seeElement('.anchor');

  const firstResto = locate('.anchor').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.wait(3);
  I.amOnPage('/#/like');
  I.seeElement('.grid-list');
  const unlikedRestoTitles = await I.grabTextFrom('.anchor');

  assert.strictEqual(firstRestoTitle, unlikedRestoTitles);

  I.seeElement('.anchor');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.resto-item');
});
