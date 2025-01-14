import { Router } from "../routes.ts";

export function SiteMap(props: {
  router: Router;
  latestBuildDate: string;
  domain: string;
}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${props.router
  .map((page) => {
    return siteMapUrl({
      pageUrl: props.domain + (page?.relativeWebsitePath ?? "/"),
      lastModifiedDate: props.latestBuildDate,
    });
  })
  .join("\n")}

</urlset>`;
}

function siteMapUrl(props: { pageUrl: string; lastModifiedDate: string }) {
  return `<url>
  <loc>${props.pageUrl}</loc>
  <lastmod>${props.lastModifiedDate}</lastmod>
</url>`;
}
