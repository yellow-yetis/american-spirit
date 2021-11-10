'use strict'

const {db, models: {User, Liquor} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  // Creating Liquors
  const liquors = await Promise.all([
    // Vodka
    Liquor.create({
      name: 'Ketel One',
      category: 'Vodka',
      region: 'Holland',
      description:
      'Nosing the aroma of Ketel One, you’ll immediately detect freshness with hints of citrus and honey. Savor the crisp, lively tingle. Let the signature silky softness coat your tongue. A long finish with subtle flavors reminds you of its quality.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-ketel-one-vodka-1a0b248966757601.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '30',
      ABV: '40',
      stock: '10'
    }),
    Liquor.create({
      name: 'Russian Standard Platinum',
      category: 'Vodka',
      region: 'Russia',
      description:
      'Russian Standard Platinum is filtered additionally through charcoal-impregnated with silver. Silver attracts volatile impurities like sulphur, making vodka taste fresher and smoother. The aroma is light with hints of citrus zest. What you taste is dry and citrusy.',
      imageUrl: 'https://products1.imgix.drizly.com/ci-russian-standard-platinum-vodka-6c917b4ab695e98e.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '33',
      ABV: '40',
      stock: '10'
    }),
    Liquor.create({
      name: 'Grey Goose',
      category: 'Vodka',
      region: 'France',
      description:
      'Grey Goose® Vodka has an exquisite clear, fresh and elegantly aromatic taste. This is a premium vodka of unparalleled smoothness and exceptional taste, with subtle hints of almond and a long, satisfying finish.',
      imageUrl: 'https://products0.imgix.drizly.com/ci-grey-goose-vodka-5beb834a0488bbbb.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '35',
      ABV: '40',
      stock: '18'
    }),
    Liquor.create({
      name: 'Stolichnaya',
      category: 'Vodka',
      region: 'Russia',
      description:
      'Stolichnaya® 100 proof Premium vodka captures all of the essence of Stoli® vodka, but is especially perfect for those who enjoy their Stoli extra smooth yet with a distinctive bite. It is a classically-styled, exceptionally smooth vodka—crystal clear in color with marshmallow, mineral and mild fruit peel aromas.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-stolichnaya-100-proof-premium-vodka-f1f3fe7018880d25.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '25',
      ABV: '50',
      stock: '20'
    }),
    Liquor.create({
      name: 'Belvedere',
      category: 'Vodka',
      region: 'Poland',
      description:
      'Belvedere Vodka is the original and true expression of luxury vodka, created from 600 years of Polish vodka-making tradition. The vodka itself is always authentic, and never artificial. Created exclusively from Polish Dankowskie Rye and quadruple-distilled to create the perfect balance of character and purity; it is completely free of additives, including sugar or glycerin.',
      imageUrl: 'https://products0.imgix.drizly.com/ci-belvedere-vodka-7797bb58730b93f4.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '25',
      ABV: '50',
      stock: '20'
    }),

    // Gin

    Liquor.create({
      name: 'Bombay Sapphire',
      category: 'Gin',
      region: 'England',
      description:
      'BOMBAY SAPPHIRE Gin is made with a unique combination of 10 hand-selected exotic botanicals from around the world. BOMBAY SAPPHIRE has an extraordinary smoothness and perfectly balanced taste. Inspiring the imagination of bartenders the world over, the aromatic flavors and crisp yet delicate finish create versatility unmatched by other gins. It can be savored in inventive long drinks or perfectly balanced martinis; in classic or contemporary cocktails.',
      imageUrl: 'https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '42',
      ABV: '47',
      stock: '25'
    }),
    Liquor.create({
      name: 'Tanqueray',
      category: 'Gin',
      region: 'England',
      description:
      'Tanqueray London Dry Gin is made with an expertly crafted recipe that blends the four distinct botanicals of juniper, coriander, angelica and licorice. The result is a perfectly balanced spirit that has a unique herbal quality and dry finish.',
      imageUrl: 'https://products1.imgix.drizly.com/ci-tanqueray-london-dry-gin-148bea7a3b10c3e4.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '30',
      ABV: '47',
      stock: '25'
    }),
    Liquor.create({
      name: 'Empress 1908',
      category: 'Gin',
      region: 'Canada',
      description:
      'Empress 1908 Gin delights the senses with its balanced citrus-and-spice palette, brilliant colour, light floral fragrance and soft texture. Handcrafted in small batch copper-pot stills, Empress 1908 is a collaboration between Victoria Distillers and the legendary Fairmont Empress Hotel in Victoria, British Columbia. It uses eight signature botanicals, including juniper, grapefruit peel, rose petal, coriander, ginger, cinnamon, and a bespoke blend of tea made especially for the Empress Hotel. ',
      imageUrl: 'https://products1.imgix.drizly.com/ci-empress-1908-gin-b7d1374c7dd8c87a.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '39',
      ABV: '42',
      stock: '15'
    }),
    Liquor.create({
      name: 'Aviation Gin',
      category: 'Gin',
      region: 'United States',
      description:
      'Created to change the way people think about gin, Aviation American Gin is made in the traditional dry style with anything but a traditional flavor profile. Aviation explores the rich, floral and savory notes of lavender, cardamom, and sarsaparilla to capture the lushness, spice, creativity, and freshness of the Pacific Northwest.',
      imageUrl: 'https://products2.imgix.drizly.com/ci-aviation-gin-0b57a28d3f593230.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '29',
      ABV: '42',
      stock: '10'
    }),
    Liquor.create({
      name: 'Botanist',
      category: 'Gin',
      region: 'Scotland',
      description:
      'A versatile dry gin that is crafted using a unique combination of 22 botanicals that are hand-foraged locally and sustainably on the Scottish island of Islay. These botanicals are picked at varying times of the year, and can only be picked when it’s dry—a frequent challenge on Islay! Our dedicated forager then carefully and meticulously dry all of the botanicals in order to be infused during our slow, simmer distillation process.',
      imageUrl: 'https://products1.imgix.drizly.com/ci-the-botantist-islay-dry-gin-5bc35f5f6eceb428.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '41',
      ABV: '46',
      stock: '15'
    }),

    // Tequila

    Liquor.create({
      name: 'Don Julio Blanco',
      category: 'Tequila',
      region: 'Mexico',
      description:
      'Using the finest blue agave plant and a time-honored distillation process, Don Julio Blanco Tequila is tequila in its truest form. Commonly referred to as “silver” tequila, the crisp agave flavor and hints of citrus make our blanco tequila an essential component to a variety of innovative drinks. This luxury tequila is double-distilled and made from pure unaged agave, making it perfect for any celebration.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-don-julio-blanco-f63b8c936d2eea08.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '52',
      ABV: '40',
      stock: '10'
    }),
    Liquor.create({
      name: 'Patron Silver',
      category: 'Tequila',
      region: 'Mexico',
      description:
      'The world’s first ultra-premium tequila, Patrón Silver should be savored starting with the very first sip - from the delicate aroma of fruits and citrus to the sweet and smooth taste with a light pepper finish. It’s made using a handcrafted process unique to Patrón, which gives it the perfect balance of fresh agave flavor with baked agave undertones – core influencer notes you’ll find in all Patrón Tequilas.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-patron-silver-25fa130a809ea038.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '51',
      ABV: '40',
      stock: '10'
    }),
    Liquor.create({
      name: 'Casamigos Blanco',
      category: 'Tequila',
      region: 'Mexico',
      description:
      'Casamigos, a small batch, ultra-premium tequila made from the finest, hand-selected 100% Blue Weber agaves, grown in the rich red clay and cool climate of the Highlands of Jalisco, Mexico for a minimum of seven years. After harvest, the agave piñas are roasted in traditional brick ovens for 72 hours, before undergoing an extra-slow fermentation process over an additional eighty hours, nearly double the industry standard.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-casamigos-blanco-7fa61a657f6f783c.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '49',
      ABV: '40',
      stock: '17'
    }),
    Liquor.create({
      name: 'Jose Cuervo',
      category: 'Tequila',
      region: 'Mexico',
      description:
      'The original tequila created over 200 years ago! Jose Cuervo® Tradicional® Silver is a multiple award winning, 100% blue agave tequila. GOLD MEDAL winner at San Francisco World Spirit Competition 2019. Herbaceous blue agave in aroma with subtle citrus notes. Spice and sweet balance, firmness and fruit overtones within its flavor profile, with a sweet and refreshing finish. When bottled, a special process is used to conserve its flavor and finish at freezing temperatures. ',
      imageUrl: 'https://products0.imgix.drizly.com/ci-jose-cuervo-tradicional-silver-tequila-8cb83e21c68a6863.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '35',
      ABV: '40',
      stock: '17'
    }),
    Liquor.create({
      name: 'Herradura Silver Tequila',
      category: 'Tequila',
      region: 'Mexico',
      description:
      'A Silver that’s second to none. Herradura Silver is matured in American white oak barrels for 45 days, imparting a light straw color and woody aroma. Vanilla and citrus characters complement the flavor of sweet agave. The smooth, clean profile of Herradura Silver has maintained its reputation as one of the finest tequilas in the world and a staple in our collection.',
      imageUrl: 'https://products1.imgix.drizly.com/ci-herradura-silver-7b367ce658e78368.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '43',
      ABV: '40',
      stock: '17'
    }),

    // Mezcal

    Liquor.create({
      name: 'Illegal',
      category: 'Mezcal',
      region: 'Mexico',
      description:
      'Full bodied agave flavor. Eucalyptus and mineral aromas compliment hints of green apple, fresh citrus, and red chiltepe. Hint of smoke.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-ilegal-mezcal-joven-19b5a27b4e8f1608.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '42',
      ABV: '40',
      stock: '11'
    }),
    Liquor.create({
      name: 'Doña Vega',
      category: 'Mezcal',
      region: 'Mexico',
      description:
      'A sweet nose, an intoxicating range of flavors that include vanilla, coco, nougat and toasted oak, extending through a long, smooth finish. This is a true connoisseur’s spirit.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-dona-vega-espadin-capon-872d36f6b35fc23f.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '34',
      ABV: '40',
      stock: '21'
    }),
    Liquor.create({
      name: 'Montelobos',
      category: 'Mezcal',
      region: 'Mexico',
      description:
      'Following the artisanal method with firewood heating copper stills, the mezcal is small batch twice distilled to achieve a perfect balance of sweetness and subtle smoke. This artisinally produced joven mezcal is strikingly balanced and complex, with a bold integration between all the notes that mezcal has to offer. Montelobos Espadin is an experience unto itself.',
      imageUrl: 'https://products0.imgix.drizly.com/ci-montelobos-mezcal-joven-ac0f31132f55752a.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '42',
      ABV: '43',
      stock: '19'
    }),
    Liquor.create({
      name: 'Casamigos',
      category: 'Mezcal',
      region: 'Mexico',
      description:
      'Casamigos Mezcal is balanced and elegant, offering harmonious hints of tamarind, pomegranate, banana and mango. Fresh herbal mint aromas, dried oregano and thyme lend character to the mezcal. The delicate tones of smoke, hints of licorice and mineral nuances lead to a long silky finish.',
      imageUrl: 'https://products2.imgix.drizly.com/ci-casamigos-mezcal-f9b498b49b75f576.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '65',
      ABV: '43',
      stock: '18'
    }),
    Liquor.create({
      name: 'El Silencio',
      category: 'Mezcal',
      region: 'Mexico',
      description:
      'This brand has had an impressive and growing following for its mezcal from day one and for this much flavor at this price it is very easy to see why. You will find textbook notes of lime zest, carmelized agave, winter melon, avocado leaf and smoke that is perfectly suited for all of your sipping and cocktail mixing needs.',
      imageUrl: 'https://www.astorwines.com/images/items/41908.jpg',
      price: '65',
      ABV: '43',
      stock: '18'
    }),

    // Rum

    Liquor.create({
      name: 'Bacardi Superior',
      category: 'Rum',
      region: 'Puerto Rico',
      description:
      'With its unique balance and light taste, Bacardi Superior pairs beautifully with mint and lime without being overly dominant in the cocktail. This means that its perfect for a mojito or a Cuba Libre, but without the overwhelming taste of alcohol.',
      imageUrl: 'https://products2.imgix.drizly.com/ci-bacardi-superior-rum-dfd1809889854320.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '19',
      ABV: '40',
      stock: '15'
    }),
    Liquor.create({
      name: 'Captain Morgan',
      category: 'Rum',
      region: 'US Virgin Islands',
      description:
      'Captain Morgan is the original party spirit, a spiced rum that was born and blended to have a good time. So grab a bottle of Captain Morgan Spiced Rum, raise a leg, and toast to the adventure to be had. Captain’s orders!',
      imageUrl: 'https://products3.imgix.drizly.com/ci-captain-morgan-original-spiced-rum-50b42d45bcd74a31.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '28',
      ABV: '35',
      stock: '12'
    }),
    Liquor.create({
      name: 'Mount Gay Eclipse',
      category: 'Rum',
      region: 'Barbados',
      description:
      'Brilliant golden amber in color, Eclipse bears a complex aroma whose rich, harmonious floral and fruity notes of apricot and banana, with hints of vanilla and a subtle smokiness imparted by the barrels used for aging.',
      imageUrl: 'https://www.astorwines.com/images/items/39073.jpg',
      price: '24',
      ABV: '35',
      stock: '12'
    }),
    Liquor.create({
      name: 'Ron Zacapa',
      category: 'Rum',
      region: 'Guatemala',
      description:
      'The balance of delicate and unique flavors of Zacapa No. 23 is derived from a blend of aged rums between 6 and 23 years old, originating from our take on the “Sistema Solera” aging process. Zacapa No. 23 is aged in selected barrels that previously aged robust American whiskey, delicate sherries and fine Pedro Ximénez wines, creating a smooth & balanced rum.',
      imageUrl: 'https://products2.imgix.drizly.com/ci-ron-zacapa-centenario-23-year-ed03ac34ff638d41.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '50',
      ABV: '40',
      stock: '8'
    }),
    Liquor.create({
      name: 'Malibu',
      category: 'Rum',
      region: 'Barbados',
      description:
      'Crafted from Caribbean sugarcane and pure water then aged for two years in oak barrels, Malibu Original is perfect for celebrating beach-side with friends or throwing a pool-party for one. This rich, flavorful blend of sweet coconut and island rum is Summer’s favorite sidekick and the star of any tropical cocktail.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-malibu-original-coconut-rum-23fadbc50ccf3df9.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '18',
      ABV: '21',
      stock: '12'
    }),

    // Whiskey

    Liquor.create({
      name: 'Johnnie Walker Green Label',
      category: 'Whiskey',
      region: 'Scotland',
      description:
      'Indulge all of your senses with a smooth glass of Johnnie Walker Green Label Blended Malt Scotch Whisky. Crafted from a palette of Speyside, Highland, Lowland and Island malts and matured for at least 15 years, it delivers all the character of a single malt whisky, but with a greater depth of flavor. This award-winning spirit is a truly unique blend to savor while you sit back and unwind.',
      imageUrl: 'https://products2.imgix.drizly.com/ci-johnnie-walker-green-label-5baaadf9ba4fd973.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '78',
      ABV: '43',
      stock: '6'
    }),
    Liquor.create({
      name: 'Blanton`s Single Barrel Bourbon',
      category: 'Whiskey',
      region: 'United States',
      description:
      'A deep, satisfying nose of nutmeg and spices. Powerful dry vanilla notes in harmony with hints of honey amid strong caramel and corn. A medium finish composed of returning corn and nutmeg flavors',
      imageUrl: 'https://products1.imgix.drizly.com/ci-blantons-single-barrel-bourbon-f27c3cae7eeaa8b9.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '115',
      ABV: '46',
      stock: '5'
    }),
    Liquor.create({
      name: 'Angel`s Envy',
      category: 'Whiskey',
      region: 'United States',
      description:
      'Angel’s Envy is an exceptional Kentucky straight bourbon finished in port wine barrels. Given the Highest Recommendation by Spirit Journal, celebrated by Whisky Advocate, The Bourbon Review, and awarded Wine Enthusiast’s highest bourbon rating, Angel’s Envy is unlike any other whiskey you’ve ever tasted.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-angels-envy-bourbon-d8f18f75ccca3845.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '54',
      ABV: '43',
      stock: '5'
    }),
    Liquor.create({
      name: 'Suntori Toki',
      category: 'Whiskey',
      region: 'Japan',
      description:
      'Inspired by that interplay, Suntory Whisky Toki™ brings together old and new -the House of Suntory`s proud heritage and its innovative spirit- to create blended Japanese whisky that is both groundbreaking and timeless. Suntory Whisky was winner of Gold Medal at the 2017 Denver International Spirits Competition.',
      imageUrl: 'https://products0.imgix.drizly.com/ci-suntory-toki-japanese-whisky-bf3e3eaf2a516b86.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '39',
      ABV: '43',
      stock: '15'
    }),
    Liquor.create({
      name: 'Oban 14 Year Single Malt',
      category: 'Whiskey',
      region: 'Scotland',
      description:
      'Oban 14 Year Single Malt is crafted with 100-percent barley to the distillery`s exact specifications, which includes fermenting the malted barley in small-batch, lantern-shaped copper stills before aging the scotch in oak casks. During its rest, the whisky is shaped by the surrounding environment, which consists of warm, salty Gulf Stream air and a temperate climate. The result is a full-bodied, extremely dry scotch with notes of honey and dried figs, which lead to a soft, oaky finish.',
      imageUrl: 'https://products3.imgix.drizly.com/ci-oban-14-year-single-malt-c62c8b26a59a4698.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      price: '94',
      ABV: '43',
      stock: '9'
    }),
])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
