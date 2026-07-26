import { useEffect, useState } from 'react'
import './App.css'
import { menuPages } from './menu-pages'

type MenuLine = {
  description?: string
  isNote?: boolean
  price?: string
  title: string
}

type MenuSection = {
  lines: MenuLine[]
  title: string
}

const site = {
  phone: '718.229.1962',
  phoneHref: 'tel:7182291962',
  email: 'info@papazziocatering.com',
  emailHref: 'mailto:info@papazziocatering.com',
  addressLine1: '39-38 Bell Boulevard',
  addressLine2: 'Bayside, NY 11361',
  papazzioUrl: 'https://www.papazzio.com',
  facebookUrl: 'https://www.facebook.com/papazziorestaurant/',
  twitterUrl: 'https://www.twitter.com/papazzio',
  instagramUrl: 'https://www.instagram.com/papazzio_restaurant/',
}

const images = {
  logo: 'https://papazziocatering.com/wp-content/uploads/2018/08/Atasteofelegance_White.png',
  hero: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2018/08/26bridge_3_dark.jpg?fit=1200%2C680&ssl=1',
  planning: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2016/10/left-menu-parallax1.jpg?fit=1920%2C1000&ssl=1',
  wedding: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/weddingcouple_dark.jpg?fit=1204%2C803&ssl=1',
  knot: 'https://i0.wp.com/www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenInMag.png?w=190&ssl=1',
  restaurant: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2019/02/IMG_9810-e1551209107565.jpg?fit=1005%2C398&ssl=1',
  trays: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/09/trays3.jpg?fit=1600%2C1032&ssl=1',
}

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Venues', href: '/venues' },
  { label: 'Packages', href: '/packages' },
  { label: 'Restaurant', href: '/restaurant' },
]

const ticker = [
  'Catering your way',
  'Bayside, Queens',
  'Wedding catering',
  'Event planning',
  'On-site and off-site events',
]

const venues = [
  {
    place: 'Bayside, NY',
    title: 'Papazzio - The Restaurant',
    image: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2018/08/IMG_1813-e1544060580505.jpg?fit=600%2C450&ssl=1',
    text: 'A warm Bell Boulevard venue for showers, birthdays, graduations, christenings, and communions. The restaurant accommodates 30-70 guests and is available Saturday and Sunday afternoons, plus other times by prior arrangement. With a guaranteed minimum of 30 people, guests have exclusive use of the restaurant during the event.',
    details: ['30-70 guests', 'Saturday and Sunday afternoons', 'Exclusive use with 30-person minimum'],
  },
  {
    place: 'Bayside, NY',
    title: 'The Castle at Fort Totten',
    image: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/BHS-castle-e1544060445128.jpg?fit=600%2C450&ssl=1',
    text: 'Nestled in waterfront Fort Totten Park, this 1887 landmark-designated Gothic Revival former Officers Club works for story-book weddings, engagement parties, bridal and baby showers, reunions, and other special events. Spaces include a tea room with gallery, a sunlit library with cathedral ceilings, and a grand ballroom with views.',
    details: ['Banquets up to 150 guests', 'Bayside Historical Society: 718-352-1548', 'siterental@baysidehistorical.org'],
  },
  {
    place: 'Little Neck, NY',
    title: 'Queens County Farm',
    image: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/QCF-Barn.jpg?fit=600%2C450&ssl=1',
    text: 'A farm museum backdrop for corporate parties, weddings, graduations, bar mitzvahs, bat mitzvahs, communions, and special events, from an elegant gala to a barbecue hoedown.',
    details: ['The Barn Complex accommodates 120 people with area for dancing', 'The Pavilion accommodates up to 85 people and is available May thru mid-September near growing fields', 'The Orchard can accommodate up to 400 people', 'The North Lawn can accommodate up to 200 people', 'Queens Farm: info@queensfarm.org or 718-347-3276 ext. 301'],
  },
  {
    place: 'Brooklyn',
    title: '26 Bridge',
    image: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/IMG_0019-e1534102811474.jpg?fit=600%2C450&ssl=1',
    text: 'A renovated former metal factory with original brick walls, towering wooden doors, high ceilings, and a skylight. It works for private events, weddings, bar mitzvahs, fashion shows, corporate events, and more.',
    details: ['Seats around 250 guests', 'Standing events up to 375 guests', 'Rental info: 26bridge.com'],
  },
  {
    place: 'Flushing, NY',
    title: 'Flushing Town Hall',
    image: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/flushingtownhall_2-e1544060361475.jpg?w=712&ssl=1',
    text: 'A protected historic building with beautiful exterior and interior character. The Theater, Gallery, and Garden can be rented individually or together.',
    details: ['Theater accommodates up to 150 with dance floor', 'Gallery works for intimate dinners, ceremonies, or cocktail receptions', 'Garden: 2,000 square feet of grass and trees', 'Kevin Meegan: 718-463-7700 ext. 235 or kmeegan@flushingtownhall.org'],
  },
  {
    place: 'New Canaan, CT',
    title: 'Waveny House',
    image: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/Waveny-Entrance2-e1533912468300.jpg?fit=600%2C450&ssl=1',
    text: 'Waveny House overlooks 300 acres of Connecticut countryside with landscaped gardens and grounds. Rentals for weddings, receptions, meetings, social events, and cultural activities can include the first floor, kitchen, west porch, terrace, immediate grass grounds, and two upstairs bridal-party rooms.',
    details: ['Friday, Saturday, and Sunday rentals', 'Wood-paneled interiors, leaded glass, marble fireplaces, murals, and wide plank floors', 'Call Papazzio at 718-229-1962 for Waveny catering'],
  },
  {
    place: 'Long Island City, NY',
    title: 'Sound River Studios',
    image: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2023/01/E4BDCBA1-0488-4CC1-96D2-242AC77B2E8D_1_105_c.jpeg?w=720&ssl=1',
    text: 'A spacious waterfront warehouse and gallery with Manhattan skyline views, 5,500 square feet of space, and 30-foot ceilings.',
  },
  {
    place: 'Queens, Brooklyn, Manhattan, Nassau',
    title: 'Your Location',
    image: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2019/02/qcf-tent.jpg?w=1000&ssl=1',
    text: 'Home, backyard, country club, or another venue that allows outside caterers. Papazzio brings the service, planning, and food to you.',
    details: ['Backyard weddings', 'Businesses and private homes', 'Any venue that allows outside caterers'],
  },
]

const gallery = [
  { alt: 'View of Throgs Neck Bridge from Fort Totten', src: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/09/BHS_view-e1544059783526.jpg?fit=600%2C388&ssl=1' },
  { alt: 'Papazzio Restaurant', src: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2018/08/IMG_1813-e1544060580505.jpg?fit=600%2C450&ssl=1' },
  { alt: 'The Orchard, Queens County Farm', src: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2018/08/in-orchard-e1534100374247.jpg?fit=600%2C450&ssl=1' },
  { alt: 'Waveny House', src: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/Waveny-Entrance2-e1533912468300.jpg?fit=600%2C450&ssl=1' },
  { alt: 'The Barn, Queens County Farm', src: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/QCF-Barn.jpg?fit=600%2C450&ssl=1' },
  { alt: 'The Theater, Flushing Town Hall', src: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/flushingtownhall_2-e1544060361475.jpg?fit=600%2C450&ssl=1' },
  { alt: '26 Bridge event venue', src: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/bridge26_2-1-e1544060401197.jpg?fit=600%2C450&ssl=1' },
  { alt: 'The Castle at Fort Totten', src: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/BHS-castle-e1544060445128.jpg?fit=600%2C450&ssl=1' },
  { alt: 'Cheese platter', src: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/IMG_0069.jpg?fit=600%2C450&ssl=1' },
  { alt: 'Buffet at The Castle', src: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/IMG_0021.jpg?fit=600%2C450&ssl=1' },
  { alt: 'The Barn at Queens County Farm', src: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2018/08/20171021_180522_001.jpg?fit=600%2C338&ssl=1' },
  { alt: 'Pretty in pink cocktail hour', src: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2018/08/20170923_182614.jpg?fit=600%2C338&ssl=1' },
  { alt: 'Martini sticks', src: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/20170722_173029.jpg?fit=600%2C338&ssl=1' },
  { alt: 'Table setting', src: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/20170722_172810.jpg?fit=600%2C338&ssl=1' },
  { alt: 'Cheese puffs', src: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/20170623_173755.jpg?fit=600%2C338&ssl=1' },
  { alt: 'Fruit platter', src: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/20170616_151459.jpg?fit=600%2C338&ssl=1' },
  { alt: 'Cheers', src: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/20170520_174511.jpg?fit=600%2C338&ssl=1' },
  { alt: 'Goat cheese and cranberry crostini', src: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2018/08/20170608_082521.jpg?fit=600%2C338&ssl=1' },
  { alt: 'Papazzio catering place setting', src: images.planning },
  { alt: 'Wedding couple at a Papazzio catered event', src: images.wedding },
  { alt: 'Bruschetta', src: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/iStock_000068374519_Medium-1024x683.jpg?fit=600%2C400&ssl=1' },
]

const horsDoeuvres = [
  'Spanakopita',
  'Mini Meatballs',
  'Tomato Bruschetta',
  'Asparagus in Prosciutto',
  'Pigs in a Blanket',
  'Miniature Pizza',
  'Olive Bruschetta',
  'Beef Wrapped in Bacon',
  'Veggie Martini Sticks',
  'Zucchini Sticks',
  'Scallops Wrapped in Bacon',
  'Empañadas',
  'Mozzarella Sticks',
  'Swedish Meatballs',
  'Beef Satay',
  'Mini Quiches',
  'Vegetable Egg Rolls',
  'Italian Martini Sticks',
  'Chicken Satay',
]

const cocktailUpgrades = ['Grilled Baby Lamb Chops', 'Shrimp Cocktail', 'Pesto Shrimp']
const salads = ['House Salad', 'Caesar Salad', 'Tricolor Salad', 'Spinach Salad', 'Sliced Tomato & Mozzarella']
const buffetPastas = ['Linguine Red Clam Sauce', 'Linguine White Clam Sauce', 'Rigatoni alla Messinase', 'Tortellini Alfredo', 'Baked Ziti', 'Jumbo Stuffed Shells', 'Ravioli Marinara', 'Farfalle Primavera Garlic & Oil', 'Penne Filletto di Pomodoro', 'Penne alla Vodka', 'Farfalale Marinara', 'Fettuccine Alfredo']
const buffetEntrees = ['Sausage & Peppers', 'Roast Pork in Black Bean Sauce', 'Eggplant Rollatini', 'Eggplant Parmigiana', 'Beef and Broccoli', 'Beef Teriyaki', 'Beef Burgundy with Mushrooms', 'Hawaiian Chicken', 'Chicken Piccata', 'Chicken Sesame', 'Chicken Marsala', 'Chicken Parmigiana', 'Chicken Bianco', 'Stuffed Chicken Rollatini', 'Chicken Francaise', 'Chicken Scarpariello', 'Veal Parmigiana', 'Veal Saltimbocca', 'Veal Marsala', 'Veal and Peppers', 'Veal Francaise', 'Veal Piccata', 'Salmon or Tilapia Lemon Basil', 'Crab Meat Stuffed Tilapia', 'Salmon/Tilapia Champagne Dill', 'Salmon Oreganata', 'Horseradish-crusted Salmon', 'Shrimp / Scallops Scampi', 'Sole with Seafood Stuffing', 'Sauteed Vegetables', 'Assorted Grilled Vegetables', 'Roasted Red-Bliss Potatoes', 'Sautéed Spinach', 'Green Beans Almondine', 'Risotto', 'Seasoned Rice', 'Seasoned Rice with Peas and Carrots', 'Garlic Mashed Potatoes']
const entreeUpgrades = ['Sliced Filet Mignon Skirt Steak (Peppers & Onions)', 'Shrimp or Scallops Scampi', 'Sliced Prime Rib']

const packages = [
  {
    title: 'Basic Buffet / Tray Menu',
    intro: [
      'Delivery and Set-up Fee of $100 includes delivery of trays, buffet set-up, wire chaffing racks, sternos, and plastic serving utensils. Refundable deposit for wire racks applies.',
      'For an additional $5 per person, Papazzio supplies plastic plates, plastic utensils, napkins, soda, and plastic cups.',
      'Small trays serve approximately 8-10 servings and large trays serve approximately 16-20 servings. GF next to any menu item indicates that dish is available as gluten free, but guests must notify Papazzio when ordering. Gluten Free Pasta (penne or spaghetti) is $10 extra for half tray and $20 extra for full tray.',
    ],
    groups: [
      {
        heading: 'Appetizers',
        items: ['Grilled Portobello Mushrooms GF - With goat cheese and chopped tomatoes on romaine SM $45 LG $85', 'Sliced Tomato and Mozzarella GF - Served with pesto sauce SM $45 LG $85', 'Cold Antipasto GF - Marinated artichokes, roasted peppers, assorted olives, cured meats & assorted cheeses SM $85 LG $165', 'Fried Calamari GF - With marinara sauce SM $60 LG $115', 'Gulf Shrimp Wrapped GF in Prosciutto and topped with warm pesto SM $65 LG $125', 'Baked Clams - With herbed breadcrumbs and light butter sauce SM $60 LG $115', 'Stuffed Mushrooms GF Vegetable or sausage with light Marsala Sauce SM $55 LG $105', 'Rice Balls - With marinara sauce SM $50 LG $95', 'Potato Croquettes GF SM $50 LG $95'],
      },
      {
        heading: 'Salads',
        items: ['Tricolor Salad GF - Arugula, radicchio and endive with balsamic vinaigrette SM $45 LG $85', 'Warm Goat Cheese and Roasted Beet Salad GF - Mesclun greens with candied pecans & raspberry vinaigrette SM $55 LG $105', 'Classic-style Caesar GF - Shaved pecorino Romano and croutons; no croutons on gluten free SM $45 LG $85', 'House Salad GF - Romaine, tomatoes, roasted red peppers, onions & croutons with balsamic vinaigrette SM $40 LG $75'],
      },
      {
        heading: 'Wraps & Paninis',
        items: ['Five wraps in a half tray or ten wraps in a full tray. Choice of Salmon Dill Wrap, Broadway Steak Wrap, Chicken Caesar, Chicken Goat Cheese Pecan, or Grilled Vegetable Wrap SM $55 LG $110'],
      },
      {
        heading: 'Pastas',
        items: ['Baked Ziti GF SM $55 LG $105', 'Stuffed Shells SM $55 LG $105', 'Penne alla Vodka GF SM $55 LG $105', 'Fettuccine Alfredo GF SM $55 LG $105', 'Farfalle Primavera GF - Bow-tie pasta with broccoli, zucchini, yellow squash & carrots in garlic & oil sauce SM $55 LG $105', 'Cappellini alla Rosa con Pollo GF - Angel hair with chicken and assorted vegetables in a rosé sauce SM $60 LG $115', 'Rigatoni Gorgonzola con Gamberi GF - Pan-seared shrimp, spinach & tomatoes in a Gorgonzola cream sauce SM $65 LG $125', 'Linguine with Broccoli Rabe & Sausage GF - In a light garlic and oil sauce SM $65 LG $125', 'Tortellini alla Panna - Ham, peas & mushrooms in a cream sauce SM $60 LG $115', 'Fettuccine con Gamberi e Pollo Florentine GF - Shrimp, chicken, spinach and mushrooms in a creamy garlic sauce SM $80 LG $155', 'Linguine del Pescatore Fra Diavlo GF - Shrimp, scallops, clams and mussels in spicy marinara sauce SM $90 LG $175', 'Cheese Ravioli Marinara or Bolognese SM $55 LG $105', 'Farfalle Aglio Olio GF - With spinach and mushrooms sautéed in garlic and virgin olive oil SM $60 LG $115', 'Gnocchi Bolognese - Potato pasta with fresh meat sauce SM $60 LG $115', 'Linguine con Vongole GF - With red or white clam sauce SM $65 LG $125', 'Penne Classico GF - Seasoned sweet sausage and tomatoes in a fresh pink sauce SM $65 LG $125'],
      },
      {
        heading: 'Entrees',
        items: ['Sausage & Peppers GF SM $50 LG $95', 'Eggplant Parmigiana GF SM $50 LG $95', 'Eggplant Rollatini GF - Stuffed with mozzarella and ricotta, topped with marinara SM $55 LG $100', 'Meatballs in Marinara Sauce GF SM $55 LG $100', 'Chicken Parmigiana GF - Chicken cutlets topped with mozzarella and marinara SM $55 LG $100', 'Chicken Bianco GF - Chicken medallions, artichoke hearts, mushrooms and tomatoes in white wine sauce SM $55 LG $100', 'Chicken alla Papazzio GF - Layers of chicken, eggplant, mushrooms, tomatoes & mozzarella over spinach SM $60 LG $110', 'Chicken Francaise GF - Egg-battered chicken sautéed in lemon and white wine SM $55 LG $100', 'Chicken Piccata GF - Chicken medallions with capers in lemon white wine sauce SM $55 LG $100', 'Stuffed Chicken Rollatini GF - Stuffed with basil, mozzarella, roasted peppers and prosciutto in filetto di pomodoro sauce SM $55 LG $100', 'Chicken Marsala GF - Chicken medallions with mushrooms in Marsala wine sauce SM $55 LG $100', 'Chicken Scarpariella GF - Chicken medallions with sausage, peppers, onions and potatoes in brown sauce SM $60 LG $110', 'Veal Parmigiana GF - Veal cutlets topped with mozzarella in marinara SM $75 LG $140', 'Veal Saltimbocca GF - Veal scaloppine layered with eggplant, prosciutto and mozzarella on spinach SM $75 LG $140', 'Veal Marsala GF - Veal medallions with mushrooms in Marsala wine sauce SM $75 LG $140', 'Veal Piccata GF - Veal medallions with capers in lemon white wine sauce SM $75 LG $140', 'Marinated Skirt Steak GF - With peppers and onion in barbecue sauce SM $85 LG $175', 'Shrimp & Scallops Provencal GF - Tomatoes, onion and eggplant with Provencal herb sauce and cappellini SM $90 LG $170', 'Shrimp Scampi GF - Shrimp with garlic and herb sauce over risotto SM $80 LG $155', 'Salmon Lemon Basil GF - Broiled and topped with lemon basil sauce SM $90 LG $175', 'Horseradish Crusted Salmon - Broiled and topped with horseradish bread crumb topping SM $90 LG $175', 'Champagne Dill Salmon GF - Broiled and topped with Champagne Dill sauce SM $90 LG $175', 'Chicken Fingers SM $50 LG $95'],
      },
      {
        heading: 'Sides',
        items: ['French Fries SM $30 LG $60', 'Broccoli Rabe and Sausage GF - Sautéed in olive oil & garlic SM $55 LG $100', 'Portobello Risotto GF SM $45 LG $85', 'Spinach GF - Sautéed in butter and topped with Pecorino Romano SM $45 LG $85', 'Garlic Mashed Potatoes GF SM $45 LG $85', 'Sautéed Assorted Vegetables GF in garlic & oil SM $45 LG $85'],
      },
    ],
  },
  {
    title: 'Classic Buffet',
    intro: ['A four-hour, buffet-style event including delivery and setup of selected menu items, linens for buffet tables, serving staff, coffee, tea and soda, bakery-fresh rolls, condiments, a layered sheet cake of your design, and clean-up.'],
    groups: [
      { heading: 'Choice of One Salad', items: salads },
      { heading: 'Choice of Two Pastas', items: buffetPastas },
      { heading: 'Choose Three Entrees / Sides', items: buffetEntrees },
    ],
  },
  {
    title: 'Gold Buffet',
    intro: ['Typically a five-hour party including one hour of passed hors d’oeuvres and a buffet dinner, beer and wine bar, buffet linens, butler-style appetizer service, event staff, coffee, tea and soda, bakery-fresh rolls, condiments, table linens, glassware, plates and silverware, a sheet cake of your design, and clean-up. Package subject to NY tax & 20% gratuity.'],
    groups: [
      { heading: 'Choose Five Passed Hors d’oeuvres', items: horsDoeuvres },
      { heading: 'Cocktail Hour Upgrade - Choose Two', items: cocktailUpgrades },
      { heading: 'Choose One Salad', items: salads.slice(0, 4) },
      { heading: 'Choose One Pasta', items: buffetPastas },
      { heading: 'Choose Three Entrees / Sides', items: buffetEntrees },
      { heading: 'Entree Course Upgrades', items: entreeUpgrades },
      { heading: 'Dessert', items: ['Occasion Cake of Your Design', 'Coffee', 'Tea'] },
    ],
  },
  {
    title: 'Premiere Buffet',
    intro: ['A five-hour event including one hour of passed hors d’oeuvres, buffet dinner, buffet linens, butler-style cocktail-hour service, event staff, five-hour full standard bar, coffee, tea, soda, rolls, condiments, table linens, glassware, plates and silverware, a layered sheet cake of your design, and clean-up. Package subject to 8.875% tax & 20% gratuity.'],
    groups: [
      { heading: 'Passed Hors d’oeuvre Choices - Choose Seven', items: horsDoeuvres },
      { heading: 'Cocktail Hour Upgrade - Choose Two', items: cocktailUpgrades },
      { heading: 'Salad Choices - Choose One', items: salads.slice(0, 4) },
      { heading: 'Pasta Choices - Choose Two', items: buffetPastas },
      { heading: 'Entree Choices - Choose Four, One Seafood Only', items: buffetEntrees },
      { heading: 'Entree Course Upgrades', items: entreeUpgrades },
      { heading: 'Dessert', items: ['Occasion Cake of Your Design', 'Coffee and Tea'] },
    ],
  },
  {
    title: 'Premiere Sit Down',
    intro: ['A five-hour event including one hour of passed hors d’oeuvres and a sit-down dinner, butler-style cocktail-hour service, event staff, five-hour standard bar, coffee, tea and soda, bakery-fresh rolls, condiments, table linens, glassware, plates and silverware, a layered sheet cake of your design, and clean-up. Package subject to 8.875% tax and 20% gratuity.'],
    groups: [
      { heading: 'Choose Seven Passed Hors d’oeuvres', items: horsDoeuvres },
      { heading: 'Cocktail Hour Upgrade - Choose Two', items: cocktailUpgrades },
      { heading: 'Appetizer Course', items: ['Caesar Salad', 'Tricolor Salad', 'Spinach Salad', 'House Salad', 'Chopped Tomato and Mozzarella Salad', 'Sliced Tomato and Mozzarella'] },
      { heading: 'Pasta Course', items: ['Fettuccine Alfredo', 'Penne Filetto di Pomodoro', 'Penne alla Vodka', 'Farfalle Marinara', 'Farfalle Garlic & Oil', 'Tortellini Alfredo'] },
      { heading: 'Intermezzo', items: ['Lemon Sorbet', 'Raspberry Sorbet'] },
      { heading: 'Choose Three Entrees - One Seafood', items: ['Eggplant Rollatini', 'Eggplant Parmigiana', 'Beef Burgundy with Mushrooms', 'Chicken Piccata', 'Chicken Marsala', 'Chicken Parmigiana', 'Chicken Bianco', 'Stuffed Chicken Rollatini', 'Chicken Francaise', 'Chicken Scarpariello', 'Veal Parmigiana', 'Veal Saltimbocca', 'Veal Marsala', 'Veal and Peppers', 'Veal Francaise', 'Veal Piccata', 'Salmon or Tilapia Lemon Basil', 'Crab Meat Stuffed Tilapia', 'Salmon/Tilapia Champagne Dill', 'Salmon Oreganata', 'Horseradish-crusted Salmon', 'Shrimp / Scallops Scampi', 'Sole with Seafood Stuffing'] },
      { heading: 'Entree Course Upgrades', items: entreeUpgrades },
      { heading: 'Dessert', items: ['Occasion Sheet Cake of Your Design', 'Coffee, Tea'] },
    ],
  },
]

const additionalOptions = [
  { heading: 'Cold Stations', items: ['Assorted Fruit Platter', 'Assorted Cheese Platter', 'Sliced Tomato and Mozzarella', 'Assorted Cold Antipasto', 'Grilled Vegetables'] },
  { heading: 'Hot Stations', items: ['Pasta Station', 'Choice of Pasta: Penne, Rigatoni, Farfalle or Tortellini', 'Choice of Sauce: Alfredo, Filetto di Pomodoro, Marinara, Garlic and Oil, or Vodka Sauce'] },
  { heading: 'Carving Station', items: ['Baked Ham', 'Roasted Turkey', 'Marinated Barbecued Skirt Steak', 'Filet Mignon'] },
  { heading: 'Desserts', items: ['Mini Pastries and Cookies', 'Ice Cream Sundae Set Up', 'Sliced Fruit Platter', 'Wedding Cakes'] },
  { heading: 'Bar Options', items: ['Wine & Beer', 'Champagne Punch', 'Standard Shelf Liquor, Beer and Wine', 'Premium Liquor, Beer and Wine'] },
  { heading: 'Additional Options', items: ['Valet', 'Chair Covers', 'Tent Rentals'] },
]

const baseSectionHeadings = [
  'DINNER MENU',
  'LUNCH MENU',
  'TRAY MENU',
  'DESSERT MENU',
  'Wine Menu',
  'Happy Hour Menu',
  '$10 HAPPY HOUR MENU STARTING JULY 1ST',
  'ANTIPASTI',
  'INSALATE',
  'SALADS',
  'PASTAS',
  'ENTREES',
  'SIDES',
  'Appetizers',
  'Salads',
  'Pastas',
  'Entrees',
  'Sides',
  'GF Options',
  'SUMMER HAPPY HOUR',
  'ANTIPASTI (Choose One)',
  'SECONDI (Choose One)',
  'DOLCI (Choose One)',
]

const wineSectionHeadings = ['Spumante', 'Bianco', 'Rosso Italiano', 'Rosso Americano']

const dessertItems = [
  'Chocolate Oreo Mousse Cake',
  'Homemade Cheesecake',
  'Tiramisu',
  'Homemade Cinnamon Apple Tart',
  'Spumoni Tartufo',
  'Affogato',
  'Cannoli',
  'Brownie',
  'Gluten Free Brownie GF',
  'Gluten Free Cannoli GF',
  'Gluten Free Cheesecake GF',
  'Gluten Free Tiramisu GF',
  'Gluten Free Oreo Mousse GF',
  'Lemon Sorbet GF',
  'Ice Cream GF',
  '*Ala Mode',
]

const introLabels = [
  'Small trays',
  'All tray orders',
  'Wire racks',
  'A 50% deposit',
  'Prices may change',
  'Gluten-Free:',
  'All bottles',
  '50% off all Wine',
  'Weekdays 4-7 PM',
  'Holidays Excluded',
  'Bar Area Only',
  'La Dolce Notte',
  'Great Food',
  'Thursdays Only',
  '20% gratuity',
  'GF Indicates',
  'To substitute',
]

const revealSelectors = [
  '.hero-content > *',
  '.hero-note',
  '.ticker-track span',
  '.info-card',
  '.proof-section > *',
  '.split-heading',
  '.split-section > div:not(.split-heading)',
  '.wedding-copy > *',
  '.wedding-notes > div',
  '.page-hero-content > *',
  '.section-intro > *',
  '.venue-card',
  '.package-card',
  '.package-card > p',
  '.package-group-card',
  '.menu-group',
  '.restaurant-section > *',
  '.current-menu-panel',
  '.current-menu-section',
  '.current-menu-item',
  '.gallery-grid figure',
  '.contact-section > *',
  '.footer-brand > *',
  '.footer-links > div',
  '.footer-bottom > *',
]

const revealDirections = ['reveal-up', 'reveal-left', 'reveal-right', 'reveal-down']

function App() {
  const currentPath = normalizePath(window.location.pathname)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useScrollReveal(currentPath)

  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Papazzio Catering home">
          <img src={images.logo} alt="" />
          <span>Bayside - NY</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="/contact">
          Contact
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`} id="mobile-menu">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
      </header>

      {renderPage(currentPath)}
      <SiteFooter />
    </div>
  )
}

function useScrollReveal(currentPath: string) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      document.querySelectorAll(revealSelectors.join(',')).forEach((element) => {
        element.classList.add('is-visible')
      })
      return
    }

    const revealVisibleElements = () => {
      document.querySelectorAll<HTMLElement>('.scroll-reveal:not(.is-visible)').forEach((element) => {
        const rect = element.getBoundingClientRect()
        const revealLine = window.innerHeight * 0.88

        if (rect.top < revealLine && rect.bottom > 0) {
          element.classList.add('is-visible')
        }
      })
    }

    const registerElements = () => {
      document.querySelectorAll<HTMLElement>(revealSelectors.join(',')).forEach((element, index) => {
        if (element.classList.contains('scroll-reveal')) {
          return
        }

        element.classList.add('scroll-reveal', revealDirections[index % revealDirections.length])
        element.style.setProperty('--reveal-delay', `${Math.min((index % 5) * 70, 280)}ms`)
      })

      window.requestAnimationFrame(revealVisibleElements)
    }

    registerElements()
    window.addEventListener('scroll', revealVisibleElements, { passive: true })
    window.addEventListener('resize', revealVisibleElements)

    const mutationObserver = new MutationObserver(registerElements)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('scroll', revealVisibleElements)
      window.removeEventListener('resize', revealVisibleElements)
      mutationObserver.disconnect()
    }
  }, [currentPath])
}

function renderPage(path: string) {
  switch (path) {
    case '/about':
      return <AboutPage />
    case '/weddings':
      return <WeddingsPage />
    case '/venues':
      return <VenuesPage />
    case '/packages':
      return <PackagesPage />
    case '/menu':
      return <MenuPage />
    case '/restaurant':
      return <RestaurantPage />
    case '/gallery':
      return <GalleryPage />
    case '/contact':
      return <ContactPage />
    default:
      return <HomePage />
  }
}

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <img className="hero-image" src={images.hero} alt="" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Elegance in catering</p>
          <h1>Papazzio Catering</h1>
          <p>
            Catering your way. Outstanding food, elegant presentation, and
            first-class service for weddings, private parties, corporate
            gatherings, and celebrations across New York.
          </p>
          <div className="button-row">
            <a className="button button-gold" href="/contact">Plan an Event</a>
            <a className="button button-outline-light" href="/venues">View Venues</a>
            <a className="button button-ghost-light" href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </div>
        <aside className="hero-note" aria-label="Papazzio catering highlight">
          <strong>Since 1990</strong>
          <span>Restaurant hospitality, tailored for your event.</span>
        </aside>
      </section>
      <Ticker />
      <section className="quick-info">
        <InfoCard title="Planning" lines={['One-on-one service', 'Custom event menus']} />
        <InfoCard title="Events" lines={['Weddings and showers', 'Corporate and private parties']} />
        <InfoCard title="Reach us" lines={[site.email, site.phone]} />
      </section>
      <section className="proof-section">
        <div>
          <p className="eyebrow gold">As seen in The Knot Magazine</p>
          <h2>Elegant events with a neighborhood soul.</h2>
        </div>
        <img src={images.knot} alt="As Seen in The Knot Magazine" loading="lazy" />
      </section>
      <GallerySection />
    </main>
  )
}

function AboutPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="About Papazzio Catering"
        image={images.planning}
        title="Planning, hospitality, and food with the Papazzio standard."
        text="A Bayside catering team bringing restaurant warmth to weddings, private parties, corporate gatherings, and family milestones."
      />
      <section className="split-section cream">
        <div className="split-heading">
          <p className="eyebrow tomato">Catering by Papazzio</p>
          <h2>Event planning with the warmth of Papazzio.</h2>
        </div>
        <div>
          <p>
            Papazzio is an experienced wedding and event caterer located in
            Bayside, NY. Papazzio Catering has been in the restaurant and
            catering business since 1990, pairing customized menus with
            attentive, one-on-one planning.
          </p>
          <p>
            From weddings, showers and sweet sixteens to birthdays and
            graduations, Papazzio provides event planning services to
            personalize catered on-site or off-site affairs and realize each
            client&apos;s unique vision. Services include event planning,
            tastings, equipment rentals, venue coordination, and flexible
            planning for a range of budgets.
          </p>
          <p>
            Papazzio also welcomes gluten-free customers and practices strict
            procedures to prevent cross contamination for gluten-free guests.
          </p>
          <div className="legacy-service-list">
            <strong>Catering Off-site</strong>
            <span>Papazzio has over 25 years experience in catering weddings and other special events.</span>
            <strong>Catering at Papazzio</strong>
            <span>Papazzio is the perfect location for showers, christenings, communions and birthdays.</span>
            <strong>Trays</strong>
            <span>For easy entertaining at home or office, Papazzio offers a complete tray menu and will help figure out how much to order.</span>
          </div>
          <a className="button button-dark" href="/contact">Start Planning</a>
        </div>
        <div className="framed-photo">
          <img src={images.planning} alt="Papazzio catered table setting" loading="lazy" />
          <div className="photo-card">
            <strong>Bring the restaurant standard to the room.</strong>
          </div>
        </div>
      </section>
    </main>
  )
}

function WeddingsPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Weddings"
        image={images.wedding}
        title="Wedding catering with a real restaurant behind it."
        text="From ceremony spaces to dinner service, Papazzio shapes wedding menus and event details around your venue, guest count, and style."
      />
      <section className="wedding-detail-section">
        <div className="wedding-copy">
          <p className="eyebrow tomato">Dedicated in everything we do</p>
          <h2>Menus, service, and planning that fit the room.</h2>
          <p>
            Striving for excellence, the catering team excels in hospitality
            for weddings, cocktail hours, dinner receptions, and private
            affairs. Papazzio pairs personalized planning with reliable service
            and a delicious menu using quality ingredients.
          </p>
          <p>
            The team can work at Papazzio, at preferred venues, or at locations
            that allow outside caterers, with many gluten-free options
            available for guests who need them.
          </p>
          <div className="button-row compact">
            <a className="button button-dark" href="/packages">View Packages</a>
            <a className="button button-outline-dark" href="/contact">Ask About Dates</a>
          </div>
        </div>
        <div className="wedding-notes" aria-label="Wedding catering highlights">
          <div>
            <span>01</span>
            <strong>Passed hors d’oeuvres</strong>
            <p>Cocktail-hour service with classic Papazzio selections and upgrade options.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Buffet or sit-down</strong>
            <p>Flexible service styles for intimate rooms, barns, ballrooms, and private locations.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Bar and dessert</strong>
            <p>Beer, wine, liquor, cake, coffee, tea, and add-ons depending on the package.</p>
          </div>
          <div>
            <span>04</span>
            <strong>Gluten-free care</strong>
            <p>Many menu items can be prepared gluten-free with careful handling procedures.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function VenuesPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Venues"
        image="https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/BHS-castle-e1544060445128.jpg?fit=1200%2C900&ssl=1"
        title="Preferred venues, private rooms, and events at your place."
        text="Explore the legacy Papazzio venue list, from Bayside and Queens landmarks to Brooklyn event spaces and client-selected locations."
      />
      <section className="venues-section">
        <div className="section-intro">
          <p className="eyebrow tomato">Some of our venues</p>
          <h2>Preferred spaces, private rooms, and wherever your event belongs.</h2>
          <p>
            Papazzio caters at preferred venues throughout Queens, Brooklyn,
            Long Island City, Connecticut, and at client-selected locations
            that allow outside caterers.
          </p>
        </div>
        <div className="venue-grid">
          {venues.map((venue, index) => (
            <article className="venue-card" key={venue.title}>
              <img src={venue.image} alt="" loading="lazy" />
              <div>
                <span>{venue.place}</span>
                <h3>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  {venue.title}
                </h3>
                <p>{venue.text}</p>
                {venue.details && (
                  <ul>
                    {venue.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function PackagesPage() {
  const [openPackageTitle, setOpenPackageTitle] = useState<string | null>(null)

  return (
    <main className="page-main">
      <PageHero
        eyebrow="Packages"
        image={images.trays}
        title="Buffets, trays, stations, bar options, and event add-ons."
        text="Browse the catering packages and legacy tray menus with service details, gluten-free notes, upgrades, and dessert options."
      />
      <section className="packages-section">
        <div className="section-intro">
          <p className="eyebrow gold">Packages and tray menus</p>
          <h2>Every off-site package and menu item from the old site.</h2>
          <p>
            These are the legacy Papazzio Catering package details, tray prices,
            gluten-free notes, service inclusions, upgrades, stations, bar
            options, and dessert choices. Select a package below to see the
            full details.
          </p>
        </div>
        <div className="package-list">
          {packages.map((item, index) => (
            <PackageCard
              index={index}
              isOpen={openPackageTitle === item.title}
              onToggle={() => setOpenPackageTitle(openPackageTitle === item.title ? null : item.title)}
              packageItem={item}
              key={item.title}
            />
          ))}
        </div>
      </section>
      <section className="options-section">
        <div className="section-intro">
          <p className="eyebrow tomato">Additional options</p>
          <h2>Stations, desserts, bar service, and event add-ons.</h2>
        </div>
        <div className="option-grid">
          {additionalOptions.map((group) => (
            <MenuGroup group={group} key={group.heading} />
          ))}
        </div>
      </section>
    </main>
  )
}

function MenuPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Restaurant Menu"
        image={images.restaurant}
        title="Papazzio’s restaurant menu, folded into the catering site."
        text="Dinner, lunch, tray, dessert, wine, happy hour, and seasonal menus from the Papazzio restaurant site."
      />
      <RestaurantMenuSection />
    </main>
  )
}

function RestaurantMenuSection() {
  const [openMenuSlugs, setOpenMenuSlugs] = useState<string[]>([])

  return (
    <section className="our-menu-section">
      <div className="section-intro">
        <p className="eyebrow tomato">Our Menu</p>
        <h2>The real Papazzio menu, carried over from the Papazzio site.</h2>
        <p>
          The legacy catering page named “Our Menu” was a WordPress demo
          page, but Papazzio&apos;s current site has the actual dinner, lunch,
          tray, dessert, wine, happy hour, and seasonal menus. Those menus are
          included here and organized for browsing.
        </p>
      </div>
      <div className="current-menu-list" aria-label="Papazzio restaurant menus">
        {menuPages.map((page) => (
          <article className={`current-menu-panel${openMenuSlugs.includes(page.slug) ? ' is-open' : ''}`} key={page.slug}>
            <button
              aria-expanded={openMenuSlugs.includes(page.slug)}
              className="current-menu-summary"
              onClick={() => setOpenMenuSlugs((slugs) => (
                slugs.includes(page.slug)
                  ? slugs.filter((slug) => slug !== page.slug)
                  : [...slugs, page.slug]
              ))}
              type="button"
            >
              <img src={page.image} alt="" loading="lazy" />
              <span>
                <small>Papazzio menu</small>
                {page.title}
              </span>
              <b>{openMenuSlugs.includes(page.slug) ? 'Close' : 'Open'}</b>
            </button>
            {openMenuSlugs.includes(page.slug) && (
              <div className="current-menu-body">
                {parseMenu(page.content, page.title, page.slug).map((section) => (
                  <section className="current-menu-section" key={`${page.slug}-${section.title}`}>
                    <h3>{section.title}</h3>
                    <div>
                      {section.lines.map((line, index) => (
                        <MenuItem line={line} key={`${line.title}-${index}`} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function RestaurantPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Restaurant"
        image={images.restaurant}
        title="The Bell Boulevard restaurant behind the catering."
        text="Papazzio Restaurant & Caterer brings its Italian kitchen, private party experience, and gluten-free care into the event side."
      />
      <section className="restaurant-section">
        <img src={images.restaurant} alt="Papazzio restaurant dining room" loading="lazy" />
        <div>
          <p className="eyebrow gold">Restaurants and on-site catering</p>
          <h2>Papazzio Restaurant & Caterer.</h2>
          <p>
            Established in 1990, Papazzio has served Bayside for nearly 30
            years with Italian favorites and Papazzio originals. For more than
            25 years, Papazzio has been Bell Boulevard&apos;s mainstay
            destination, providing a taste of elegance in a comfortable,
            old-world Tuscany setting with a fusion of Northern and Southern
            Italian cuisine.
          </p>
          <p>
            The main dining room is available for private parties on Saturday
            and Sunday afternoons with a minimum of 30 people. Restaurant party
            packages differ from off-site packages. A small private dining area
            downstairs in the Wine Room is also available with the Wine Room
            package or a la carte dinner-menu ordering with a room fee.
          </p>
          <p>
            Restaurant package headings from the legacy page: Premiere Package
            #1, Premier Package #2, Buffet Menu, Additional Options, and Cake
            Options.
          </p>
          <p>
            Previti Pizza and Papazzio Dining, located in New Hyde Park, was
            listed as Papazzio&apos;s newer venture, featuring artisan pizza and
            some Papazzio classics.
          </p>
          <p>
            Gluten free? Over 90% of Papazzio menus are available gluten-free,
            and Papazzio practices strict procedures to prevent cross
            contamination.
          </p>
        </div>
      </section>
      <RestaurantMenuSection />
    </main>
  )
}

function GalleryPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Gallery"
        image="https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/IMG_0021.jpg?fit=1200%2C900&ssl=1"
        title="Food, venues, and celebration details from Papazzio events."
        text="A visual archive of catering spreads, rooms, tables, and wedding moments from the legacy Papazzio Catering site."
      />
      <GallerySection />
    </main>
  )
}

function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="section-intro">
        <p className="eyebrow gold">Gallery</p>
        <h2>A look at the food, rooms, and celebration moments.</h2>
      </div>
      <div className="gallery-grid">
        {gallery.map((image) => (
          <figure key={image.alt}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Contact"
        image="https://i0.wp.com/papazziocatering.com/wp-content/uploads/2019/02/qcf-tent.jpg?w=1200&ssl=1"
        title="Start the conversation about your event."
        text="Send the date, guest count, venue, and occasion, or call the catering team directly to begin planning."
      />
      <section className="contact-section">
        <div>
          <p className="eyebrow tomato">Contact us</p>
          <h2>Tell us what you are planning.</h2>
          <p>
            Share the occasion, date, guest count, venue, and the kind of
            experience you want guests to have. Papazzio will help shape the
            event from there.
          </p>
        </div>
        <div className="contact-panel">
          <p>
            {site.addressLine1}
            <br />
            {site.addressLine2}
          </p>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.emailHref}>{site.email}</a>
          <p className="small-note">
            For off-premise catering services, the legacy site asks guests to
            call Dominick at 718-229-1962.
          </p>
          <div className="button-row compact">
            <a className="button button-dark" href={site.emailHref}>Email Us</a>
            <a className="button button-outline-dark" href={site.papazzioUrl}>Papazzio Restaurant</a>
          </div>
        </div>
      </section>
    </main>
  )
}

function PageHero({
  eyebrow,
  image,
  text,
  title,
}: {
  eyebrow: string
  image: string
  text: string
  title: string
}) {
  return (
    <section className="page-hero">
      <img src={image} alt="" loading="eager" />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <p className="eyebrow gold">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}

function Ticker() {
  return (
    <section className="ticker" aria-label="Papazzio Catering services">
      <div className="ticker-track">
        {ticker.map((item) => (
          <span key={item}>
            {item}
            <i />
          </span>
        ))}
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <p className="eyebrow gold">Papazzio Catering</p>
          <h2>A taste of elegance for your next event.</h2>
          <p>
            Outstanding food, elegant presentation, and first-class service for
            events in Bayside and beyond.
          </p>
          <a className="footer-cta" href="/contact">Start Planning</a>
        </div>
        <div className="footer-links">
          <div>
            <h3>Explore</h3>
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </div>
          <div>
            <h3>Contact</h3>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
            <span>
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </span>
          </div>
          <div>
            <h3>Social</h3>
            <a href={site.facebookUrl}>Facebook</a>
            <a href={site.twitterUrl}>Twitter</a>
            <a href={site.instagramUrl}>Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2019 Papazzio is a registered trademark.</p>
        <p>
          Made by{' '}
          <a className="volta-link" href="https://voltanyc.org/" rel="noreferrer" target="_blank">
            Volta
          </a>
        </p>
      </div>
    </footer>
  )
}

function normalizePath(pathname: string) {
  const path = pathname.replace(/\/+$/, '')
  return path || '/'
}

function InfoCard({ lines, title }: { lines: string[]; title: string }) {
  return (
    <article className="info-card">
      <p>{title}</p>
      {lines.map((line) => (
        <strong key={line}>{line}</strong>
      ))}
    </article>
  )
}

function PackageCard({
  index,
  isOpen,
  onToggle,
  packageItem,
}: {
  index: number
  isOpen: boolean
  onToggle: () => void
  packageItem: {
    title: string
    intro: string[]
    groups: { heading: string; items: string[] }[]
  }
}) {
  const [openGroupHeadings, setOpenGroupHeadings] = useState<string[]>([])

  return (
    <article className={`package-card${isOpen ? ' is-open' : ''}${index === packages.length - 1 ? ' is-last' : ''}`}>
      <button aria-expanded={isOpen} className="package-toggle" onClick={onToggle} type="button">
        <span>
          <strong>{packageItem.title}</strong>
          <em>{packageItem.intro[0]}</em>
        </span>
        <small>
          {packageItem.groups.length} sections
          <b>{isOpen ? 'Hide' : 'View details'}</b>
        </small>
      </button>
      {isOpen && (
        <>
          {packageItem.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="package-groups">
            {packageItem.groups.map((group) => (
              <PackageGroupCard
                group={group}
                isOpen={openGroupHeadings.includes(group.heading)}
                key={group.heading}
                onToggle={() => setOpenGroupHeadings((headings) => (
                  headings.includes(group.heading)
                    ? headings.filter((heading) => heading !== group.heading)
                    : [...headings, group.heading]
                ))}
              />
            ))}
          </div>
        </>
      )}
    </article>
  )
}

function PackageGroupCard({
  group,
  isOpen,
  onToggle,
}: {
  group: { heading: string; items: string[] }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className={`package-group-card${isOpen ? ' is-open' : ''}`}>
      <button aria-expanded={isOpen} className="package-group-toggle" onClick={onToggle} type="button">
        <span>
          <strong>{group.heading}</strong>
          <em>{group.items.length} items</em>
        </span>
        <b>{isOpen ? 'Close' : 'Open'}</b>
      </button>
      {isOpen && <MenuGroup group={group} />}
    </div>
  )
}

function MenuGroup({ group }: { group: { heading: string; items: string[] } }) {
  return (
    <div className="menu-group">
      <h4>{group.heading}</h4>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function MenuItem({ line }: { line: MenuLine }) {
  if (line.isNote) {
    return <p className="current-menu-note">{line.title}</p>
  }

  return (
    <article className="current-menu-item">
      <div>
        <h4>{line.title}</h4>
        {line.description ? <p>{line.description}</p> : null}
      </div>
      {line.price ? <span>{line.price}</span> : null}
    </article>
  )
}

function parseMenu(content: string, fallbackTitle: string, slug: string): MenuSection[] {
  const lines = lineBreaks(content, slug)
  const sections: MenuSection[] = []
  let current: MenuSection = { title: fallbackTitle, lines: [] }

  for (const line of lines) {
    if (isNavigationLine(line)) {
      continue
    }

    if (isSectionHeading(line)) {
      if (current.lines.length > 0 || current.title !== fallbackTitle) {
        sections.push(current)
      }
      current = { title: normalizeHeading(line), lines: [] }
      continue
    }

    current.lines.push(parseLine(line, slug))
  }

  if (current.lines.length > 0) {
    sections.push(current)
  }

  return sections.filter((section) => section.lines.length > 0)
}

function lineBreaks(content: string, slug: string) {
  let text = content
  const sectionHeadings = slug === 'wine-menu' ? [...baseSectionHeadings, ...wineSectionHeadings] : baseSectionHeadings

  for (const heading of sectionHeadings) {
    text = text.replaceAll(` ${heading} `, `\n${heading}\n`)
    if (text.startsWith(`${heading} `)) {
      text = text.replace(`${heading} `, `${heading}\n`)
    }
  }

  text = text
    .replaceAll(' Lunch Menu ', '\nLunch Menu\n')
    .replaceAll(' Dinner Menu ', '\nDinner Menu\n')
    .replaceAll(' Dessert Menu ', '\nDessert Menu\n')
    .replaceAll(' Tray Menu ', '\nTray Menu\n')
    .replaceAll(/(?<![/$]) (?=\$?\s?\d{1,3}(?:\.\d{2})?(?:\s?\/\s?\$?\s?\d{1,3}(?:\.\d{2})?)?\s+[A-Z][A-Za-zÀ-ÿ])/g, '\n')

  for (const label of introLabels) {
    text = text.replaceAll(` ${label}`, `\n${label}`)
  }

  if (slug === 'dessert-menu') {
    for (const item of dessertItems) {
      text = text.replaceAll(` ${item}`, `\n${item}`)
    }
  }

  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

function parseLine(line: string, slug: string): MenuLine {
  if (slug === 'dessert-menu') {
    if (line.startsWith('*Ala Mode')) {
      return {
        description: 'Vanilla or Chocolate',
        price: '+$2',
        title: 'A la Mode',
      }
    }

    const dessertItem = dessertItems.find((item) => line === item || line.startsWith(`${item} `))

    if (dessertItem) {
      return {
        description: line.slice(dessertItem.length).trim() || undefined,
        title: dessertItem,
      }
    }
  }

  const priced = line.match(/^(\$?\s?(?:market price|\d{1,3}(?:\.\d{2})?(?:\s?\/\s?\$?\s?\d{1,3}(?:\.\d{2})?)*))\s+(.+)$/i)

  if (!priced) {
    return { isNote: true, title: line }
  }

  const price = normalizePrice(priced[1])
  const body = priced[2].trim()
  const cleanBody = body.replace(/\s+\$?\s?\d{1,3}(?:\.\d{2})?(?:\s?\/\s?\$?\s?\d{1,3}(?:\.\d{2})?)*\s*$/g, '').trim()

  const glutenFreeIndex = cleanBody.indexOf(' GF ')
  if (glutenFreeIndex > 0) {
    return {
      description: cleanBody.slice(glutenFreeIndex + 4).trim(),
      price,
      title: cleanBody.slice(0, glutenFreeIndex + 3).trim(),
    }
  }

  const descriptionStart = cleanBody.search(/\s(?:Clams|Fried|Drizzled|New|Grilled|Served|Sautéed|Sauteed|With|On|In|Crisp|Layers|Egg|Chicken|Veal|Shrimp|Penne|Fettuccine|Linguine|Smooth|Creamy|Classic|House|Homemade|Roasted|Choice|Small|Large|Gulf|Jumbo|Tossed|Bow|Angel|Pan|Whole|Potato|Marinated|Broiled|Italian|Crispy|Four|Three|Fresh|Arugula|Cold|Two|Sliced|Jumbo|Breaded|Lightly|Topped)\b/)

  if (descriptionStart > 0) {
    return {
      description: cleanBody.slice(descriptionStart).trim(),
      price,
      title: cleanBody.slice(0, descriptionStart).trim(),
    }
  }

  return { price, title: cleanBody }
}

function normalizePrice(value: string) {
  return value.replace(/\s+/g, ' ').replace('$ ', '$').trim()
}

function normalizeHeading(line: string) {
  return line.replace(/\s+/g, ' ').trim()
}

function isNavigationLine(line: string) {
  return ['Lunch Menu', 'Dinner Menu', 'Dessert Menu', 'Tray Menu'].includes(line)
}

function isSectionHeading(line: string) {
  return [...baseSectionHeadings, ...wineSectionHeadings].some((heading) => line === heading)
}

export default App
