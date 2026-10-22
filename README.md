# Poké Pop Defense

A browser tower defense game in the style of Bloons TD, with Pokémon Mystery Dungeon: Red Rescue Team sprites, dungeons and story. Start here.

- **Play it:** https://claude.ai/artifact/8MZkamrcSyoLfYHWTSy8bE
- **Source:** [index.html](index.html), one self-contained file (about 7 MB, sprites built in). Republish from this file to keep the same link.

## What's in this folder

| Path | What it covers |
|---|---|
| [index.html](index.html) | The game |
| `tools/` | Balance scripts (see below) |
| `sprites/` | Sprites for the 179 species not yet in the game (for making all Pokémon recruitable); see docs/files-and-tools.md |
| `assets/` | `path-mock/` layout mocks and `story-preview/` story box images |
| `agents/game-development/` | Role prompts for reference (game, economy, level, narrative designers, technical artist, audio) |
| [docs/game-design.md](docs/game-design.md) | Every rule and decision Agu made: dungeons, waves, enemies, towers, upgrades, special allies and legendaries, economy, map and UI |
| [docs/story.md](docs/story.md) | The 20 story dungeons in order, bosses, bases and the story boxes |
| [docs/history.md](docs/history.md) | What was built, in order, with the request behind each change |
| [docs/pending.md](docs/pending.md) | Open items and things to check next |
| [docs/files-and-tools.md](docs/files-and-tools.md) | Where every file lives, the balance scripts, the agent definitions and asset sources |

## Balance scripts

Playwright scripts in `tools/`; run with `NODE_PATH=$(npm root -g) node tools/<script> <seed>`: `calib.js` (toughest settings a carried-over bot team survives, per dungeon), `verify.js` and `verify_norelo.js` (play the whole story, the second without rearranging the team), `gaps.js` (placeable tiles per path layout).

## Debug and testing

Unlimited money is on by default (top bar toggle). Debug bars under the map step through dungeons and waves.

## How Agu likes to work

- For anything sizeable, write a short plan in the thread and wait for a go-ahead before editing the game.
- For visual or layout changes, show a mock image first (as with the Tiny Woods path mocks), then roll out to all dungeons.
- Difficulty is tuned last: don't rebalance during other changes, there is a dedicated polish pass ([docs/pending.md](docs/pending.md)).
- Unlimited money and the debug bars stay on while the game is in testing.
