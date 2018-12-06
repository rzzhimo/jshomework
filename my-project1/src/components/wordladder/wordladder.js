
import{
    queue_back,
    queue_empty,
    queue_front,
    queue_pop,
    queue_push,
    Queue
}from '../wordladder/Queue.js'

import{
    stack_clear,
    stack_copy,
    stack_empty,
    stack_length,
    stack_pop,
    stack_push,
    stack_top,
    Stack
}from '../wordladder/Stack.js'
//import{dic}from '../wordladder/dic.js' 字典太大跑不起来
import{dic}from '../wordladder/smalldic.js'
var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var usedword = [];

function neibor( word,neibor){
    for (var i = 0; i < word.length;i++){
        for (var j = 0; j < 26;j++){
            
            var nword = word.slice(0, i) + alphabet[j] + word.slice(i + 1);
            if(dic.includes(nword))
            {neibor.push(nword);}
        }
    }
   
    return true;
}

function dfs(source_word, target_word) {
    source_word =  source_word.toLowerCase();
    target_word = target_word.toLowerCase();
    var sstack = new Stack();
    
    sstack.push(source_word);
    var sq = new Queue();
   
    sq.push(sstack);
    while (!(sq.empty())) {
        var newsstack = new Stack();
        
        newsstack=sq.pop();//新的栈接受队列sq返回的栈
        
        var wneibor=[];
        neibor(newsstack.top(), wneibor);//判断是否是邻居
        for (var i = 0; i < wneibor.length;i++){
            if(!usedword.includes(wneibor[i])){
                usedword.push(wneibor[i]);//表明用过这个单词了
                if(wneibor[i]==target_word){
                    var s = "";
                    s += target_word;
                    s += " ";
                    while(!newsstack.empty()){
                        s += newsstack.pop();
                        s += " ";
                        
                        
                    }
                    usedword=[];
                   
                    return s;
                }
                else {
                    var copystack = new Stack();
                    
                    copystack = newsstack.copy();
                    copystack.push(wneibor[i]);
                    sq.push(copystack);
                }
            }
        }
    }
    var s = "there is no";
    return s;
};
export{
    dfs
}

