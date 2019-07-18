import React from "react";
import "./progress.css"

export const CircularProgress = (props) => {
    const {
        value,
        fontSize,
        title,
        nolabel, onlyvalue, spectrum,
        strokeWidth=6,
        percent, 
        full,
        max = 100, size = 80,
        textColor ="#232526",
        stroke = "rgb(69, 72, 233)",
        baseStroke = "#111616",
        fill = "rgb(240, 240, 240)",
        fontWeight = 600,
    } = props;

    //Props arrangement
    const fSize = (fontSize && fontSize<size/4) ? fontSize : size / 5    //fontSize
    const swidth = Math.ceil(size / 15)             //strokeWidth
    const strokeColor = spectrum ? hslValue(spectrum.start, spectrum.stop, value/max, spectrum.transparency) : stroke

    //Dimensions
    const ratio = value / max;
    const percentValue = ratio * 100;
    const radius = (size / 2);
    const normalizedRadius = radius - swidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = full ? 0 : (circumference - percentValue / 100 * circumference); //nonvisible areas of circle

    function chooseLabel(){
        return percent
            ? `${Math.floor(percentValue)}%`
            : onlyvalue
                ? `${value}`
                : `${value}/${max}`
    }
    const label = chooseLabel()


    function hslValue(start, stop, ratio, transparency = 1) {
        return `hsla(${(start + (stop - start) * ratio)}, 100%, 50%, ${transparency})`
    }


    return (
        <div className="progress-div" style={{ position: "relative", width: size, height: size }} title={title}>
            <svg id="circle-progress-svg" style={{padding:0}}
                height={size}
                width={size}
                className=".progress-ring"
            >
                <circle
                    className="base-circle"
                    stroke={baseStroke}
                    fill={fill}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset: "0", zIndex: 1, position: "absolute", boxShadow: "1px 3px 3px 1px black" }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    className="front-circle"
                    stroke={strokeColor}
                    fill="none"
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset, zIndex: 5, position: "absolute", boxShadow: "1px 3px 3px 1px black" }}
                    strokeWidth={swidth}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            {!nolabel &&
                <span
                    className="label"
                    style={{ fontWeight: fontWeight, color: textColor, fontSize: fSize }}
                >
                    {label}
                </span>
            }
        </div>

    )
}

/*
SAMPLE SVG CODE DON'T DELETE
<svg viewBox="0 0 36 36">
  <path
    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    fill="none"
    stroke="#444";
    stroke-width="1";
  />
</svg>

*/