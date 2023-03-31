import React from 'react';
import Res from './components/Res/Res';
import classes from './App.module.css';
function App() {
  return (
    <div className={classes.app}>
        <Res Pwidth={200} Pheight={200}>
            <div>Box 1</div>
        </Res>
    </div>
  );
}

export default App;
