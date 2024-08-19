import { ValidatorConstraintInterface } from 'class-validator';
export declare class IsOnPriceFormat implements ValidatorConstraintInterface {
    validate(price: string): Promise<boolean>;
}
