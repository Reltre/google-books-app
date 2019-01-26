const sampleBookData = { kind: 'books#volumes',
      totalItems: 2,
      items:
       [ { kind: 'books#volume',
           id: 'ZYBTswEACAAJ',
           etag: 'wty4NKNbgSk',
           selfLink: 'https://www.googleapis.com/books/v1/volumes/ZYBTswEACAAJ',
           volumeInfo:
            { title: 'Dracula',
              authors: [ 'Stephanie Spinner' ],
              publisher: 'Turtleback',
              publishedDate: '1995',
              description:
               'Having deduced the double identity of Count Dracula, a wealthy Transylvanian nobleman, a small group of people vow to rid the world of the evil vampire.',
              industryIdentifiers:
               [ { type: 'ISBN_10', identifier: '0808545078' },
                 { type: 'ISBN_13', identifier: '9780808545071' } ],
              readingModes: { text: false, image: false },
              printType: 'BOOK',
              categories: [ 'Dracula, Count (Fictitious character)' ],
              maturityRating: 'NOT_MATURE',
              allowAnonLogging: false,
              contentVersion: 'preview-1.0.0',
              panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
              language: 'en',
              imageLinks:
              { smallThumbnail:
                 'http://books.google.com/books/content?id=T1VDAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnail:
                 'http://books.google.com/books/content?id=T1VDAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' },
              previewLink:
               'http://books.google.com/books?id=ZYBTswEACAAJ&dq=Dracula&hl=&cd=1&source=gbs_api',
              infoLink:
               'http://books.google.com/books?id=ZYBTswEACAAJ&dq=Dracula&hl=&source=gbs_api',
              canonicalVolumeLink:
               'https://books.google.com/books/about/Dracula.html?hl=&id=ZYBTswEACAAJ' },
           saleInfo:
            { country: 'US', saleability: 'NOT_FOR_SALE', isEbook: false },
           accessInfo:
            { country: 'US',
              viewability: 'NO_PAGES',
              embeddable: false,
              publicDomain: false,
              textToSpeechPermission: 'ALLOWED',
              epub: { isAvailable: false },
              pdf: { isAvailable: false },
              webReaderLink:
               'http://play.google.com/books/reader?id=ZYBTswEACAAJ&hl=&printsec=frontcover&source=gbs_api',
              accessViewStatus: 'NONE',
              quoteSharingAllowed: false },
           searchInfo:
            { textSnippet:
               'Having deduced the double identity of Count Dracula, a wealthy Transylvanian nobleman, a small group of people vow to rid the world of the evil vampire.' } },
         { kind: 'books#volume',
           id: '8xliPgAACAAJ',
           etag: 'orJ6WkUymyQ',
           selfLink: 'https://www.googleapis.com/books/v1/volumes/8xliPgAACAAJ',
           volumeInfo:
            { title: 'Dracula',
              authors: [ 'Stephanie Spinner' ],
              publisher: 'Random House Books for Young Readers',
              publishedDate: '1982',
              description:
               'Having discovered the double identity of the wealthy Transylvanian nobleman, Count Dracula, a small group of people vow to rid the world of the evil vampire.',
              industryIdentifiers:
               [ { type: 'ISBN_10', identifier: '0394948289' },
                 { type: 'ISBN_13', identifier: '9780394948287' } ],
              readingModes: { text: false, image: false },
              pageCount: 94,
              printType: 'BOOK',
              categories: [ 'Dracula, Count (Fictitious character)' ],
              maturityRating: 'NOT_MATURE',
              allowAnonLogging: false,
              contentVersion: 'preview-1.0.0',
              language: 'en',
              imageLinks:
              { smallThumbnail:
                 'http://books.google.com/books/content?id=T1VDAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnail:
                 'http://books.google.com/books/content?id=T1VDAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' },
              previewLink:
               'http://books.google.com/books?id=8xliPgAACAAJ&dq=Dracula&hl=&cd=2&source=gbs_api',
              infoLink:
               'http://books.google.com/books?id=8xliPgAACAAJ&dq=Dracula&hl=&source=gbs_api',
              canonicalVolumeLink:
               'https://books.google.com/books/about/Dracula.html?hl=&id=8xliPgAACAAJ' },
           saleInfo:
            { country: 'US', saleability: 'NOT_FOR_SALE', isEbook: false },
           accessInfo:
            { country: 'US',
              viewability: 'NO_PAGES',
              embeddable: false,
              publicDomain: false,
              textToSpeechPermission: 'ALLOWED',
              epub: { isAvailable: false },
              pdf: { isAvailable: false },
              webReaderLink:
               'http://play.google.com/books/reader?id=8xliPgAACAAJ&hl=&printsec=frontcover&source=gbs_api',
              accessViewStatus: 'NONE',
              quoteSharingAllowed: false },
           searchInfo:
            { textSnippet:
               'Wordsworth Classics covers a huge list of beloved works of literature in English and translations. This growing series is rigorously updated, with scholarly introductions and notes added to new titles.' } }
        ]
}
module.exports.sampleBookData = sampleBookData;