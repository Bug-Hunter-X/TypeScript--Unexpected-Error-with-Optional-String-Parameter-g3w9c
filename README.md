# TypeScript: Handling Optional Parameters

This example demonstrates a common issue in TypeScript when dealing with optional parameters that can be either strings or null.  The function `greet` is designed to handle null values gracefully, but it throws a type error if an undefined value is passed.  The solution shows how to improve type handling for better error management.