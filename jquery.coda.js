/*
 jQuery Coda created by James Anthony Bruno (github.com/EVA-01) Initial version (1.0)
 How to use:
  Initialize:
   queue=$.coda({
    callback *required*: function(params *optional*) {
     *do whatever*
     *when you wish to progress* queue.next();
    },
    complete *optional*: function() {
     *fired when queue is emptied*
    },
    queue *not initially required*: ['here', 'are', 'the', 'different', 'queued', 'items']
   });
  The variable that the coda is set to can have its options changed at any time:
   queue.callback=function(vars) {
    alert(vars);
    queue.next();
   }
  To add to the queue:
   queue.add('!');
  OR
   queue.addEach(['!', '?', '!', '?']);
  OR
   queue.queue=['california', 'oregon', 'washington'];
  You may also clear the queue:
   queue.clear();
  Start the queue (does not automatically start):
   queue.start();
  Pause the queue:
   queue.pause();
  Treat the queue like a normal variable to delete or replace it.
  Love the queue.
  Feed the queue.
*/
jQuery.coda=function(establishment) {
 if(establishment.queue && jQuery.isArray(establishment.queue)) {
  var thtyutr=establishment.queue;
 } else {
  var thtyutr=[];
 }
 return {
  add:function(fnc){
   this.queue.push(fnc);
   if(this.paused==false && this.queue.length==1 && this.progressed==false) {
    this.next();
   }
  },
  next:function(){
   if(this.paused==false && this.queue.length!=0) {
    this.progressed=true;
    var fnc=this.queue.shift();
    this.callback(fnc);
   } else if(this.paused==false && this.queue.length==0 && this.complete!=false) {
    this.progressed=false;
  this.complete();
   }
  },
  clear:function() {
   this.queue=[];
  },
  addEach:function(fncs) {
   for(i=0;i<fncs.length;i++) {
    this.queue.push(fncs[i]);
   }
   if(this.paused==false && this.queue.length==fncs.length && this.progressed==false) {
    this.next();
   }
  },
  start:function() {
   this.paused=false;
   this.progressed=true;
   this.next();
  },
  queue:thtyutr,
  pause:function() {
   this.paused=true;
  },
  paused:true,
  progressed:false,
  callback:establishment.callback,
  complete:(function(tt){
   if(tt && jQuery.isFunction(tt)) {
    return tt;
   } else {
    return false;
   }})(establishment.complete)
 };
}
