import type { Page } from '@playwright/test';

export default class NmriumPage {
  public readonly page: Page;

  public constructor(page: Page) {
    this.page = page;
  }

  public static async create(page: Page): Promise<NmriumPage> {
    await page.goto('http://localhost:3000/#/demo');
    return new NmriumPage(page);
  }
}
