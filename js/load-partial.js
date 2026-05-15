/**
 * Load an HTML partial relative to this module (requires a local static server).
 * @param {string} relativePath
 * @returns {Promise<string>}
 */
export async function loadPartial(relativePath) {
  const url = new URL(relativePath, import.meta.url);
  // #region agent log
  fetch("http://127.0.0.1:7601/ingest/47d748dd-ca9d-40e0-98f5-d0e0e158fae5", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "388f50",
    },
    body: JSON.stringify({
      sessionId: "388f50",
      runId: "pre-fix",
      hypothesisId: "H4",
      location: "load-partial.js:loadPartial",
      message: "Fetching partial",
      data: { relativePath, resolvedUrl: url.href, protocol: location.protocol },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load partial: ${relativePath} (${response.status})`);
  }
  return response.text();
}
