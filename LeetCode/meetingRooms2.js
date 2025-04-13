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
        }

        // Use a table for current reservation
        usedTables++;
        // Update max number of tables needed at same time
        maxTables = Math.max(usedTables, maxTables);
        // Move to next reservation
        s++;

    }

    return maxTables;

}

// Test cases
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