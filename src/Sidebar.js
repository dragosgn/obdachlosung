// sidebar.js

import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu right>
      <h2>
        Obdach<strong>Lösung</strong>
      </h2>
      <br></br>
      <br></br>

      <br></br>
      <h3>The housing crisis</h3>
      <h3>The income gap</h3>
      <h3>Our Local Partners</h3>
      <h3>Donate with @Lisk</h3>

      <span className="description">
        The top four causes of homelessness among unaccompanied individuals were
        (1) lack of affordable housing, (2) unemployment, (3) poverty, (4)
        mental illness and the lack of needed services, and (5) substance abuse
        and the lack of needed services.
      </span>
    </Menu>
  );
};
