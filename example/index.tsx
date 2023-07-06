import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToggleSwitch, Button } from "tdsx-example" 
import { useState } from 'react';


const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <ToggleSwitch
        enabled={isToggled}
        onChange={(v: boolean) => setIsToggled(v)}
      />
      <Button>Hello!</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
