   let queue = [];
      let currentSize = queue.length;
      let maxSize = 5;

      function enqueue(newVal) {
        if (currentSize >= maxSize) {
          alert("Queue is already full");
        } else {
          queue[currentSize] = newVal;
          currentSize++;
        }
      }

      function display() {
        console.warn(queue);
      }
      function dequeue() {
        if (currentSize > 0) {
          for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
          }
          currentSize--;
          queue.length = currentSize;
        } else {
          alert("queue is already empty");
        }
      }


      function front()
      {
        if(currentSize>0)
        {
            console.warn(queue[0])
        }
        else{
            alert("queue is already Empty");
        }
    }


    function rear()
    {
      if(currentSize>0)
      {
          console.warn(queue[currentSize-1])
      }
      else
      {
          alert("queue is already Empty");
      }
  }
  function isEmpty()
  {
    if(currentSize<=0)
    {
        return true;
    }
    else
    {
        return false;
    }
  }
      
      enqueue(10);
      enqueue(20);
      enqueue(30);
     
      front(); //front it is used to find out which elements we have insert recently
      rear(); //rear is used to display which element we have insert first
      display();
   
  

