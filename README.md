# Crypto Arb Dash

A React-based dashboard for cryptocurrency arbitrage opportunities. This application compares prices across multiple exchanges, analyzes price differences, and allows users to create or cancel orders directly.

### Table of Contents

* Features
* Installation
* Usage
* Configuration
* Technologies
* Contact

### Features

* **Price Comparison:** Real-time comparison of cryptocurrency prices from various exchanges (e.g., Binance, WhiteBIT).
* **Price Difference Analysis:** Identifies arbitrage opportunities by calculating and visualizing price spreads.
* **Order Management:** Create, monitor, and cancel trading orders seamlessly.
* **User-Friendly Dashboard:** Interactive UI with charts, alerts, and customizable views.
* **API Integration:** Connects to exchange APIs for live data fetching.

### Installation

To get started with the project locally:

1. Clone the repository: git clone https://github.com/your-username/crypto-arb-dash.git

2. Navigate to the project directory: cd crypto-arb-dash

3. Install dependencies: `npm install` or `yarn install`

### Usage

Run the development server: `npm run dev` or `yarn dev`

Open http://localhost:5173 in your browser to view the app.

For production build: `npm run build` or `yarn build`

Preview the production build: `npm run preview` or `yarn preview`

### Configuration

* **Environment Variables:** Create a .env file in the root directory and add your API keys for exchanges (e.g., VITE_BINANCE_API_KEY=your_key).
* **Supported Exchanges:** Currently supports Binance, and WhiteBIT. Add more in src/config/exchanges.js.
* **Customization:** Adjust themes, charts, or alert thresholds in src/components/Settings.

### Technologies

Frontend: React
Language: TypeScript
Bundler: Vite
State Management: Context API
Charts: Recharts
API Handling: Axios
Styling: Tailwind CSS
Testing: Jest and React Testing Library

### Contact

* Author: Andrii Chernov

Thank you for checking out Crypto-Arb-Dash! If you find it useful, consider starring the repo ⭐.
