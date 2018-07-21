// create async function fight

export async function fight(fighter, improvedFighter, ...point){
	for(let i=0; i<point.length;i++)
	{
		if(i%2 == 0)
		if(fighter.health <= 0 )
		{
			console.log(`${fighter.name} in a knockout!!!`);
			await fighter.knockout();
			console.log(`${improvedFighter.name} is a champion!!!`);
			break;
		} else fighter.hit(improvedFighter, point[i]);

		else
		if(improvedFighter.health <= 0)
		{
			console.log(`${improvedFighter.name} in a knockout!!!`);
			await improvedFighter.knockout();
			console.log(`${fighter.name} is a champion!!!`);
			break;
		} else improvedFighter.hit(fighter, point[i]);
	
	};
}