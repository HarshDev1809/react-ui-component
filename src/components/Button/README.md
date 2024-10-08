# @moj-ui/react-ui-component

## Button

`@moj-ui/react-ui-component` offers a vast collection of buttons to choose from according to your need and style.

### Installation

For installation, use npm to install

```bash
npm install @moj-ui/react-ui-component
```

Once you have installed, check in `package.json` file to varify installation and version. Always remember to use latest version.

### Usage

`@moj-ui/react-ui-component` is very easy to use. Just import `Button` from `@moj-ui/react-ui-component` and use it as a react component. Be sure to import css file into your `App.js` file to ensure the component works correctly.
To import css file use:

```javascript
import "@moj-ui/react-ui-component/dist/bundle.css";
```

Import it in our `App.js`.

Usage eg:
A basic button which shows a window alert when the button is clicked.

```javascript
import { Button } from "@moj-ui/react-ui-component";
import "@moj-ui/react-ui-component/dist/bundle.css";

function Demo() {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return <div className="demo">
    <Button onClick={handleClick} />
  </div>;
}

export default Demo;
```
**Output:**
![ButtonDemogif](../../../assets/gifs/Button/buttonDemo.gif)

### Attributes
`@moj-ui/react-ui-component` offers various attributes which helps user to customise and add functionality to the component. Button component includes attributes:
  - **onClick:** `onClick` attributes takes a function which is invoked when the button is clicked. If no function is provided, a message will be printed in console indication absence of function.
  - **placeHolder:** `placeHolder` attribute takes a string which will be displayed on button.




