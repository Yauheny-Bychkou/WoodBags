import Greeting from '../components/greeting/greeting';
import Header from '../components/header/header';

class MainPage {
  constructor() {
    document.body.innerHTML = '';
    document.body.append(new Header().element, new Greeting().element);
  }
}
export default MainPage;
