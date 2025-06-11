#Optical Character Recognition With Tesseract

## Index

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Start Application](#start-application)
- [Using Application](#using-application)
- [Tech Stack](#tech-stack)
- [Limitations](#limitations)
- [Future Improvements](#future-improvements)

## Description

A simple web application that uses React and tesseract.js to perform optical character recognition(OCR) when an image containing text is uploaded.

## Features

- Upload image files
- Extract printed text using Tesseract.js
- Display recognized text

## Installation

- Clone the repository:

  ```bash
  git clone https://github.com/AparnaKanakamedala/Optical-Character-Recognition-Tesseract.git
  ```

- Navigate to the Project Directory:

  ```bash
  cd <local-project-directory-name>
  ```

- Install Dependencies

  ```bash
  npm install
  ```

## Start Application

In the project directory, run the command -

`bash
    npm start
    `

The application automatically starts running on http://localhost:3000. You should see a browser window pop-up at this time. If it does not open automatically visit http://localhost:3000.

#### Make sure port 3000 is not in use before starting the application

## Using Application

1. Click "Choose File" to upload an image.
2. Wait for the spinner to finish.
3. Recognized text will appear below.

## Tech Stack

- React
- Tesseract.js
- JavaScript (ES6+)
- CSS

## Limitations

- Limited support for handwritten text
- No multi-language OCR yet.
- Does not support text download yet.

## Future Improvements

- Handwriting recognition
- Support for multiple image uploads
- Download extracted text
