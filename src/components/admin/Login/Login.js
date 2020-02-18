import React from 'react';
import './Login.scss';

const Login = () => {
    return ( 
        <div>


<div className="wrapper fadeInDown">
  <div id="formContent">
            <div className="fadeIn first">
            <h2>Login de Administradores</h2>
            </div>

            <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario" />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="Contraseña" />
            <input type="submit" class="fadeIn fourth" value="Log In" />
            </form>


            <div id="formFooter">
            Olvidaste la Contraseña?...Lola
            </div>
  </div>
</div>


        </div>
     );
}
 
export default Login;