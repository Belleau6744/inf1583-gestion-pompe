
export type RowPumpUnpaidTransaction = {
    id: string;
    pumpNumber: number;
    date: Date;
    amountUnpaid: number;   
}

export type UnpaidTransactionsData = RowPumpUnpaidTransaction[];

export type RapportOverview = {
    unpaidTransactionReport: UnpaidTransactionsData
}