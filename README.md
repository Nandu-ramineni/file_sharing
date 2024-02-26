
# Eazzyshare

This is a file sharing application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can upload, download, and manage files securely.
![image](https://github.com/Nandu-ramineni/file_sharing/assets/123319320/2825e3cd-e5d2-4593-8960-0b9cb7b3ff19)

![image](https://github.com/Nandu-ramineni/file_sharing/assets/123319320/1b7c5b41-28ce-4b66-9ea8-efb1d9105ae1)

## Features

- File uploading: Users can upload files to the server.
- File downloading: Users can download files from the server.
- File management: Users can view, rename, delete files they uploaded.
- Access control: Files are only accessible to authorized users.

## Technologies Used

- MongoDB: Database for storing user data and file metadata.
- Express.js: Backend framework for handling HTTP requests and routing.
- React.js: Frontend library for building the user interface.
- Node.js: JavaScript runtime for building the backend server.
- JWT (JSON Web Tokens): Used for user authentication.
- Multer: Middleware for handling file uploads.
- Axios: HTTP client for making requests to the backend from the frontend.

## Setup Instructions

1. Clone the repository: `git clone https://github.com/yourusername/mern-file-sharing-app.git`
2. Navigate to the project directory: `cd mern-file-sharing-app`
3. Install dependencies:
   ```
   cd client
   npm install
   cd ..
   cd server
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
5. Start the backend server:
   ```
   cd backend
   npm start
   ```
6. Start the frontend:
   ```
   cd frontend
   npm run dev
   ```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

