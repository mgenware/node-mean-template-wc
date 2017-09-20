module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst libA_1 = require(\"dir/libA\");\nconst libB_1 = require(\"./dir/libB\");\nclass Main {\n    static test() {\n        libA_1.default.test();\n        libB_1.default.test();\n    }\n}\nexports.default = Main;\n",
dependencies: ["dir/libA","./dir/libB"],
sourceMap: {},
headerContent: undefined,
mtime: 1505808936000,
devLibsRequired : undefined
};