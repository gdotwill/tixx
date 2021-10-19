
import HomeComponent from './components/HomeComponent'
import SearchResultsComponent from './components/SearchResults';
import Payment from './components/PaymentComponent';
import ThankYouComponent from './components/ThankYouComponent';

// Nav Links
import Experiences from './components/StaticPages/Experiences';
import OurStoryComponent from './components/StaticPages/OurStoryComponent';
import BundlesComponent from './components/BundlesComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

// Footer Links
import About from './components/Footer/FooterLinks/About';
import Careers from './components/Footer/FooterLinks/Careers';
import Blog from './components/Footer/FooterLinks/Blog';
import Press from './components/Footer/FooterLinks/Press';
import GiftCards from './components/Footer/FooterLinks/GiftCards';
import Contact from './components/Footer/FooterLinks/Contact';
import Legal from './components/Footer/FooterLinks/Legal';
import Privacy from './components/Footer/FooterLinks/Privacy';
import Terms from './components/Footer/FooterLinks/Terms';
import SiteMap from './components/Footer/FooterLinks/SiteMap';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
          {/* Nav links */}
          <Route path="/experiences" component={ Experiences } />  
          <Route path="/our-story" component={ OurStoryComponent } />

          {/* Footer link */}
          <Route path="/about-us" component={ About } />
          <Route path="/careers" component={ Careers } />
          <Route path="/blog" component={ Blog } />
          <Route path="/press" component={ Press } />
          <Route path="/gift-cards" component={ GiftCards } />
          <Route path="/contact" component={ Contact } />
          <Route path="/legal" component={ Legal } />
          <Route path="/privacy" component={ Privacy } />
          <Route path="/terms" component={ Terms } />
          <Route path="/sitemap" component={ SiteMap } />
          

          <Route path="/" component={ HomeComponent } exact />
          <Route path="/search-results" component={ SearchResultsComponent } />
          <Route path="/payment" component={ Payment } />
          <Route path="/thank-you" component={ ThankYouComponent } />
          <Route path="/bundles" component={ BundlesComponent } />
      </Switch>
    </>
  );
}

export default App;
