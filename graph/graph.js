class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = new Set();
    }
  }

  addEdge(vertex, edge) {
    this.addVertex(vertex);
    this.addVertex(edge);
    this.list[vertex].add(edge);
    // for bidirectional
    // this.list[edge].add(vertex)
  }

  remove(val, vertex) {
    this.list[vertex].delete(val);
    // for bidirectional
    // this.list[val].delete(vertex)
  }

  removeVertex(vertex) {
    for (let val of this.list[vertex]) {
      this.remove(val, vertex);
    }
    delete this.list[vertex];
  }

  dfs(start) {
    let stack = [];
    let visited = {};

    stack.push(start);

    while (stack.length) {
      let vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        console.log(vertex);
        let nearData = this.list[vertex];
        for (let val in nearData) {
          if (!visited[val]) {
            stack.push(val);
          }
        }
      }
    }
  }

  display() {
    for(let val in this.list) {
        console.log(val, "---->" ,[...this.list[val]])
    }
  }

  bfs(start) {
    let stack = []
    let visited = {}

    stack.push(start)
    visited[start] = true

    while(stack.length) {
        let vertex = stack.shift()
        console.log(vertex);

        let nearData = this.list[vertex]

        for(let val in nearData) {
            if(!visited[val]) {
                visited[val] = true
                stack.push(val)
            }
        }

    }

  }

  findLargestKey() {

    let max = 0;
    let largest = 0

    for(let val in this.list) {
        if(this.list[val]) {
            let count = this.list[val].size
            if(count > max) {
                max = count 
                largest = val
            }
        }
        return largest
    }
  }


}

let graph = new Graph()

graph.addEdge(1,2)
graph.addEdge(3,4)
graph.addEdge(5,6)
graph.addEdge(4,3)
graph.addEdge(1,4)
graph.addEdge(2,6)
graph.addEdge(6,7)



graph.removeVertex(7)

graph.bfs(1)
console.log("---")

graph.dfs(1)

console.log("---")

console.log(graph.findLargestKey())
