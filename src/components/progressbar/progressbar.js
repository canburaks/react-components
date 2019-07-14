import React from "react";
//import  "./styles.css"

export const ProgressBar = (props) => {
    const { 
        value, 
        title,
        percent,nolabel, onlyvalue,
        spectrum,
        fontSize=16,
        height=30,
        max=100,
        borderRadius=4,
        textColor="white",
        backgroundColor="white",
        progressColor = "#4CAF50",
    } = props;

    //props edit
    const barHeight = typeof height === "number" ? `${height}px` : height //height
    const barColor = spectrum ? hslValue(spectrum.start, spectrum.stop, value / max, spectrum.transparency) : progressColor
    //Dimensions
    const ratio = value / max;
    const percentValue = ratio * 100;

    function chooseLabel() {
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

    const defaultStyle = {
        box: {
            width: "100%",
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
        },
        label: {
            backgroundColor: barColor,
            height: barHeight,
            lineHeight: barHeight,
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            textAlign: "center",
            color: textColor,
            fontSize:fontSize,
            width: `${(value / max) * 100}%`,
        }
    }
    return(
        <div id="progress-box" title={title} style={defaultStyle.box}>

            {!nolabel && <div id="progress-bar" style={defaultStyle.label}>{label}</div>}
        
        </div>
    )
} 