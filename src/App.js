import React from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import routes from './config/routes';
import "./scss/index.scss";



function App() {

  return (
        <Router>
          <Switch>            
          {
            //recorro las rutas
            routes.map( (route, index) =>(
            <RouteWithSubRoutes key={index} {...route} />
            ))
          }
          </Switch>
        </Router>   
  );
}









// cuando queres una funcion y sea un COMPONENTE usamos mayuscula para emepzar su nombre. y cuando queremos una funcion comun o normal la empezamos con minusculas
// Cuando queremos usar un HOOK usamos siempre antepuesto el use (ej. useRouter)
function RouteWithSubRoutes(route){
  //console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  )
}




export default App;
