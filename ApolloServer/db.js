let games = [
  {id: '1', title: 'Path of Exile', platform: ['PC', 'PS4', 'Xbox One']},
  {id: '2', title: 'Destiny 2: Lightfall', platform: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X']},
  {id: '3', title: 'Baldur\'s Gate 3', platform: ['PC', 'PS5', 'Xbox Series X']},
  {id: '4', title: 'Resident Evil 4 Remake', platform: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X']},
  {id: '5', title: 'Elden Ring', platform: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X']},
  {id: '6', title: 'Armored Core VI: Fires of Rubicon', platform: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X']},
  {id: '7', title: 'Diablo: 4', platform: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X']},
  {id: '8', title: 'Starfield', platform: ['PC', 'Xbox Series X']},
]

let authors = [
  {id: '1', name: 'Einhar, Beastmaster', verified: false},
  {id: '2', name: 'Zavala', verified: true},
  {id: '3', name: 'Shadowheart', verified: false},
  {id: '4', name: 'Albert Weskar', verified: false},
  {id: '5', name: 'Hoarah Loux', verified: true},
  {id: '6', name: 'G1 Michigan', verified: false},
  {id: '7', name: 'Inarius', verified: false},
  {id: '8', name: 'Todd Howard', verified: true},
]

let reviews = [
  {id: '1',  rating: '10', content: 'You are caught, stupid beast! You will either be a survivor, or you will be food!', author_id: '1', game_id: '1'},
  {id: '2',  rating: '9', content: 'Best thing ever happened after Diablo II. The definition of perfection for the RPG games. Long live the exiles.', author_id: '3', game_id: '1'},
  {id: '3',  rating: '0', content: 'Path of Exile - when mob one shots you on T1 without mods map, when any defence mechanic doesn\'t work, when developers do new content and you can\'t beat uber content, because they add to rare mobs insane mods, because loot system does\'nt work (HARDER = BETTER), because i can farm only bloody aqueduct and here mobs one shots me, because Chrisssss Whilson never play in Diablo before, because he never know how do the best ARPG, because in 2023 Diablo 4 kick\'s their PoE ASS forever, i believe in 2023.', author_id: '7', game_id: '1'},
  {id: '4',  rating: '9', content: 'The world has a grimy, grungy, uncomfortable feel to it that constantly makes the player feel slightly off just for inhabiting it, which is appropriate given what goes on. Every person and object looks like it\'s at its lowest point.', author_id: '5', game_id: '1'},
  
  {id: '5',  rating: '7', content: 'Whether we wanted it or not, we\'ve stepped into a war with the Cabal on Mars. So let\'s get to taking out their command, one by one. Valus Ta\'aurc. From what I can gather he commands the Siege Dancers from an Imperial Land Tank outside of Rubicon. He\'s well protected, but with the right team, we can punch through those defenses, take this beast out, and break their grip on Freehold.', author_id: '2', game_id: '2'},
  {id: '6',  rating: '3', content: 'I\'ve completed the story Campaign few hours ago. Horrible story, terrible writing, absolutely different from what Bungie hyped so far throught trailers, really poor Missions design, Strand is not ready to compete with Light Subclasses we already have. Definetely not the start we hoped for with this new Expansion and what Bungie promised. Many good changes in the system and game organizzation but at the same time at the cost of our power and fantasy (for example: we have Loadouts now but since many Mods have been removed, we have no Builds to play with). Enemies made much stronger that needed and we weakened for apparently no reason...? Right now I suggest everyone to wait a Season or two before dive in into Lightfall and give Bungie time to understand the mistakes they made and fix things up.', author_id: '4', game_id: '2'},
  {id: '7',  rating: '1', content: 'Worst expansion for destiny 2, what the hell are bungie doing? The story is so boring, and the missions so lame. Who ever wrote this story deserves to get fired. Nothing makes sense', author_id: '6', game_id: '2'},
  {id: '8',  rating: '0', content: 'Sadly Bungie is one of the worst developers out there as far as its business practise is concerned. Exploiting your consumer and community is not the philosophy you want to have as a game developing studio. Lightfall has been a clear example of the practise of ripping off its consumers, 100$ of a campaign that is a glorified strand tutorial and 2 dungeons and raid which is awaited. Monetisation model where u have to purchase the dlc, seasons and dungeons separately, with sub par quality. And guns which are a reskin of shadow keep a dlc several years old. Thoroughly disappointed', author_id: '8', game_id: '2'},
  
  {id: '9',  rating: '10', content: 'I re-opened my metacritic account from 2013 just so I can review this game and thank the development team. Thank you for making a game with no need for in game spending. Thank you for the voice acting and amazing dialog. Thank you for taking the time to makea game that you love, and therefore we loved. Thank you for not solely thinking of the bottom line, and thinking about making games people will treasure for years to come', author_id: '3', game_id: '3'},
  {id: '10', rating: '9', content: 'Larian Studios has made something truly incredible, and even as the studio continues to fine-tune and polish with post-launch patches, Baldur\'s Gate 3 feels like something absolutely worth playing now, and even more in the future. Baldur\'s Gate 3 is a legendary RPG, and one that anyone with a love of storytelling, strategizing, or just thirsty for a few fantasy companions should take the time to experience.', author_id: '5', game_id: '3'},
  {id: '11', rating: '10', content: 'This is easily, BEST GAME I HAVE EVER PLAYED!!! WE WILL NOT SEE ANOTHER GAME LIKE THIS FOR 15-20 YEARS FOR SURE!!!!!! WELL DONE LARIAN', author_id: '1', game_id: '3'},
  {id: '12', rating: '6', content: 'The game is good, but it didn\'t appeal to my taste. The gameplay is average. The game also has a lot of bugs. It\'s better to wait until they fix everything.', author_id: '7', game_id: '3'},
  
  {id: '13', rating: '10', content: 'Seven minutes. Seven minutes is all I can spare to play with you.', author_id: '4', game_id: '4'},
  {id: '14', rating: '6', content: 'Good visual enhancements overall, but like.... why play this when the original is still available and arguably still the better version gameplay wise? Feel Capcom was getting hungry for some easy cash flow, rather than putting out a product that actually improves ALL aspects of the game experience rather than a shiny retread.', author_id: '8', game_id: '4'},
  {id: '15', rating: '10', content: 'Once again simply a masterpiece. Capcom somehow manage to completely overhaul the game into something new while retaining just enough of what made the original so legendary. The only small complaint I have about the game is some of the new voice actors don’t fit their characters aswell as the originals VA did. But that should tell you right there how great this game is if the only complaint is some of the VA is off. Shame they couldn’t put this much effort into RE3 remake as they did with this one.', author_id: '2', game_id: '4'},
  {id: '16', rating: '10', content: 'GAMERS CAPCOM DID IT AGAIN', author_id: '6', game_id: '4'},

  {id: '17', rating: '10', content: 'Tarnished Warrior. Spurned by the grace of gold. Be assured, the Elden Ring resteth close at hand. Alas, I am returned. To be granted audience once more. Upon my name as Godfrey, The first Elden Lord!', author_id: '5', game_id: '5'},
  {id: '18', rating: '10', content: 'i think you can make an onion but yes good games', author_id: '1', game_id: '5'},
  {id: '19', rating: '10', content: 'Elden Ring is a crowning achievement of over a decade of Miyazaki’s and FromSoftware’s work, and an amazing example of how to find a whole new level of fun in a well-known and somewhat worn-out formula. The open world turned out to be a perfect fit for the genre and you can still tell this masterpiece was created by the famous Japanese studio. I honestly haven’t been so excited about a game since the first Dark Souls.', author_id: '4', game_id: '5'},
  {id: '20', rating: '8', content: 'An 8 beacuse crafting materials are useless.', author_id: '7', game_id: '5'},

  {id: '21', rating: '10', content: 'G13! Let\'s see that fancy gizmo that Arquebus paid the big bucks for. What?! You didn\'t bring it?! G13, your ability to ruin my field trips is uncanny.', author_id: '6', game_id: '6'},
  {id: '22', rating: '9', content: 'It\'s actually one of the best gaming experiences I\'ve had in a while due to how different it is. The combat is good, the art direction is incredible and the customization is just perfect. The story, on my first playthrough did not hook me due to how it\'s presented but on my second and third playthroughs it completely gripped me with just how much sheer depth there is and I came to appreciate its presentation too. This game legit made me an AC fan.', author_id: '2', game_id: '6'},
  {id: '23', rating: '10', content: 'Armored Core 6 is an unsympathetic and cold-blooded game. It\'s a cup of bitter, black coffee – and thankfully, that suits my palate perfectly. It\'s full of moments that make you feel very powerful – in both effortless and hard-fought ways – and moments that make you very, very small. In the face of it all, you\'re pushed to overcome the impossible. And you\'ll come out on the other end wearing an exhausted, wry smile.', author_id: '4', game_id: '6'},
  {id: '24', rating: '6', content: 'A great mech shooter that gets bogged down by insanely difficult bosses, that will make even the most seasoned gamers question wether they understand the fights or not. Worth a play, but don\'t go in expecting greatness, but rather, a fun time blowing up giant robots that will leave you frustrated when you inevitably die to the same bullet hell boss for the 30-40th time.', author_id: '8', game_id: '6'},

  {id: '25', rating: '7', content: 'Lilith. I have returned to Hell...for you.', author_id: '7', game_id: '7'},
  {id: '26', rating: '0', content: '**** blizzard', author_id: '1', game_id: '7'},
  {id: '27', rating: '2', content: 'Diablo IV is the equivalent of when a waiter brings your steak to the table severely undercooked. It looks delicious on the outside but cut into it and your dissatisfaction will be immense, your day ruined. Give Blizzard another couple years to plop Diablo 4 back onto the frying pan and it might taste better then, but as of October 31, 2023? Stay away.', author_id: '3', game_id: '7'},
  {id: '28', rating: '4', content: 'But despite the rewarding interplay between various stats and buffs, and the laudable sensation you have access to the sort of freedom in character and combat customisation that’s typically locked away for hours in similar games, Diablo 4 feels … toylike. Strip away the hellish screams and scarily convincing Halloween costumes, and what’s left is the video game equivalent of hyper-palatable junk food, albeit with myriad colourful warnings on the packaging.', author_id: '5', game_id: '7'},

  {id: '29', rating: '10', content: 'Um, we did it. It\'s running great. It is a next-gen PC game, we really do push the technology, so you may need to upgrade your PC for this game. But it\'s got a lot of great stuff going on in it, and the fans are responding awesome.', author_id: '8', game_id: '8'},
  {id: '30', rating: '4', content: 'I played 15 hours and I just can\'t anymore. This is so tedious, so janky, so poorly designed. There is none of the charm or wonder of Fallout or Elder Scrolls. I simply can\'t trudge across another featureless, barren planet to do another randomly generated fetch quest. Bethesda has admitted that its cynical laziness in releasing Fallout 76 is just how they are designing games now, not an aberration.', author_id: '2', game_id: '8'},
  {id: '31', rating: '1', content: 'If Todd has put as much effort into planets and general quality development as in fake 10/10 reviews (copy-paste from one-off "users" accounts and lame sony-pony excuses)... it COULD be a better game. PS: does pc version still have script lines from morrowind, like fallout 4?', author_id: '6', game_id: '8'},
  {id: '32', rating: '3', content: 'In a word: bland. Bethesda yet again overpromises and underdelivers with an engine underpowered for the undertaking necessary. Space exploration is little more than an idea and while flight and dogfighting is fun, is feels underdeveloped. Building your own ship is also very fun. The story, plot and quests of Starfield are all also, in a word, bland. Just about every quest had the most predictable ending I could think of, so much so that I made a game out of trying to predict the outcomes of certain stories. After crunching the numbers, I was completely correct seven out of ten times on average. The characters are fun and well written but lack a lot of depth. If you were hoping for companions even half as fleshed out and lively as in Baldur\'s Gate 3, you\'re going to be disappointed. The combat feels like it\'s ripped directly from Fallout 4 with a sci-fi skin on it. Not much is new and what is new isn\'t very exciting. The music is atmospheric at best and sounds intrusively boring at worst. Get this once it hits half off on Steam. Hopefully the modding community fixes some of the clunkiness and bugginess that plagues the middle portion of this game.', author_id: '3', game_id: '8'},

  {id: '33', rating: '', content: '', author_id: '', game_id: '9'},
  {id: '34', rating: '', content: '', author_id: '', game_id: '9'},
  {id: '35', rating: '', content: '', author_id: '', game_id: '9'},
  {id: '36', rating: '', content: '', author_id: '', game_id: '9'},

  {id: '37', rating: '', content: '', author_id: '', game_id: '10'},
  {id: '38', rating: '', content: '', author_id: '', game_id: '10'},
  {id: '39', rating: '', content: '', author_id: '', game_id: '10'},
  {id: '40', rating: '', content: '', author_id: '', game_id: '10'},
]

export default { games, authors, reviews }