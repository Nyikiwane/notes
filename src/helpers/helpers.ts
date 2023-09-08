const regex = (/[.,!?]|<b>|<\/b>|<i>|<\/i>/g);

export function makeSlugFromTitle(t: string) {
  return t.replace(regex, '').toLowerCase().split(' ').join('-');
}
