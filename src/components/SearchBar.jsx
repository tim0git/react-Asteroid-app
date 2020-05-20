import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchBar() {
  return (
    <div className="searchContainer">
      <TextField
        id="standard-full-width"
        label="Search for specific asteroid"
        style={{ margin: 2 }}
        placeholder="Search"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
