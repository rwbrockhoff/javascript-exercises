
let bor = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

var isValidSudoku = function(board) {
    for (var y = 0; y < 9; ++y) {
        for (var x = 0; x < 9; ++x) {
            var value = board[y][x];

            if (value) {
                // Check the line
                for (var x2 = 0; x2 < 9; ++x2) {
                    if (x2 != x && board[y][x2] == value) {
                        return false;
                    } 
                }

                // Check the column
                for (var y2 = 0; y2 < 9; ++y2) {
                    if (y2 != y && board[y2][x] == value) {
                        return false;
                    } 
                }

                // Check the square
                var startY = Math.floor(y/3)*3;
                for (var y2 = startY; y2 < startY + 3; ++y2) {
                    var startX = Math.floor(x/3)*3;
                    for (x2 = startX; x2 < startX + 3; ++x2) {
                        if ((x2 != x || y2 != y) && board[y2][x2] == value) {
                            return false;
                        }
                    }
                }
            }
        }
    }

    return true;
};


console.log(
    isValidSudoku(bor)
)