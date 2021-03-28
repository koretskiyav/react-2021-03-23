import React, { useState } from 'react';
import Navigation from './navigation';

export default function Tabs(props) {
    const [activeId, setActiveId] = useState(props.data[0].id);

    return (
      <React.Fragment>
        <Navigation
          onClick={setActiveId}
          activeId={activeId}
          {...props}
        />
        {props.children(activeId)}
      </React.Fragment>
    );
}
