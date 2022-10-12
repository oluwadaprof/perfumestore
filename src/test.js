const courses = [ [ 100, 200 ], [ 1000, 1250 ], [ 200, 1300 ], [ 2000, 3200 ] ];



const scheduleCourse = function(courses) {
const sortcourse = courses.sort(function(a,b) {return  b[1] - a[1]})
console.log(sortcourse)

};
scheduleCourse();

//sort an array in javascript?
// homes.sort(function(a, b) {
//     return parseFloat(a.price) - parseFloat(b.price);
// });


// homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));


// homes.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));


