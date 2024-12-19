// index.js

function firstCharCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} //capitalize first character of a string

function reverse(string) {
    return string.split('').reverse().join('');
} //reverse a string

function removeWhitespace(string) {
    return string.replace(/\s+/g, '');
} //remove all whitespaces including trailing whitespaces

function countOccurrences(string, subString) {
    return (string.match(new RegExp(subString, 'g')) || []).length;
} //count occurence of a substring in string

function isPalindrome(string) {
    const cleaned = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
} //check if the string is palindrome or not, if it is return true otherwise false

function slugify(string) {
    return string
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '') // Remove non-alphanumeric characters
        .replace(/\-\-+/g, '-') // Replace multiple hyphens with a single one
        .replace(/^-+/, '') // Remove hyphen at the beginning
        .replace(/-+$/, ''); // Remove hyphen at the end
} //Slugify a string (URL or username friendly format)

module.exports = {
    firstCharCapitalize,
    reverse,
    removeWhitespace,
    countOccurrences,
    isPalindrome,
    slugify
}