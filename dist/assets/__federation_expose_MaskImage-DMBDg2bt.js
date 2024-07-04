import { importShared } from './__federation_fn_import-BcdbRT-4.js';
import { r as reactExports } from './__federation_shared_react-CVnhAvi8.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const {useState} = await importShared('react');

const MaskImage = ({ maskSource, percentage, fillColor, siluetheColor }) => {
  const [hovered, setHovered] = useState(false);
  if (maskSource === void 0 || maskSource === "")
    throw new Error("maskSource is required");
  if (percentage === void 0)
    throw new Error("percentage is required");
  if (fillColor === void 0 || fillColor === "")
    throw new Error("fillColor is required");
  if (siluetheColor === void 0 || siluetheColor === "")
    throw new Error("siluetheColor is required");
  const style = {
    position: "relative",
    maskImage: `url('${maskSource}')`,
    WebkitMask: `url('${maskSource}')`,
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    background: `linear-gradient(to top, ${fillColor} ${percentage}%, ${siluetheColor} ${percentage}%)`,
    backgroundSize: "contain",
    width: "100%",
    height: "100%"
  };
  const tooltipStyle = {
    position: "absolute",
    bottom: percentage > 95 ? "auto" : `${percentage}%`,
    left: "50%",
    backgroundColor: "#0197B3",
    padding: "5px",
    borderRadius: "15px",
    fontSize: "15px",
    fontFamily: "Lucida Sans",
    fontWeight: "bold",
    color: "#fff",
    visibility: hovered ? "visible" : "hidden"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mask", style, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: tooltipStyle, className: "tooltip", children: [
    percentage,
    "%"
  ] }) });
};

export { MaskImage as default, jsxRuntimeExports as j };
