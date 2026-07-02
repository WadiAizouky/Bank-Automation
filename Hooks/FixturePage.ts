import {Page } from '@playwright/test';

//Variable d'envionnement
export const FixturePage = {
    //@ts-ignore
    page : undefined as Page,
    url : 'http://zero.webappsecurity.com/',
    environment : "Recette"
}