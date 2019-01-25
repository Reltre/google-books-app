import { BookRetrieval }from '../bookRetrievalService'

describe("when a book is in Google's records", () => {
  test('returns a response with volumeInfo, title', () => {
    expect(BookRetrieval.search().volumeInfo).toHaveProperty('title') 
  })
  test('returns a response with volumeInfo, authors', () => {})
})
