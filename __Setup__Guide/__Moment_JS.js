/**
 * Moment JS Installation:
 *  npm install moment
 * 
 * Moment JS Usage:
 * 
 *                                Format Dates
 * ----------------------------------------------------------------------------
 * moment().format('MMMM Do YYYY, h:mm:ss a'); // April 30th 2023, 11:29:29 pm
 * moment().format('dddd');                    // Sunday
 * moment().format("MMM Do YY");               // Apr 30th 23
 * moment().format('YYYY [escaped] YYYY');     // 2023 escaped 2023
 * moment().format();                         
 * 
 * 
 *                                Relative Time
 * -----------------------------------------------------------------------------
 * moment("20111031", "YYYYMMDD").fromNow(); // 12 years ago
 * moment("20120620", "YYYYMMDD").fromNow(); // 11 years ago
 * moment().startOf('day').fromNow();        // a day ago
 * moment().endOf('day').fromNow();          // in 30 minutes
 * moment().startOf('hour').fromNow();      
 *  
 */