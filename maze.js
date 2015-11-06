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
			tiles: [],
			seen: []
		};
	};

	maze.getData = function() {
		return JSON.stringify(maze.data);
	};

	maze.random = function(size) {
		var tiles = [];
		var seen = [];
		if (!size) {
			size = maze.randomInteger(5, 15);
		}
		for (var x = 0; x < size; x++) {
			var row = [];
			var srow = [];
			for (var y = 0; y < size; y++) {
				row[y] = maze.randomInteger(0, 1);
				srow[y] = false;
			}
			tiles[x] = row;
			seen[x] = srow;
		}
		var data = maze.clear();
		data.tiles = tiles;
		data.seen = seen;
		data.ex = maze.randomInteger(0, size-1);
		data.ey = maze.randomInteger(0, size-1);
		return JSON.stringify(data);
	};

	maze.update = function() {
		//TODO: Change to canvas.
		var tiles = "";
		var amnt = 100 / maze.data.tiles.length;
		var x, y;
		for (x = 0; x < maze.data.tiles.length; x++) {
			for (y = 0; y < maze.data.tiles[x].length; y++) {
				var tile = maze.data.tiles[x][y];
				var cls = "tile";
				if (maze.data.seen[x][y]) {
					if (x === maze.data.px && y === maze.data.py) {
						cls += " player";
					} else if (x === maze.data.ex && y === maze.data.ey) {
						cls += " exit";
					} else if (tile === 0) {
						cls += " floor";
					} else if (tile === 1) {
						cls += " wall";
					}
				}
				tiles += "<span class='" + cls + "' style='top:" + x*50 + "px;left:" + y*50 + "px;'></span>";
			}
			tiles += "<br/>";
		}
		for (x = maze.data.px - 1; x < maze.data.px + 2; x++) {
			for (y = maze.data.py - 1; y < maze.data.py + 2; y++) {
				if (x >= 0 && y >= 0 && x < maze.data.tiles.length && y < maze.data.tiles.length) {
					maze.data.seen[x][y] = true;
					console.log(x, y);
				}
			}
		}
		document.getElementById("maze").innerHTML = tiles;
	};

	maze.randomInteger = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	maze.data = maze.clear();
})();
