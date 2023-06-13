"use client";

// Custom reusable components
import { Api } from "@/api";
import { swal } from "@/components/Swal";
import {
    Button,
    Input,
    Password
} from '@/components/mui';
import { login } from "@/validations/login";
import { BoxCss } from '@/css/Box';
import { LoginCss } from '@/css/Login';
import { theme } from "@/css/theme";

// Material-UI Components
import { Box, Card, Grid, Typography } from "@mui/material";
import { AlternateEmail } from '@mui/icons-material';

// React Components
import React, { useEffect } from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form';

// Translation module
import { useTranslation } from "react-i18next";

// Component
const Login = () => {
    const { t } = useTranslation();

    const api = new Api();
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            location.href = "/dashboard";
        }
    }, []);

    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async () => {
        try {
            const res = await api.post('users/login', getValues());
            console.log(res);
        }
        catch (err: any) {
            swal(
                t('form.error'),
                'error',
                err.message
            );
        }
    };

    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center'
        }}>
            <Card variant="outlined" sx={BoxCss.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component={'h1'} variant={'h6'} textAlign={'center'} sx={{
                            color: theme.dark.secondary,
                            marginBottom: 2,
                            fontWeight: 'bold'
                        }}>
                            {t('pages.login.title')}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item textAlign={'center'} xs={12}>
                                    <Input errorText={errors.email?.message} error={!!errors.email} sx={LoginCss.input} variant="filled" icon={<AlternateEmail />} title="form.email" name="email" type="email" valid={register('email', {...login.email})} />
                                </Grid>

                                <Grid item textAlign={'center'} xs={12}>
                                    <Password errorText={errors.password?.message} error={!!errors.password} sx={LoginCss.input} variant="filled" title="form.password" name="password" valid={register('password', {...login.password})} />
                                </Grid>

                                <Grid item textAlign={'center'} xs={12}>
                                    <Button sx={{
                                        color: '#000 !important',
                                        backgroundColor: `${theme.dark.button.success} !important`
                                    }} variant="contained" title="pages.login.save" />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>

                    <Grid sx={{
                        color: theme.dark.text
                    }} item textAlign={'center'} xs={12}>
                        <Link href={'/forgot'}>
                            {t('pages.login.forgot')}
                        </Link>
                    </Grid>

                    <Grid sx={{
                        color: theme.dark.text
                    }} item textAlign={'center'} xs={12}>
                        <Link href={'/register'}>
                            {t('pages.login.register')}
                        </Link>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}

export default Login;
