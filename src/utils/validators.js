export const isValidNumber = (value) => {
  return /^-?\d+$/.test(value);
};

export const parseDateInput = (input) => {
  let match = input.match(/^(\d{1,2})-(\d{1,2})$/);
  if (match) return [match[1], match[2]];

  match = input.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (match) return [match[2], match[3]];

  return null;
};