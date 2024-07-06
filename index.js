// Example record data provided in the test
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    // ... remaining entries
  ];
  
  // Define the superbowlWin function
  function superbowlWin(record) {
    // Find the first entry where result is 'W' and team is 'Denver Broncos'
    const win = record.find(entry => entry.result === "W");
    
    // If a win entry is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
  }
  
  // Example usage:
  console.log(superbowlWin(record)); // Output: '2015' (or whatever the first 'W' entry year is)
  