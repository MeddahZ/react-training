import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';
//import { t } from "tar";


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.5
    }

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);

    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    let a = [];
    // TODO: create array-of-arrays of true/false values
    for (let j=0; j<this.props.nrows; j++) {
      for (let i=0; i<this.props.ncols; i++) {
        a.push(Math.random(1)<this.props.chanceLightStartsOn)
      }
      board.push(a);
      a = []
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y, x+1);
    flipCell(y, x-1);
    flipCell(y+1, x);
    flipCell(y-1, x);
    
    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = this.state.board.every(row=> (row.every(cell => !cell)))
    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    console.log(this.state.board) 
    let board = []
    for ( let i = 0; i<this.props.nrows; i++){
      let a = [];
      for ( let j = 0; j<this.props.ncols; j++){
        a.push(<Cell  isLit={this.state.board[i][j]} key={`${i}-${j}`} flipCellsAroundMe={() => {this.flipCellsAround(`${i}-${j}`)}}/>)
      }
      board.push(<tr key={i}>{a}</tr>)
    }
    
    
    
    
    
    // if the game is won, just show a winning msg & render nothing else

    // TODO


    return (
      (this.state.hasWon ?
        <div><h1>YOU WIN!</h1></div>
        :<div>
          <h1>LIGHTS OUT</h1>
          <table className="Board">
            <tbody>
              {board}
            </tbody>
          </table>
          {board.map((rows)=> {})}
        </div>)


    )
    

    // make table board

    // TODO
  }
}


export default Board;
