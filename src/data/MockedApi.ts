export default function getSearchProducts() {
  const loading = false
  const error = false

  const data = {
    amazonProductSearchResults: {
      productResults: {
        pageInfo: {
          currentPage: 1,
          totalPages: 7,
          hasNextPage: true,
          hasPrevPage: false,
        },
        results: [
          {
            asin: 'B0C2XQNH5K',
            title:
              'WestinTrends Malibu Outdoor Dining Table for 6, All Weather Poly Lumber Adirondack 71" Trestle Long Dining Table with Umbrella Hole, Sand',
            rating: null,
            ratingsTotal: null,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61QdYX00xnL._AC_UL320_.jpg',
            price: {
              display: '$599.99',
            },
          },
          {
            asin: 'B00SY2RA7M',
            title: 'COSCO 20" x 48" Vinyl Top Folding Table, Black',
            rating: 4.6,
            ratingsTotal: 2811,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71-weo7iGtS._AC_UL320_.jpg',
            price: {
              display: '$40.17',
            },
          },
          {
            asin: 'B07FL6D1Z8',
            title:
              'Furinno Just 3-Tier Turn-N-Tube End Table / Side Table / Night Stand / Bedside Table with Plastic Poles, 1-Pack, French Oak Grey/Black',
            rating: 4.5,
            ratingsTotal: 21291,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/716RUsUozWL._AC_UL320_.jpg',
            price: {
              display: '$17.67',
            },
          },
          {
            asin: 'B07KXBL861',
            title: 'SHW 48" Triangle-Leg Home Office Computer Desk, Oak',
            rating: 4.6,
            ratingsTotal: 19167,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81OOnimOr4L._AC_UL320_.jpg',
            price: {
              display: '$99.97',
            },
          },
          {
            asin: 'B01CZUU8LI',
            title:
              'Convenience Concepts Oxford Console Table with Shelf, Espresso',
            rating: 4.6,
            ratingsTotal: 8401,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71MAqF4hauL._AC_UL320_.jpg',
            price: {
              display: '$49.00',
            },
          },
          {
            asin: 'B075F9KTQW',
            title:
              'ZINUS Jennifer 55 Inch White Frame Desk / Computer Workstation / Office Desk / Dining Table / Easy Assembly, Natural',
            rating: 4.7,
            ratingsTotal: 9978,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61G++ArRVZL._AC_UL320_.jpg',
            price: {
              display: '$156.99',
            },
          },
          {
            asin: 'B085ZTKCNW',
            title:
              'CubiCubi Computer Desk 32" Study Writing Table for Home Office, Modern Simple Style PC Desk, Black Metal Frame, White',
            rating: 4.7,
            ratingsTotal: 42014,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71ImH5B8DVL._AC_UL320_.jpg',
            price: {
              display: '$59.99',
            },
          },
          {
            asin: 'B001D25TJQ',
            title: 'Cosco Folding Table, 6 Foot, White',
            rating: 4.7,
            ratingsTotal: 16798,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/31E8N6qsyoL._AC_UL320_.jpg',
            price: {
              display: '$70.59',
            },
          },
          {
            asin: 'B06XZV3F8F',
            title:
              'Coavas Folding Desk No Assembly Required, 39.4 inch Writing Computer Desk Space Saving Foldable Table Simple Home Office Desk,Brown',
            rating: 4.7,
            ratingsTotal: 26377,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71TVa-V3eNL._AC_UL320_.jpg',
            price: {
              display: '$59.98',
            },
          },
          {
            asin: 'B07MKQGJSW',
            title:
              'Amazon Basics Classic TV Dinner Folding Trays with Storage Rack - Set of 4, Natural',
            rating: 4.4,
            ratingsTotal: 22677,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81sLmjFsLrL._AC_UL320_.jpg',
            price: {
              display: '$47.39',
            },
          },
          {
            asin: 'B07TTTG49V',
            title:
              'Amazon Basics Round Storage End Table, Side Table with Cloth Basket, Charcoal/Heather Gray, 18 in x 18 in x 19 in',
            rating: 4.5,
            ratingsTotal: 8584,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81Z9Xn8xiqL._AC_UL320_.jpg',
            price: {
              display: '$53.39',
            },
          },
          {
            asin: 'B07HGKLLQC',
            title:
              'Amazon Basics 24 x 48 Inch Rectangular School Activity Kids Table, Ball Glide Legs, Adjustable Height 19-30 Inch, Grey and Black',
            rating: 4.4,
            ratingsTotal: 580,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71kQgMdfAGL._AC_UL320_.jpg',
            price: {
              display: '$132.98',
            },
          },
          {
            asin: 'B01MXKMRK4',
            title:
              'Amazon Brand - Ameriwood Home Rectangular Candon Writing Desk With 1 Drawer, Distressed Oak, Medium Brown, 19.5 in x 45 in x 30.1 in',
            rating: 4.4,
            ratingsTotal: 746,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71WHgZp1ehL._AC_UL320_.jpg',
            price: {
              display: '$140.24',
            },
          },
          {
            asin: 'B09VGLN7BS',
            title:
              'POVISON Modern Dining Table, Sintered Stone Tabletop Dining Room Table for 6-7, Solid Black Carbon Steel Base, 63"',
            rating: 4,
            ratingsTotal: 1,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81MOlwhXwdL._AC_UL320_.jpg',
            price: {
              display: '$959.00',
            },
          },
          {
            asin: 'B01CZUU8LI',
            title:
              'Convenience Concepts Oxford Console Table with Shelf, Espresso',
            rating: 4.6,
            ratingsTotal: 8401,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71MAqF4hauL._AC_UL320_.jpg',
            price: {
              display: '$49.00',
            },
          },
          {
            asin: 'B07FKX3H1H',
            title:
              'Furinno Just 3-Tier Turn-N-Tube End Table / Side Table / Night Stand / Bedside Table with Plastic Poles, 1-Pack, Columbia Walnut/Black',
            rating: 4.5,
            ratingsTotal: 11081,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71fIsr+PutL._AC_UL320_.jpg',
            price: {
              display: '$13.82',
            },
          },
          {
            asin: 'B00NIYX9LC',
            title: 'FURINNO Simplistic Study Table, Espresso',
            rating: 4.1,
            ratingsTotal: 15469,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51ZEw4QTV7L._AC_UL320_.jpg',
            price: {
              display: '$33.34',
            },
          },
          {
            asin: 'B075F9KPQH',
            title:
              'ZINUS Jennifer 55 Inch Black Frame Desk / Computer Workstation / Office Desk / Easy Assembly, Deep Espresso',
            rating: 4.7,
            ratingsTotal: 9978,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81dS3mqWnnL._AC_UL320_.jpg',
            price: {
              display: '$54.00',
            },
          },
          {
            asin: 'B08GCLLRKM',
            title:
              'AZL1 Life Concept Console Table, Sofa Table for Living Room，Hallway，Entryway, Entrance Hall, Corridor - Wood Look Metal Frame',
            rating: 4.5,
            ratingsTotal: 334,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51a1jv4GC7S._AC_UL320_.jpg',
            price: {
              display: '$30.05',
            },
          },
          {
            asin: 'B0BVQG7TXY',
            title:
              'ODK 32 inch Small Computer Desk Study Table for Small Spaces Home Office Student Laptop PC Writing Desks with Storage Bag Headphone Hook, Espresso Gray',
            rating: 4.4,
            ratingsTotal: 12049,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71VKUXjbW8L._AC_UL320_.jpg',
            price: {
              display: '$39.87',
            },
          },
          {
            asin: 'B0C58SLRF1',
            title:
              'Small Computer Desk Small Office Desk 31 Inch Writing Desk Home Office Desks Small Space Desk Study Table Modern Simple Style Work Table with Storage Bag and Iron Hook, Wooden Desk for Home, Bedroom',
            rating: 4.5,
            ratingsTotal: 155,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71hWBKwRtQL._AC_UL320_.jpg',
            price: {
              display: '$34.65',
            },
          },
          {
            asin: 'B00IZCW4Q8',
            title: 'Furinno Simple Design Coffee Table, Dark Brown',
            rating: 4.1,
            ratingsTotal: 1833,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51SkB6VtgDL._AC_UL320_.jpg',
            price: {
              display: '$22.96',
            },
          },
          {
            asin: 'B01CP3DSAI',
            title:
              'FURINNO Turn-N-Tube Haydn End Table, 1-Pack, French Oak Grey/Black',
            rating: 4.5,
            ratingsTotal: 4285,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61iwhBmJLaL._AC_UL320_.jpg',
            price: {
              display: '$14.30',
            },
          },
          {
            asin: 'B08XX3V5DD',
            title:
              'Furinno Modern Simplistic Criss-Crossed Coffee Table, 35.4 in x 19.6 in x 16 in, French Oak Grey',
            rating: 3.5,
            ratingsTotal: 1346,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51mzdHOFD8L._AC_UL320_.jpg',
            price: {
              display: '$30.96',
            },
          },
          {
            asin: 'B09SB6LHS1',
            title:
              '35/39/47 Inch Computer Desk Home Office Desk Writing Study Table Modern Simple Style PC Desk with Metal Frame Gaming Desk Workstation for Small Space (Vintage, 39 inch)',
            rating: 4.5,
            ratingsTotal: 160,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61-+sl0MtdL._AC_UL320_.jpg',
            price: {
              display: '$39.99',
            },
          },
          {
            asin: 'B09HJFV688',
            title: 'SHW Home Office 32-Inch Computer Desk, Black',
            rating: 4.6,
            ratingsTotal: 23028,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/411kGNBQ4AL._AC_UL320_.jpg',
            price: {
              display: '$49.87',
            },
          },
          {
            asin: 'B01K6PLW4Q',
            title:
              'Sauder North Avenue Coffee Table, Charter Oak finish, L: 31.50" x W: 20.00" x H: 16.54"',
            rating: 4.5,
            ratingsTotal: 5591,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71Z+TfZ9n8L._AC_UL320_.jpg',
            price: {
              display: '$49.00',
            },
          },
          {
            asin: 'B00DOZTM3O',
            title:
              'CoscoProducts Deluxe 6 foot x 30 inch Fold-in-Half Blow Molded Folding Table, Black',
            rating: 4.7,
            ratingsTotal: 16798,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61o-HmSlBLL._AC_UL320_.jpg',
            price: {
              display: '$70.79',
            },
          },
          {
            asin: 'B085ZTKCNW',
            title:
              'CubiCubi Computer Desk 32" Study Writing Table for Home Office, Modern Simple Style PC Desk, Black Metal Frame, White',
            rating: 4.7,
            ratingsTotal: 42014,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71ImH5B8DVL._AC_UL320_.jpg',
            price: {
              display: '$59.99',
            },
          },
          {
            asin: 'B0BK8VQR7H',
            title:
              'CCCEI Small Side Table with USB-C Fast Charging Station, White Rectangle End Table with Electrical Outlets and USB Ports, for Small Spaces, Bedside, Couch.',
            rating: 4.1,
            ratingsTotal: 41,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51y2+CEtNWL._AC_UL320_.jpg',
            price: {
              display: '$23.79',
            },
          },
          {
            asin: 'B07HG5Q8TP',
            title:
              'Furinno Just 3-Tier Turn-N-Tube End Table / Side Table / Night Stand / Bedside Table with Plastic Poles, 1-Pack, Americano/Black',
            rating: 4.5,
            ratingsTotal: 10355,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61vmuh8x7-L._AC_UL320_.jpg',
            price: {
              display: '$17.97',
            },
          },
          {
            asin: 'B07Q5VNZR1',
            title:
              'Furinno Just 3-Tier Turn-N-Tube End Table / Side Table / Night Stand / Bedside Table with Plastic Poles, 1-Pack, Sonoma Oak/White',
            rating: 4.5,
            ratingsTotal: 21291,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71jzV2XeXcL._AC_UL320_.jpg',
            price: {
              display: '$17.00',
            },
          },
          {
            asin: 'B09H2NZ2JW',
            title:
              'Bonzy Home Computer Desk with 3 Tiers Shelf, 48" Home Office Desk with Hutch Modern Writing Table Workstation, Brown',
            rating: 4.6,
            ratingsTotal: 27,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/91QwedyTdQL._AC_UL320_.jpg',
            price: {
              display: '$45.99',
            },
          },
          {
            asin: 'B09F31LY6D',
            title:
              "PayLessHere Computer Desk 47'', Modern Writing Desk, Simple Study Table, Industrial Office Desk, Sturdy Laptop Table for Home Office, Nature",
            rating: 4.6,
            ratingsTotal: 809,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71O1C+R6qtL._AC_UL320_.jpg',
            price: {
              display: '$24.99',
            },
          },
          {
            asin: 'B08XQ4FQTP',
            title:
              'Homall L Shaped Gaming Desk Computer Corner Desk PC Gaming Desk Table with Large Monitor Riser Stand for Home Office Sturdy Writing Workstation (Black, 51 Inch)',
            rating: 4.5,
            ratingsTotal: 5197,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71duv9a2mqL._AC_UL320_.jpg',
            price: {
              display: '$69.99',
            },
          },
          {
            asin: 'B0006D50RO',
            title:
              'Lifetime 28241 Adjustable Folding Laptop Table TV Tray, 30 inch, White Granite',
            rating: 4.8,
            ratingsTotal: 5281,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61bvzrSqJJL._AC_UL320_.jpg',
            price: {
              display: '$43.99',
            },
          },
          {
            asin: 'B0BYDFF12T',
            title:
              'Fixwal Side Table End Table 3 Tier White Nightstand Small Bookshelf Bookcase for Small Spaces, Bedroom, Living Room, Bathroom, Office, Dorms',
            rating: 3.8,
            ratingsTotal: 53,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61OW0abpLwL._AC_UL320_.jpg',
            price: {
              display: '$22.99',
            },
          },
          {
            asin: 'B00OR1KMRO',
            title: 'Furinno Simplistic a Frame Computer Desk, Espresso',
            rating: 4,
            ratingsTotal: 29989,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/41kCm-cl6sL._AC_UL320_.jpg',
            price: {
              display: '$30.10',
            },
          },
          {
            asin: 'B0B1V2FS34',
            title:
              'CHENGU Spandex Tablecloth Fitted Stretch Tablecloth Elastic Fitted Picnic Table Cover Washable Folding Table Cover Rectangle Polyester Tablecloth for Picnic Party (Black, 6ft)',
            rating: 4.2,
            ratingsTotal: 115,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51SkuZUxFdL._AC_UL320_.jpg',
            price: {
              display: '$22.99',
            },
          },
          {
            asin: 'B00631YUEM',
            title:
              'Furinno Just 3-Tier Turn-N-Tube End Table / Side Table / Night Stand / Bedside Table with Plastic Poles, 1-Pack, White/White',
            rating: 4.5,
            ratingsTotal: 16520,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61qQY-rqV0L._AC_UL320_.jpg',
            price: {
              display: '$13.11',
            },
          },
          {
            asin: 'B0C2YZ4NMC',
            title:
              'End Table Nightstands Set of 2, 3-Tier Bedside Tables, Nightstand Accent Table for Couch, 5-Tier Shelf Bookcase, Living Room, Bedroom, Rustic Brown and Black, Easy Assembly.',
            rating: 5,
            ratingsTotal: 1,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61qbI0eGZYL._AC_UL320_.jpg',
            price: {
              display: 'Join Prime to buy this item at $23.99',
            },
          },
          {
            asin: 'B097JJKSGX',
            title:
              'Round Side Table,2-Tier Foldable Metal End Table with Removable Wood Tray,Small Coffee Table for Living Room,Rustic Brown',
            rating: 4.6,
            ratingsTotal: 177,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61T3xWcAH4L._AC_UL320_.jpg',
            price: {
              display: '$21.69',
            },
          },
          {
            asin: 'B003VP10PK',
            title: 'Furinno Simple Design End/SideTable, Espresso',
            rating: 4.4,
            ratingsTotal: 10549,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51s0FECr-BL._AC_UL320_.jpg',
            price: {
              display: '$16.82',
            },
          },
          {
            asin: 'B0BV6KN8Q8',
            title:
              'QEEIG C Shaped End Table Set of 2 Slim Couch Side Tables Living Room Bedroom Narrow Skunny Thin Small Farmhouse, Rustic Brown',
            rating: null,
            ratingsTotal: null,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61E1dVaTeHL._AC_UL320_.jpg',
            price: {
              display: '$39.82',
            },
          },
          {
            asin: 'B09FJJJ2S5',
            title:
              'LIDYUK End Table with Charging Station, Flip Top Side Table with USB Ports and Outlets, Nightstand for Small Spaces, Bedside Tables with Storage Shelf for Living Room, Bedroom, Brown',
            rating: 4.6,
            ratingsTotal: 1986,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71Wdu7uxrDL._AC_UL320_.jpg',
            price: {
              display: '$79.99',
            },
          },
          {
            asin: 'B0BJDR28S7',
            title:
              'ECOMEX 3-Tier End Tables,Side Table with Storage Shelf for Living Room, Small Bedside Table for Bedroom,Rustic Brown',
            rating: 4.4,
            ratingsTotal: 28,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71M32X-ZCeL._AC_UL320_.jpg',
            price: {
              display: '$22.99',
            },
          },
          {
            asin: 'B0BWJMKQX1',
            title:
              'Coleshome 32 Inch Computer Desk, Modern Simple Style Desk for Home Office, Study Student Writing Desk, Black',
            rating: 4.5,
            ratingsTotal: 24548,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71e1nXjktAL._AC_UL320_.jpg',
            price: {
              display: '$39.99',
            },
          },
          {
            asin: 'B0BTNRY94Z',
            title:
              'ODK L Shaped Gaming Desk, 51 Inch Computer Desk with Monitor Stand, PC Gaming Desk, Corner Desk Table for Home Office Sturdy Writing Workstation, Carbon Fiber Surface, Black',
            rating: 4.6,
            ratingsTotal: 63,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71yZ49lg6NL._AC_UL320_.jpg',
            price: {
              display: '$69.99',
            },
          },
          {
            asin: 'B00D49B0US',
            title:
              'Best Choice Products 6ft Plastic Folding Table, Indoor Outdoor Heavy Duty Portable w/Handle, Lock for Picnic, Party, Camping - White',
            rating: 4.6,
            ratingsTotal: 8548,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61mU+7VlqKL._AC_UL320_.jpg',
            price: {
              display: '$89.99',
            },
          },
          {
            asin: 'B086Z7LFBB',
            title: 'Honey-Can-Do C End Table TBL-08725 Black',
            rating: 4.6,
            ratingsTotal: 2018,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71GMTvaBDEL._AC_UL320_.jpg',
            price: {
              display: '$19.00',
            },
          },
          {
            asin: 'B0C33J219X',
            title:
              'Desk Computer Desk with Shelves, Home Office Desks Table 47 Inch PC Desk Bedroom Desk Work Desk Study Desk Wood Desk with Storage Removable Middle Shelf for Dorm, Student, Gaming',
            rating: 4.4,
            ratingsTotal: 46,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61NHVTEYzzL._AC_UL320_.jpg',
            price: {
              display: '$59.99',
            },
          },
          {
            asin: 'B0C5GMD7C1',
            title:
              'Nazhura 4 Foot Foldable/Folding Table Heavy Duty, Durable and Portable for Dining Picnic and Party (White) (White, 4 Foot)',
            rating: 5,
            ratingsTotal: 2,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51cSsTXrqnL._AC_UL320_.jpg',
            price: {
              display: '$59.95',
            },
          },
          {
            asin: 'B075N8JZ5N',
            title: 'FURINNO Modern Simplistic Coffee Table, Espresso',
            rating: 3.4,
            ratingsTotal: 1019,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/41sy-WZOGiL._AC_UL320_.jpg',
            price: {
              display: '$28.24',
            },
          },
          {
            asin: 'B0BWXXBF2W',
            title:
              'Tribesigns 6.5 Ft Conference Room Table, Rustic Rectangle 78.74L X 39.2W X 29.52H Inches Wood Seminar Table for Office, Conference Room,2 Separate Tables (2)',
            rating: 5,
            ratingsTotal: 1,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/91yx5qU+LkL._AC_UL320_.jpg',
            price: {
              display: '$279.99',
            },
          },
          {
            asin: 'B0BS3TV521',
            title:
              'Narrow Console Table with Power Outlets, 29.5" Small Entryway Table with Charging Station, Thin Sofa Table, Side Table, for Hallway, Bedroom, Living Room, Rustic Brown and Black BF75UXG01',
            rating: null,
            ratingsTotal: null,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61qHHm4mZvL._AC_UL320_.jpg',
            price: {
              display: '$39.99',
            },
          },
          {
            asin: 'B083FPLNM7',
            title:
              'Furinno Turn-N-Tube Tall End Table, French Oak Grey/Black/Black',
            rating: 4.3,
            ratingsTotal: 7121,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71EVaAZkdqL._AC_UL320_.jpg',
            price: {
              display: '$23.11',
            },
          },
          {
            asin: 'B07FKRG3YN',
            title:
              'Furinno Andrey End Table / Side Table / Night Stand / Bedside Table with Bin Drawer, Columbia Walnut/Dark Brown',
            rating: 4.1,
            ratingsTotal: 54262,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51Y+n3kZ7OL._AC_UL320_.jpg',
            price: {
              display: '$14.60',
            },
          },
          {
            asin: 'B005QLJL76',
            title: 'DHP Rosewood Tall End Table',
            rating: 4.5,
            ratingsTotal: 6140,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61V2LZEv+DL._AC_UL320_.jpg',
            price: {
              display: '$29.00',
            },
          },
        ],
      },
    },
  }

  return { data, loading, error }
}
