# Average Calculator React Microservice

This project is a React application that serves as an Average Calculator microservice. It exposes a REST API that allows users to fetch numbers based on qualified IDs and calculates their average.

## Project Structure

```
average-calculator-react
├── public
│   ├── index.html          # Main HTML file for the application
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── components
│   │   ├── AverageCalculator.tsx  # Component for handling API requests and state management
│   │   └── NumberList.tsx         # Component for displaying the list of numbers
│   ├── services
│   │   └── apiService.ts          # Service for making API calls to fetch numbers
│   ├── utils
│   │   └── numberUtils.ts         # Utility functions for calculating averages and managing state
│   ├── App.tsx                    # Main application component
│   ├── index.tsx                  # Entry point for the React application
│   └── styles
│       └── App.css                # CSS styles for the application
├── package.json                   # npm configuration file
├── tsconfig.json                  # TypeScript configuration file
├── README.md                      # Documentation for the project
└── .gitignore                     # Git ignore file
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd average-calculator-react
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- The application exposes a REST API at `http://localhost:9876/numbers/{numberid}` where `{numberid}` can be:
  - `p` for prime numbers
  - `f` for Fibonacci numbers
  - `e` for even numbers
  - `r` for random numbers

- The application will fetch numbers from a third-party server, store them uniquely, and calculate their average based on a defined window size.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.