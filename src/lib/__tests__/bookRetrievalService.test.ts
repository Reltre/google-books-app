import { BookRetrieval }from '../bookRetrievalService'

describe("when a book is in Google's records", () => {
  test('returns a list of titles', async () => {
    const title = 'Dracula'
    const data = await BookRetrieval.search(title)
    expect(data.totalItems).toBeGreaterThan(0) 
  })
})

describe("when a book is not in Google's records", () => {
  test('returns a list of titles', async () => {
    const title = 'UMFDSFSnf123'
    const data = await BookRetrieval.search(title)
    expect(data.totalItems).toEqual(0) 
  })
})