// create a graph class
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    // functions to be implemented
// add vertex to the graph
    addVertex(v) {
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(v, []);
    }

    // add edge to the graph
    addEdge(v, w) {
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);

        // Since graph is undirected,
        // add an edge from w to v also
        this.AdjList.get(w).push(v);
    }

    // Prints the vertex and adjacency list
    printGraph() {
        // get all the vertices
        var get_keys = this.AdjList.keys();

        // iterate over the vertices
        for (var i of get_keys) {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

    // Main DFS method
    dfs(startingNode) {

        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        let path = {r: ''}
        this.DFSUtil(startingNode, visited, path);
        console.log(path.r)
    }

    printAllPaths(s, d) {
        let isVisited = [];
        let pathList = [];

        // add source to path[]
        pathList.push(s);

        // Call recursive utility
        this.printAllPathsUtil(s, d, isVisited, pathList);



    }

    printAllPathsUtil(u, d,
                      isVisited,
                      localPathList) {

        // Mark the current node
        isVisited[u] = true;

        if (u === d) {
            console.log(localPathList.join(" "));

            // if match found then no need
            // to traverse more till depth
            isVisited[u] = false;
            return;
        }

// Recur for all the vertices
// adjacent to current vertex

        for (let i of this.AdjList.get(u)) {
            if (!isVisited[i]) {
                // store current node
                // in path[]
                localPathList.push(i);
                this.printAllPathsUtil(i, d, isVisited,
                    localPathList);

                // remove current node
                // in path[]
                localPathList.splice(i, 1);
            }
        }

// Mark the current node
        isVisited[u] = false;
    }


// Recursive function which process and explore
// all the adjacent vertex of the vertex with which it is called
    DFSUtil(vert, visited, path) {
        visited[vert] = true;
        // console.log(vert);

        var get_neighbours = this.AdjList.get(vert);
        let [x, y] = vert.split('-').map(d => +d)

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            let [x_n, y_n] = get_elem.split('-').map(d => +d)

            if (!visited[get_elem]) {
                if (x_n === x + 1) path.r += 'r'
                if (x_n === x - 1) path.r += 'l'
                if (y_n === y + 1) path.r += 'd'
                if (y_n === y - 1) path.r += 'u'
                this.DFSUtil(get_elem, visited, path);
            }

        }
    }

}

var g = new Graph(25);

// adding vertices
let size = 5;
for (var i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        g.addVertex(`${i}-${j}`);
    }
}

for (var i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i < size - 1) g.addEdge(`${i}-${j}`, `${i + 1}-${j}`);
        if (j < size - 1) g.addEdge(`${i}-${j}`, `${i}-${j + 1}`);
    }
}


//g.dfs('0-0')
g.printAllPaths('0-0','4-4')