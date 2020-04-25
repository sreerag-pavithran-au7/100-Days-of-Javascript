// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    //happy coding!
    for(i in A){
      var count = 0;
      for(j in A){
        if(A[i] === A[j]){
          count += 1;
        }
      }
      if(count %2 != 0){
        return A[i];
      }
    }
    
    // return 0;
  };
  
  
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);