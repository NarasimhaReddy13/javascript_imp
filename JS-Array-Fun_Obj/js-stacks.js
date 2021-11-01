class Stack {
    constructor() {
        this.items = [];
    }
    push(item){
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        if (this.items.length == 0) {
            return null
        }
        return this.items[this.items.length - 1];
    }
    getSize() {
        console.log(this.items.length);
    }
    isEmpty() {
        return this.getSize() === 0;
    }
}


const cars = new Stack();

cars.push("Honda");
cars.push("Swift");
cars.getSize();
console.log(cars);







class Queue {
    constructor() {
        this.items  = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dqueue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    getSize() {
        return this.items.length;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
}

const q = new Queue();
q.enqueue(5);
q.enqueue(10);
q.dqueue();
console.log(q);