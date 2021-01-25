var currentPlayer = "player1";
var winner = $(".red");
var winningCombo = $(".winningCombo");
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
    var slotsInCol = col.children();
    for (var i = slotsInCol.length - 1; i >= 0; i--) {
        if (
            !slotsInCol.eq(i).hasClass("player1") &&
            !slotsInCol.eq(i).hasClass("player2")
        ) {
            slotsInCol.eq(i).addClass(currentPlayer);
            break;
        }
    }
    if (i === -1) {
        return;
    }

    var slotsInRow = $(".row" + i);
    //once we have our slotsinrow we use this to check if there is a victory in a row, based on where the chip drops we check which row we need to check

    if (checkForVictory(slotsInCol)) {
        youWon(currentPlayer);
    } else if (checkForVictory(slotsInRow)) {
        console.log("row victory!");
        youWon(currentPlayer);
    } else if (checkForDiagonalVictory(slotNumbers)) {
        youWon(currentPlayer);
    }

    switchPlayer(); //this finishes the loop and switches the player by calling our switchplayer function
});

function youWon(player) {
    if (player === "player1") {
        winner = $(".red");
    } else {
        winner = $(".yellow");
    }

    var blink = setInterval(function () {
        if (winner.css("visibility") == "hidden") {
            winner.css("visibility", "visible");
            winner.animate({ fontSize: "35em" }, "slow", "swing");
            $(".connect").animate(
                { rotation: 90 },
                {
                    duration: 500,
                    step: function (now) {
                        $(this).css({
                            transform: "rotate(" + now + "deg)",
                        });
                    },
                }
            );
        } else {
            winner.css("visibility", "hidden");
        }
    }, 300);

    setTimeout(function () {
        winner.animate({ fontSize: "80px" }, "slow", "swing");
        winner.css("visibility", "hidden");
        $(".connect").animate(
            { rotation: 0 },
            {
                duration: 500,
                step: function (now) {
                    $(this).css({
                        transform: "rotate(" + now + "deg)",
                    });
                },
            }
        );

        clearInterval(blink);
    }, 3000);

    $(".reset").on("click", function () {
        $(".slot").removeClass("player1");
        $(".slot").removeClass("player2");
        clearInterval(blink);

        $(".red").css("visibility", "hidden");
        $(".yellow").css("visibility", "hidden");
    });
}

$(".connect").on("click", function () {
    $(".column").addClass(currentPlayer);
    youWon(currentPlayer);

    $(".reset").on("click", function () {
        $(".column").removeClass("player1");
        $(".column").removeClass("player2");
    });
});

function checkForDiagonalVictory(allSlots) {
    for (var i = 0; i < diags.length; i++) {
        var count = 0;

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
}
function checkForVictory(slots) {
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
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
