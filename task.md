Read /Users/rocket/mydevprojects/vicentemosqueraportfolio/CLAUDE.md first.

Tasks:
1. Fix Bug: In Projects section, switching languages breaks/hides projects. Ensure all content (including projects) renders reliably across all locales.
2. Refactor i18n to Single Source of Truth (EN):
   - Keep /Users/rocket/mydevprojects/vicentemosqueraportfolio/src/config.ts written ONLY in English to avoid duplicate maintainability overhead and save AI token usage.
   - Implement an automated dynamic translation layer or lightweight client/API wrapper for supported locales: EN (default), ES, CA, FR, ZH.
3. Language Selector UI:
   - Convert the navbar button into a multi-language switcher dropdown/cycle covering [EN, ES, CA, FR, ZH].
   - Default active language must remain EN.