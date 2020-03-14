import 'isomorphic-unfetch' // eslint-disable-line import/no-unassigned-import

export async function fetchJson(url) {
  const response = await fetch(url)
  if (response && response.ok) {
    return response.json()
  }
}

const data = require('./chiffres-cles');

export const getData = async () => data;
