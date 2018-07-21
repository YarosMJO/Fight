// Create class ImprovedFighter

import { Fighter } from "./fighter";

export  class ImprovedFighter extends Fighter{

	constructor(name, power = 7, health = 300){
		super(name, power, health);
	}

	doubleHit(enemy, point) {
		super.hit(enemy, point * 2)
	};
}
