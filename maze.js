var maze = {
	data: {}
};

(function() {
	"use strict";

	maze.create = function(data) {
		if (data !== null) {
			maze.data = JSON.parse(data);
		} else {
			maze.data = maze.random(10);
		}
		maze.update();
	};

	maze.clear = function() {
		maze.data = {
			name: "Maze",
			author: "Anonymous",
			px: 0,
			py: 0,
			ex: 0,
			ey: 0,
			tiles: []
		};
	};

	maze.getData = function() {
		return JSON.stringify(maze.data);
	};

	maze.random = function(size) {

	};

	maze.update = function() {
		var tiles = "";
		for (x = 0; x < maze.data.tiles.length; x++) {
			for (y = 0; y < maze.data.tiles[x].length; y++) {
				tiles += "<span class='tile'></span>";
			}
			tiles += "<br/>";
		}
		document.getElementById("maze").innerHTML = tiles;
	};

	maze.clear();
})();
