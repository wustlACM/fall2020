import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { maskRandString } from "src/utils";
import "src/css/App.css";

function MatrixTextType({
  className,
  color,
  variant,
  text,
  seconds,
}: {
  className?: string;
  color: "primary" | "secondary" | "textPrimary" | "textSecondary" | undefined;
  variant:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "srOnly"
    | undefined;
  text: string;
  seconds?: number;
}) {
  // Increment text demasked
  const animateText = () => {
    if (numDemasked < text.length) setNumDemasked(numDemasked + 1);
  };

  // Type a character every 300ms
  const keySpeed = seconds ? Math.max(5, (seconds / text.length) * 1000) : 80;

  const [numDemasked, setNumDemasked] = useState<number>(0);
  const [curText, setCurText] = useState<string>(maskRandString(text, 0));

  setTimeout(animateText, keySpeed);

  useEffect(() => {
    setCurText(maskRandString(text, numDemasked));
  }, [numDemasked]);

  return (
    <div className="MatrixTextType">
      <Typography className={className} color={color} variant={variant}>
        {curText}
      </Typography>
    </div>
  );
}

export default MatrixTextType;
