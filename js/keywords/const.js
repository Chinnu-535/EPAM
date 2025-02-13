function constExample() {
    const z = 50;
    console.log("Value of z:", z); // Output: 50
    // z = 60; // This would cause an error (Assignment to constant variable)
    if (true) {
        const z = 70; // Allowed, since it's a new block-scoped variable
        console.log("Inside block, z:", z); // Output: 70
    }
    console.log("Outside block, z:", z); // Output: 50
}
constExample();
