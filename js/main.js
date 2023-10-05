document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("linkListContent").innerHTML = "No Data Loaded";
});



//LinkedList
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert a new node at a specific index
    insert(data, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        const newNode = new Node(data);
        console.log(index);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let currentIndex = 0;
            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
        return true;
    }

    // Remove a node at a specific index
    remove(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
        } else {
            let previous = null;
            let currentIndex = 0;
            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    // Get the value at a specific index
    get(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        return current.data;
    }

    // Get the size of the linked list
    getSize() {
        return this.size;
    }

    // Check if the linked list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Convert the linked list to an array
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    //Clear the linked list array
    clear() {
        this.head = null;
        this.size = 0;
    }
}

// Example usage:
const arrList = new LinkedList();
function submit() {
    const transactionVal = document.querySelector('input[name="transaction"]:checked').value;
    const appendVal = document.getElementById("textValue").value;
    const indexVal = document.getElementById("listIndex").value;

    switch (transactionVal) {
        case "add":
            arrList.append(appendVal);
            break;
        case "addByIndex":
            arrList.insert(appendVal, parseInt(indexVal));
            break;
        case "removeByIndex":
            arrList.remove(parseInt(indexVal));
            break;
        case "reset":
            arrList.clear();
            break;
    }

    var x = 0;
    document.getElementById("listIndex").innerHTML = "";
    while (x < arrList.getSize()) {
        var option = document.createElement("option");
        option.value = x;
        option.innerHTML = x.toString();
        document.getElementById("listIndex").appendChild(option);
        x++;
    }

    document.getElementById("linkListContent").innerHTML = JSON.stringify(arrList, null, 3);
}

