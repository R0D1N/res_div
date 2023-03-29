import React from 'react';
import Res from './components/Res/Res';
import classes from './App.module.css';
function App() {
  return (
    <div className={classes.app}>
      <Res>
        <div>Box 1</div>
      </Res>
        <Res>
            <div>Box 2</div>
        </Res>
    </div>
  );
}

export default App;
