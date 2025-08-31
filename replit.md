# NutriScan AI - Food Waste Reduction App

## Overview

NutriScan AI is a Progressive Web Application (PWA) designed to help households and businesses reduce food waste through intelligent inventory management. The app aligns with UN Sustainable Development Goal 2: Zero Hunger by providing AI-powered expiry predictions, realistic inventory tracking, and smart notifications. Built using vanilla HTML, CSS, and JavaScript, the application focuses on practical utility with features like purchase date-based expiry calculations, fuzzy food recognition, quantity tracking, and browser-based notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Vanilla HTML5, CSS3, and ES6+ JavaScript
- **Design Pattern**: Multi-page application with shared navigation and styling
- **Component Structure**: Five main pages (index, input, dashboard, about, pricing) with modular CSS and centralized JavaScript
- **Progressive Web App**: Implements PWA standards with manifest.json and service worker for offline functionality
- **Responsive Design**: Mobile-first approach with flexible grid systems and media queries

### Data Management
- **Storage Solution**: Browser localStorage for client-side data persistence
- **Data Structure**: JSON-based food database with 120+ items including nutritional data, environmental impact metrics, and pricing
- **State Management**: Centralized JavaScript functions handle data operations and UI updates
- **Export Capabilities**: CSV and PDF export functionality for data portability

### Core Features Architecture
- **Food Recognition System**: Fuzzy string matching using Levenshtein distance algorithm for handling misspellings and food name variations
- **Expiry Calculation Engine**: Purchase date-based calculations with storage condition modifiers (fridge, freezer, pantry)
- **Notification System**: Browser-based push notifications with scheduling and snooze functionality
- **Impact Tracking**: Real-time calculation of financial savings, CO2 reduction, and water conservation
- **Inventory Management**: Quantity-based tracking with partial usage and portion calculations

### User Experience Design
- **Form Validation**: Real-time input validation with autocomplete suggestions
- **Dashboard Analytics**: Summary cards showing total impact metrics and item urgency sorting
- **Alert System**: Color-coded expiry warnings with actionable recommendations
- **Demo Mode**: Simulated data for testing and demonstration purposes

## External Dependencies

### Third-Party Libraries
- **Font System**: Segoe UI font stack with web-safe fallbacks
- **Icons**: Emoji-based iconography for cross-platform compatibility
- **Manifest Icons**: SVG-based app icons for various device sizes

### Browser APIs
- **Notification API**: For expiry alerts and reminders
- **localStorage API**: For client-side data persistence
- **Date API**: For expiry calculations and time-based operations
- **Service Worker API**: For offline functionality and background notifications

### Planned Integrations
- **Payment Processing**: Stripe integration for premium plan subscriptions
- **Recipe APIs**: External recipe databases for enhanced food suggestions
- **Analytics**: Google Analytics for user behavior tracking
- **Push Notifications**: Firebase Cloud Messaging for enhanced notification delivery

### Development Tools
- **Testing Framework**: Built-in data-testid attributes for automated testing
- **PWA Tools**: Manifest validator and service worker testing capabilities
- **Performance Monitoring**: Lighthouse-ready optimization patterns