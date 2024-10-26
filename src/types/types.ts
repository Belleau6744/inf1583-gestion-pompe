export type BasePropsType = {
    className?: string;
}

export type Pompe_State = 
    "ready"               |
    "home"                |
    "selectAmount"        |
    "selectVolume"        |
    "selectGrade"         |
    "selectPaymentMethod" |
    "carteCredit"         |
    "compteClient"        |
    "review"              
;

export type UserRole = "admin" | "employee";
