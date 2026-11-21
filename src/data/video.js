// YouTube / Vimeo link එකක් embed link එකක් බවට හරවනවා
export function toEmbed(url = '') {
  if (!url) return '';

  let m = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/
  );
  if (m) return `https://www.youtube.com/embed/${m[1]}`;

  m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (m) return `https://player.vimeo.com/video/${m[1]}`;

  return '';
}
