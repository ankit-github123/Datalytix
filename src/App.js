import  React from "react"
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import {BrowserRouter as Router} from "react-router-dom"
const App = () => {
    return <div>
    <Router>
        <Header/>
        <Content/>
        </Router>
    </div>
}
export default App