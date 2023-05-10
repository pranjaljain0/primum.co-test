export interface CardDetails {
    Name: string,
    CardNumer: string,
    MM: string,
    YY: string,
    CVV: string,
    [key: string]: string;
}

export interface InputCardDetailsStatus {
    Name: boolean,
    CardNumer: boolean,
    MM: boolean,
    YY: boolean,
    CVV: boolean,
    [key: string]: boolean;
}

