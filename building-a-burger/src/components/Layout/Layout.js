import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => (
  // here I want adjacent elements but dont want to wrap in another div
  // high order function to wrap the elements since there is an error with return ();
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;