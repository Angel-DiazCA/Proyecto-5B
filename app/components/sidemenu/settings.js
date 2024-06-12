export var menu = [
    {
        module: 'home',
        icon: 'home',
        title: ['Inicio', 'Home'],
        color: '#F44336',
        component: 'components/home'
    },
    {
        module: 'dashboard',
        icon: 'chart-bar',
        title: ['Tablero', 'Dashboard'],
        color: '#9C27B0',
        component: 'components/dashboard'
    },
    {
        module: 'layout',
        icon: 'map',
        title: ['Plano', 'Layout'],
        color: '#2196F3',
        component: 'components/layout'
    },
    {
        module: 'settings',
        icon: 'cog',
        title: ['Configuración', 'Settings'],
        color: '#8BC34A',
        submenu: [
            {
                title: ['Areas', 'Areas'],
                component: 'components/settings/areas'
            },
            {
                title: ['Usuarios', 'Users'],
                component: 'components/settings/users'
            }
        ]
    },
    {
        module: 'logs',
        icon: 'th-list',
        title: ['Bitácora', 'Log'],
        color: '#FFC107',
        component: 'components/logs'
    },
]