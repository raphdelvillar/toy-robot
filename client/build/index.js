var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => Root,
  links: () => links
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-HBUZZ6JF.css";

// app/root.jsx
import { Links, Meta, Outlet, ScrollRestoration, Scripts, LiveReload, useRouteError } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: cssBundleHref }
];
function Root() {
  let error = useRouteError();
  return console.log(error), /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  loader: () => loader
});

// app/components/Stage.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Table = ({ rows, columns }) => /* @__PURE__ */ jsxDEV3("table", { border: 1, width: "50%", children: /* @__PURE__ */ jsxDEV3("tbody", { children: Array(rows).fill(null).map((_, index) => /* @__PURE__ */ jsxDEV3(Row, { columns }, index, !1, {
  fileName: "app/components/Stage.tsx",
  lineNumber: 10,
  columnNumber: 25
}, this)) }, void 0, !1, {
  fileName: "app/components/Stage.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/Stage.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this), Row = (props) => /* @__PURE__ */ jsxDEV3("tr", { children: Array(props.columns).fill(null).map((_, index) => /* @__PURE__ */ jsxDEV3(Cell, {}, index, !1, {
  fileName: "app/components/Stage.tsx",
  lineNumber: 23,
  columnNumber: 21
}, this)) }, void 0, !1, {
  fileName: "app/components/Stage.tsx",
  lineNumber: 19,
  columnNumber: 9
}, this), Cell = () => /* @__PURE__ */ jsxDEV3("td", { children: /* @__PURE__ */ jsxDEV3("center", {}, void 0, !1, {
  fileName: "app/components/Stage.tsx",
  lineNumber: 33,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/Stage.tsx",
  lineNumber: 32,
  columnNumber: 9
}, this), Stage = ({ stats }) => {
  let { height, width } = stats;
  return /* @__PURE__ */ jsxDEV3(Table, { rows: height, columns: width }, void 0, !1, {
    fileName: "app/components/Stage.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this);
}, Stage_default = Stage;

// app/routes/_index.tsx
import { json } from "@remix-run/node";

// app/models/stage.server.tsx
var toyRobotApiBaseUrl = process.env.TOY_ROBOT_API_BASE_URL;
async function getStageStats() {
  let res = await fetch(`${toyRobotApiBaseUrl}/stage/get_stats`);
  return res = await res.json(), res;
}

// app/routes/_index.tsx
import { useLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader() {
  return json(await getStageStats());
}
var Index = () => /* @__PURE__ */ jsxDEV4("div", { className: "container", children: /* @__PURE__ */ jsxDEV4("div", { className: "stage-container", children: /* @__PURE__ */ jsxDEV4(Stage_default, { stats: useLoaderData() }, void 0, !1, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 14,
  columnNumber: 40
}, this) }, void 0, !1, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 14,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 13,
  columnNumber: 5
}, this), index_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PNA73RAH.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-PQPJDCWU.js", "/build/_shared/chunk-Y3MBWS2J.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5L743YA6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-G2DNYRZS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "0ee56247", hmr: { runtime: "/build/_shared/chunk-Y3MBWS2J.js", timestamp: 1698486541777 }, url: "/build/manifest-0EE56247.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
