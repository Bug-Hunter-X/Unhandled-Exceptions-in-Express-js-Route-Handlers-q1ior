# Unhandled Exceptions in Express.js

This repository demonstrates a common issue in Express.js applications: unhandled exceptions within route handlers.

Unhandled exceptions can lead to server crashes without clear error messages, making debugging difficult. The `bug.js` file shows a vulnerable route; `bugSolution.js` provides a corrected version with proper error handling.

## Bug

The `bug.js` file shows a POST route that lacks error handling. If any exception occurs during the data processing, the server will crash without providing a meaningful error to the client.

## Solution

The `bugSolution.js` file demonstrates how to handle potential errors using try...catch blocks.  This prevents server crashes and allows for sending appropriate error responses to the client.