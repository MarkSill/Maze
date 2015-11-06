var maze = {
	data: {
		name: "Maze",
		author: "Person",
		px: 0,
		py: 0,
		tiles: []
	}
};
(function() {
	"use strict";

	maze.create = function(data) {
		maze.data = JSON.parse(data);
		maze.update();
	};

	maze.getData = function() {
		return JSON.stringify(maze.data);
	};

	maze.random = function(size) {

	};

	maze.update = function() {

	};
})();
