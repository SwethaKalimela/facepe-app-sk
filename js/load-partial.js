/**
 * Load an HTML partial relative to this module (requires a local static server).
 * @param {string} relativePath
 * @returns {Promise<string>}
 */
export async function loadPartial(relativePath) {
  const url = new URL(relativePath, import.meta.url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load partial: ${relativePath} (${response.status})`);
  }
  return response.text();
}
