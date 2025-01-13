import { render } from 'preact'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { App } from './app.jsx'
render(<App />, document.getElementById('app'))
