import React, { useState } from 'react';
import { TextField, InputAdornment, SxProps } from '@mui/material';
import { Visibility, VisibilityOff, Lock } from '@mui/icons-material';

import { useTranslation } from 'react-i18next';

type variant = "outlined" | "filled" | "standard"

interface InputInterface {
    name: string;
    title: string;
    variant?: variant
    required?: boolean;
    className?: string;
    valid?: object;
    sx?: SxProps;
    placeholder?: string;
    error?: boolean;
    errorText?: any;
}

const Input = ({
    title,
    name,
    className,
    variant='outlined',
    required=false,
    valid,
    placeholder,
    sx,
    error=false,
    errorText
}: InputInterface, props: any) => {
    const { t } = useTranslation();

    const [visible, setVisible] = useState<boolean>(false)
    return (
        <TextField
            {...valid}
            name={name}
            label={t(title)}
            className={className}
            type={visible ? 'text' : 'password'}
            variant={variant}
            sx={sx}
            error={error}
            helperText={t(errorText)}
            placeholder={placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <Lock />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment className='cursor-pointer' position='end' onClick={() => setVisible(!visible)}>
                    {
                        visible && (
                            <Visibility />
                        ) || (
                            <VisibilityOff />
                        )
                    }
                </InputAdornment>
                )
            }}
            required={required}>
                {
                    props.children
                }
        </TextField>
    )
}

export default Input;