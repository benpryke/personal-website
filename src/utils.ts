/** Leading protocol and "www." of a URL */
const urlPrefix = /^https?:\/\/(?:www\.)?/

/** Trailing slash of a URL */
const trailingSlash = /\/$/

/** Join truthy class names */
export const cx = (...names: (string | false | null | undefined)[]) =>
  names.filter(Boolean).join(" ")

/** A URL without its protocol, www, or trailing slash, e.g. "wortle.xyz" */
export const displayUrl = (url: string) =>
  url.replace(urlPrefix, "").replace(trailingSlash, "")
