# **Welcome to our website project: Arcadia**

Arcadia is a game-rating platform built to connect gamers worldwide, allowing users to discover popular titles, share insights, and engage in a community-driven space for all things gaming. With a mission to provide a comprehensive library of games enriched by user-generated reviews, Arcadia empowers users to explore new games and share experiences.


**Features Overview**

Arcadia adheres to the CRUD (Create, Read, Update, Delete) framework, allowing users to interact fully with game reviews on the platform:

- Create: Users can submit new reviews on each game's detail page, including a rating and comment. This feature lets each user contribute to the community by sharing their insights.
- Read: All reviews are displayed on the game’s detail page, and users can view average ratings and read all community feedback on each game.
- Update: Users can edit their previously submitted reviews, allowing them to update their feedback as their experience with a game changes.
- Delete: Users have the option to remove their reviews if they no longer want their comments or rating displayed.


**Firebase Integration**

Arcadia uses Firebase to manage our database and custom API, ensuring smooth and secure access to game data and reviews. By integrating Firebase, we can perform CRUD operations directly on our database and streamline updates across the platform.

- Firestore Database: All game data, including details and reviews, is stored and accessed through Firebase Firestore, making it easy to update and retrieve information in real-time.
- Custom API: Arcadia’s custom API, built using Firebase functions, manages game details and reviews efficiently. This API allows us to retrieve game data, post and update reviews, and compute the average rating, leveraging Firebase’s scalability and security.

# Project Functionalities


**Navigation and Pages**

Home Page: The main landing page introduces Arcadia’s purpose and displays a navigation bar that guides users to various parts of the site, including the games list.

About us Page: Displays information about Arcadia as well as those involved in creating the project.

Game List: The game list displays a collection of popular and trending games, pulled from our Firebase database via the custom API. Users can scroll through this list and select individual games to learn more.

Game Details Page: Clicking on a game in the list brings users to its details page, which includes a description, average rating, and community reviews, all retrieved from Firebase.

Navbar: Contains the buttons that allow the user to navigate throughout the website, as well as a search bar for desktop functionality 


**CRUD-Based Review System**

Review Creation: Users can add a review for each game by filling out the "Create Review" form on the game’s detail page. This form allows users to rate and comment on the game, adding to the overall community feedback and storing it in Firebase.

Review Editing: Each user’s submitted review includes an “Edit” button, which allows them to modify their rating or comments. When edited, Firebase updates the stored data, and the platform recalculates the average rating to reflect any changes.

Review Deletion: Users can delete their reviews, which removes their comments and rating from the game details. The average rating adjusts automatically, with Firebase recalculating the new average to reflect this removal.


**Conditional Rating Color Rendering**

Arcadia dynamically changes the color of each game’s rating, providing visual feedback for the quality of the game based on user reviews:

High Ratings: Ratings above a certain threshold appear in green.
Moderate Ratings: Average ratings are displayed in neutral colors.
Low Ratings: Ratings that fall below a threshold appear in red.


**Average Rating Calculation**

Each game’s overall rating is calculated based on the average rating of all user reviews stored in Firebase. As users submit, edit, or delete reviews, the platform recalculates this average using the custom API, ensuring that the displayed rating accurately represents the community’s feedback.

