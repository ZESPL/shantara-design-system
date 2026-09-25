# 17. Security and hosts (SEC)

Part of the [search and AI visibility rules](overview.md). Priorities, owner tags and recorded decisions are in the overview.

- **SEC-01 (P0) [Infra]** HTTPS everywhere. Both `http://` and the non-canonical host 301 to the canonical host in one hop (REDIR-03). **Check:** request the four variants of the homepage. All land on one URL.
- **SEC-02 (P0) [Infra]** The HSTS header is set and there is no mixed content, which includes loading OpenPanel from `https://openpanel.zescloud.net/`. **Check:** response headers and the browser console on a page with analytics running.
- **SEC-03 (P0) [Infra]** No exposed `.env`, `.git`, Keystatic secrets or raw uploads. **Check:** request `/.env` and `/.git/config`. Both return 404.
- **SEC-04 (P1) [Infra]** A Content-Security-Policy header allows only the site itself, OpenPanel, Google Tag and the Web3Forms endpoint. **Check:** response headers, and the browser console shows no CSP errors during a test consultation.
