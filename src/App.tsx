import './App.css'

const site = {
  phone: '718.229.1962',
  phoneHref: 'tel:7182291962',
  email: 'info@papazziocatering.com',
  emailHref: 'mailto:info@papazziocatering.com',
  addressLine1: '39-38 Bell Boulevard',
  addressLine2: 'Bayside, NY 11361',
  papazzioUrl: 'https://www.papazzio.com',
  facebookUrl: 'https://www.facebook.com/papazziorestaurant/',
  instagramUrl: 'https://www.instagram.com/papazzio_restaurant/',
}

const images = {
  logo: 'https://papazziocatering.com/wp-content/uploads/2018/08/Atasteofelegance_White.png',
  hero: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2018/08/26bridge_3_dark.jpg?fit=1200%2C680&ssl=1',
  planning: 'https://i0.wp.com/papazziocatering.com/wp-content/uploads/2016/10/left-menu-parallax1.jpg?fit=1920%2C1000&ssl=1',
  wedding: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/weddingcouple_dark.jpg?fit=1204%2C803&ssl=1',
  knot: 'https://i0.wp.com/www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenInMag.png?w=190&ssl=1',
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Weddings', href: '#weddings' },
  { label: 'Venues', href: '#venues' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
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
    text: 'A warm Bell Boulevard venue for showers, birthdays, graduations, christenings, and communions. The restaurant accommodates 30-70 guests with exclusive use available by arrangement.',
  },
  {
    place: 'Bayside, NY',
    title: 'The Castle at Fort Totten',
    image: 'https://i1.wp.com/papazziocatering.com/wp-content/uploads/2018/08/BHS-castle-e1544060445128.jpg?fit=600%2C450&ssl=1',
    text: 'A waterfront Fort Totten setting with intimate rooms, a sunlit library, gallery spaces, and a grand ballroom for weddings, showers, engagements, and social events.',
  },
  {
    place: 'Little Neck, NY',
    title: 'Queens County Farm',
    image: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/QCF-Barn.jpg?fit=600%2C450&ssl=1',
    text: 'A distinctive farm museum backdrop for corporate parties, weddings, graduations, communions, and celebrations in The Barn, The Pavilion, or The Orchard.',
  },
  {
    place: 'Brooklyn',
    title: '26 Bridge',
    image: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/IMG_0019-e1534102811474.jpg?fit=600%2C450&ssl=1',
    text: 'A renovated former metal factory with original brick walls, towering wooden doors, high ceilings, and room for private events, weddings, mitzvahs, and corporate gatherings.',
  },
  {
    place: 'Flushing, NY',
    title: 'Flushing Town Hall',
    image: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/flushingtownhall_2-e1544060361475.jpg?w=712&ssl=1',
    text: 'A cultural venue offering the Theater, Gallery, and Garden as individual or combined event spaces.',
  },
  {
    place: 'New Canaan, CT',
    title: 'Waveny House',
    image: 'https://i2.wp.com/papazziocatering.com/wp-content/uploads/2018/08/Waveny-Entrance2-e1533912468300.jpg?fit=600%2C450&ssl=1',
    text: 'A historic estate with grounds, patio, wood-paneled interiors, leaded glass windows, marble fireplaces, murals, and wide plank floors.',
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
  },
]

const gallery = [
  { alt: 'Papazzio catering place setting', src: images.planning },
  { alt: 'Wedding couple at a Papazzio catered event', src: images.wedding },
  { alt: '26 Bridge event venue', src: images.hero },
]

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Papazzio Catering home">
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
        <a className="header-call" href={site.phoneHref}>
          {site.phone}
        </a>
      </header>

      <main id="top">
        <section className="hero-section">
          <img className="hero-image" src={images.hero} alt="" />
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
              <a className="button button-gold" href="#contact">
                Plan an Event
              </a>
              <a className="button button-outline-light" href="#venues">
                View Venues
              </a>
              <a className="button button-ghost-light" href={site.phoneHref}>
                Call {site.phone}
              </a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Papazzio catering highlight">
            <strong>Since 1990</strong>
            <span>Restaurant hospitality, tailored for your event.</span>
          </aside>
        </section>

        <section className="ticker" aria-label="Papazzio Catering services">
          <div className="ticker-track">
            {[...ticker, ...ticker, ...ticker].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <i />
              </span>
            ))}
          </div>
        </section>

        <section className="quick-info">
          <InfoCard title="Planning" lines={['One-on-one service', 'Custom event menus']} />
          <InfoCard title="Events" lines={['Weddings and showers', 'Corporate and private parties']} />
          <InfoCard title="Reach us" lines={[site.email, site.phone]} />
        </section>

        <section className="split-section cream" id="about">
          <div>
            <p className="eyebrow tomato">Catering by Papazzio</p>
            <h2>Event planning with the warmth of Papazzio.</h2>
            <p>
              Papazzio is an experienced wedding and event caterer located in
              Bayside, NY. The team has been in the restaurant and catering
              business since 1990, pairing customized menus with attentive,
              one-on-one planning.
            </p>
            <p>
              Clients can build an event around tasting, equipment rentals,
              venue coordination, and the kind of polished service that keeps
              the day moving without stress.
            </p>
            <a className="button button-dark" href="#contact">
              Start Planning
            </a>
          </div>
          <div className="framed-photo">
            <img src={images.planning} alt="Papazzio catered table setting" />
            <div className="photo-card">
              <strong>Bring the restaurant standard to the room.</strong>
            </div>
          </div>
        </section>

        <section className="statement-section" id="weddings">
          <img src={images.wedding} alt="" />
          <div>
            <p className="eyebrow gold">Dedicated in everything we do</p>
            <h2>Weddings, celebrations, and catered affairs built around your vision.</h2>
            <p>
              Papazzio works with a range of budgets while focusing on the
              details guests remember: the food, the pacing, the presentation,
              and the sense that the whole event is being cared for.
            </p>
          </div>
        </section>

        <section className="venues-section" id="venues">
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
                <img src={venue.image} alt="" />
                <div>
                  <span>{venue.place}</span>
                  <h3>
                    <small>{String(index + 1).padStart(2, '0')}</small>
                    {venue.title}
                  </h3>
                  <p>{venue.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-section">
          <div>
            <p className="eyebrow gold">As seen in The Knot Magazine</p>
            <h2>Elegant events with a neighborhood soul.</h2>
          </div>
          <img src={images.knot} alt="As Seen in The Knot Magazine" />
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-intro">
            <p className="eyebrow gold">Gallery</p>
            <h2>A look at the food, rooms, and celebration moments.</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((image) => (
              <img src={image.src} alt={image.alt} key={image.alt} />
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
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
            <div className="button-row compact">
              <a className="button button-dark" href={site.emailHref}>
                Email Us
              </a>
              <a className="button button-outline-dark" href={site.papazzioUrl}>
                Papazzio Restaurant
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h2>Papazzio Catering</h2>
          <p>
            Outstanding food, elegant presentation, and first-class service for
            events in Bayside and beyond.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Connect</h3>
          <a href={site.emailHref}>{site.email}</a>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.facebookUrl}>Facebook</a>
          <a href={site.instagramUrl}>Instagram</a>
        </div>
      </footer>
    </div>
  )
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

export default App
