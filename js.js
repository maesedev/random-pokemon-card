const card_template = document.getElementById('card-temp').content

const random = (min,max)=>Math.floor(Math.random()	*	(max - min)		+	min)

document.addEventListener('DOMContentLoaded',()=>{
	getFetch(random(1,151))
})


async function getFetch (id){
	// try{

		let fetchQuery = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		let data = await fetchQuery.json();
		console.log(data)

		insertarCard({
			imagen : data.sprites.other.dream_world.front_default,
			name:data.name,
			hp : data.stats[0].base_stat + 'HP',
			exp: 'Exp: ' + data.base_experience,
			ataque: data.stats[1].base_stat,
			ataqueEsp: data.stats[3].base_stat,
			def: data.stats[2].base_stat
			});

	// }catch(error){
		// console.log(error);
	// }
}

function insertarCard(obj){

	let	objeto = obj	

	const CLONE  = card_template.cloneNode(true);
	const main = document.querySelector('main');
	const FRAGMENT = document.createDocumentFragment();

	const name = CLONE.querySelector('.name')
	const photo =  CLONE.querySelector('.profile-photo')
	const hpSpan = CLONE.querySelector('.name-div').lastElementChild
	const expSpan = CLONE.querySelector('.exp')
	const datta  = CLONE.querySelectorAll('.info h2')

	/*name*/    name.textContent = objeto.name;	
	/*imgsrc*/	photo.src = `${objeto.imagen}` 
	/*HP*/		hpSpan.textContent = `${objeto.hp}`
	/*EXP*/		expSpan.textContent = `${objeto.exp}`
	/*ataque*/	datta[0].textContent = `${objeto.ataque}`
	/*atqueEsp*/datta[1].textContent = `${objeto.ataqueEsp}`
	/*def*/		datta[2].textContent = `${objeto.def}`
	


	FRAGMENT.appendChild(CLONE);
	main.appendChild(FRAGMENT);
}