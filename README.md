#useEffect-lab-2

In this activity we will use GitHub Users API to fetch the user’s public information with their usernames.

This is the API link we will use:

`https://api.github.com/users/${username}`

You are supposed to update one page and two components:

1. index page: Responsible for the fetch operation and storing the state changes in the application.
2. Form component: A search bar to get the user input for the GitHub username to be fetched.
3. UserCard component: A reusable component to display the GitHub user information.

##Instructions:

1. In the index.jsx page, we should have two states, one for input from the user and a second one to store the response from the API. We need to fetch the user data, every time there is an update to the username. To achieve this, you are going to have to use `useEffect`.

2. Write a function that gets a response from GitHub users API.

3. In the Form.jsx create a state and connect it to the input.

4. The UserCard.jsx should receive the user data from the response and just displays it in any chosen format.
