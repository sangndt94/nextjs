export const formatPrice = ({ locale = "vi", number = 0 }) => {
  const moneys: {
    [key: string]: {
      locales: string;
      currency: string;
      currencyDisplay: string;
      symbolToEnd: boolean;
      maximumSignificantDigits: number | undefined;
    };
  } = {
    vi: {
      locales: "vi-VN",
      currency: "VND",
      currencyDisplay: "symbol",
      symbolToEnd: false,
      maximumSignificantDigits: 3,
    },
    en: {
      locales: "en-US",
      currency: "USD",
      currencyDisplay: "code",
      symbolToEnd: false,
      maximumSignificantDigits: 3,
    },
    id: {
      locales: "id-ID",
      currency: "IDR",
      currencyDisplay: "symbol",
      symbolToEnd: false,
      maximumSignificantDigits: 3,
    },
  };
  let result = new Intl.NumberFormat(moneys[locale].locales, {
    style: "currency",
    currency: moneys[locale].currency,
    currencyDisplay: moneys[locale].currencyDisplay,
    maximumSignificantDigits: moneys[locale].maximumSignificantDigits,
    maximumFractionDigits: 3,
  }).format(number);

  return result;
};
