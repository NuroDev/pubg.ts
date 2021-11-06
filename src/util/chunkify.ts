const CHUNK_SIZE = 10 as const;

/**
 * Chunkify - Splits up an array into chnks of arrays of a specified size
 *
 * @param {Array} array - The input array that will be chunkified
 * @param {number} [chunkSize] - The size of each chunk
 */
export function chunkify<T>(array: Array<T>, chunkSize: number = CHUNK_SIZE) {
  let results = [] as Array<Array<T>>;

  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }

  return results;
}
