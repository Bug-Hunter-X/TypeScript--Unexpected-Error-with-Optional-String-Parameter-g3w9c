function greet(name?: string): string {
  if (name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(undefined)); // Output: Hello, world!