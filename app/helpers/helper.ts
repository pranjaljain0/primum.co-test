export function isCreditCardNumberValid(cardNumber: string): boolean {
    cardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');
    if (!/^\d{13,19}$/.test(cardNumber))
        return false;
    return true
}

export function isCreditCardMonthValid(month: string): boolean {
    return !(parseInt(month) <= 12 && parseInt(month) >= 1)
}

export function isCreditCardYearValid(month: string): boolean {
    return !(parseInt(month) <= 40 && parseInt(month) >= 23)
}

export function formatCreditCardNumber(cardNumber: string): string {
    if (cardNumber.length == 0) return "0000 **** **** 1234"
    cardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');
    const groups = cardNumber.match(/.{1,4}/g);
    if (groups && groups.length == 4) {
        groups[1] = '****';
        groups[2] = '****';
    }
    return groups ? groups.join(' ') : cardNumber;
}

export function formatCreditCardDate(month: string, year: string): string {
    if (month.length != 0 && !isCreditCardMonthValid(month) && year.length != 0 && !isCreditCardYearValid(year))
        return `${month}\\${year}`
    else
        return "MM/YY"
}