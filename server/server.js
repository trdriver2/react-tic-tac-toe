this.dimension = 3;
this.board = new Array(3).fill("");

const midCheck = (init, space, additive) => {
  let end = init + additive * this.dimension;
  for (let i = init; i < end; i += additive) {
    if (this.board[i] !== this.board[space]) return false;
  }
  return true;
};
const checkWin = space => {
  let horizontal = space - (space % this.dimension);
  let verticle = space - horizontal;

  //check horizontal
  if (midCheck(horizontal, space, 1)) return true;

  //check verticle
  if (midCheck(verticle, space, this.dimension)) return true;

  let diagDr = this.dimension + 1;
  let diagDl = this.dimension - 1;
  //check diag down-right
  if (
    verticle === (space - verticle) / this.dimension &&
    midCheck(0, space, diagDr)
  )
    return true;
  //check diag down-left
  if (
    this.dimension - verticle - 1 === (space - verticle) / this.dimension &&
    midCheck(this.dimension, space, diagDl)
  )
    return true;

  return false;
};

const checkTie = turn => {
  if (this.turn === this.board.length) {
    return true;
  }
  return false;
};

const express = require("express");
const app = express();

const port = 8000;

app.post("/set-width", (req, res) => {
  req.on("data", chunk => {
    const data = JSON.parse(chunk);
    if (isNaN(data) && data >= 3) {
      this.dimension = data;
      res.end("dimension is set to " + JSON.stringify(this.dimension));
    } else res.end(JSON.stringify(data) + " is not a valid width");
  });
});

app.post("/check-tie", (req, res) => {
  req.on("data", chunk => {
    const data = JSON.parse(chunk);
    this.board = data;
    res.end(JSON.stringify(checkTie(data)));
  });
});

app.post("/check-win", (req, res) => {
  req.on("data", chunk => {
    const data = JSON.parse(chunk);
    this.board = data.board;
    res.end(JSON.stringify(checkWin(data.space)));
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
