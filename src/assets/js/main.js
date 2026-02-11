(function () {
  const KEY = "preferredLanguage";
  const FALLBACK_LANG = "hu";
  const html = document.documentElement;
  const select = document.querySelector("[data-lang-select]");
  const pathPrefix = (html.dataset.pathPrefix || "/").replace(/\/+$/, "/");
  const currentLang = html.dataset.currentLang || "";
  const currentSlug = html.dataset.currentSlug || "";
  const validLangs = select
    ? Array.from(select.options).map(function (opt) { return opt.value; })
    : ["hu", "sr", "en"];

  function isValidLang(code) {
    return validLangs.indexOf(code) !== -1;
  }

  function buildLangUrl(lang, slug) {
    const section = slug ? slug + "/" : "";
    const bare = `/${lang}/${section}`.replace(/\/+/g, "/");
    return pathPrefix === "/" ? bare : `${pathPrefix}${bare.replace(/^\/+/, "")}`;
  }

  function getStoredLang() {
    try {
      const saved = localStorage.getItem(KEY);
      return isValidLang(saved) ? saved : "";
    } catch (_err) {
      return "";
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(KEY, lang);
    } catch (_err) {
      // Ignore storage restrictions
    }
  }

  if (isValidLang(currentLang)) {
    setStoredLang(currentLang);
  }

  if (select) {
    if (isValidLang(currentLang)) {
      select.value = currentLang;
    }
    select.addEventListener("change", function (event) {
      const nextLang = event.target.value;
      if (!isValidLang(nextLang)) {
        return;
      }
      setStoredLang(nextLang);
      window.location.assign(buildLangUrl(nextLang, currentSlug));
    });
  }

  const rootA = pathPrefix;
  const rootB = pathPrefix.replace(/\/$/, "");
  const isRoot = window.location.pathname === rootA || window.location.pathname === rootB;
  if (!isRoot) {
    return;
  }

  const targetLang = getStoredLang() || FALLBACK_LANG;
  window.location.replace(buildLangUrl(targetLang, ""));
})();
