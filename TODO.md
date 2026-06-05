# TODO — mobile review feedback (2026-06-05)

From a Claude review of `http://localhost:3000/` at 390×844. Work these in a worktree.

## Quick fixes

- [x] Tab title is still "Create Next App" — update `metadata` in `app/layout.tsx` (title + description), and replace the default favicon.
- [x] "WHO I DO" section label reads like a typo — consider "WHAT I DO" or "WHERE I'VE WORKED". → "WHAT I DO"
- [x] "mono-lite" → "monolith" (appears twice in the MyWheels entry).
- [x] Casing: `php` → PHP, `GraphQl` → GraphQL, `node` → Node.js, "dotnet with blazor" → ".NET with Blazor", `Dotnet` tag → `.NET`.
- [x] Header says "Frontend developer" but both roles say "Full-stack Developer" — pick one story. → Full-stack Developer

## Bigger items

- [x] No contact or links anywhere (email, GitHub, LinkedIn, CV). Highest-priority gap — even a row of icons under the header works. → icon row under header (email jessey.stend@proton.me, GitHub, LinkedIn); CV skipped, no file yet.
- [x] Page ends abruptly after the MyWheels entry — add a small footer (e.g. "Currently in Noord-Holland · email").
- [x] Orange bold "building things that feel good to use" looks clickable next to the underlined "storefront" link — differentiate emphasis styling from link styling. → kept orange bold emphasis by choice (Jessey: similarity with links is fine); underline alone marks links.
- [x] Update "WHAT I DO" section with more experience. Use https://www.linkedin.com/in/jessey-stend-496493151/ to pull data from. Keep the tone of voice of the webpage. → added IJsfontein (2024—2025), StudyWorks (2020—2022), internships (2019—2020); fixed MyWheels dates to 2022—2024 per LinkedIn.

## What's already good (don't break it)

- Copy voice ("2009 Kawasaki", "three meetings to happen") — keep it.
- Mobile layout: line length, vertical rhythm, no overflow.
- Orange section labels + hairline rules, tech-tag pills.
