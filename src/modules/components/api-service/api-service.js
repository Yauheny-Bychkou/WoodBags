const URL = './structure.json';
const firstElement = 0;

class ApiService {
  async getStructure(typeStructure) {
    const requestStructure = await fetch(URL);
    const arrayStructure = await requestStructure.json();
    const structure = arrayStructure.filter((elem) => elem.type === typeStructure);
    return structure[firstElement];
  }
}
export default ApiService;
