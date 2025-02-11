
---

# Candidate Search Application

## Description

This is a TypeScript-based candidate search application that interfaces with the GitHub API to help employers identify potential candidates for job openings. The application allows users to view candidate details (name, username, location, avatar, email, company, and more) and save potential candidates to a list. Users can browse candidates and manage their list of potential hires, all while ensuring the data persists after page reloads.

The backend API has already been set up to retrieve data from GitHub. Your task is to complete the front-end using TypeScript, fetch data from the backend, and deploy the app to Render.

### Key Features

- View candidate details (name, username, location, avatar, email, company, etc.)
- Save candidates to a potential hires list
- Browse through candidates with “+” and “-” buttons
- Display a message when no more candidates are available
- Persistent list of potential candidates that survives page reloads

## User Story

**AS** an employer  
**I WANT** a candidate search application  
**SO THAT** I can hire the best candidates

## Acceptance Criteria

- **Candidate Display**: Upon loading the application, the information for one candidate is displayed.
- **Navigation**: Clicking the "+" button saves the candidate to the list and moves to the next candidate. Clicking the "-" button skips the current candidate.
- **Empty State**: If no more candidates are available, a message will indicate this.
- **Potential Candidates Page**: A separate page displays the list of saved candidates, including their details.
- **Persistence**: The list of saved candidates persists even after reloading the page.
- **No Candidates Message**: If no candidates are saved, a message will indicate this.

## Installation

1. Clone this repository:  
   `git clone <repository-url>`
   
2. Navigate into the project folder:  
   `cd <project-folder>`

3. Install dependencies:  
   `npm install`

4. Start the development server:  
   `npm start`

## Deployment

- Deploy the application to Render following the standard deployment process for full-stack applications.

## Contribution

This project would not have been possible without the help and contributions of the following individuals:

A special thank you to my classmates for their support and collaboration, and to ChatGPT for providing valuable guidance throughout the development process.

Feel free to fork the repository, make improvements, and open pull requests.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

