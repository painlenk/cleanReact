export interface httpPostClient {
  post (url: string): Promise<void>
}
