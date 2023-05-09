export function isCreditCardNumberValid(cardNumber: string): boolean {
    cardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');
    if (!/^\d{13,19}$/.test(cardNumber))
        return false;

    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let digit = parseInt(cardNumber[i], 10);
        if ((cardNumber.length - i) % 2 === 0) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        sum += digit;
    }

    return sum % 10 === 0;
}

export function isCCMonthValid(month: string): boolean {
    return !(parseInt(month) <= 12 && parseInt(month) >= 1)
}

export function isCCYearValid(month: string): boolean {
    return !(parseInt(month) <= 40 && parseInt(month) >= 23)
}