import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export const Status = {
    DONE: "DONE",
    CANCELED: "CANCELED",
    SENT: "SENT",
    RETURNED: "RETURNED",
    PENDING: "PENDING"
} as const;
export type Status = (typeof Status)[keyof typeof Status];
export type Product = {
    id: Generated<string>;
    name: string;
    identifier: Generated<number>;
    price: string;
    status: Status;
    userId: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type User = {
    id: Generated<string>;
    email: string;
    name: string;
    createdAt: Generated<Timestamp>;
};
export type DB = {
    Product: Product;
    User: User;
};
