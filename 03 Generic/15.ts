// A generic function to wrap data in a Promise
function fetchData<T>(data: T): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 1000);
    });
  }
  
  // Using the function
  fetchData<number>(42).then((result) => console.log(result)); // Output after 1 second: 42
  fetchData<string>("Hello").then((result) => console.log(result)); // Output after 1 second: 'Hello'
  