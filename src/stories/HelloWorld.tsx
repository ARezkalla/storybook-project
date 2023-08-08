import React from "react";
import { Button, ButtonProps } from "@mui/material";

const HelloWorld = ({ variant = "outlined", ...props }: ButtonProps) => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button
        variant={variant}
        color={props.color}
        onClick={() => console.log("clicked")}
      >
        click me
      </Button>
    </div>
  );
};

export default HelloWorld;
