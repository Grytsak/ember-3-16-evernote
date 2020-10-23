import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

function htmlSafeString([trustedHTML]) {
  return htmlSafe(trustedHTML);
}

export default helper(htmlSafeString);