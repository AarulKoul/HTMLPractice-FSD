function changeText() {
  document.getElementById("demo").innerHTML = "Hello World!";
}
function undoText() {
  document.getElementById("demo").innerHTML = "This is a paragraph.";
}

function showPopup() {
  var popupContainer = document.getElementById("popup-container");
  var overlay = document.getElementById("overlay");
  popupContainer.style.display = "block";
  overlay.style.display = "block";

  var button = document.querySelector(".button");
  button.classList.add("button-clicked");
}

function closePopup() {
  var popupContainer = document.getElementById("popup-container");
  var overlay = document.getElementById("overlay");
  popupContainer.style.display = "none";
  overlay.style.display = "none";

  var button = document.querySelector(".button");
  button.classList.add("button-clicked");
}
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    if (event.key === "ESC" || event.key === "Escape") {
      closePopup();
    }
  });
});

const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  const offsetX = -e.offsetX / 10;
  const offsetY = -e.offsetY / 10;

  el.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
});

el.addEventListener("mouseenter", () => {
  el.classList.add("hovered");
});

el.addEventListener("mouseleave", () => {
  el.classList.remove("hovered");
});

var rotatingCursor = (function () {
  const INTERVAL_POSITION = 5;
  const INTERVAL_ROTATION = 100;
  let lastCursorPos = { x: -999, y: -999 };
  let currentCursorPos = { x: -999, y: -999 };
  let lastCursorAngle = 0,
    cursorAngle = 0;
  let cursorEl, cursorImageEl;

  function setCurrentCursorProps() {
    cursorEl.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;

    while (Math.abs(lastCursorAngle - cursorAngle) > 180) {
      if (cursorAngle > lastCursorAngle) {
        cursorAngle -= 360;
      } else if (cursorAngle < lastCursorAngle) {
        cursorAngle += 360;
      }
    }
    cursorImageEl.style.transform = `rotate(${cursorAngle - 90}deg)`;
  }

  function updateCursor() {
    window.addEventListener("mousemove", (event) => {
      currentCursorPos = { x: event.clientX, y: event.clientY };
    });

    setInterval(setCurrentCursorProps, INTERVAL_POSITION);

    setInterval(() => {
      const delt = {
        x: lastCursorPos.x - currentCursorPos.x,
        y: lastCursorPos.y - currentCursorPos.y,
      };
      if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;
      cursorAngle = (Math.atan2(delt.y, delt.x) * 180) / Math.PI;

      setCurrentCursorProps();

      lastCursorPos = currentCursorPos;
      lastCursorAngle = cursorAngle;
    }, INTERVAL_ROTATION);
  }

  return {
    initialize: () => {
      cursorEl = document.querySelector("#cursor");
      cursorImageEl = document.querySelector("#cursor > img");
      updateCursor();
    },
  };
})();

document.addEventListener("DOMContentLoaded", rotatingCursor.initialize);
