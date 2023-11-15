const year = document.getElementById("year")
//const will help mw to find the variables  and the year = document the document means the html document then get. and the year so and ti
// his is the time Elementfor which ever page we load this javascript into 
const thisYear = new Date().getFullYear()
// so i define another variable by this year
year.setAttribute("datetime", thisYear)
year.textContent =thisYear
// the textContent make the date display on the page