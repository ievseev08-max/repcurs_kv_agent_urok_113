/**
 * Иллюстрации кейсов: только локальные файлы из public/images/.
 * Внешние URL (tempfile.aiquickdraw.com и т.п.) дают ERR_CONNECTION_RESET / 404
 * после истечения срока или из‑за сети — не используйте их в проде.
 */
// Три отдельных файла в public/images/ — при необходимости замените case-2/3 на уникальные макеты.
export const CASE_CARD_IMAGES = ['/images/case-1.png', '/images/case-2.png', '/images/case-3.png'];
