# Project Management MERN

[Project Management MERN](https://github.com/biswadeep-roy/Project-Management-MERN/raw/main/client/src/assets/images/project-management-mern.png)

This is a comprehensive Project Management system built using the MERN (MongoDB, Express, React, and Node) stack, powered by Bootstrap for the frontend interface. The Project Management MERN repository is a powerful tool for managing your projects, tasks, and teams effectively.



![project_tracker](https://github.com/biswadeep-roy/Project-Management-MERN/assets/74821633/59a699db-ab0e-4f24-9cc4-cd7a0943d0df)

## Features

- User Authentication: Secure user registration and login system.
- Project Management: Create, update, and delete projects.
- Task Management: Create, update, and delete tasks within each project.
- User Management: Invite team members to collaborate on projects.
- Real-time Updates: Utilizes WebSockets for real-time project and task updates.
- Dashboard: A user-friendly dashboard to manage your projects and tasks.
- Task Prioritization: Assign priorities to tasks to manage work efficiently.
- Responsive Design: The application is designed to work seamlessly on various devices.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
``` bash
git clone https://github.com/biswadeep-roy/Project-Management-MERN.git
```
## 
2. Install server dependencies:

``` bash
cd server
npm install
``1


## 3. Install client dependencies:

``` bash
cd ../client
npm install
```

## 
4. Start the server:


``` bash
cd ../server
npm start
```

## 
5. Start the client:

``` bash
cd ../client
npm start
```


6. Open your web browser and navigate to `http://localhost:3000` to access the Project Management MERN application.

## Configuration

- The server expects a `config.env` file in the `/server/config/` directory. You should define the following variables:
- `MONGODB_URI`: MongoDB connection URI
- `JWT_SECRET`: Secret key for JSON Web Tokens
- `NODE_ENV`: Either "development" or "production"
- `PORT`: Port number for the server (default is 5000)
- `WS_PORT`: Port number for WebSockets (default is 5001)

## Contributing

We welcome contributions to enhance the functionality and usability of this project. If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes with clear and concise messages.
5. Push your changes to your forked repository.
6. Create a pull request to the main repository.

Please ensure that your code follows the coding standards and includes relevant documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, feel free to contact the project maintainer:

- Biswadeep Roy
- Email: biswadeeproy1230@gmail.com
- GitHub: [https://github.com/biswadeep-roy](https://github.com/biswadeep-roy)

Happy Project Management with MERN! 🚀🔧📊
