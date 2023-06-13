"use client"
import { theme } from '@/css/theme';
import i18n from '@/plugins/i18n/i18n';
import { AppBar, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

import React, { useState } from 'react';

const Layout = (props: any) => {
    const { t } = useTranslation();
    
    const [lang, setLang] = useState<string>(i18n.language);

    const handleChange = (evt: SelectChangeEvent) => {
        i18n.changeLanguage(evt.target.value);
        setLang(evt.target.value);
    }

    return (
        <>
            <AppBar>
                <Toolbar sx={{
                    backgroundColor: theme.dark.accent
                }} variant='dense'>
                    <FormControl size='small'>
                        <Select onChange={handleChange} value={lang}>
                            <MenuItem value="fr">{t('lang.fr')}</MenuItem>
                            <MenuItem value="en">{t('lang.en')}</MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
            { props.children }
        </>
    )
}

export default Layout;