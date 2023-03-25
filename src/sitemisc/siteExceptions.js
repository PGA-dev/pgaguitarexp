function StatException(message) {
    const error = new Error(message);
  
    error.code = 'No stats on this model yet';
    return error;
  }
  
  StatException.prototype = Object.create(Error.prototype);