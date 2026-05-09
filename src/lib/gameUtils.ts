import type {Actor} from "../types";
import {dateToDayOfYear} from "./dateUtils.ts";

export const getActorForDate = (actors : Actor[], date: Date) => {

    const dayIntoYear = dateToDayOfYear(date);

    return actors[dayIntoYear % actors.length];
}
