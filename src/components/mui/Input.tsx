import React from 'react';
import { InputAdornment, SxProps, TextField } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useTranslation } from 'react-i18next';

type variant = "outlined" | "filled" | "standard"

interface InputInterface {
    name: string;
    title: string;
    variant?: variant
    required?: boolean;
    type?: string;
    className?: string;
    valid?: object;
    icon?: ReactJSXElement;
    sx?: SxProps;
    placeholder?: string;
    error?: boolean;
    errorText?: any
}

const Input = ({
    title,
    name,
    className,
    variant='outlined',
    required=false,
    type,
    valid,
    icon,
    placeholder,
    sx,
    error=false,
    errorText
}: InputInterface, props: any) => {
    const { t } = useTranslation();

    return (
        <>
            <TextField
                {...valid}
                label={t(title)}
                name={name}
                className={className}
                type={type}
                variant={variant}
                sx={sx}
                placeholder={placeholder}
                error={error}
                helperText={t(errorText)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            {icon}
                        </InputAdornment>
                    )
                }}
                required={required}>
                    {
                        props.children
                    }
            </TextField>
        </>
    )
}

export default Input;