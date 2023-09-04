import { rest } from 'msw';

export const MOCK_DATA = [
    {
        "id": 0,
        "firstName": "Daenerys",
        "lastName": "Targaryen",
        "fullName": "Daenerys Targaryen",
        "title": "Mother of Dragons",
        "family": "House Targaryen",
        "image": "daenerys.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
    },
    {
        "id": 1,
        "firstName": "Samwell",
        "lastName": "Tarly",
        "fullName": "Samwell Tarly",
        "title": "Maester",
        "family": "House Tarly",
        "image": "sam.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/sam.jpg"
    },
    {
        "id": 2,
        "firstName": "Jon",
        "lastName": "Snow",
        "fullName": "Jon Snow",
        "title": "King of the North",
        "family": "House Stark",
        "image": "jon-snow.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg"
    },
    {
        "id": 3,
        "firstName": "Arya",
        "lastName": "Stark",
        "fullName": "Arya Stark",
        "title": "No One",
        "family": "House Stark",
        "image": "arya-stark.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/arya-stark.jpg"
    },
    {
        "id": 4,
        "firstName": "Sansa",
        "lastName": "Stark",
        "fullName": "Sansa Stark",
        "title": "Lady of Winterfell",
        "family": "House Stark",
        "image": "sansa-stark.jpeg",
        "imageUrl": "https://thronesapi.com/assets/images/sansa-stark.jpeg"
    },
    {
        "id": 5,
        "firstName": "Brandon",
        "lastName": "Stark",
        "fullName": "Brandon Stark",
        "title": "Lord of Winterfell",
        "family": "House Stark",
        "image": "bran-stark.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/bran-stark.jpg"
    },
    {
        "id": 6,
        "firstName": "Ned",
        "lastName": "Stark",
        "fullName": "Ned Stark",
        "title": "Lord of Winterfell",
        "family": "House Stark",
        "image": "ned-stark.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/ned-stark.jpg"
    },
    {
        "id": 7,
        "firstName": "Robert",
        "lastName": "Baratheon",
        "fullName": "Robert Baratheon",
        "title": "Lord of the Seven Kingdoms",
        "family": "House Baratheon",
        "image": "robert-baratheon.jpeg",
        "imageUrl": "https://thronesapi.com/assets/images/robert-baratheon.jpeg"
    }
]
export const handlers = [
  rest.get('https://thronesapi.com/api/v2/Characters', (req, res, ctx) => {
    // Simulate a successful response with mock data
    return res(
      ctx.status(200),
      ctx.json(MOCK_DATA)
    );
  }),
];