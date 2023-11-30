function convertToAdjList(adjMatrix) {
    // Initialize an array to store the adjacency list
    var adjList = [];

    // Iterate through each row of the adjacency matrix
    for (var i = 0; i < adjMatrix.length; i++) {
        // Get the current row of the adjacency matrix
        var row = adjMatrix[i];

        // Initialize an array to store connected nodes for the current row
        var connectedNodes = [];

        // Iterate through each column of the current row
        var j = 0;
        while (j < row.length) {
            // If there is an edge (value is 1), add the column index to the connected nodes
            if (row[j] === 1) {
                connectedNodes.push(j);
            }
            j++;
        }

        // Add the array of connected nodes to the adjacency list
        adjList[i] = connectedNodes;
    }

    // Return the final adjacency list
    return adjList;
}

// Example usage and testing
const adjacencyMatrix = [
    [0, 1, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
];

// Get the adjacency list
const adjacencyList = convertToAdjList(adjacencyMatrix);

// Log the resulting adjacency list with row indices and connected nodes
for (let i = 0; i < adjacencyList.length; i++) {
    console.log(i, adjacencyList[i]);
}

// I was unsure how to start this at first. I looked through a few of the other students repositories.
// graph-representations-Bruh2117 is the one that made the most sense to me and I based my code off that and tried to also change a few things to make it more
// easy for me to understand. I added comments and a test case as well.  

