export class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(data) {
        const node = new Node(data);
        this.length++;
        if (this.head === null) {
            this.head = node;
            return
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    prepend(data) {
        const node = new Node(data);
        this.length++;
        if (this.head === null) {
            this.head = node;
        } else {
            const firstNode = this.head;
            this.head = node;
            this.head.next = firstNode;
        }
    }

    size() {
        return this.length;
    }
    
    headData() {
        if (this.head === null) return undefined;
        return this.head.data;
    }

    tailData() {
        if (this.head === null) return undefined;
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    dataAt(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter < index) {
            if (currentNode.next === null) return undefined;
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode ? currentNode.data : undefined;
    }

    pop() {
        if (this.head === null) return undefined;
        const nextNode = this.head.next;
        this.head = nextNode;
        this.length--;
    }
    
    contains(searchValue) {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode !== null) {
            if (currentNode.data === searchValue) return {found: true, index: counter};
            currentNode = currentNode.next;
            counter++;
        }
        return {found: false};
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}