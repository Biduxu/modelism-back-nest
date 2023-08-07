/* eslint-disable prettier/prettier */

export class DateNow {

    public getDate = (): string => {
        const date: Date = new Date( Date.now() )

        const dayNumber: number = date.getDate()
        const monthNumber: number = (date.getUTCMonth() + 1)

        let day
        let month

        if(dayNumber < 10){
            day = `0${dayNumber}`
        }else{
            day = `${dayNumber}`
        }

        if(monthNumber < 10){
            month = `0${monthNumber}`
        }else{
            month = `${monthNumber}`
        }

        const year: string = date.getFullYear().toString()

        return `${day}/${month}/${year}`
    }

}