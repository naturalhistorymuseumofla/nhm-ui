import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'nhm-ui';
import { useState } from 'react';


const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <Button>Hello!</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
