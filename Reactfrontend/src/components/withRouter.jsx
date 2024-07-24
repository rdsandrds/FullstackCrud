import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    return (
      <Component
        {...props}
        params={params}
        location={location}
        navigate={navigate}
      />
    );
  }
  return ComponentWithRouterProp;
}

export default withRouter;