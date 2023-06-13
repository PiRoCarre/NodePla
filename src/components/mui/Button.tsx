import React from 'react';
import { Button as Btn, SxProps } from '@mui/material';
import { t } from 'i18next';

type variant = "text" | "contained" | "outlined";
type color = "error" | "inherit" | "primary" | "secondary" | "success" | "info" | "warning";
type button = "submit" | "button" | "reset";

interface ButtonInterface {
    title: string;
    variant?: variant;
    className?: string;
    evt?: any;
    color?: color;
    type?: button;
    sx?: SxProps
}

const Button = ({title, variant="outlined", className, evt, color, type="submit", sx}: ButtonInterface) => {
    return (
        <Btn
            type={type}
            className={className}
            variant={variant}
            onClick={evt}
            color={color}
            sx={sx}
        >
                { t(title) }
            </Btn>
    )
}

export default Button;
