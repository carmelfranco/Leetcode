var findItinerary = function (tickets) {

    // We have been given a directed graph.
    // We know we always start at JFK.
    // We need to return the flight path the user took.
    // We will use a adjacency list to store the graph.
    // Node -> [destination, destination, destination]

    // For each node we visit in topological order, we add to the path.
    // Starting with JFK and the lexicographically closest node.
    // Although the issue is that it isn't going to always be right.
    // We could accidentally take a node that is lexicographically correct
    // but is just the last destination in a series of travels. Meaning
    // the man has traveled the entire world, came back to Jfk and gone to the last
    // dest. Which we cannot miss, so we check this. If a node has no given edges,
    // and it isn't the last destination, we backtrack our results. Act as if we haven't
    // visited him yet and do the rest, repeating this logic.

    // We repeat this until we have visited all nodes, we know this by the size of our
    // output array matching the size of our input array or we just have no more nodes with edges
    // anymore.

    // Flights paths will be our adjacency list.
    const flight_paths = new Map();

    // This is what we will return, we always know we start at JFK.
    const flight_path_order = ["JFK"];

    // Thankfully, javascript's default sort is lexicographical.
    // We do this as we need to visit the lexicographically closest node first.
    // Assuming we don't backtrack on it later.
    tickets = tickets.sort(); // O(n^2);

    // Create the adjacency list.
    for (const [source, dest] of tickets) {
        let edges = [];
        if (flight_paths.has(source)) {
            edges = flight_paths.get(source);
        }
        edges.push(dest);
        flight_paths.set(source, edges);
    }

    // Depth first search.
    const depth_first_search = (city) => {
        // Have we already been to all the nodes?
        // Meaning we have visited all the tickets?
        if (flight_path_order.length === tickets.length + 1) return true;

        // Get the departures of flights from this city.
        // If their isn't any, we need to back track on this node
        // Because we know we have more flights to go and we have already
        // somehow visited our destination. Which is incorrect.
        const cities_to_go_to = flight_paths.get(city) || [];
        if (!cities_to_go_to.length) return false;

        // So we have other cities to go to from here.
        // Let's create a copy of those cities because we're going to
        // be dynamically adding and removing from that array. Something our
        // for loop wouldn't be able able to handle otherwise.
        const cities_copied = Array.from(cities_to_go_to);

        // Visit all connecting cities.
        for (const other_city of cities_copied) {
            // Add to our output, as we're doing this in topological sort
            flight_path_order.push(other_city);

            // Remove the city from the edges of the graph.
            // As we don't want to revisit it. Otherwise we would have a loop.
            // Note: we're passing this array by reference. So we don't need to re-set it.
            // We use shift here because we've done this in lexicographical order starting from
            // the beginning.
            cities_to_go_to.shift();

            // If it returns true, it mean's we've visited all cities
            // and that mean's we have nothing else to do.
            if (depth_first_search(other_city)) {
                return flight_path_order;
            } else {
                // BACKTRACKING!
                // We've visited the wrong city!
                // Undo our work here, as this is not the right city,
                // we need to revisit this city later on and not now.
                // What this does is visit all other cities
                // then backtrack on this city.
                flight_path_order.pop();
                cities_to_go_to.push(other_city);
            }
        }

        return false;
    };

    // Start at JFK airport
    return depth_first_search("JFK");

    // In the end this is O (v + e) ^ 2 time O(e) space
    // We could better solve this using Eulerian path.
};