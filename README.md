# react-jumbo-cursor
A package to enhance browser cursor to animated cursor by taking multiple colors as input .


## Installation
```
npm i react-jumbo-cursor
```
## Features
- **Customizable Colors**: Set the cursor color to match your application's theme.
- **Multiple Cursor Styles**: Includes various cursor styles and sizes for different effects.
- **Smooth Animations**: Provides smooth cursor animations.
- **Hide System Cursor**: Hides the default system cursor for a seamless experience.
- **Interactive Elements**: Cursor interactions with clickable elements like buttons and links.
## Usage

```
import React from 'react';
import { JumboCursor } from 'react-jumbo-cursor';

function App() {
  return (
    <>
      <JumboCursor color="250, 0, 0" />
    </>
  );
}

export default App;

```
## Props

- rgb(red, green, blue)

|   type   |    value    |
| -------- | ------------|
|  color   | (255, 0, 0) |
|          | ( , 255, 0) |
|          | (0, 0, 255) |

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
Apache-2.0

## Author 
Pratik Mane
