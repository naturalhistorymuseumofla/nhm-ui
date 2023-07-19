import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, H1 } from 'nhm-ui';
import { useState } from 'react';


const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <H1>Example</H1>
      <Button>Submit</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
