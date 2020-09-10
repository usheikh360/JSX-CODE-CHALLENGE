//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

var React = require("react");
var ReactDom = require("react-dom");

ReactDom.render(
  <div>
    <h1> Favorite fruits </h1>
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Peach</li>
    </ul>
  </div>,
  document.getElementById("root")
);
