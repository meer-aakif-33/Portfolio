// src/data/blogs.js

// src/data/blogs.js

export const blogs = [
  {
    id: "react-vs-vue",
    title: "React vs Vue: A Developer's Comparison",
    summary:
      "A side-by-side breakdown of React and Vue — covering community, learning curve, performance, and flexibility.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
    content: `
React and Vue are two of the most popular JavaScript frameworks/libraries used for building dynamic front-end applications. Both offer reactive data binding and component-based architectures, but their philosophies and ecosystems differ significantly.

### 1. **Learning Curve**
- **React**: Has a steeper learning curve due to JSX, state management tools (like Redux or Zustand), and the need to manually integrate solutions for routing, form handling, and side effects.
- **Vue**: Easier for beginners. Vue’s single-file components (HTML, JS, and CSS in one file) and clear separation of concerns make it beginner-friendly.

### 2. **Community and Ecosystem**
- **React**: Backed by Meta (Facebook), with a massive community, extensive library support, and frequent updates.
- **Vue**: Maintained by an open-source team led by Evan You. The community is active, and tools like Vue CLI, Vue Router, and Vuex are officially supported.

### 3. **Performance**
Both libraries are extremely fast. Benchmark differences are negligible in real-world use. Vue uses a virtual DOM similar to React and has been optimized in its latest versions (Vue 3) using Composition API and tree-shaking.

### 4. **Flexibility vs Convention**
- React provides **flexibility**, allowing you to choose libraries and architecture.
- Vue favors **convention**, giving a more guided development experience.

### 5. **Use Cases**
- **React** is ideal for:
  - Large-scale applications
  - Teams that want more control over stack/tools
  - Applications using micro frontends
- **Vue** is great for:
  - Quick prototyping
  - Smaller teams or solo developers
  - Integrating into existing apps

### Verdict:
Choose React if you're building scalable apps with large teams. Choose Vue for faster development cycles and cleaner structure.
    `,
  },
  {
    id: "async-js",
    title: "Understanding Asynchronous JavaScript",
    summary:
      "Get clarity on how JavaScript handles async code using callbacks, promises, and async/await.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    content: `
JavaScript is single-threaded by nature, meaning it executes one operation at a time. But in real-world applications, we need to make network requests, load files, or wait for user interaction — all without freezing the UI. This is where asynchronous programming comes in.

### 1. **Callbacks**
A function passed into another function to be executed later.
\`\`\`js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}
fetchData(data => console.log(data));
\`\`\`
**Issue**: Nesting callbacks leads to "callback hell" — code that's hard to read and maintain.

### 2. **Promises**
An improvement over callbacks. A promise represents a value that will be available now, later, or never.
\`\`\`js
fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\`

### 3. **Async/Await**
Syntactic sugar over promises that makes async code look synchronous.
\`\`\`js
async function getData() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching:", error);
  }
}
getData();
\`\`\`

### When to Use What:
- Use **callbacks** for simple, linear operations.
- Use **promises** for cleaner chaining.
- Use **async/await** for better readability and error handling in modern code.

Understanding these patterns is critical for handling APIs, timers, animations, and events in JavaScript.
    `,
  },
  {
    id: "github-workflow",
    title: "Mastering GitHub Workflow",
    summary:
      "Learn how to structure your Git branches, manage pull requests, and squash bugs with confidence.",
    image: "https://cdn.shamaliroshan.com/github-actions.png",
    content: `
A well-defined GitHub workflow streamlines team collaboration, makes code history readable, and ensures fewer bugs.

### 1. **Branching Strategies**
- Use \`main\` or \`master\` as the production branch.
- Create branches with clear prefixes: \`feature/login\`, \`bugfix/form-validation\`, \`hotfix/typo\`.
- Consider Git Flow or trunk-based development depending on team size and deployment frequency.

### 2. **Pull Requests (PRs)**
- Always make a PR before merging code.
- Include:
  - Descriptive title and body
  - Related issue numbers
  - Screenshots (for UI changes)
- Ask for peer review and use labels (e.g., \`enhancement\`, \`bug\`, \`urgent\`).

### 3. **Commit Messages**
Follow a format like:
\`\`\`
feat(auth): add login button
fix(api): handle null response from server
\`\`\`
Use \`git rebase -i\` to squash commits into meaningful changes before merging.

### 4. **CI/CD with GitHub Actions**
- Automate tests on PRs.
- Use workflows for linting, building, testing, and deployment.
\`\`\`yaml
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install
        run: npm install
      - name: Test
        run: npm test
\`\`\`

### 5. **Code Quality Tools**
- Use linters like ESLint
- Run Prettier on save
- Add CodeCov or SonarQube for code coverage

Mastering these practices increases your productivity and minimizes bugs in production.
    `,
  },
  {
    id: "web-performance",
    title: "Boosting Web Performance in 2025",
    summary:
      "A practical guide to making your websites blazing fast with modern performance techniques.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
    content: `
Web performance is more important than ever. A slow website increases bounce rates and affects conversions and SEO. Here's how to improve performance effectively in 2025:

### 1. **Image Optimization**
- Use next-gen formats: **WebP**, **AVIF**
- Serve responsive images using \`<picture>\` and \`srcset\`
- Compress using tools like TinyPNG or ImageMagick

### 2. **Lazy Loading**
- Use \`loading="lazy"\` for images and iframes
- Code-split React/Vue components using dynamic imports

### 3. **Reduce JavaScript Bundle**
- Use **tree-shaking** to remove dead code
- Split large libraries (e.g., lodash) into individual imports
- Only load polyfills and scripts needed for the browser

### 4. **Caching and CDN**
- Set correct \`Cache-Control\` headers
- Use a CDN like Cloudflare or Vercel to distribute static content

### 5. **Minimize Render-Blocking Resources**
- Defer or async load JavaScript
- Inline critical CSS for fast first paint
- Use tools like **PageSpeed Insights**, **Lighthouse**, or **WebPageTest**

### 6. **Core Web Vitals Focus**
- **LCP (Largest Contentful Paint)** < 2.5s
- **FID (First Input Delay)** < 100ms
- **CLS (Cumulative Layout Shift)** < 0.1

A high-performing website leads to better rankings, happier users, and higher retention.
    `,
  },
];
