export default defineNuxtPlugin((nuxtApp) => {
  let userAgent;

  if (process.server) {
    // На сервере: берем User-Agent из заголовков запроса
    userAgent = nuxtApp.ssrContext?.req?.headers["user-agent"];
  } else {
    // На клиенте: используем navigator.userAgent
    userAgent = navigator.userAgent;
  }

  let platform = "web";
  if (userAgent) {
    if (/TelegramBot/i.test(userAgent)) {
      platform = "telegrambot";
    } else if (/Mobile|Android|iP(hone|od|ad)/i.test(userAgent)) {
      platform = "mobile";
    }
  }

  // Сделаем платформу доступной через `nuxtApp.$platform`
  nuxtApp.provide("platform", platform);
});
