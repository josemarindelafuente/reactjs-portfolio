import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './LayoutBasic.scss';
import MenuTop from '../components/home/MenuTop';
import Footer from '../components/commons/Footer';

const LayoutBasic = (props) => {

    const { routes } = props;

    return (     
        <div>
            <div>
                <MenuTop />
            </div> 
            
            <div>         
            <LoadRoutes routes={routes} />
            </div> 

            <div>
            <Footer />
            </div>

            
        </div>
                
     );
}




function LoadRoutes({routes}){
    // console.log(routes);
   return (
    <Switch>
        {
            routes.map( (route, index)=>(
             <Route 
             key={index}
             path={route.path}
             exact={route.exact}
             component={route.component}
             />
             ))
        }        
    </Switch>
    )
 }
 
export default LayoutBasic;