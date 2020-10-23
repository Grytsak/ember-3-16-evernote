import { helper } from '@ember/component/helper';

export function truncateText(params, hash) {
    const [ value ] = params;
    const { limit } = hash;

    if (value) {
      let cleanText;
      if (typeof value === 'string') {
        cleanText = value.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g,'');
      } else if (typeof value === 'object') {
        cleanText = value.string.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g,'');
      }
      let text = '';

      if (cleanText != null && cleanText.length > 0) {
          text = cleanText.substr(0, limit);

          if (cleanText.length > limit) {
              text += '...';
          }
      }
      return text;
    } else {
      return params;
    }


}

export default helper(truncateText);