const { FuseBox } = require("fuse-box");
const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
});
fuse.bundle("app")
    .tsConfig("./tsconfig.json")
    .instructions(`>main.ts`);

fuse.run();