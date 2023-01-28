/***  Landing views  ***/
import HomeView from '@landing/views/HomeView.vue'
import ProfileView from '@landing/views/ProfileView.vue'
import ProfileSettingsView from '@landing/views/ProfileSettingsView.vue'
import CatalogView from '@landing/views/CatalogView.vue'
import TermsView from '@landing/views/TermsView.vue'
import SingleCarView from '@landing/views/SingleCarView.vue'

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
            title: 'Профиль'
        }
    },
    {
        path: '/profilesettings',
        name: 'ProfileSettings',
        component: ProfileSettingsView,
        meta: {
            layout: 'ProfileLayout',
            title: 'Профиль'
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
                name: 'SingleCar',
                component: SingleCarView,
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