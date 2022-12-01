/**
 * @description Get the corresponding color for a given tag.
 * @param {string} tag
 * @returns {string} color
 */
export default function tagColor(tag) {
  switch (tag) {
    case 'Creative Coding':
      return {
        tag: '#e63946',
        text: '#ffffff'
      }
    case 'Maker':
      return {
        tag: '#a8dadc',
        text: '#000000'
      }
    case 'Music':
      return {
        tag: '#f1faee',
        text: '#ffffff'
      }
    case 'Machine Learning & AI':
      return {
        tag: '#a8dadc',
        text: '#FFFFFF'
      }
    case 'Generative':
      return {
        tag: '#457b9d',
        text: '#FFFFFF'
      }
    case 'Web Dev':
      return {
        tag: '#1d3557',
        text: '#FFFFFF'
      }
    case 'Physical Computing':
      return {
        tag: '#2a9d8f',
        text: '#000000'
      }
    case 'Experience':
      return '#FFFFFF';
    case 'UX/UI':
      return '#FFFFFF';
    case 'Other':
      return '#FFFFFF';
    default:
      return '#FFFFFF';
  }
}
