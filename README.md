# to-do list project

To-do list project from TOP

29 Sept 2021:
Fully functional build. Design has not been worked on.

I spent significant time chasing down why I couldn't get the array to load; I could console.log it straight from localStorage, I could console.table it being de-stringified by JSON, but it wouldn't stick with a simple = assignment line. However, I eventually walked through the entire flow of the array object and found that if I passed it in to the load function, operated on a temporary array, returned the tempArray, then assigned the original array object to that tempArray return value, that it worked perfectly. 
OF COURSE, this led me to discover the same bug lurking in the save function, I had just never caught it because it worked fine until AFTER data was loaded from localStorage. In that case it would only save an empty array - not very helpful. Passing the array object into the save function and operating on it as a temporary array again solved the problem.
