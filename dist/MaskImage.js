import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
const MaskImage = ({ maskSource, percentage, fillColor, siluetheColor }) => {
    const [hovered, setHovered] = useState(false);
    if (maskSource === undefined || maskSource === '')
        throw new Error('maskSource is required');
    if (percentage === undefined)
        throw new Error('percentage is required');
    if (fillColor === undefined || fillColor === '')
        throw new Error('fillColor is required');
    if (siluetheColor === undefined || siluetheColor === '')
        throw new Error('siluetheColor is required');
    const style = {
        position: 'relative',
        maskImage: `url('${maskSource}')`,
        WebkitMask: `url('${maskSource}')`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        background: `linear-gradient(to top, ${fillColor} ${percentage}%, ${siluetheColor} ${percentage}%)`,
        backgroundSize: 'contain',
        width: '100%',
        height: '100%'
    };
    const tooltipStyle = {
        position: 'absolute',
        bottom: percentage > 95 ? 'auto' : `${percentage}%`,
        left: '50%',
        backgroundColor: '#0197B3',
        padding: '5px',
        borderRadius: '15px',
        fontSize: '15px',
        fontFamily: 'Lucida Sans',
        fontWeight: 'bold',
        color: '#fff',
        visibility: hovered ? 'visible' : 'hidden',
    };
    return (_jsx("div", { className: "mask", style: style, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: _jsxs("div", { style: tooltipStyle, className: "tooltip", children: [percentage, "%"] }) }));
};
export default MaskImage;
