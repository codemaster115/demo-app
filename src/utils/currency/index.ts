const FLOAT_REGEX = /[^-0-9.]/g;

const addCurrencyCode = (amount: number | string) => `$${amount}`;

const getFloatFromString = (amount: string) => amount.replace(FLOAT_REGEX, "");

const formatCurrency = (amount: number): string => {
  // Convert the number to a string and add commas
  const formattedAmount = amount.toLocaleString(undefined, { minimumFractionDigits: 2 });

  // Add the $ prefix and return the formatted string
  return addCurrencyCode(formattedAmount);
};

export { formatCurrency, addCurrencyCode, getFloatFromString };
