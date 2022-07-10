# Povio Assignment

The task was made using React and base in Typescript, thus there are two neccessary commands to start the app. 

### `npm install`

### `npm start`

# Front End 

The app frontend is developed in React paired with a couple of different libraries to make the app more scalable and easier to manage when it comes to certain parts of front end development. We have used purely functional components in this app and we try staying that way even when using third party libraries since all of them offer out of the box hooks(like react-redux useSelector and useDispatch) for an easier time developing.

## File structure

### Conatiners
Inside this folder we place the container for a specific view( or page depending on the naming). Inside this container most of the time we will have just a small component that connects two or 3 main smaller components and creates the view.

### Components
This folder contains our purest components that are essential for building everything on our app. In most cases all our inputs, cards, selects, search bars, icons and other things will have to be put here. This will not contain anything more than

### Services
This folder contains all our services. These services are 1 to 1 maps of our backend controllers. They are named as following <controller_name>.service.ts. This way we know exactly where we can find a specific route and it makes it easy to create functions for calling our backend and centralizing our backend route variable logic.

### Store
Right here we create our redux store and we configure it with all the necessary middleware(currently only redux-saga). We have two files used for just combining our reducers and our sagas which use the redux api and then we just use them inside our configureStore function. It is a pretty simple setup but centralized in this one single place so that we don't have our setup everywhere in our folder structure.
This folder inside their specific folders most of the time will have 4 important files.
#### `constants.ts`
Inside this file we keep all the constants linked with our redux store and actions(due to us not wanting to dispatch string literals but rather have constants to avoid typo errors). 
Also we have our scope variable that is a simple string telling the location of this container, this is created so that if we have LOAD_LOADING as a string 2 times in 2 different reducers redux will know which is which and won't dispatch both of them incorrectly. 
But the file is not limited to that. We can also keep our container constants so that we don't pollute our components with too much code. 
#### `actions.ts`
This file is nothing more than redux actions that we dispatch to the store. These actions are small functions that return a object with a type(this type being one of the constants inside our consants file) and a payload which redux will receive when dispatched.
#### `reducer.ts`
Right here we find the reducer specific to this container. We prefer having a reducer for each container since they are a complete feature with lots of data that needs to be stored as a state. Inside the reducer we define it's type and the initial state of the reducer. After we use immer to freeze the reducer and make it immutable so that we cannot change it outside our actions.
#### `saga.ts`
Inside here we setup a saga that handles our asynchronous side effects(most of the time api calls). This is a simple file where we use redux-saga tools paired with generater functions for handling api calls. Every call is a seperate function and is supposed to have 2 redux actions( a success and an error action). Everything is wrapped in a try catch so that if it fails we dispatch the erorr action(which in turn will respond with a toast message)

### Types
Here we put all our object types/interfaces since we are using typescript and we don't want to use any for our variable and function typing(Only in rare cases where we use any as a type of generic so that the function can be dynamic)

### Custom Hooks
This folder contains all our custom hooks that we will use in our application. For example one is for checking if user is logged in.

### Utils
Here we have different files called with <field_of_utility>.util.ts. We place files which have helper functions for specific fields of front end development. One of these that will be found on 90% of projects would be the date utility file, since date formatting can be a pain when using different formats.

## NPM Packages

### Axios
This package is used for making api calls to our backend and configuring it on app startup. It gives a lot of out of the box built in patterns for better usability( like interceptor pattern) but none of them are used due to simplicity of the app.

### React-toastify
A prebuilt toast library with useful functions and minimal setup for displaying messages. We use this to show success actions with asynchronous code

### React-redux
A library for state management in react used to keep state globally and interact with it in a really clean and concise manner. We use it's built in hooks for managing our states so that it is not lost through component lifecycles. We have our own structure when it comes to react-redux as mentioned above. We pair this library with immer.js

### Immer.js
Immer.js is a library used for immutability. It offers some really strong apis for tinkering with those immutable objects and it can also work as a really good extension for redux. It makes code shorter and more readable with it's idea of a draft(this draft is an object that we can change directly instead of having to use spread operators). Also this makes it that no programmer can change our reducers directly from the component(this happens a lot and changing state from the component is a big no no. So we use immer for making it how it should be "immutable". Had some bad experiences on old code where you had your reducers but it was changed everywhere and it was impossible to develop that way ).

### Redux-saga
A library that uses redux-thunk on its core for doing asynchronous api calls. We use this since axios in its nature has queue for each api calls and they do not run simultaneously. Redux-saga is a library that extends redux-thunk and makes writing code for side effects much easier and gives us a more readable management of it.   

### Formik
Formik is a library for form validations, super powerful and easy for implementation. You can write your own custom validations or it can combine with YUP.

### Testing

All our tests should be written next to the file as such <file_name>.test.ts. We do this so that we have an easier time finding tests for our code since doing a seperate directory
and trying to mimic the folder structure 1 to 1 is a really tough job and makes it confusing for everyone. We use jest as a default framework for testing.

#### `npm run test`
This command will run all the tests and will start watch mode, so any change you make it will automaticlly run all of the tests.
