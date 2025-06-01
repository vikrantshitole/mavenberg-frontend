# Mavenberg Frontend

A modern React-based frontend application built with TypeScript, Redux, and Material UI components.

## 🚀 Features

- Modern React with TypeScript
- Redux for state management
- Material UI components
- Responsive design with Tailwind CSS
- Protected routes with authentication
- Data visualization with Recharts
- Custom table components with Material React Table
- Error boundary implementation
- Lazy loading for better performance

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **UI Components**: Material React Table
- **Styling**: Tailwind CSS, SCSS
- **Build Tool**: Vite
- **Charts**: Recharts
- **HTTP Client**: Axios

## 📁 Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable components
├── hooks/         # Custom React hooks
├── layout/        # Layout components
├── pages/         # Page components
├── services/      # API services
├── store/         # Redux store configuration
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vikrantshitole/mavenberg-frontend.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔐 Authentication

The application implements protected routes using React Router and Redux for authentication state management. Users must be authenticated to access the dashboard and other protected routes.

## 📊 Components

### Core Components

- `ErrorBoundary` - Global error handling
- `PrivateRoute` - Route protection
- `Header` - Application header
- `Drawer` - Navigation drawer
- `CustomizedTable` - Enhanced table component
- `Analytics` - Data visualization
- `FallBack` - Loading state component

## 🎨 Styling

The project uses a combination of:
- Tailwind CSS for utility-first styling
- SCSS for custom styles
- Material UI components for consistent design

## 🔧 Configuration

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## 📝 License

[Add your license information here]

## 👥 Contributing

[Add contribution guidelines here]
