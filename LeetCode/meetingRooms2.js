/*
Approach
- separate start time and end time into separate arrays
- reason is looking for flow of start and end times across all meetings (to avoid not being able to reach the next)
- tables will open and close based on interview times, we are looking for how max meetings overlap at a given time

- 2 methods to divide as array
-- map(logn) and sort (nlogn) -> n log n
-- for loop(logn) an sort(nlogn) -> n log n

Time complexity: O(n log n) (sorting start and end times, one loop)
*/

function minMeetingRooms(reservations) {

    // edge case where no reservations
    if (reservations.length === 0 || !reservations) return 0;

    // separate as start and end time
    let start = reservations.map(res => res[0]).sort((a,b) => a-b);
    let end = reservations.map(res => res[1]).sort((a,b) => a-b);

    // set up end pointer
    let e = 0;
    let tables = 0;

    // go through all start times, i being start pointer
    for (let i = 0; i < reservations.length; i++) {

        // if start is less than end, meaning a reservation is on-going and there is overlap, add table
        if (start[i] < end[e]) {
            tables++;

        // if start is past end 
        } else {
            e++;
        }
    }
    return tables;
}

// /* 
function maxMeetingRooms(reservations) {

    // edge case where no reservations
    if (reservations.length === 0 || !reservations) return 0;

    // separate as start and end time
    let start = reservations.map(res => res[0]).sort((a,b) => a-b);
    let end = reservations.map(res => res[1]).sort((a,b) => a-b);

    // set up end pointer
    let e = 0;
    let tables = 0;
    let maxTables = 0;

    // go through all start times, i being start pointer
    for (let i = 0; i < reservations.length; i++) {

        // if start is less than end, meaning a reservation is on-going and there is overlap, add table
        if (start[i] < end[e]) {
            tables++;
            // Add only if you need max tables
            maxTables = Math.max(maxTables, tables);

        // if start is past end 
        } else {
            tables--;
            e++;
        }
    }
    return maxTables;
}
// */

/* Other solution
function minMeetingRooms(reservations) {

    if (reservations.length === 0) return 0;

    // Separate start and end times
    let start = reservations.map(r => r[0]).sort((a,b) => a - b);
    let end = reservations.map(r => r[1]).sort((a,b) => a - b);

    let s = 0;
    let e = 0;
    let usedTables = 0;
    let maxTables = 0;

    // Go through all start times
    while (s < reservations.length) {
        
        // Unless start is after end of current reservation, skip and add a table to use
        if (start[s] >= end[e]) {
            // If a meeting has ended before current one starts, free a table
            usedTables--;
            e++;
        } else {
            usedTables++;
        }

        // Update max number of tables needed at same time
        maxTables = Math.max(usedTables, maxTables);
        // Move to next reservation
        s++;

    }
    return maxTables;
}
*/

// TEST CASES

console.log(minMeetingRooms([[10, 50], [20, 40], [35, 45]])); //3
console.log(minMeetingRooms([[900, 1100], [1030, 1230], [1300, 1400]])); // 2
console.log(minMeetingRooms([[800, 1000], [900, 930], [1015, 1115]])); // 2
console.log(minMeetingRooms([[1200, 1230], [1230, 1300], [1300, 1330]])); // 1
console.log(minMeetingRooms([[1200, 1800], [1230, 1400], [1300, 1330]])); // 3
console.log(minMeetingRooms([])); // 0

/*
Original Attempt

let tables = 0;

for (let i = 1; i <= reservations.length; i++) {

        // if the start time of the reservation is before the end time of the previous reservation, then increase need for a table
        if (reservations[i][0] <= reservations[i-1][1]) {
            tables++;
        }

    }

*/