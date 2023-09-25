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

function knightMoves(start, end) {

	let queue = [new Node(start, 0)];

	while (queue.length > 0) {
		const node = queue.shift();
		const pos = node.pos;

		if (pos[0] === end[0] && pos[1] === end[1]) {
			console.log(`Made it in ${node.moves} moves!`);
			printPath(node);
			return;
		}

		const moves = node.moves + 1;


		for (const move of possibleMoves) {
			const next = [pos[0] + move[0], pos[1] + move[1]];

			if (onBoard(next)) {
				let nextNode = new Node(next, moves);
				nextNode.parent = node;
				queue.push(nextNode);
			}
		}
	}
}

function printPath(node) {
	let path = [];
	while (node) {
		path.unshift(node.pos);
		node = node.parent;
	}
	console.log(path);
}

knightMoves([3, 3], [4, 3]);