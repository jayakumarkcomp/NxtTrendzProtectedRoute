import { Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProtectedRoute from "./components/ProtectedRoute"
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
 
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route  exact path="/bad-path" component={NotFound}  />
    <Redirect exact path="/bad-path"/>
      </Switch>
 
)

export default App
