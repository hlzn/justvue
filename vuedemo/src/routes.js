import Inicio from './componentes/Inicio.vue'
import Portafolios from './componentes/portafolios/Portafolios.vue'
import Articulos from './componentes/articulos/Articulos.vue'


export const routes = [
    {
        path: '/', 
        component: Inicio
    },
    {
        path: '/portafolios',
        component: Portafolios
    },
    {
        path: '/articulos',
        component: Articulos
    }
]