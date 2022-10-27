import  Stack  from "./Stack"; 

class QueueUsingTwoStacks {
    constructor (){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(value){
        this.stack1.push(value)
    }

    dequeue(){
        if(this.stack1.size() === 0 && this.stack2.size() === 0){
            return undefined
        }
        
        if(this.stack2.size() === 0){
            while(this.stack1.size() !== 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
}

