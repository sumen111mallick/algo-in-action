import React from 'react';

import Grid from "@mui/material/Grid";
import AlgoChooser from "./components/AlgoChooser";
import AlgoInAction from './components/AlgoInAction';

function App() {
  const algoObject = {
    algo:'qs',
    element:0
  }
  const [getAlgo, setAlgo] = React.useState(algoObject);

  const setAlgoObject = (algo, element) => {
    setAlgo((previosState)=>{return {...previosState, algo:algo, element:element}});

  }
  return (
    <div className="App">
      <main>
        <Grid container spacing={2} mt={3}>
            <AlgoChooser setAlgoObject={setAlgoObject} />
            <AlgoInAction getAlgo={getAlgo} />
        </Grid>
      </main>
    </div>
  );
}

export default App;
