export function calculateAge(startTime, EndTime) {
    let ts = new Date(startTime).getTime();
    if(EndTime !== null){
        let tEnd = new Date(EndTime).getTime();
        let passedSec, passedMin, passedHr, passedDay;
        passedSec = Math.round(((tEnd) / 1000) % 60);
        passedMin = Math.floor(((tEnd - ts) / (60 * 1000)) % 60);
        passedHr = Math.floor(((tEnd - ts) / (60 * 60 * 1000)) % 24);
        passedDay = Math.floor(( tEnd - ts) / (24 * 60 * 60 * 1000));
        // console.log(
        //   passedSec + "s \n" + passedMin + "m \n" + passedHr + "h \n" + passedDay + "d"
        // );
        if(passedDay<=0){
        if(passedHr<=0){
            if(passedMin<=0){
                return passedSec+"sec"
            }
            return passedMin+"min";
        } else return passedHr+"hr "+passedMin+"min";
        }else return passedDay+"d "+passedHr+"hr "+passedMin+"min";
    }else{
        return "-";
    }
}