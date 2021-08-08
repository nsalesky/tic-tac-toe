/**
 * The 3x3 board keeping track of all the pieces that have been played so far.
 * The board is stored as a 2D array of 1-character strings representing the player that
 * played each piece, or null if a piece is empty
 */
const gameBoard = ((size) => {
    let pieces = [];

    /**
     * Clears the board of all pieces.
     * @memberof GameBoard
     * @instance
     */
    const resetBoard = () => {
        pieces = [];
        for (let rowIndex = 0; rowIndex < size; rowIndex += 1) {
            let row = [];

            for (let colIndex = 0; colIndex < size; colIndex += 1) {
                row.push(null);
            }

            pieces.push(row);
        }
    }

    /**
     * Determines the size of the board. 
     * @returns the size of each square dimension of the board.
     */
    const getSize = () => {
        return size;
    }

    /**
     * Ensures that the given coordinates fall inside of the board.
     * @param {*} row the row coordinate 
     * @param {*} col the column coordinate
     * @throws if the coordinates are out-of-bounds.
     */
    const validateCoordinates = (row, col) => {
        if (row < 0 || row >= size || col < 0 || col >= size) {
            throw "Invalid coordinates";
        }
    }

    /**
     * Determines whether the specified position is empty or not. 
     * @param {*} row the row coordinate of the position to check
     * @param {*} col the column coordinate of the position to check
     * @returns true if empty or false if there is already a piece there.
     * @throws if the coordinates are invalid
     */
    const isSpaceEmpty = (row, col) => {
        validateCoordinates(row, col);

        return pieces[row][col] === null;
    }

    /**
     * Gets the value of the piece at the specified position.
     * @param {*} row the row coordinate of the piece
     * @param {*} col the column coordinate of the piece
     * @returns either a player character string or null if the position is empty
     * @throws if the coordinates are invalid
     */
    const getPiece = (row, col) => {
        validateCoordinates(row, col);

        return pieces[row][col];
    }

    /**
     * Places the specified character value for the piece at the given position, as long as a piece is not
     * already present there.
     * @param {*} row the row coordinate of the position to place the piece
     * @param {*} col the column coordinate of the position to place the piece
     * @param {*} char the 1-character string value for the piece to place
     * @throws if the coordinates are invalid
     */
    const placePiece = (row, col, char) => {
        validateCoordinates(row, col);

        if (isSpaceEmpty(row, col)) {
            pieces[row][col] = char;
        }
    }

    /**
     * Has the game been won by a particular player?
     * @returns the 1-character identifier of the winning player if there is a winer, or false otherwise.
     */
    const isGameWon = () => {

    }

    /**
     * Is the game tied?
     * @returns true if tied, or false if players still have remaining moves. Returns false if a player has already won the game.
     */
    const isGameTied = () => {
        if (isGameWon()) {
            return false;
        }

        for (let rowIndex = 0; rowIndex < size; rowIndex += 1) {
            for (let colIndex = 0; colIndex < size; colIndex += 1) {
                if (!isSpaceEmpty(rowIndex, colIndex)) {
                    return false;
                }
            }
        }

        return true;
    }

    resetBoard();

    return {resetBoard, getSize, isSpaceEmpty, getPiece, placePiece, isGameWon, isGameTied};
})(3);

/**
 * Creates a new player object with the given identifier.
 * @param {*} charIdentifier the 1-character identifier string for the player
 */
const createPlayer = (charIdentifier) => {

}