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