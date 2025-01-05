# MeChat - Real-Time Chat Application

**MeChat** is a simple, real-time chat application built with **Express** and **Socket.io**. It allows you to instantly chat with anyone by sharing a unique URL, making it similar to platforms like **Codeshare**. 

In addition to text chatting, you can send images, which are hosted temporarily on **ImgBB** and deleted after 10 minutes. There is no persistent storage for chats—every time you refresh the page, the chat history is reset.

## Features

- **Real-time chat**: Communicate instantly with anyone by sharing a unique URL.
- **Image sharing**: Send images that are hosted on **ImgBB** and automatically deleted after 10 minutes.
- **No storage**: Chat history is not stored anywhere and is reset upon refresh.
- **Easy to use**: Just share a link, and start chatting!

## Demo

Check out a live demo of **MeChat**: [Your Demo Link Here]

## Installation

### Prerequisites

Ensure you have **Node.js** and **npm** installed. If not, download and install from [here](https://nodejs.org/).

### Steps to Install

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/avinash-sharma-0112/meChat.git
    ```

2. Navigate to the project directory:

    ```bash
    cd meChat
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm run test
    ```

    The application will be running on `http://localhost:3000` by default.

## Usage

1. Open the app by navigating to the base URL (`http://localhost:3000` or the deployed URL).
2. Share the URL with anyone to begin chatting instantly.
3. To send an image, use the image upload feature. The image will be hosted on **ImgBB** for 10 minutes.
4. If you refresh the page, the chat history will be reset.

### Example URL Format

- `{baseUrl}/room1`
- `{baseUrl}/room2`
- `{baseUrl}/room123`

Each room is uniquely identified by the URL.

## Technologies Used

- **Express.js**: A fast and lightweight web framework for Node.js.
- **Socket.io**: Enables real-time, bidirectional communication between the server and clients.
- **ImgBB API**: For temporary image hosting.
  
## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

---

Created with ❤️ by [Avinash Sharma](https://github.com/avinash-sharma-0112).
