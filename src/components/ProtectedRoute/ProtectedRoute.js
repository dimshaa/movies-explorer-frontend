import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {props.loggedIn ? <Component {...props} /> : <Redirect to='/' />}
    </Route>
  )
};

export default ProtectedRoute;
