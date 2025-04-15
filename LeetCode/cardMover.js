/*
Approach
- initialize a map of card positions, using cardId as key and position as value 
- fill initial card positions in the map
- deconstruct and assign card positions into the map 
- then process moves 
- if need to chec

Time complexity: 
*/

// FOR MULTIPLE MOVES
function findCardPosition(cards, moves, cardId) {

    // Initialize a map of card positions usding cardId as key
    let cardPositions = {};

    // assign initial card positions
    for (let card of cards) {
        let [colx, coly, cardId] = card;
        cardPositions[cardId] = [colx, coly];
    }

    // process moves
    for (let move of moves) {
        let [prevX, prevY, newX, newY, movingCardId] = move;

        // Check if another card is already occupying the new position
        for (let id in cardPositions) {
            let [x, y] = cardPositions[id];
            if (x === newX && y === newY) {
                console.log(`The position (${newX}, ${newY}) is already occupied.`);
                // Return the current position of the card if position is occupied
                return cardPositions[cardId];  
            }
        }

        cardPositions[cardId] = [newX, newY];

    }
    return cardPositions[cardId];
}

// FOR ONE MOVE
function findCardPosition(cards, move, cardId) {
    // Initialize a map of card positions using cardId as key
    let cardPositions = {};

    // assign initial card positions
    for (let card of cards) {
        let [colx, coly, cardId] = card;
        cardPositions[cardId] = [colx, coly];
    }

    // destructure the move: [prevX, prevY, newX, newY, movingCardId]
    let [prevX, prevY, newX, newY, movingCardId] = move;

    // Check if another card is already occupying the new position
    for (let id in cardPositions) {
        let [x, y] = cardPositions[id];
        if (x === newX && y === newY) {
            console.log(`The position (${newX}, ${newY}) is already occupied.`);
            // Return the current position of the card if position is occupied
            return cardPositions[cardId];  
        }
    }

    cardPositions[cardId] = [newX, newY];

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
