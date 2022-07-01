import { IMeta } from "./app.types";
import { ICard } from "./card.types";

export interface IFlowers {
    flowers: ICard[],
    meta: IMeta
}