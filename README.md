# Incorrect Usage of $inc Operator in MongoDB Update Query

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. The `$inc` operator is used to increment or decrement a numerical field in a document.  However, if used incorrectly, it can lead to unexpected errors. 

The `bug.js` file contains the code that exhibits this error, while `bugSolution.js` provides the corrected version.

**Problem:** Attempting to increment a non-existent or non-numeric field. 

**Solution:** Ensure the target field exists and is a number before using `$inc`.  If it doesn't exist, it's best to use `$set` to initialize it first before incrementing.