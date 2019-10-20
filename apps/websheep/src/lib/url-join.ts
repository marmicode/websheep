export function urlJoin(blocks) {
  return blocks
    .map(block => block.replace(/^\/+/, '').replace(/\/+$/, ''))
    .join('/');
}
