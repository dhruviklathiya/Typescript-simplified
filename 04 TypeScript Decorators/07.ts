enum Status {
    Pending = 1,
    InProgress,
    Completed,
  }
  
  // Enum values and reverse mapping
  console.log(Status.Pending); // Output: 1
  console.log(Status[1]); // Output: 'Pending'
  
  // Using Enum
  function getStatusMessage(status: Status): string {
    switch (status) {
      case Status.Pending:
        return "Task is pending.";
      case Status.InProgress:
        return "Task is in progress.";
      case Status.Completed:
        return "Task is completed.";
      default:
        return "Unknown status.";
    }
  }
  
  console.log(getStatusMessage(Status.Completed)); // Output: 'Task is completed.'
  