export function makeSlugFromTitle(t: string) {
  return t.replace(/[?!.]/, '').toLowerCase().split(' ').join('-');
}
