import { Shell } from './components/shell'
import List from './components/list/list'
import Create from './components/form/create'
import Update from './components/form/update'

export default {
    path: '/',
    component: Shell,
    indexRoute: { component: List },
    childRoutes: [{
        component: List,
        path: '/list'
    }, {
        component: Create,
        path: '/create'
    }, {
        component: Update,
        path: '/update/:id'
    }]
};