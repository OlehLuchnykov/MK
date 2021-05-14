class Http {
  constructor() {
    this.apiUrl = 'http://reactmarathon-api.herokuapp.com/api/mk';
  }

  get = async (url) => {
    const body = await fetch(url);
    return await body.json();
  }

  post = async (url, options) => {
    const body = await fetch(url, options);
    return await body.json();
  }

  fight = async({hit, defence}) => {
    try {
      return (await this.post(`${this.apiUrl}/player/fight`, {
        method: 'POST',
        body: JSON.stringify({
          hit,
          defence,
        })
      }));
    } catch(error) {
      console.log(error);
    }

  }

  getPlayers = () => {
    return this.get(`${this.apiUrl}/players`);
  }

  getRandomPlayer = async () => {
    return await this.get(`${this.apiUrl}/player/choose`);
  }
}

export default Http;
