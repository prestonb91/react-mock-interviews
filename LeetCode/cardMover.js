function findCardPosition(cards, moves, cardId) {

    // Initialize a map of card positions usding cardId as key
    let cardPositions = {};

    // Fill initial card positions
    cards.forEach(card => {
        let [colx, coly, cardId] = card;
        cardPositions[cardId] = [colx, coly];
    })

    // Process moves
    moves.forEach(move => {
        let [prevX, prevY, newX, newY, movingCardId] = move;

        // If the cardId matches, update the position
        if (movingCardId === cardId) {
            cardPositions[cardId] = [newX, newY];
        }
    });

    return cardPositions[cardId];

}

// Sample test cases
const cards = [
    [0, 0, 1],   // card 1 at (0, 0)
    [1, 2, 2]    // card 2 at (1, 2)
];

const moves = [
    [0, 0, 1, 1, 1],  // card 1 moves from (0, 0) to (1, 1)
    [1, 2, 2, 3, 2]   // card 2 moves from (1, 2) to (2, 3)
];

const cardId = 1;  // Find the position of card 1

// Test case 1: Moving card 1
const newPosition = findCardPosition(cards, moves, cardId);
console.log(`Card ${cardId} is now at position:`, newPosition);
// Expected Output: Card 1 is now at position: [ 1, 1 ]

// Additional Test case 2: Check position of card 2
const cardId2 = 2;
const newPosition2 = findCardPosition(cards, moves, cardId2);
console.log(`Card ${cardId2} is now at position:`, newPosition2);
// Expected Output: Card 2 is now at position: [ 2, 3 ]

// Potential function with collision detection, then ignore  

// function findCardPosition(cards, moves, cardId) {
//     const positions = {};
//     const occupied = {};

//     // Initialize positions and occupied cells
//     for (const [x, y, id] of cards) {
//         positions[id] = [x, y];
//         occupied[`${x},${y}`] = id;
//     }

//     // Process moves
//     for (const [prevX, prevY, newX, newY, id] of moves) {
//         const current = positions[id];
//         const currentKey = `${prevX},${prevY}`;
//         const newKey = `${newX},${newY}`;

//         // Check if the card is at the expected location and destination is unoccupied
//         if (current[0] === prevX && current[1] === prevY && !occupied[newKey]) {
//             // Remove old position from occupied
//             delete occupied[currentKey];
//             // Update to new position
//             positions[id] = [newX, newY];
//             occupied[newKey] = id;
//         }
//     }

//     return positions[cardId];
// }
