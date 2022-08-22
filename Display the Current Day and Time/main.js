const getDateAndTime = () => {
    const newDate = new Date();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    const day = daylist[newDate.getDay()]
    const hour = newDate.getHours()
    const minute = newDate.getMinutes()
    const second = newDate.getSeconds()
    const pmORam = (hour > 12 ? 'PM' : 'AM')
    return console.log(`
    Today is: ${day}
    Time is : ${hour} : ${minute} : ${second} ${pmORam}                
`);
}

getDateAndTime()