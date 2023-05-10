import { CalculateI } from "../interface"
export function calculate(birthDate: Date): CalculateI {
    const current = new Date()
    const birth = new Date(birthDate)
    let years = current.getFullYear() - birth.getFullYear()
    let months = current.getMonth() - birth.getMonth()
    let days = current.getDate() - birth.getDate()
    if (current <= birth) {
        years = 0
        months = 0
        days = 0
    }
    if (months < 0 || (months === 0 && days < 0)) {
        years--
        months += 12
    }
    if (days < 0) {
        months--
        const endsMonth = new Date(current.getFullYear(), current.getMonth(), 0).getDate()
        days += endsMonth;
    }
    return { years, months, days }
}