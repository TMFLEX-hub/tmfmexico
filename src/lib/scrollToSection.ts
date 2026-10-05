export function normalizePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function parseSectionHref(href: string, currentPath: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) {
    return null;
  }

  const id = href.slice(hashIndex + 1);
  if (!id) {
    return null;
  }

  const rawPath = href.slice(0, hashIndex);
  const path = normalizePath(rawPath || currentPath);

  return { path, id };
}

export function sectionHref(id: string, pathname: string) {
  const path = normalizePath(pathname);

  if (path === "/" || path === "/electrico") {
    return `#${id}`;
  }

  if (path.startsWith("/electrico/")) {
    return `/electrico#${id}`;
  }

  return `/#${id}`;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) {
    return false;
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });

  if (window.location.hash !== `#${id}`) {
    history.pushState(null, "", `#${id}`);
  }

  return true;
}

export function handleSectionLinkClick(
  event: {
    preventDefault: () => void;
    defaultPrevented: boolean;
    metaKey?: boolean;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    button?: number;
  },
  href: string,
) {
  if (
    event.defaultPrevented ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    (event.button !== undefined && event.button !== 0)
  ) {
    return;
  }

  const parsed = parseSectionHref(href, window.location.pathname);
  if (!parsed) {
    return;
  }

  const current = normalizePath(window.location.pathname);
  if (parsed.path !== current) {
    return;
  }

  if (scrollToSection(parsed.id)) {
    event.preventDefault();
  }
}
