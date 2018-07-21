// Create class Fighter

export class Fighter{
	constructor(name, power = 5, health = 200){
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage)
	{
		this.health -= damage;
		console.log(this.name + " health: " + this.health);
	}

	hit(enemy, point) {
		let damage = point * this.power;
		enemy.setDamage(damage)
	};

	knockout() {
		new Promise(resolve =>
		{
			setTimeout(() => 
			{
				console.log("time is over!");
				resolve();
			}, 500);
		});
	};
}