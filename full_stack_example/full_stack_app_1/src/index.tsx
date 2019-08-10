import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
    <App initialData={(window as any).initialData} />,
    document.getElementById('root')
)