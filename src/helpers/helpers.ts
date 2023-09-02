export function makeSlugFromTitle(t: string) {
  return t.toLowerCase().split(' ').join('-');
}
