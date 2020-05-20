import React from "react";
import Button from "@material-ui/core/Button";

export default function NextPreviousButtons({ getNext, getPrev, shouldHide }) {
  return (
    <div className="paginationButtonContainer">
      {!shouldHide &&  <label htmlFor="Previous">
        <Button onClick={() => getPrev()} variant="contained" color="primary">
          prev
        </Button>
      </label>}
      <label htmlFor="Next">
        <Button onClick={() => getNext()} variant="contained" color="secondary">
          next
        </Button>
      </label>
    </div>
  );
}
