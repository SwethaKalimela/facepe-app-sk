/**
 * Boot a page module only over http(s). Classic script — safe on file://.
 * Usage: <script src="js/boot-page.js" data-module="js/main.js"></script>
 */
(function () {
  // #region agent log
  const ep =
    "http://127.0.0.1:7601/ingest/47d748dd-ca9d-40e0-98f5-d0e0e158fae5";
  const runId = document.documentElement.dataset.debugRun || "pre-fix";
  const log = (hypothesisId, location, message, data) =>
    fetch(ep, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "388f50",
      },
      body: JSON.stringify({
        sessionId: "388f50",
        runId,
        hypothesisId,
        location,
        message,
        data,
        timestamp: Date.now(),
      }),
    }).catch(() => {});
  // #endregion

  const boot = document.currentScript;
  const moduleSrc = boot?.getAttribute("data-module");
  const isFileProtocol = location.protocol === "file:";

  // #region agent log
  log("H1", "boot-page.js", "Boot context", {
    protocol: location.protocol,
    origin: location.origin,
    href: location.href,
    moduleSrc,
    isFileProtocol,
  });
  // #endregion

  if (isFileProtocol) {
    // #region agent log
    log("H1", "boot-page.js", "Blocked module load on file protocol", {
      moduleSrc,
    });
    // #endregion

    const main = document.getElementById("main");
    if (main) {
      main.innerHTML = `
        <div class="container-page py-16">
          <div class="mx-auto max-w-xl rounded-card border border-border-subtle bg-surface-0 p-8 shadow-card">
            <h1 class="font-sans text-2xl font-bold text-ink-950">Local server required</h1>
            <p class="mt-3 text-base text-ink-800">
              This site uses ES modules and <code class="font-mono text-sm">fetch</code> to load HTML partials.
              Browsers block those when you open pages directly from disk (<code class="font-mono text-sm">file://</code>).
            </p>
            <p class="mt-4 text-base text-ink-800">From the project folder, run:</p>
            <pre class="mt-2 overflow-x-auto rounded-lg bg-lilac-25 p-4 font-mono text-sm text-ink-950">npx --yes serve . -l 3000</pre>
            <p class="mt-4 text-base text-ink-800">
              Then open
              <a class="font-bold text-brand-600 underline" href="http://localhost:3000/">http://localhost:3000/</a>
            </p>
          </div>
        </div>
      `;
    }
    return;
  }

  if (!moduleSrc) {
    // #region agent log
    log("H2", "boot-page.js", "Missing data-module on boot script", {});
    // #endregion
    return;
  }

  // #region agent log
  log("H1", "boot-page.js", "Injecting module script", {
    moduleSrc,
    resolved: new URL(moduleSrc, location.href).href,
  });
  // #endregion

  const el = document.createElement("script");
  el.type = "module";
  el.src = moduleSrc;
  el.addEventListener("error", () => {
    // #region agent log
    log("H2", "boot-page.js", "Module script failed to load", { moduleSrc });
    // #endregion
  });
  document.body.appendChild(el);
})();
