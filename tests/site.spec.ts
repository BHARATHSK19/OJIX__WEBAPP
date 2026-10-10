import { test, expect } from "@playwright/test";
test("home page follows the OJIX landing-page sections",async({page})=>{await page.goto("/");await expect(page.getByRole("heading",{name:/Software that ships/})).toBeVisible();await expect(page.getByRole("heading",{name:/Six disciplines/})).toBeVisible();await expect(page.getByRole("heading",{name:/(Better software starts with how it's built|Why choose OJIX)/})).toBeVisible();await expect(page.getByRole("heading",{name:"Products"})).toBeVisible();await expect(page.getByRole("heading",{name:"LawX"})).toBeVisible();await expect(page.getByRole("heading",{name:/Transparent, milestone-based execution/})).toBeVisible();});
test("shared mega menu opens with the reference preview layout",async({page})=>{await page.goto("/");await page.getByRole("button",{name:"Industries"}).hover();const menu=page.getByRole("region",{name:"industries menu"});await expect(menu.getByText("Industry / Solution")).toBeVisible();await expect(menu.getByRole("link",{name:/Explore SaaS/})).toBeVisible();await menu.getByRole("link",{name:/Law Chambers Mgt/}).hover();await expect(menu.getByRole("heading",{name:"Law Chambers Mgt"})).toBeVisible();});
test("contact form validates required information",async({page})=>{await page.goto("/contact");await page.getByRole("button",{name:/Send project enquiry/}).click();await expect(page.getByText("Please enter your name")).toBeVisible();await expect(page.getByText("Enter a valid email address")).toBeVisible();});
test("Why Us section displays vertical editorial engineering-principles timeline", async ({ page }) => {
  await page.goto("/");
  const section = page.getByRole("region", { name: "Why Choose OJIX" });
  await expect(section).toBeVisible();
  await expect(section.getByText("WHY CHOOSE OJIX").first()).toBeVisible();
  await expect(section.getByRole("heading", { name: /Better software starts with how it's built/ })).toBeVisible();
  await expect(section.getByText("Three principles guide how we engineer, collaborate and deliver.")).toBeVisible();

  // Principle 01
  await expect(section.getByText("01", { exact: true }).first()).toBeVisible();
  await expect(section.getByRole("heading", { name: "Engineering quality" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Built beyond the demo." })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Architecture" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Security" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Maintainability" })).toBeVisible();

  // Principle 02
  await expect(section.getByText("02", { exact: true }).first()).toBeVisible();
  await expect(section.getByRole("heading", { name: "Direct collaboration" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Closer to the people building it." })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Direct communication" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Shared technical decisions" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Continuous feedback" })).toBeVisible();

  // Principle 03
  await expect(section.getByText("03", { exact: true }).first()).toBeVisible();
  await expect(section.getByRole("heading", { name: "Visible delivery" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Progress you can see." })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Clear milestones" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Working builds" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Review and feedback" })).toBeVisible();
});

test("Why Us section is responsive on mobile without overflow and toggles theme cleanly", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const section = page.getByRole("region", { name: "Why Choose OJIX" });
  await expect(section).toBeVisible();

  // Verify no horizontal scrolling overflow
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);

  // Verify principle headlines visible on mobile
  await expect(section.getByRole("heading", { name: "Built beyond the demo." })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Closer to the people building it." })).toBeVisible();
  await expect(section.getByRole("heading", { name: "Progress you can see." })).toBeVisible();

  // Test theme toggle
  const toggleBtn = page.getByRole("button", { name: "Toggle theme" });
  await toggleBtn.click();
  const htmlTheme = await page.evaluate(() => document.documentElement.dataset.theme);
  expect(["light", "dark"]).toContain(htmlTheme);
});

