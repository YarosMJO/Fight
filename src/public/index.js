
import {fight} from './fight';
import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";

// create two instances
let fighter = new Fighter("Alex",5,200);
let improvedFighter = new ImprovedFighter("James");

let points = [17, 4, 5, 9, 14, 21, 3, 15, 34, 12, 4];
// call fight function
fight(fighter, improvedFighter, ...points);