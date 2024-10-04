export const formattedDateFull = (timestamp) => {
  const date = new Date(timestamp);
  const day = ("0" + date.getUTCDate()).slice(-2);
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const year = date.getUTCFullYear();
  const hours = ("0" + date.getUTCHours()).slice(-2);
  const minutes = ("0" + date.getUTCMinutes()).slice(-2);
  const second = ("0" + date.getUTCSeconds()).slice(-2);
  const formattedDateFull = `${day}.${month}.${year} ${hours}:${minutes}:${second}`;
  return formattedDateFull;
};

export const formattedDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = ("0" + date.getUTCDate()).slice(-2);
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const year = date.getUTCFullYear();
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};

export function formatCustomDate(dateStr, language) {
  const date = new Date(dateStr);

  const months = {
    uz: [
      "yanvar",
      "fevral",
      "mart",
      "aprel",
      "may",
      "iyun",
      "iyul",
      "avgust",
      "sentabr",
      "oktabr",
      "noyabr",
      "dekabr",
    ],
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    ru: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
  };

  const day = date.getDate();
  const month = months[language][date.getMonth()];
  const year = date.getFullYear();

  if (language === "uz") {
    return `${day} ${month} ${year} yil`;
  } else if (language === "en") {
    return `${day} ${month} ${year} year`;
  } else if (language === "ru") {
    return `${day} ${month} ${year} г.`;
  } else {
    throw new Error("Unsupported language");
  }
}

export function formatPrice(price) {
  // return price.toLocaleString("ru-RU", { minimumFractionDigits: 0 });
  return Math.floor(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function formatPhoneNumber(phoneNumber) {
  return phoneNumber?.replace(
    /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
    "+($1) $2 $3 $4 $5"
  );
}
