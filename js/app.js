/**
 *  name, alias, powers [], franchise, teams [], alignment boolean, rivals [], species
 */




const heroes = [
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human',
        firstApp: new Date('July 1, 1963')
    },
    {
        id: 'dc1',
        name: 'kal-el',
        alias: 'superman',
        powers: ['flight', 'super strength', 'x-ray vision', 'laser eyes', 'frost breath'],
        franchise: 'dc',
        team: ['justice league'],
        alignment: true,
        rivals: ['lex luthor', 'darkseid', 'doomsday', 'batman', 'bizarro'],
        species: 'alien',
        firstApp: new Date('June 1, 1938')
    },
    {
        id: 'im1',
        name: 'al simmons',
        alias: 'spawn',
        powers: ['immortality', 'super strength', 'regenerate', 'necroplasm manipulation'],
        franchise: 'image',
        team: null,
        alignment: true,
        rivals: ['violator', 'a devil', 'billy kincaid', 'the redeemer'],
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
        name: 'norman osbourne',
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
        powers: ['super strength', 'flight', 'super speed'],
        franchise: 'image',
        team: ['the pact', 'guardians of the globe'],
        alignment: true,
        rivals: ['thragg', 'battlebeast', 'conquest', 'omni man'],
        species: 'alien',
        firstApp: new Date('August 1, 2002')
    },
    {
        id: 'dy1',
        name: 'john gillman',
        alias: 'homelander',
        powers: ['super strength', 'flight', 'super speed', 'laser eyes'],
        franchise: 'dynamite',
        team: ['the seven'],
        alignment: false,
        rivals: ['the boys'],
        species: 'human',
        firstApp: new Date('October 1, 2006')
    },
    {
        id: 'ma4',
        name: 'thor odinson',
        alias: 'thor',
        powers: ['magic', 'mjollnir', 'super strength', 'flight', 'summon lightning'],
        franchise: 'marvel',
        team: ['avengers', ''],
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
        rivals: ['batman', 'joker', 'deathstroke', 'black mask'],
        species: 'human',
        firstApp: new Date('March 1, 1983')
    },
    {
        id: 'dc4',
        name: 'rachel roth',
        alias: 'raven',
        powers: ['magic', 'martial arts'],
        franchise: 'dc',
        team: ['teen titans'],
        alignment: true,
        rivals: ['trigon', 'deathstroke'],
        species: 'demon',
        firstApp: new Date('October 1, 1980')
    },
    {
        id: 'mi1',
        name: 'oroku saki',
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
        team: ['green lantern corps', 'justice league'],
        alignment: true,
        rivals: ['sinestro', 'kilowog', 'orange lanterns', 'red lanterns'],
        species: 'human',
        firstApp: new Date('October 1, 1959')
    },
    {
        id: 'dc6',
        name: 'megan morse',
        alias: 'miss martian',
        powers: ['shape shifting', 'telekinesis', 'smart'],
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
        alias: 'Kite Man',
        powers: ['can fly kites'],
        franchise: 'dc',
        team: null,
        alignment: false,
        rivals: ['batman', 'catwoman', 'swamp thing'],
        species: 'human',
        firstApp: new Date('August 1, 1960')
    },
    {
        id: 'ma5',
        name: 'peter petruski',
        alias: 'paste pot pete',
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
        alias: 'dr. doom',
        powers: ['magic', 'smart', 'money'],
        franchise: 'marvel',
        team: null,
        alignment: false,
        rivals: ['fantastic four', 'the hulk', 'black panther', 'x-men', 'mephisto'],
        species: 'human',
        firstApp: new Date('July 1, 1962')
    },
    {
        id: 'ma8',
        name: 'nathaniel richards',
        alias: 'kang the conqueror',
        powers: ['controls technology', 'smart'],
        franchise: 'marvel',
        team: ['the council of kangs'],
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
        team: ['secret avengers', 'the midnight sons'],
        alignment: true,
        rivals: ['hobgoblin', 'the boogey man', 'bushman'],
        species: 'human',
        firstApp: new Date('August 1, 1975')
    },
    {
        id: 'dc8',
        name: 'unknown',
        alias: 'Joker',
        powers: ['insanity', 'expert chemist'],
        franchise: 'dc',
        team: ['injustice league', 'legion of doom'],
        alignment: false,
        rivals: ['batman', 'the bat family', 'justice league'],
        species: 'human',
        firstApp: new Date('April 1, 1940')
    },
    {
        id: 'ma10',
        name: 'natasha romanoff',
        alias: 'black widow',
        powers: ['guns', 'martial arts', 'agility'],
        franchise: 'marvel',
        team: ['avengers', 'shield'],
        alignment: true,
        rivals: ['taskmaster', 'iron man', 'thanos'],
        species: 'human',
        firstApp: new Date('April 1, 1964')
    },
    {
        id: 'ma11',
        name: 'tony stark',
        alias: 'iron man',
        powers: ['money', 'smart', 'weapons'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati'],
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
        team: null,
        alignment: false,
        rivals: ['spider-man', 'carnage', 'knull', 'shield'],
        species: 'alien',
        firstApp: new Date('September 1, 1986')
    },
    {
        id: 'ma13',
        name: 'baymax',
        alias: 'baymax',
        powers: ['morphism', 'smart'],
        franchise: 'marvel',
        team: ['big hero 6'],
        alignment: true,
        rivals: ['yokai'],
        species: 'robot',
        firstApp: new Date('September 1, 1998')
    },
    // START HERE
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },
    {
        id: 'ma1',
        name: 'stephen strange',
        alias: 'dr. strange',
        powers: ['magic', 'smart'],
        franchise: 'marvel',
        team: ['avengers', 'illuminati', 'defenders'],
        alignment: true,
        rivals: ['dormmamu', 'nightmare', 'shuma-gorath', 'enchantress', 'baron mordo'],
        species: 'human'
        firstApp: new Date()
    },

]