var maze = {
	data: {}
};

(function() {
	"use strict";

	maze.create = function(data) {
		if (data) {
			maze.data = JSON.parse(data);
		} else {
			maze.data = JSON.parse(maze.random());
		}
		maze.update();
	};

	maze.clear = function() {
		return {
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
		var tiles = [];
		if (size === null) {
			size = maze.randomInteger(5, 15);
		}
		for (var x = 0; x < size; x++) {
			var row = [];
			for (var y = 0; y < size; y++) {
				row[y] = maze.randomInteger(0, 1);
			}
			tiles[x] = row;
		}
		var data = maze.clear();
		data.tiles = tiles;
		return JSON.stringify(data);
	};

	maze.update = function() {
		//TODO: Change to canvas.
		var tiles = "";
		for (var x = 0; x < maze.data.tiles.length; x++) {
			for (var y = 0; y < maze.data.tiles[x].length; y++) {
				var tile = maze.data.tiles[x][y];
				tiles += "<span class='tile'>" + tile + "</span>";
			}
			tiles += "<br/>";
		}
		document.getElementById("maze").innerHTML = tiles;
	};

	maze.randomInteger = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	maze.data = maze.clear();
})();
