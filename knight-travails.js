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

	let startNode = new Node(start, 0);
	startNode.visited = [startNode.pos];

	let queue = [startNode];

	while (queue.length > 0) {
		const node = queue.shift();
		const pos = node.pos;

		if (pos[0] === end[0] && pos[1] === end[1]) {
			console.log(`Made it in ${node.moves} moves!`);
			node.visited.forEach(visitedNode => console.log(visitedNode));
			return;
		}

		const moves = node.moves + 1;


		for (const move of possibleMoves) {
			const next = [pos[0] + move[0], pos[1] + move[1]];

			if (onBoard(next) && !node.visited.includes(next)) {
				let nextNode = new Node(next, moves);
				nextNode.visited = [...node.visited, nextNode.pos];
				queue.push(nextNode);
			}
		}
	}
}

knightMoves([0, 0], [7, 7]);