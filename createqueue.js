
    
      let queue = [];
      let currentSize = queue.length;
      let maxSize = 5;

      function enqueue(newVal) 
      {
        if (currentSize >= maxSize) 
        {
          alert("Queue is already full");
        } else 
        {
          queue[currentSize] = newVal;
          currentSize++;
        }
      }

      function display() 
      {
          
        console.warn(queue);
      }
      function dequeue() 
      {
        if (currentSize > 0) 
        {
          for (let i = 0; i < queue.length; i++) 
          {
            queue[i] = queue[i + 1];
          }
          currentSize--;
          queue.length = currentSize;
        } 
        else 
        {
          alert("queue is already empty");
        }
      }

      enqueue(10);
      enqueue(20);
      enqueue(30);
      dequeue(10);//to remove the the elements.
      dequeue(20);

      display();
   
  
