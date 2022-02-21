import delay from '../../utils/delay';
import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) { // Se não for um application/json, ele não posso usar o método .json pra coverter e da um erro
      body = await response.json();
    }

    if (response.ok) { // response.ok === response.status >= 200 && response.status <= 299
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
