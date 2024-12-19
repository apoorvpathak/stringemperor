# String Emperor
<img src="https://skillicons.dev/icons?i=js,npm" />

## Installation

This package can be installed using 
```bash
npm i stringemperor
```

## Usage

### Importing


``` javascript
const {
  firstCharCapitalize, 
  reverse, 
  removeWhitespace, 
  countOccurrences, 
  isPalindrome, 
  slugify
} = require('stringemperor');

// or

const StringEmperor = require('stringemperor');
```

### Example Usage
```JavaScript
console.log(StringEmperor.firstCharCapitalize('hello world'));  // "Hello world"
console.log(StringEmperor.reverse('hello'));                    // "olleh"
console.log(StringEmperor.removeWhitespace(' hello world '));  // "helloworld"
console.log(StringEmperor.countOccurrences('hello world', 'l'));// 3
console.log(StringEmperor.isPalindrome('A man a plan a canal Panama'));  // true
console.log(StringEmperor.slugify('Hello World! String Emperor'));       // "hello-world-string-emperor"
```

## Functions

### `firstCharCapitalize(string)`
- <strong>Description: </strong> Capitalizes the first character of a string.

- <strong>Parameters: </strong> `string` (String) - The input string.

- <strong>Returns: </strong> String with the first letter capitalized.

### `reverse(string)`
- <strong>Description: </strong> Reverses the input string.

- <strong>Parameters: </strong> `string` (String) - The input string.

- <strong>Returns: </strong> Reversed string.

### `removeWhitespace(string)`
- <strong>Description: </strong> Removes all whitespaces from the input string.

- <strong>Parameters: </strong> `string` (String) - The input string.

- <strong>Returns: </strong> String without whitespaces.

### `countOccurrences(string, subString)`
- <strong>Description: </strong> Counts the occurrences of a substring within a string.

- <strong>Parameters: </strong> 
    - `string` (String) - The main string.
    - `subString`  (String) - The substring to count.

- <strong>Returns: </strong> Number of occurences.

### `isPalindrome(string)`
- <strong>Description: </strong> Checks if a string is a palindrome (case-insensitive, ignoring spaces and special characters).

- <strong>Parameters: </strong> `string` (String) - The input string.

- <strong>Returns: </strong> Boolean - `true` if the string is a palindrome, otherwise `false`

### `slugify(string)`
- <strong>Description: </strong> Converts a string into a URL-friendly format.

- <strong>Parameters: </strong> `string` (String) - The input string.

- <strong>Returns: </strong> A slugified string.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull request on [Github](https://github.com/apoorvpathak/stringemperor)

## Contact

I can be contacted on my email [hello@apoorvpathak.com](mailto:hello@apoorvpathak.com). My website is [ApoorvPathak.com](https://www.apoorvpathak.com)

## License

This project is licensed under ISC License. See [`LICENSE`](./LICENSE) for more details.
