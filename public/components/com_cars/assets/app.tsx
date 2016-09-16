import * as React from 'react'
import * as ReactDOM from 'react-dom'

import routes from 'routes'
import configureStore from 'configureStore'

import { Router, useRouterHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore(history);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history } routes={ routes } />
    </Provider>,
    document.getElementsByClassName('app')[0]
);