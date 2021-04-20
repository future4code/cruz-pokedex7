import { BrowserRouter,Route, Switch  } from "react-router-dom"
import Details from "../screens/Details"
import Home from "../screens/Home"
import Pokedex from "../screens/Pokedex"


const Router = () => {

    return (
        ( <div>
            
           <BrowserRouter>
            <Switch>
                <Route exact path="/">
                <Home/>
                </Route>
                <Route exact path="/Pokedex">
                    <Pokedex/>

                </Route>
                <Route exact path="/Details">
                <Details/>
                </Route>



            </Switch>
        </BrowserRouter>
        
        </div>)
    )
}

export default Router