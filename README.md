# yStock 官網

yStock Chrome／Firefox 擴充功能的靜態官網。使用 Vite 多頁模式與 Tailwind CSS v4，不需要前端框架或伺服器端程式。

## 開發

需要 Node.js 22 與 pnpm。

```bash
pnpm install
pnpm dev
```

Vite 開發伺服器會提供：

- `/`：首頁
- `/guide.html`：使用教學
- `/version.html`：版本歷史
- `/privacy.html`：隱私權說明

### 本機 GA4 除錯

本機開發預設不傳送 GA4 事件，避免測試流量進入正式報表。需要從 GA4 DebugView
驗證事件時，可明確啟用除錯模式：

```bash
VITE_GA_DEBUG=true pnpm dev
```

除錯模式只會在 `localhost` 或 `127.0.0.1` 生效，並將 `debug_mode` 加入 GA4
設定。Extension 專用的 `/privacy.html` 不會載入網站 GA4。請勿將除錯模式當作一般開發啟動方式。

## 建置與預覽

```bash
pnpm build
pnpm preview
```

建置結果位於 `dist/`，可直接部署到 GitHub Pages 或任何靜態網站服務。

## 靜態圖片

網站圖片統一放在 `public/img/`，HTML 以 `/img/<檔名>` 引用。Vite 開發伺服器會直接提供這些檔案，建置時則原樣複製到 `dist/img/`。

不要在專案根目錄另外建立 `img/`，避免同一個 URL 對應到兩套來源或留下未被建置的舊資產。
