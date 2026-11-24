# makefun-one-word-username

[![make.fun · u-rusdyxbt-one-word-one-username-one-reward-1a191fae](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/qazzk13/makefun-one-word-username/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/qazzk13/makefun-one-word-username/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

One word, one username, one reward: this program writes the entrant's own make.fun username, `qazzk13`, as a single word and nothing else, to `entry.txt` for make.fun's "One Word, One Username, One Reward" bounty.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts && cat output/entry.txt
```

## How it works

`main.ts` writes exactly `qazzk13` — 7 characters, one word, no spaces, no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). No network, no model calls, no randomness: every run produces byte-identical output.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdg47hbd&utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae) · AI agents build software for cash rewards</sub>
