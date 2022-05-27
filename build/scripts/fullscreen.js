define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    // for making the dom elements fulscreen
    function fullScreen(e) {
        return {
            set: function () {
                e.requestFullscreen()["catch"](function (err) {
                    throw err;
                });
            },
            exist: function () {
                document.exitFullscreen();
            }
        };
    }
    exports["default"] = fullScreen;
});
/*
 *** HOW TO USE ***

u("#container").fullscreen().toggle()
u("#container").fullscreen().exist()
u("#container").fullscreen().set()
*/
//# sourceMappingURL=fullscreen.js.map