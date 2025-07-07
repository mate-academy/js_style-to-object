1. [CODE KNOWLEDGE] - Don't use iteration methods to modify an already existing array/object. (forEach is exception). These methods return a new array, so you should use it.
2. [CODE STYLE] - Avoid variable namings like `array` , `object` `arr`, `obj`, `result`. It will decrease code readability
3. [CODE KNOWLEDGE] - Don't need to make copy before each operation. Moreover, methods like `filter` or `map` don't mutate original array.
4. [CODE STYLE] - All chained methods called on the same level should have same indentation. This makes code much more readable.


BAD EXAMPLE:
```
const cssStyles = styles.map(style => style).filter(style => style.length).slice(0, 5)
```

GOOD EXAMPLE:
```
const cssStyles = styles
 .map(style => style)
 .filter(style => style.length)
 .slice(0, 5)
```
5. [CODE PRACTICE] - Avoid using loops in this task, use iteration methods instead.
