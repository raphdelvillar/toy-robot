import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-Y3MBWS2J.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Stage.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Stage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Stage.tsx"
  );
  import.meta.hot.lastModified = "1698480286129.6323";
}
var Table = ({
  rows,
  columns
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { border: 1, width: "50%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: Array(rows).fill(null).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, { columns }, index, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 28,
    columnNumber: 59
  }, this)) }, void 0, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = Table;
var Row = ({
  key,
  columns
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: Array(columns).fill(null).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cell, {}, index, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 38,
    columnNumber: 58
  }, this)) }, void 0, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_c2 = Row;
var Cell = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("center", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "O" }, void 0, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 44,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 44,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_c3 = Cell;
var Stage = ({}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("center", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { rows: 5, columns: 5 }, void 0, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 50,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
_c4 = Stage;
var Stage_default = Stage;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "Table");
$RefreshReg$(_c2, "Row");
$RefreshReg$(_c3, "Cell");
$RefreshReg$(_c4, "Stage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1698351566992.552";
}
var Index = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Stage_default, {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c5 = Index;
var index_default = Index;
var _c5;
$RefreshReg$(_c5, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  index_default as default
};
//# sourceMappingURL=/build/routes/_index-V7FTTIF2.js.map
