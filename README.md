# Builtloop Garden Studio

Interactive garden apartment from the two 60-second Builtloop demo videos.

- Latest creative studio film: https://pranavdmg20.github.io/builtloop-garden-studio/?design=studio
- Earlier lawn-to-home film: https://pranavdmg20.github.io/builtloop-garden-studio/?design=garden

Both links load the saved project from their respective films on a first visit. Visitor edits are saved separately in the browser for each design. Furniture, rooms, walls, openings, colors, and dimensions remain editable.

The separate Aurelia editor remains at https://pranavdmg20.github.io/builtloop-studio-demo/.

Asset provenance is in credits.json. No accounts or server storage are required.

## Editor source

The editable Vite source is in `editor-source/`. It uses the project snapshots and static assets at the repository root. From that directory, run `npm ci`, `npm test`, and `npm run build`. The build writes `editor-source/dist/`; publish its `index.html` and `assets/` into the repository root, retaining existing hashed assets so visitors with a cached page can still load them. The production base path is configured in `vite.config.js`.
