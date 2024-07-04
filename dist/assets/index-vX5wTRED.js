import { importShared } from './__federation_fn_import-BcdbRT-4.js';
import MaskImage, { j as jsxRuntimeExports } from './__federation_expose_MaskImage-DMBDg2bt.js';
import { r as reactDomExports } from './__federation_shared_react-dom-6cCw-6Kw.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const truck = "/assets/truck-CKjdHZM-.png";

const Vector = "/assets/Vector-D2HfVzK6.png";

const {useState} = await importShared('react');
function App() {
  const [percentage, setPercentage] = useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "30%", height: "200px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MaskImage, { maskSource: truck, percentage, fillColor: "skyblue", siluetheColor: "#e0e0e0" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { style: { "padding": "10px" }, onClick: () => setPercentage((percentage2) => percentage2 + 10) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "1000px", height: "400px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MaskImage, { maskSource: Vector, percentage, fillColor: "red", siluetheColor: "#e0e0e0" }) })
  ] });
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
