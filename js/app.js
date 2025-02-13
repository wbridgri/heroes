/**
 * name, alias, powers [], franchise, team [], alignment bool, rivals [], species
 */

const heroes = [
    {
        id: 'ma1',
        name: 'steven strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'defenders', 'illuminati' ],
        alignment: true,
        rivals: ['dormamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human',
        firstApp: new Date('July 1, 1963')
    },
    {
        id: 'dc1',
        name: 'kal-el',
        alias: 'superman',
        powers: ['flight', 'x-ray vision', 'super strength', 'laser eyes', 'frost breath'],
        franchise: 'dc',
        team: ['justice league'],
        alignment: true,
        rivals: ['lex luthor', 'batman', 'darkseid', 'doomsday', 'bizarro'],
        species: 'alien',
        firstApp: new Date('June, 1938')
    },
    {
        id: 'im1',
        name: 'al simmons',
        alias: 'spawn',
        powers: ['immortality', 'super strength','regenerate', 'necroplasm manipulation'],
        franchise: 'image',
        team: [],
        alignment: true,
        rivals: ['violator', 'a devil', 'billy kinkaid', 'the redeemer'],
        species: 'hellspawn',
        firstApp: new Date('May 1, 1992')
    },
    {
        id: 'ma2',
        name: 'johnny blaze',
        alias: 'ghost rider',
        powers: ['magic', 'super strength', 'zadkiel control', 'immortality'],
        franchise: 'marvel',
        team: ['avengers'],
        alignment: true,
        rivals: ['mephisto', 'blackheart', 'orb', 'zarathos', 'manticore'],
        species: 'hellspawn',
        firstApp: new Date('August 1, 1972')
    },
    {
        id: 'ma3',
        name: 'norman osborn',
        alias: 'green goblin',
        powers: ['hoverboard', 'money', 'super smart', 'super strength'],
        franchise: 'marvel',
        team: ['sinister six'],
        alignment: false,
        rivals: ['spider-man', 'venom', 'x-men'],
        species: 'human',
        firstApp: new Date('July 1, 1964')
    },
    {
        id: 'im2',
        name: 'mark grayson',
        alias: 'invincible',
        powers: ['flight', 'strength', 'speed'],
        franchise: 'image',
        team: ['the pact', 'guardians of the globe'],
        alignment: true,
        rivals: ['thragg', 'battle beast', 'conquest', 'omni man'],
        species: 'alien',
        firstApp: new Date('August 1, 2002')
    },
    {
        id: 'dy1',
        name: 'john gillman',
        alias: 'homelander',
        powers: ['strength', 'speed', 'flight', 'laser eyes'],
        franchise: 'dynamite',
        team: ['the seven'],
        alignment: false,
        rivals: ['the boys'],
        species: 'human',
        firstApp: new Date('October, 1, 2006')
    },
    {
        id: 'ma4',
        name: 'thor odinson',
        alias: 'thor',
        powers: ['mjolnir', 'strong', 'flies', 'summon lightning'],
        franchise: 'marvel',
        team: ['avengers'],
        alignment: true,
        rivals: ['loki', 'hulk', 'enchantress', 'the god butcher', 'galactus'],
        species: 'god',
        firstApp: new Date('August 1, 1962')
    },
    {
        id: 'dc2',
        name: 'bruce wayne',
        alias: 'batman',
        powers: ['money', 'smart', 'martial arts'],
        franchise: 'dc',
        team: ['justice league', 'the bat family'],
        alignment: true,
        rivals: ['joker', 'penguin', 'riddler', 'bane', 'clayface'],
        species: 'human',
        firstApp: new Date('May 1, 1939')
    },
    {
        id: 'dc3',
        name: 'jason todd',
        alias: 'red hood',
        powers: ['martial arts', 'weapons'],
        franchise: 'dc',
        team: ['the bat family', 'the outlaws'],
        alignment: false,
        rivals: ['joker', 'batman', 'deathstroke', 'black mask'],
        species: 'human',
        firstApp: new Date('March 1, 1983')
    },
    {
        id: 'dc4',
        name: 'racehl roth',
        alias: 'raven',
        powers: ['magic'],
        franchise: 'dc',
        team: ['teen titans'],
        alignment: true,
        rivals: ['trigon', 'deathstroke'],
        species: 'demon',
        firstApp: new Date('October 1, 1980')
    },
    {
        id: 'mi1',
        name: 'oroku sake',
        alias: 'shredder',
        powers: ['martial arts', 'ninjitsu'],
        franchise: 'mirage',
        team: ['foot clan'],
        alignment: false,
        rivals: ['tmnt', 'splinter'],
        species: 'human',
        firstApp: new Date('May 1, 1984')
    },
    {
        id: 'dc5',
        name: 'hal jordan',
        alias: 'green lantern',
        powers: ['will power', 'green lantern ring'],
        franchise: 'dc',
        team: ['justice league', 'green lantern corps'],
        alignment: true,
        rivals: ['sinestro', 'kilowog', 'orange lanterns', 'red lanterns'],
        species: 'human',
        firstApp: new Date('October 1, 1959')
    },
    {
        id: 'dc6',
        name: 'megan morse',
        alias: 'miss martian',
        powers: ['shape shifting', 'telekinesis', 'intellect'],
        franchise: 'dc',
        team: ['young justice', 'teen titans'],
        alignment: true,
        rivals: ['bombshell'],
        species: 'alien',
        firstApp: new Date('August 1, 2006')
    },
    {
        id: 'dc7',
        name: 'chuck brown',
        alias: 'kite man',
        powers: ['can fly kites'],
        franchise: 'dc',
        team: [],
        alignment: false,
        rivals: ['batman', 'catwoman', 'swamp thing'],
        species: 'human',
        firstApp: new Date('August 1, 1960')
    },
    {
        id: 'ma5',
        name: 'peter petruski',
        alias: 'paste-pot pete',
        powers: ['adhesive lubricant', 'smart'],
        franchise: 'marvel',
        team: ['frightful four', 'frightful five'],
        alignment: false,
        rivals: ['human torch', 'captain america', 'spider-man'],
        species: 'human',
        firstApp: new Date('January 1, 1963')
    },
    {
        id: 'ma6',
        name: 'groot',
        alias: 'groot',
        powers: ['regeneration', 'the earth'],
        franchise: 'marvel',
        team: ['guardians of the galaxy'],
        alignment: true,
        rivals: ['thanos', 'ronin', 'ego', 'high evolutioner'],
        species: 'alien',
        firstApp: new Date('November 1, 1960')
    },
    {
        id: 'ma7',
        name: 'victor von doom',
        alias: 'dr doom',
        powers: ['magic', 'smart', 'money'],
        franchise: 'marvel',
        team: [],
        alignment: false,
        rivals: ['fantastic four', 'hulk', 'x-men', 'black panther', 'mephistio'],
        species: 'human',
        firstApp: new Date('July 1, 1962')
    },
    {
        id: 'ma8',
        name: 'nathaniel richards',
        alias: 'kang the conqueror',
        powers: ['controls technology', 'smart'],
        franchise: 'marvel',
        team: ['the counsel of kangs'],
        alignment: false,
        rivals: ['avengers', 'fantastic four', 'thanos'],
        species: 'human',
        firstApp: new Date('October 1, 1963')
    },
    {
        id: 'ma9',
        name: 'marc spector',
        alias: 'moon knight',
        powers: ['moon empowerment', 'detective', 'martial arts'],
        franchise: 'marvel',
        team: ['secret avengers', 'midnight sons'],
        alignment: true,
        rivals: ['hobgoblin', 'the boogey-man', 'bushman'],
        species: 'human',
        firstApp: new Date('August 1, 1975')
    },
    {
        id: 'dc8',
        name: 'unknown',
        alias: 'joker',
        powers: ['insanity', 'expert chemist', 'smart'],
        franchise: 'dc',
        team: ['injustice league', 'the legion of doom'],
        alignment: false,
        rivals: ['batman', 'the bat family', 'justice league'],
        species: 'human',
        firstApp: new Date('April 1, 1940')
    },
    {
        id: 'ma10',
        name: 'natasha romanoff',
        alias: 'black widow',
        powers: ['guns', 'agility', 'flexibility'],
        franchise: 'marvel',
        team: ['avengers', 'shield'],
        alignment: true,
        rivals: ['task master', 'ironman', 'thanos'],
        species: 'human',
        firstApp: new Date('April 1, 1964')
    },
    {
        id: 'ma11',
        name: 'tony stark',
        alias: 'ironman',
        powers: ['money', 'smart', 'weapons'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati' ],
        alignment: true,
        rivals: ['iron monger', 'captain america', 'thanos', 'the leader', 'captain marvel'],
        species: 'human',
        firstApp: new Date('December 1, 1962')
    },
    {
        id: 'ma12',
        name: 'eddie brock',
        alias: 'venom',
        powers: ['goop', 'symbiote suit', 'super strength'],
        franchise: 'marvel',
        team: [],
        alignment: false,
        rivals: ['spider-man', 'carnage', 'shield'],
        species: 'alien',
        firstApp: new Date('September 1, 1986')
    },
    {
        id: 'ma13',
        name: 'baymax',
        alias: 'baymax',
        powers: ['morphism'],
        franchise: 'marvel',
        team: ['big hero six'],
        alignment: true,
        rivals: ['yokai'],
        species: 'robot',
        firstApp: new Date('September 1, 1998')
    },
    {
        id: 'dc9',
        name: 'barry allen',
        alias: 'flash',
        powers: ['speed', 'decelerated aging', 'accelerated healing'],
        franchise: 'dc',
        team: ['justice league', 'all-star squadron'],
        alignment: true,
        rivals: ['zoom', 'black racer', 'legion of doom'],
        species: 'human',
        firstApp: new Date('January 1, 1940')
    },
    {
        id: 'mi2',
        name: 'raphael',
        alias: 'raphael',
        powers: ['ninjitsu', 'twin sai'],
        franchise: 'mirage',
        team: ['tmnt'],
        alignment: true,
        rivals: ['shredder', 'foot clan'],
        species: 'mutant',
        firstApp: new Date('May 1, 1984')
    },
    {
        id: 'ma14',
        name: 'hank mccoy',
        alias: 'beast',
        powers: ['intellect', 'agility', 'pheremone manipulation'],
        franchise: 'marvel',
        team: ['x-men', 'avengers', 'illuminati' ],
        alignment: true,
        rivals: ['magneto', 'juggernaut', 'bolivar trask'],
        species: 'mutant',
        firstApp: new Date('September 1, 1963')
    },
    {
        id: 'ma15',
        name: 'reed richards',
        alias: 'mr. fantastic',
        powers: ['intellect', 'elasticity', 'shapeshifting'],
        franchise: 'marvel',
        team: ['avengers', 'defenders', 'illuminati'],
        alignment: true,
        rivals: ['dr. doom', 'mole man', 'sub-mariner', 'molecule man'],
        species: 'human',
        firstApp: new Date('November 1, 1961')
    },
    {
        id: 'dc10',
        name: 'diana of themyscira',
        alias: 'wonder woman',
        powers: ['strength', 'flight', 'energy absorption', 'lasso of truth'],
        franchise: 'dc',
        team: ['justice league', 'amazon'],
        alignment: true,
        rivals: ['ares', 'doctor poison', 'circe', 'giganta', 'doctor cyber'],
        species: 'god',
        firstApp: new Date('October 1, 1941')
    },
    {
        id: 'ma16',
        name: 'erik lehnsherr',
        alias: 'magneto',
        powers: ['magnetism manipulation', 'astral projection', 'intellect'],
        franchise: 'marvel',
        team: ['brotherhood of mutants', 'x-men', 'new mutants'],
        alignment: false,
        rivals: ['x-men', 'william stryker', 'human beings'],
        species: 'mutant',
        firstApp: new Date('September 1, 1963')
    },
    {
        id: 'ma17',
        name: 'matt murdock',
        alias: 'daredevil',
        powers: ['echo location', 'martial arts', 'lawyer'],
        franchise: 'marvel',
        team: ['defenders', 'new avengers'],
        alignment: true,
        rivals: ['kingpin', 'bullseye'],
        species: 'human',
        firstApp: new Date('April 1, 1964')
    },
    {
        id: 'ma18',
        name: 'reed richards',
        alias: 'the maker',
        powers: ['elasticity', 'intellect', 'dimension hopping'],
        franchise: 'marvel',
        team: ['w.h.i.s.p.e.r.', 'children of tomorrow', 'dark ultimates' ],
        alignment: false,
        rivals: ['mr. fantastic', 'dr. doom', 'tony stark'],
        species: 'human',
        firstApp: new Date('February 1, 2004')
    },
    {
        id: 'ma19',
        name: 'logan',
        alias: 'wolverine',
        powers: ['claws', 'strength', 'regenerative healing', 'immortality'],
        franchise: 'marvel',
        team: ['x-men', 'avengers'],
        alignment: true,
        rivals: ['cyclops', 'sabretooth', 'omega red'],
        species: 'mutant',
        firstApp: new Date('October 1, 1974')
    },
    {
        id: 'dc11',
        name: 'shiera sanders-hall',
        alias: 'hawkgirl',
        powers: ['flight', 'immortality', 'strength', 'accelerated healing'],
        franchise: 'dc',
        team: ['justice society of america', 'justice league', 'white lantern corps'],
        alignment: true,
        rivals: ['hath-set', 'head hunter'],
        species: 'human',
        firstApp: new Date('June 1, 1941')
    },
    {
        id: 'ma20',
        name: 'wade wilson',
        alias: 'deadpool',
        powers: ['strength', 'regenerative healing', 'martial arts', 'weapons', '4th wall breaking'],
        franchise: 'marvel',
        team: ['x-men', 'avengers', 'thunderbolts' ],
        alignment: true,
        rivals: ['cable', 'ajax', 'doctor bong'],
        species: 'mutant',
        firstApp: new Date('February 1, 1991')
    }
]

/** Build cards **/
const row = document.getElementById('row')

const makeList =(el, arr)=> {
    

    

    {
        arr.forEach(item => {
            const li = document.createElement('li')
            li.classList.add('list-group-item', 'text-capitalize')
    
            li.innerText = item 
    
            el.appendChild(li)
            
        })
    }
}

const buildCards =(obj)=> {


    //make sure that row is empty
    // row.innerHTML = '' acutally don't this breaks the program

    const column = document.createElement('div')
    column.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')
    card.setAttribute('id', `card-${obj.id}`)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')

    const alias = document.createElement('h4') //should be an h2 very bad
    alias.classList.add('text-capitalize')
    alias.innerText = obj.alias

    const heroName = document.createElement('p')
    heroName.classList.add('text-capitalize', 'fst-italic')
    heroName.innerText = obj.name

    const powersLabel = document.createElement('h3')
    powersLabel.classList.add('text-capitalize', 'text-danger')
    powersLabel.innerText = 'powers'

    const powersList = document.createElement('ul')
    powersList.classList.add('list-group', 'list-group-flush')

    if(typeof((obj.powers)) != []){

        makeList(powersList, obj.powers)
    }

    const teamsLabel = document.createElement('h3')
    teamsLabel.classList.add('text-capitalize', 'text-primary')
    teamsLabel.innerText = 'teams'

    const teamsList = document.createElement('ul')
    teamsList.classList.add('list-group', 'list-group-flush')

    makeList(teamsList, obj.team)

    const rivalsLabel = document.createElement('h3')
    rivalsLabel.classList.add('text-capitalize', 'text-primary')
    rivalsLabel.innerText = 'rivals'

    const rivalsList = document.createElement('ul')
    rivalsList.classList.add('list-group', 'list-group-flush')

    

    makeList(rivalsList, obj.rivals)

    // obj.rivals.forEach(rival => {
    //     const li = document.createElement('li')
    //     li.classList.add('list-group-item', 'text-capitalize')

    //     li.innerText = rival 

    //     rivalsList.appendChild(li)
    // })

    /**appendChild here!! */

    const cardFooter = document.createElement('div')
    cardFooter.classList.add('card-footer')

    cardFooter.innerHTML = `
        <p class="card-text">Species: ${obj.species}</p>
        <p class="card-text">Franchise: ${obj.franchise}</p>
        <p class="card-text">First App: ${obj.firstApp.getMonth() +1 }/${obj.firstApp.getFullYear()}</p`

    cardHeader.appendChild(alias)
    cardHeader.appendChild(heroName)
    // append more children here to cardBody 

    card.appendChild(cardHeader)

    cardBody.appendChild(powersLabel)
    cardBody.appendChild(powersList)

    cardBody.appendChild(teamsLabel)
    cardBody.appendChild(teamsList)

    cardBody.appendChild(rivalsLabel)
    cardBody.appendChild(rivalsList)

    card.appendChild(cardBody)
    card.appendChild(cardFooter)
    column.appendChild(card)

    row.appendChild(column)

}



// buildCards(heroes[0])

// heroes.forEach(hero => {
//     buildCards(hero)

// })

// console.log(typeof(heroes)) testing should come back as string 

const loadCards = (arr) =>
    {
        arr.forEach( item => buildCards(item))
    }

    // loadCards(heroes)

    const loadBtn = document.getElementById('loadBtn')

    loadBtn.addEventListener('click' , (e)=>{

        e.preventDefault()
        row.innerHTML = ''

        const filter = document.getElementById('filter').value

        //Object.keys(obj) => returns an array of the keys of an object

        //Object.values(obj) => returns an array of the values of an object

        //arr.includes(item) => returns a boolean if item is in arr

        // const franchise = document.getElementById('franchise').value
        // console.log(franchise);

        const cards = heroes.filter(hero => Object.values(hero).includes(filter)
        )

        loadCards(cards)
    })

    /**
     * arr.filter() => return a copy array after an original array has been filtered through
     * 
     * 
     * 
     */

let marvelHeroes = heroes.filter(hero => hero.franchise == 'marvel')

// console.log(marvelHeroes)


//DECLARATIVE
// let dcHeroes = []

// for(let hero of heroes) {
//     if(hero.franchise == 'dc'){
//         dcHeroes = [...dcHeroes, hero]
//     }
// }

// console.log(dcHeroes)

let dcHeroes = heroes.filter(hero => hero.franchise == 'dc')

// console.log(dcHeroes)

console.log(Object.values(heroes[0]))

console.log(Object.keys(heroes[0]))
