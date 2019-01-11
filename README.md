# Nexus (code challenge)

Your objetive is to create an address book.

![Example](https://user-images.githubusercontent.com/1523379/50910291-ca33ff80-142d-11e9-8b17-97c9faf993cf.png)
<small>This is an example of the end result</small>

## Prologue

In this exercise the app is based on: React + styled-components + React-Router.
If you are not familiar with them you can check the documentation in the
following links:

- React https://reactjs.org/docs/getting-started.html
- styled-components https://www.styled-components.com/docs
- React-Router https://reacttraining.com/react-router/web/guides/quick-start

Around these libraries, we've created a few components and basic structure for
the project. These are some of its highlights:

- `/components` Contains basic components we are using in the project. Here are
  some files you do not need to worry about: `Theme`, `AddressBook`, `Layout`
  and `Router`.

  There is a component called `Icon`, it uses Material Icons to display
  different symbols. You can find the complete list of icons in:
  https://material.io/tools/icons/

- `/services` Contains the only service we are going to use along the app. You
  do not need to understand the code, it exposes a basic api (`create`,
  `delete`, `read`, `update`) that allows you to handle contacts of the address
  book.

  <small>Tip: This service includes a random delay in each call</small>

- `/test` This folder contains an example of a test you can make for the
  components.

## Run

First, clone the repo using the button at the top. Or if you prefer, you
can fork the project.

<img width="318" alt="screen shot 2019-01-09 at 5 49 43 pm" src="https://user-images.githubusercontent.com/1523379/50914522-028c0b80-1437-11e9-82fc-5689f5f11039.png">

Then, you need to install all the packages by running `npm install`. If you want
to start, you can run the application with `npm start`. You can pass the tests
by typing `npm test`.

## Exercise

### Detail view

After starting the application, you can see a list of contacts. If you click in
any of them, you'll see a new screen pending of content. You need to create this
screen in order to complete this first step of the test. At least, you'll need
to display 4 elements of each contact.

You can find the component is used for this screen under folder
`/components/ContactDetail`.

The information provided in each contact is (example):

```json
{
  "gender": "male",
  "name": { "title": "mr", "first": "samuel", "last": "leclercq" },
  "location": {
    "street": "1875 rue duguesclin",
    "city": "limoges",
    "state": "haute-garonne",
    "postcode": 29684,
    "coordinates": { "latitude": "69.4103", "longitude": "123.5518" },
    "timezone": {
      "offset": "+11:00",
      "description": "Magadan, Solomon Islands, New Caledonia"
    }
  },
  "email": "samuel.leclercq@example.com",
  "login": {
    "uuid": "10603ba0-6d76-4d8f-ad76-3a950cc85e91",
    "username": "orangecat805",
    "password": "terminat",
    "salt": "MMubXUFu",
    "md5": "6ddde7885879947ae9ba5ed0ad531665",
    "sha1": "d9bec8fb37602c695ae5f99c21a32c552099688d",
    "sha256": "d8c9bc15741927c1bde6bdbb7637d6582c0d959fe71e2615f97edcf727549355"
  },
  "dob": { "date": "1947-12-21T05:30:51Z", "age": 71 },
  "registered": { "date": "2014-10-12T18:41:35Z", "age": 4 },
  "phone": "01-43-49-72-52",
  "cell": "06-91-33-00-29",
  "id": "INSEE1NNaN0662230045",
  "picture": {
    "large": "https://randomuser.me/api/portraits/men/70.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/70.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/70.jpg"
  },
  "nat": "FR"
}
```

#### Optional

- Tests for your components
- Create animations for transitions, etc.
- Loader or similar in asynchronous tasks.
- Whatever you want to add :)
- Feel free to refactor whatever you want.

### Search

We need an improvement in our list, we want to be able to filter the list. You
can modify `contacts` service in any way. Remember: You can find the service
under `/services/contacts.js`.

![Search](https://user-images.githubusercontent.com/1523379/50913474-bb048000-1434-11e9-803d-35fb0f596d43.png)

<small>This is an example of the objective</small>

#### Optional

- Headers for any letter. (This includes sorting of the contacts).
- Index by letter (Right side)

### Add or edit contact (optional)

Finally, we need to create a new screen to add a new contact. Feel free to do
whatever you want.

### Refactor

If you think anything can be improved, please change it. e really like the boy
scouts' philosophy: "Leave things better than you found".
