const fs = require("fs")
const path = require("path")
const { JSDOM } = require("jsdom")

describe("HTML Page Tests", () => {
  let dom
  let document

  beforeAll(() => {
    // Read the HTML file
    const htmlPath = path.resolve(__dirname, "../index.html")
    const html = fs.readFileSync(htmlPath, "utf8")

    // Create a DOM environment
    dom = new JSDOM(html)
    document = dom.window.document
  })

  test("Page has the correct title", () => {
    expect(document.title).toBe("DevOps CI/CD Practice")
  })

  test("Page contains Hello World message", () => {
    const heading = document.querySelector("h1")
    expect(heading.textContent).toContain("Hello")
  })

  test("Page has three cards", () => {
    const cards = document.querySelectorAll(".card")
    expect(cards.length).toBe(3)
  })

  test("CSS file is linked", () => {
    const cssLink = document.querySelector('link[rel="stylesheet"]')
    expect(cssLink).not.toBeNull()
    expect(cssLink.getAttribute("href")).toBe("styles.css")
  })

  test("JavaScript file is linked", () => {
    const scriptTag = document.querySelector('script[src="script.js"]')
    expect(scriptTag).not.toBeNull()
  })
})
