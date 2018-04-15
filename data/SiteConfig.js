module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your authors.
  blogAuthorId: "ryan", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Ryan Killeen - UI Developer", // Site title.
  siteTitleAlt: "Ryan Killeen - UI Developer, Super Important Guy", // Alternative site title for SEO.
  siteLogo:
    "https://haysclark.github.io/gatsby-starter-casper/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://www.ryankilleen.com", // Domain of your website without pathPrefix.
  pathPrefix: "/blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "A UI Developer's musing on web engineering, working together, technology, and getting through the day.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Ryan Killeen", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-115043138-1", // GA tracking ID.
  siteSocialUrls: [
    "https://github.com/rykilleen",
    "https://twitter.com/deathbypapercut",
    "mailto:rykilleen@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/rykilleen",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/deathbypapercut",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:rykilleen@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Ryan Killeen - UI Developer", // Label used before the year
    year: "2018", // optional, set specific copyright year or range of years, defaults to current year
    url: "https://www.ryankilleen.com/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
