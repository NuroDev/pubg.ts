export const playerNames = ["iBBA", "WackyJacky101"];

export const playerIds = [
  "account.1225daa4e7544edfbe5f115b433d5069", // iBBA
  "account.c0e530e9b7244b358def282782f893af", // WackyJacky101
];

export const patternMatchUUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Expect wrapper to test if a value is a valid enum value
 *
 * @param {object} e - The enum type
 * @param {string} value - The value you want to test
 */
export function expectEnum<T extends string>(
  e: {
    [T: string]: string;
  },
  value: T
) {
  return expect(Object.values(e).includes(value));
}
