import type { Locator, Page } from '@playwright/test';

export default class NmriumPage {
  public readonly page: Page;

  public readonly viewerLocator: Locator;

  public constructor(page: Page) {
    this.page = page;
    this.viewerLocator = page.locator('data-test-id=viewer');
  }

  public static async create(page: Page): Promise<NmriumPage> {
    await page.goto('http://localhost:3000/demo');
    return new NmriumPage(page);
  }
}
