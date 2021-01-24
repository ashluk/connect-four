var currentPlayer = "player1";
var slotNumbers = $(".slot");
var diags = [
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 14, 19, 24],
    [10, 15, 20, 25],
    [11, 16, 21, 26],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 20, 25, 30],
    [16, 21, 26, 31],
    [17, 22, 27, 32],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    [21, 26, 31, 36],
    [22, 27, 32, 37],
    [23, 28, 33, 38],
];

$(".column").on("click", function (e) {
    var col = $(e.currentTarget);
    //console.log("e:", e);  //logging e will show all the available properties on the object
    //console.log("column", col);
    var slotsInCol = col.children(); //.children is a method available to us in JQ - allows us to select all the children of a specific elemnent
    //console.log("slotsInCol", slotsInCol);
    //reverse loop -- but why? -- because we want to start checking from the bottom --thats where the tokens are dropped
    for (var i = slotsInCol.length - 1; i >= 0; i--) {
        //console.log("slotsInCol:", slotsInCol.eq(i));
        //check that the slot is free
        //does not have player1 and does not have player2 class
        if (
            !slotsInCol.eq(i).hasClass("player1") &&
            !slotsInCol.eq(i).hasClass("player2")
        ) {
            //console.log("this slot must be free, add current player");
            slotsInCol.eq(i).addClass(currentPlayer); //currentplayer is pointing to the string player1
            break;
        }
    }
    //console.log("i:", i);
    if (i === -1) {
        return;
    }

    var slotsInRow = $(".row" + i);
    //once we have our slotsinrow we use this to check if there is a victory in a row, based on where the chip drops we check which row we need to check
    console.log("this is my row", slotsInRow); //this should bring back the row number (i.e row3)

    if (checkForVictory(slotsInCol)) {
        console.log("column victory!");
    } else if (checkForVictory(slotsInRow)) {
        console.log("row victory!");
        youWon(currentPlayer);
    } else if (checkForDiagonalVictory(slotNumbers)) {
        console.log("diagonal victory!");
    }

    switchPlayer(); //this finishes the loop and switches the player by calling our switchplayer function
});

function youWon(player) {
    console.log("player:", player);
    $(".victory").animate({
        display: "toggle",
        width: "+=400px",
        height: "+=400px",
    });
}

$(".reset").on("click", function () {
    $(".slot").removeClass("player1");
    $(".slot").removeClass("player2");
});

function checkForDiagonalVictory(allSlots) {
    //console.log("all:", allSlots);
    for (var i = 0; i < diags.length; i++) {
        //console.log(("i", diags[i]));
        var count = 0;
        //console.log("************");

        for (var j = 0; j < diags[i].length; j++) {
            var index = diags[i][j];
            if (allSlots.eq(index).hasClass(currentPlayer)) {
                count++;
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
            //console.log("array within;", diags[i][j]); //this loops over the arrays within the array
        }
    }
    //console.log("checking for diag", diag);
}
function checkForVictory(slots) {
    //console.log("checking for victory with these:", slots);
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
        /*console.log(
            "slots.eq(i).hasClass():",
            slots.eq(i).hasClass(currentPlayer)
        );*/
        if (slots.eq(i).hasClass(currentPlayer)) {
            count++;
            if (count === 4) {
                return true;
            }
        } else {
            count = 0;
        }
    }
}

function switchPlayer() {
    if (currentPlayer === "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }
}
