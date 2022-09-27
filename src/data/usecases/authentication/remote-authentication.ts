import { httpPostClient } from 'data/protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor(private readonly url: string, private readonly httpClient: httpPostClient) {

  }
  async auth  (): Promise<void> {
    await this.httpClient.post(this.url)
    
  }
}
