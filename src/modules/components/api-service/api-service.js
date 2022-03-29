const URL = './structure.json';

class ApiService {
  async getStructure() {
    const requestStructure = await fetch(URL);
    const arrayStructure = await requestStructure.json();
    return arrayStructure;
  }
}
export default ApiService;
