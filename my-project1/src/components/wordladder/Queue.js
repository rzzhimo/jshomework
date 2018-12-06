function Queue() {
    this.data = [];
    this.push = queue_push;
    this.pop = queue_pop;
    this.front = queue_front;
    this.back = queue_back;
    this.empty = queue_empty;
  }
  function queue_push(element) {
    this.data.push(element);
  }
  function queue_pop() {
    return this.data.shift();
  }
  function queue_front() {
    return this.data[0];
  }
  function queue_back() {
    return this.data[this.data.length - 1]
  }
  function queue_empty() {
    if (this.data.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  export{
    queue_back,
    queue_empty,
    queue_front,
    queue_pop,
    queue_push,
    Queue
  }