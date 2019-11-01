var bombfield = new Array(new Array());

document.addEventListener('DOMContentLoaded', init);

function init() {
    mode = settings[settings.defaultMode];

    msize = settings.mineSize;
    bsize = settings.borderSize;
    game = document.getElementById("game");
    field = document.createElement("div");
    game.appendChild(field);
    field.style.height = (msize + 2 * bsize) * mode.rows + "px";
    field.style.width = (msize + 2 * bsize) * mode.rows + "px";
    field.style.border = bsize + "px solid";
    for (var i = 0; i < mode.rows; i++) {
        // creates line
        line = document.createElement("div");
        field.appendChild(line);
        line.style.height = (msize + 2 * bsize) + "px";
        for (var j = 0; j < mode.rows; j++) {
            // creates mineslot
            mine = document.createElement("div");
            line.appendChild(mine);
            mine.class = "mine";
            mine.id = "x" + i + "y" + j;
            mine.onclick = "mineClick(x" + i + "y" + j ")";
            mine.style.display = "inline-block";
            mine.style.height = msize + "px";
            mine.style.width = msize + "px";
            mine.style.margin = "0px";
            mine.style.padding = "0px";
            mine.style.border = bsize + "px solid";
            mine.style.backgroundcolor = "yellow";

            // appends mineslot to line
        }
        // appends line to field
    }


}

function newGame(pos = [null, null]) {
    reset();
    spaces = settings.rows * settings.cols;
    bombs = settings.bombs;
    for (var i = 0; i < settings.rows; i++) {
        for (var j = 0; j < settings.rows; j++) {
            if (Math.random() <= bombs / spaces) {
                bombfield[i][j] = 1;
                bombs--;
                spaces--;
            } else {
                bombfield[i][j] = 0;
                spaces--;
            }
        }
    }
}

function reset() {
    alert();
}