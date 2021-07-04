const fs = require('fs');

describe('Random', () => {
	const padToTwo = (number) => (number <= 99 ? `0${number}`.slice(-2) : number);
	const now = new Date();
	const datetime = `${now.getFullYear()}-${padToTwo(now.getMonth())}-${padToTwo(
		now.getDate()
	)}-${padToTwo(now.getHours())}-${padToTwo(now.getMinutes())}-${padToTwo(now.getSeconds())}`;
	const evidenceFolder = `test/evidences/${datetime}`;
	fs.mkdirSync(evidenceFolder, { recursive: true });

	beforeAll(async () => {
		await page.goto('http://localhost:3000/');
		await page.waitForTimeout(1000);
	});

	test('Initial page', async () => {
		await page.screenshot({ path: `${evidenceFolder}/Initial page.png` });
	});

	test('Lucky number', async () => {
		await page.waitForSelector('#lucky-button');
		await page.click('#lucky-button');
		await page.waitForTimeout(1000);

		const element = await page.$('#lucky-number');
		const luckyNumber = (await page.evaluate((el) => el.innerHTML, element)) - 0;
		await expect(luckyNumber).toBeGreaterThan(0);
		await expect(luckyNumber).toBeLessThan(1000);

		await page.screenshot({ path: `${evidenceFolder}/Lucky number.png` });
	});
});
