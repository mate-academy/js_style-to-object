1. [CODE KNOWLEDGE] When you are using indexOf and splice combo - you should check if element was found before deleting element.
2. [CODE PERFOMANCE] - Try to avoid nesting loops (indexOf + splice), use filter instead
3. [CODE KNOWLEDGE] When you need to toggle values, use logical operator `!`

BAD EXAMPLE: 
```
 if (this.hasPassed === false) {
    this.hasPassed = true;
 } else {
   this.hasPassed = false;
 }
```

GOOD EXAMPLE:
```
this.hasPassed = !this.hasPassed
```
