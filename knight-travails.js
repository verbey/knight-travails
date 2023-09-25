class Node {
	constructor(pos, moves) {
		this.pos = pos;
		this.moves = moves;
	}
}

const possibleMoves = [
	[1, 2], [2, 1],
	[2, -1], [1, -2],
	[-1, -2], [-2, -1],
	[-2, 1], [-1, 2]
];

function onBoard(pos) {
	return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
}