# AI Model Project

This project contains an AI model implemented in Python. It provides a simple API with two endpoints: one for returning a "Hello World" message and another for processing an image and returning information about it.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Docker](#docker)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project, you need to have Docker installed on your machine. Follow these steps to set up and run the project:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ai-model-project.git
    cd ai-model-project
    ```
2. Building the Docker Image

```sh
docker build -t ai-model -f model.dockerfile .
```
3. Procfile
Procfile is also provided to assign web commands.

## Usage

Once the Docker container is running, the API will be available at `http://localhost:8000`.

## API Endpoints

### GET /

- **Description**: Returns a "Hello World" message.
- **URL**: `/`
- **Method**: `GET`
- **Response**:
    ```json
    {
        "message": "Hello World"
    }
    ```

### POST /process

- **Description**: Processes an image and returns information about it.
- **URL**: `/process`
- **Method**: `POST`
- **Parameters**:
    - `text` (query parameter): A string parameter required in the query.
    - `image` (form-data multipart): An image file uploaded as form-data.
- **Response**: JSON object containing information about the image.
- **Example cURL request**:
    ```sh
    curl -X POST http://localhost:8000/process \
    -F "text=your_query_string" \
    -F "image=@path_to_your_image_file"
    ```

## Docker Running the Docker Container

```sh
docker run -it -p 8000:8000 ai-model
```
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

This project includes a `Dockerfile` to simplify the setup and deployment process. Using Docker ensures a consistent environment for running the project.


