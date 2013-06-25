jQuery-Coda
===========

Allows you to queue your tasks with a little help from jQuery.

## Required Files

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="jquery.coda.js"></script>

## Usage Example

    typewriter=$.coda({
     callback: function(letter) {
      $('body').append(letter);
      setTimeout(typewriter.next, 300);
     },
     complete: function(){
      alert('Your novel is finished!');
     },
     queue: ['C', 'a', 'l', 'l', ' ', 'm', 'e', ' ', 'I', 's', 'h', 'm', 'a', 'e', 'l', '.']
    });
    typewriter.start();

## Options
Nothing is required initially, but somethings are needed eventually.
* **callback** (required) - a function to be called for every queued item.
* **queue** (required) - an array of queued items. The elements of the array can be in any form that makes sense.
* **complete** (optional) - a function to be called once the queue has been exhausted.

## Functionality
* **.next()** - called within the callback to start the next queued item or the complete function, if there is no more queued items and if there is a complete function defined.
* **.start()** - starts the queue (the queue is automatically paused).
* **.pause()** - prevents the next queued items from loading until .start() is called.
* **.clear()** - removes all inactive items from the queue.
* **.add( queued item )** - adds a single item to the end of the queue. Can be any type of variable.
* **.addEach( [ queued items ] )** - adds each element of the array to the end of the queue.
* **.queue** - returns the current array of queued items.
* **.pause** - returns either true or false if the queue is paused
