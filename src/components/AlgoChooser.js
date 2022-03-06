import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const sortingAlgo = [
  {
    value: "qs",
    label: "Quick Sort",
  },
  {
    value: "bs",
    label: "Bubble Sort",
  },
  {
    value: "ms",
    label: "Merge Sort",
  },
  {
    value: "is",
    label: "Insertion Sort",
  },
];
class AlgoChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algo: "qs",
      elements: 0,
    };
    //this.handleChange =this.handleChange.bind(this);
  }
  /* handleChange(event) {
    this.setState({algo: event.target.value});
  } */
  render() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.setAlgoObject(this.state.algo, this.state.elements);
            }}
          >
            <Grid item xs={12}>
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={this.state.algo}
                onChange={(e) => {
                  this.setState({ algo: e.target.value });
                }}
                helperText="Please select your sorting algo"
              >
                {sortingAlgo.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                helperText="Enter Numeric values only"
                onChange={(e) => {
                    this.setState({elements:e.target.value})
                }}
              />
            </Grid>
            <input type="submit" value="Submit" />
          </form>
        </Grid>
      </React.Fragment>
    );
  }
}

export default AlgoChooser;
