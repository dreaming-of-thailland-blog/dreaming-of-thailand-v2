// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-post-layout-js": preferDefault(require("/Users/michaelcastor/projects/thailand-blog/src/components/postLayout.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/michaelcastor/projects/thailand-blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/michaelcastor/projects/thailand-blog/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/michaelcastor/projects/thailand-blog/src/pages/about.js")),
  "component---src-pages-archive-page-js": preferDefault(require("/Users/michaelcastor/projects/thailand-blog/src/pages/archivePage.js")),
  "component---src-pages-company-team-js": preferDefault(require("/Users/michaelcastor/projects/thailand-blog/src/pages/company/team.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/michaelcastor/projects/thailand-blog/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/michaelcastor/projects/thailand-blog/src/pages/page-2.js"))
}

