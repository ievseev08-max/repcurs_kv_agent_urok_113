/**
 * Иллюстрации кейсов: только локальные файлы из public/images/.
 * Внешние URL (tempfile.aiquickdraw.com и т.п.) дают ERR_CONNECTION_RESET / 404
 * после истечения срока или из‑за сети — не используйте их в проде.
 */
// Пока нет отдельных файлов — одна картинка на три карточки (без внешних CDN).
export const CASE_CARD_IMAGES = ['/images/case-1.png', '/images/case-1.png', '/images/case-1.png'];
