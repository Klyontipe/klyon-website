import { useEffect } from "react";

const SITE_URL = "https://klyon.fr";
const DEFAULT_IMAGE = "https://klyon.fr/minilogo.jpg";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  robots?: string;
};

const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const Seo = ({ title, description, path = "/", robots = "index,follow" }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", DEFAULT_IMAGE);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", DEFAULT_IMAGE);
    setMeta('meta[name="robots"]', "content", robots);
  }, [description, path, robots, title]);

  return null;
};

export default Seo;
