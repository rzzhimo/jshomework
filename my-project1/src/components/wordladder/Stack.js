function Stack() {
    this.data = [];
    this.push = stack_push;
    this.pop = stack_pop;
    this.top = stack_top;
    this.clear = stack_clear;
    this.length = stack_length;
    this.empty = stack_empty;
    this.copy = stack_copy;
  }
  function stack_push(element) {
    this.data.push(element);
  }
  function stack_pop() {
    return this.data.pop();
  }
  function stack_top() {
    return this.data[this.data.length - 1]
  }
  function stack_clear() {
    this.data= [];
  }
  function stack_length() {
    return this.data.length;
  }
  function stack_empty() {
    if (this.data.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  function stack_copy() {
    var s = new Stack();
    s.data = this.data.slice(0);
    return s;
  }
  export{
    stack_clear,
    stack_copy,
    stack_empty,
    stack_length,
    stack_pop,
    stack_push,
    stack_top,
    Stack
  }