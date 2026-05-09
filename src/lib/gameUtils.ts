import type {Actor} from "../types";
import {dateToDayOfYear} from "./dateUtils.ts";

export const getActorForDay = (actors : Actor[], date: Date) => {

    const dayIntoYear = dateToDayOfYear(date);

    return actors[dayIntoYear % actors.length];
}
