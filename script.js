const chessboard = document.getElementById('chessboard');

// Mapping pieces to their respective images
const pieceImages = {
    'r': 'chess_pink/black_rook.png',
    'n': 'chess_pink/black_knight.png',
    'b': 'chess_pink/black_bishop.png',
    'q': 'chess_pink/black_queen.png',
    'k': 'chess_pink/black_king.png',
    'p': 'chess_pink/black_pawn.png',
    'R': 'chess_pink/white_rook.png',
    'N': 'chess_pink/white_knight.png',
    'B': 'chess_pink/white_bishop.png',
    'Q': 'chess_pink/white_queen.png',
    'K': 'chess_pink/white_king.png',
    'P': 'chess_pink/white_pawn.png'
};

// Initial board setup using piece notation
const initialBoardSetup = [
    'rnbqkbnr',
    'pppppppp',
    '........',
    '........',
    '........',
    '........',
    'PPPPPPPP',
    'RNBQKBNR'
];

function createBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';

            const piece = initialBoardSetup[row][col];
            if (piece !== '.') {
                const pieceImage = document.createElement('img');
                pieceImage.src = pieceImages[piece];
                square.appendChild(pieceImage);
            }

            chessboard.appendChild(square);
        }
    }
}

createBoard();

let selectedPiece = null;

chessboard.addEventListener('click', (event) => {
    const targetSquare = event.target.closest('.square');

    if (!targetSquare) return;

    if (selectedPiece) {
        movePiece(selectedPiece, targetSquare);
        selectedPiece = null;
    } else if (targetSquare.firstChild) {
        selectedPiece = targetSquare;
    }
});

function movePiece(fromSquare, toSquare) {
    if (!fromSquare || !toSquare) return;

    const piece = fromSquare.firstChild;
    const targetPiece = toSquare.firstChild;

    // Prevent moving to a square with a piece of the same color
    if (targetPiece && piece.src === targetPiece.src) return;

    toSquare.appendChild(piece);
}

const fillGrid = (x, y, blockSize, numOfBlocks, color) => {
    const container = document.getElementById('container')
    const test = Array(num_of_blocks).keys()
            for (var i of test){
                let markup = <div id="card ${i}" 
                                   style="grid-column: ${Math.floor(Math.random() * y) + 1} / span ${blockSize}; 
                                          grid-row: ${Math.floor(Math.random() * x) + 1} / span ${blockSize};
                                          background-color: ${color};
                                          border: 1px black solid;">${i}</div>
                container.innerHTML += markup
            };
}