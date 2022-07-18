superHeroUrl = ('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/')

function heroLayout(){

};

async function displayHero(url){
    let data =  await fetch(url + 'all.json')
    .then(res => res.json())
    .then(data => data.forEach((hero)=>{
        console.log(hero.id)
        console.log(hero.name)
        console.log(hero['images'].lg  )
    }))
    try{
        console.log('Success')
    }
    catch(error){
        console.log(error)
    }
    return data
}
displayHero(superHeroUrl)