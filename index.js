// Function that returns a promise with a delay
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Example tasks that simulate asynchronous operations
  function task1() {
    return delay(2000).then(() => console.log("Task 1 completed"));
  }
  
  function task2() {
    return delay(1500).then(() => console.log("Task 2 completed"));
  }
  
  function task3() {
    return delay(1000).then(() => console.log("Task 3 completed"));
  }
  
  // Execute tasks concurrently
  function executeTasks() {
    const tasks = [task1(), task2(), task3()];
  
    Promise.all(tasks)
      .then(() => {
        console.log("All tasks completed");
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  }
  
  // Call the function to execute tasks concurrently
  executeTasks();
  
