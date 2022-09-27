import { httpPostClient } from 'data/protocols/http/http-post-client'

export class HttpPostClientSpy  implements httpPostClient{
  url?: string
  async post (url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
} 
