import React from "react";
type Type = "primary" | "normal" | "danger" | "warning";
type Size = "large" | "small" | "medium";


export const ThemeContext = React.createContext<Type>("danger");

export const SizeContext = React.createContext<Size>("small")
