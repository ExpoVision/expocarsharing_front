/***  Landing views  ***/
import HomeView from '@landing/views/HomeView.vue'
import ProfileView from '@landing/views/ProfileView.vue'
import ProfileSettingsView from '@landing/views/ProfileSettingsView.vue'
import CatalogView from '@landing/views/CatalogView.vue'
import TermsView from '@landing/views/TermsView.vue'
import OfferView from '@landing/views/OfferView.vue'

import isAuth from '@/router/isAuth'

const landingModuleRoutes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            layout: 'LandingLayout',
            title: 'Главная'
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileView,
        meta: {
            layout: 'ProfileLayout',
            title: 'Профиль',
            middleware: [
                isAuth
            ]
        }
    },
    {
        path: '/profilesettings',
        name: 'ProfileSettings',
        component: ProfileSettingsView,
        meta: {
            layout: 'ProfileLayout',
            title: 'Профиль',
            middleware: [
                isAuth
            ]
        }
    },
    {
        path: '/catalog',
        meta: {
            layout: 'LandingLayout'
        },
        children: [
            {
                path: '',
                name: 'Catalog',
                component: CatalogView,
                meta: {
                    title: 'Каталог'
                },
            },
            {
                path: 'car/:id',
                name: 'OfferView',
                component: OfferView,
                meta: {
                    title: ''
                }
            }
        ]
    },
    {
        path: '/terms',
        name: 'Terms',
        component: TermsView,
        meta: {
            layout: 'LandingLayout',
            title: 'Условия'
        }
    }
]

export default landingModuleRoutes