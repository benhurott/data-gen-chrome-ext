# data-gen-chrome-ext
A Google Chrome Extension for generating util info, like GUID, CPF(Brazil), etc...

## Environment
`$ npm install`

`$ npm run watch`


## Creating Generators
Just add your generator to `app/generators` folder.

The generator is an object with these properties:
* `title (string)`: the display name of your generator.
* `order (number, int)`: the display order (zero based).
* `alg (function)`: the algorythm used to generate data. This function **must return a string value**.