# Measure Up: GCSE measurement, 5 a day

A static web page that gives learners 5 multiple-choice GCSE measurement questions a day. It has a bank of 365 days (1,825 questions), and only today's 5 can be answered. Learners get instant feedback with a worked explanation, a streak counter, a star total and a review screen at the end.

## Files

- `index.html`: the game. The settings block near the top of the script sets the start date, weekdays only, wrap-around and date override for testing.
- `questions.js`: the question bank, with one array of 5 questions per day.
- `generate.py`: optional. It rebuilds `questions.js` with every answer calculated, so a fresh set is one command away (`python3 generate.py`).

## Put it on GitHub Pages

1. Create a new repository on GitHub, for example `measure-up`.
2. Upload `index.html` and `questions.js` (Add file → Upload files → Commit).
3. Go to Settings → Pages. Under "Build and deployment", choose "Deploy from a branch", select `main` and `/ (root)`, then Save.
4. After a minute or so the site is live at `https://YOUR-USERNAME.github.io/measure-up/`.

## Add it to Teams

1. In the class team, open the channel and select **+** (Add a tab).
2. Choose **Website** and paste the GitHub Pages address (it must start with https).
3. Name the tab, for example "Maths 5 a Day", and save.

If the Website option is missing, IT will need to allow the Website app in the Teams admin centre.

## Settings (top of the script in index.html)

| Setting | What it does |
|---|---|
| `startDate` | The date Day 1 unlocks. Today's set is the number of days since this date. |
| `weekdaysOnly` | `true` gives a new set Monday to Friday only and shows a weekend message on Saturday and Sunday. |
| `wrapAround` | After the last day, go back to Day 1 (`true`) or show an "all done" message (`false`). |
| `allowDateOverride` | Set to `true` while testing, then open `index.html?date=2026-12-01` to preview any day. Set it back to `false` before learners use it. |
| `storageKey` | Change this to wipe everyone's saved progress (for example at the start of a new year). |

## Using your own questions

Replace the contents of `questions.js`, keeping this shape:

```js
window.QUESTION_BANK = {
  "title": "Measure Up",
  "subtitle": "GCSE Maths: measurement, 5 a day",
  "days": [
    [ // Day 1: exactly 5 questions
      { "topic": "Area", "tier": "F", "q": "Question text",
        "options": ["A", "B", "C", "D"], "answer": 2, "explain": "Worked explanation" },
      ...
    ],
    ...
  ]
};
```

`answer` is the position of the correct option, counting from 0. `tier` is `F` or `H`.

## Limitations to know about

- **The daily lock is a speed bump, not security.** Everything runs in the learner's browser. A determined learner could view the page source to see the whole bank, or change their device clock. That's fine for low-stakes practice, but don't use it for anything assessed.
- **Progress is stored on each device.** Streaks and stars live in the browser's local storage, so they won't follow a learner between the Teams app and a phone. Staff can't see any results.
- **A public repository means public questions.** GitHub Pages on a free account publishes from a public repo.
