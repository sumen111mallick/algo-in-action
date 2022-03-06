import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const sortingAlgo = [
    {
      value: 'qs',
      label: 'Quick Sort',
    },
    {
      value: 'bs',
      label: 'Bubble Sort',
    },
    {
      value: 'ms',
      label: 'Merge Sort',
    },
    {
      value: 'is',
      label: 'Insertion Sort',
    },
  ];

function AlgoChooser() {
    
    
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <form>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={this.props.algo}
          onChange={()=>{this.props.setAlgoState(event.target.value)}}
          helperText="Please select your sorting algo"
        >
          {sortingAlgo.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <input type="submit" value="Submit" />
        </form>
      </Grid>
    </React.Fragment>
  );
}

export default AlgoChooser;
