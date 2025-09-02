# NutriScan AI - Smart Food Waste Reduction App

![NutriScan AI Logo](https://img.shields.io/badge/NutriScan-AI-4CAF50?style=for-the-badge&logo=leaf&logoColor=white)

**Live Demo:** [https://nutri-scan-enhance.vercel.app](https://nutri-scan-enhance.vercel.app)

A Progressive Web Application designed to help households and businesses reduce food waste through intelligent inventory management, aligning with UN Sustainable Development Goal 2: Zero Hunger.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [Business Model](#business-model)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)

## Overview

NutriScan AI addresses the global food waste crisis where 1.3 billion tons of food are wasted annually, costing households an average of $1,500 per year. Our solution provides AI-powered expiry predictions based on actual purchase dates and storage conditions, realistic inventory tracking, and smart notifications.

### Key Statistics
- **Target Impact:** 80% reduction in household food waste
- **Potential Savings:** $1,200+ annually per household
- **Environmental Impact:** Prevention of 4.4 tons CO₂ equivalent per household
- **Market Size:** $46 billion food waste management market by 2025

## Features

### Core Functionality
- **Purchase Date-Based Expiry Tracking:** Real calculations based on when you bought the item
- **Storage Condition Intelligence:** Different shelf lives for fridge, freezer, pantry, and counter storage
- **Fuzzy Food Recognition:** Levenshtein distance algorithm handles misspellings and variations
- **Quantity Management:** Track weight, volume, and count with partial usage updates
- **Smart Notifications:** Browser alerts when items are about to expire

### Advanced Features
- **Recipe Suggestions:** AI-powered recipe recommendations based on expiring ingredients
- **Impact Analytics:** Real-time tracking of financial savings, CO2 reduction, and water conservation
- **Bulk Operations:** Multi-select items for batch actions
- **Data Export:** CSV and PDF reports for analysis
- **Shopping List Generation:** Smart lists based on expiring categories and usage patterns
- **Progressive Web App:** Works offline and installs like a native mobile app

### User Experience
- **Demo Authentication:** Guest mode with optional account preview
- **Mobile-First Design:** Optimized for smartphone usage
- **Dark/Light Mode Support:** Adaptive to system preferences
- **Accessibility Features:** Keyboard navigation and screen reader support
- **Multi-language Ready:** Infrastructure for internationalization

## Technology Stack

### Frontend
- **HTML5:** Semantic markup and accessibility
- **CSS3:** Advanced styling with CSS Grid and Flexbox
- **Vanilla JavaScript (ES6+):** Modern JavaScript features
- **Service Worker:** Offline functionality and background sync
- **Web APIs:** Notifications, Storage, Camera (for future image capture)

### Data Management
- **LocalStorage:** Client-side persistence
- **JSON:** Data structure and export format
- **CSV Export:** Data portability and analysis

### Development Tools
- **Git:** Version control
- **Replit:** Development environment
- **Vercel:** Deployment and hosting
- **Lighthouse:** Performance auditing

## Installation

### Local Development
```bash
# Clone the repository
git clone https://github.com/Mustee001/NutriScanEnhance.git

# Navigate to project directory
cd NutriScanEnhance

# Serve locally (Python 3)
python3 -m http.server 5000

# Or using Node.js (if you have it installed)
npx serve .

# Open browser to http://localhost:5000
```

### Deployment
The app is deployed on Vercel and can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Usage

### Quick Start
1. Visit [nutri-scan-enhance.vercel.app](https://nutri-scan-enhance.vercel.app)
2. Click "Start Scanning" or try "Demo Mode"
3. Add food items with purchase dates and storage conditions
4. Monitor expiry alerts on the dashboard
5. Get recipe suggestions for expiring items

### Core Workflow
1. **Add Food Items:** Input name, purchase date, quantity, storage location
2. **Monitor Dashboard:** View items sorted by urgency
3. **Receive Alerts:** Get notifications for expiring items
4. **Take Action:** Use recipes or mark items as consumed
5. **Track Impact:** Monitor savings and environmental benefits

### Advanced Features
- **Bulk Management:** Select multiple items for batch operations
- **Data Export:** Generate CSV reports or PDF impact summaries
- **Shopping Lists:** Auto-generate lists based on expiring categories
- **Analytics:** View waste reduction trends and category breakdowns

## Project Structure

```
NutriscanEnhance/
├── index.html           # The Login page and main entry point of the app
├── home.html            # The Landing page or main screen
├── input.html           # The page for user input
├── dashboard.html       # The main dashboard with analytics and item lists
├── about.html           # The About page
├── pricing.html         # The Pricing information page
├── style.css            # The main stylesheet for all pages
├── script.js            # Core JavaScript functionality and PWA logic
├── sw.js                # The Service Worker file for PWA functionality
├── manifest.json        # The manifest file for PWA configuration
├── package.json         # Project metadata and dependency list
├── package-lock.json    # Exact versions of all dependencies
├── replit.nix           # Replit configuration file
├── .replit              # Replit development environment configuration
└── README.md            # This file


```

### Key Components

#### JavaScript Modules
- **Food Database:** 75+ food items with expiry data, CO2 impact, and pricing
- **Expiry Calculator:** Purchase date and storage condition logic
- **Fuzzy Matching:** Intelligent food name recognition
- **Storage Manager:** LocalStorage abstraction layer
- **Notification Manager:** Browser notification handling
- **Recipe Engine:** Ingredient-based recipe suggestions

#### CSS Architecture
- **CSS Variables:** Consistent design tokens
- **Responsive Grid:** Mobile-first layout system
- **Component Styling:** Modular CSS for reusability
- **Animation Library:** Micro-interactions and transitions

## API Reference

### Core Functions

#### Food Recognition
```javascript
findBestFoodMatch(input)
// Returns: { match: string, confidence: number, suggestion: string }
```

#### Expiry Calculation
```javascript
calculateRealExpiry(foodName, purchaseDate, storageCondition, quantity)
// Returns: Object with expiry data, impact metrics, and urgency level
```

#### Storage Operations
```javascript
StorageManager.saveItem(item)
StorageManager.getAllItems()
StorageManager.deleteItem(itemId)
StorageManager.exportToCSV()
```

### Data Structure

#### Food Item Object
```javascript
{
  id: "item-12345",
  foodName: "chicken_breast",
  displayName: "Chicken Breast",
  purchaseDate: "2025-01-01",
  quantity: "2 lbs",
  storageCondition: "fridge",
  calculatedData: {
    expiryDate: Date,
    daysRemaining: number,
    urgency: "urgent|moderate|safe",
    estimatedValue: number,
    co2Impact: number,
    waterImpact: number
  }
}
```

## Contributing

We welcome contributions to NutriScan AI! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed
- Add data-testid attributes for new interactive elements

### Areas for Contribution
- **Food Database Expansion:** Add more food items with accurate data
- **Recipe Integration:** Enhance recipe suggestions and filtering
- **Accessibility:** Improve keyboard navigation and screen reader support
- **Internationalization:** Add multi-language support
- **Mobile Optimization:** Enhance touch gestures and mobile UX

## Business Model

### Freemium SaaS Structure
- **Free Tier:** 10 scans per day, basic features
- **Basic Plan ($4.99/month):** Unlimited scans, advanced analytics
- **Pro Plan ($9.99/month):** API access, white-label options, team features

### Revenue Projections
- **Year 1:** 10K users → $300K ARR
- **Year 3:** 100K users → $3M ARR  
- **Year 5:** 500K users → $15M ARR

### Target Market
- **Primary:** 2.8 billion households globally
- **Secondary:** Small restaurants and food service businesses
- **Tertiary:** Enterprise food management solutions

## Roadmap

### Phase 1 (Months 1-3)
- [ ] Backend API development
- [ ] User authentication system
- [ ] Recipe API integration (TheMealDB)
- [ ] Enhanced analytics dashboard
- [ ] Beta testing program

### Phase 2 (Months 4-6)
- [ ] Barcode scanning functionality
- [ ] Machine learning expiry predictions
- [ ] Grocery store API integrations
- [ ] Mobile app development (React Native)
- [ ] Retailer partnership program

### Phase 3 (Months 7-12)
- [ ] B2B enterprise solutions
- [ ] Smart home device integration
- [ ] Global market expansion
- [ ] Advanced AI features
- [ ] Sustainability partnerships

## Performance & Compatibility

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance Metrics
- **Lighthouse Score:** 95+ across all categories
- **First Contentful Paint:** <2s
- **Time to Interactive:** <3s
- **Bundle Size:** <500KB total

### PWA Features
- **Offline Functionality:** Core features work without internet
- **Install Prompt:** Add to home screen capability
- **Background Sync:** Data synchronization when online
- **Push Notifications:** Expiry alerts and reminders

## Security & Privacy

### Data Handling
- **Local Storage:** All data stored client-side by default
- **No Tracking:** No user analytics or tracking cookies
- **Privacy First:** Guest mode requires no personal information
- **Data Export:** Users control their data completely

### Future Security Measures
- **End-to-End Encryption:** For cloud synchronization
- **OAuth Integration:** Secure third-party authentication
- **Data Anonymization:** Aggregate insights without personal data

## Testing

### Manual Testing Checklist
- [ ] Food input form validation
- [ ] Expiry calculation accuracy
- [ ] Dashboard sorting and filtering
- [ ] Notification functionality
- [ ] Mobile responsiveness
- [ ] PWA installation
- [ ] Data export features

### Automated Testing (Planned)
- Unit tests for core functions
- Integration tests for user workflows
- Performance testing with Lighthouse CI
- Cross-browser compatibility testing

## Acknowledgments

### Inspiration
- UN Sustainable Development Goal 2: Zero Hunger
- USDA Food Safety and Inspection Service guidelines
- EPA food waste reduction initiatives

### Data Sources
- USDA Food Storage Guidelines
- Environmental impact data from EPA and UN FAO
- Pricing data from market research and user surveys

### Technology References
- MDN Web Docs for web standards
- PWA best practices from Google Developers
- Accessibility guidelines from WCAG 2.1

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Musa Mustapha Mohammed**  
*Web Developer & Cybersecurity Enthusiast*

- **Location:** Niger State, Nigeria
- **Email:** mustykolo6@gmail.com
- **GitHub:** [@Mustee001](https://github.com/Mustee001)
- **LinkedIn:** [Mustapha Musa](https://www.linkedin.com/in/mustapha-musa-365716332)
- **Live Demo:** [nutri-scan-enhance.vercel.app](https://nutri-scan-enhance.vercel.app)

---

**Made with ❤️ to fight food waste and build a sustainable future**

*NutriScan AI - Every scan saves food. Every saved meal fights hunger. Every user creates impact.*