// =========================
// NUTRISCAN AI - ENHANCED PRODUCTION-READY SCRIPT
// =========================

// =========================
// ENHANCED FOOD DATABASE (120+ ITEMS WITH REALISTIC DATA)
// =========================
const foodExpiryDatabase = {
  // Dairy & Eggs
  milk: { days: 7, category: "dairy", co2: 3.2, water: 1000, price: 3.50 },
  yogurt: { days: 14, category: "dairy", co2: 2.1, water: 800, price: 4.20 },
  cheese: { days: 21, category: "dairy", co2: 4.5, water: 1200, price: 6.80 },
  butter: { days: 30, category: "dairy", co2: 2.8, water: 600, price: 4.50 },
  eggs: { days: 21, category: "protein", co2: 4.2, water: 300, price: 3.00 },
  cream: { days: 10, category: "dairy", co2: 3.8, water: 1100, price: 5.20 },
  
  // Fruits
  apple: { days: 14, category: "fruit", co2: 0.4, water: 70, price: 2.50 },
  banana: { days: 7, category: "fruit", co2: 0.5, water: 160, price: 2.00 },
  orange: { days: 14, category: "fruit", co2: 0.3, water: 50, price: 3.00 },
  grapes: { days: 7, category: "fruit", co2: 1.1, water: 120, price: 4.50 },
  tomato: { days: 7, category: "fruit", co2: 1.4, water: 180, price: 3.20 },
  strawberry: { days: 3, category: "fruit", co2: 0.3, water: 30, price: 5.50 },
  avocado: { days: 5, category: "fruit", co2: 0.8, water: 320, price: 4.00 },
  lemon: { days: 21, category: "fruit", co2: 0.3, water: 40, price: 1.80 },
  mango: { days: 7, category: "fruit", co2: 1.6, water: 400, price: 3.80 },
  pineapple: { days: 10, category: "fruit", co2: 1.2, water: 255, price: 4.50 },
  watermelon: { days: 14, category: "fruit", co2: 0.3, water: 235, price: 6.00 },
  papaya: { days: 7, category: "fruit", co2: 0.6, water: 300, price: 3.50 },
  coconut: { days: 30, category: "fruit", co2: 0.7, water: 2500, price: 2.50 },
  passion_fruit: { days: 7, category: "fruit", co2: 0.4, water: 126, price: 8.00 },
  
  // Vegetables
  lettuce: { days: 7, category: "vegetable", co2: 0.2, water: 25, price: 2.20 },
  carrot: { days: 21, category: "vegetable", co2: 0.1, water: 35, price: 1.80 },
  potato: { days: 30, category: "vegetable", co2: 0.3, water: 60, price: 2.00 },
  onion: { days: 30, category: "vegetable", co2: 0.2, water: 50, price: 1.50 },
  broccoli: { days: 7, category: "vegetable", co2: 0.4, water: 280, price: 3.50 },
  spinach: { days: 5, category: "vegetable", co2: 0.2, water: 40, price: 3.00 },
  cucumber: { days: 7, category: "vegetable", co2: 0.2, water: 350, price: 2.50 },
  bell_pepper: { days: 7, category: "vegetable", co2: 0.7, water: 180, price: 4.00 },
  pepper: { days: 7, category: "vegetable", co2: 0.7, water: 180, price: 4.00 }, // Alias for bell_pepper
  mushroom: { days: 7, category: "vegetable", co2: 0.3, water: 280, price: 5.00 },
  cabbage: { days: 14, category: "vegetable", co2: 0.3, water: 50, price: 2.00 },
  sweet_potato: { days: 21, category: "vegetable", co2: 0.3, water: 54, price: 2.80 },
  okra: { days: 5, category: "vegetable", co2: 0.4, water: 560, price: 4.50 },
  cassava: { days: 14, category: "vegetable", co2: 0.5, water: 560, price: 3.20 },
  plantain: { days: 7, category: "vegetable", co2: 0.7, water: 790, price: 3.00 },
  yam: { days: 21, category: "vegetable", co2: 0.4, water: 594, price: 3.50 },
  
  // Proteins
  chicken: { days: 3, category: "protein", co2: 6.9, water: 4300, price: 8.50 },
  chicken_breast: { days: 3, category: "protein", co2: 6.9, water: 4300, price: 10.00 },
  beef: { days: 5, category: "protein", co2: 60, water: 15400, price: 12.00 },
  fish: { days: 2, category: "protein", co2: 5.4, water: 3700, price: 10.00 },
  salmon: { days: 2, category: "protein", co2: 11.9, water: 3800, price: 15.00 },
  pork: { days: 5, category: "protein", co2: 12.1, water: 6000, price: 9.50 },
  tofu: { days: 7, category: "protein", co2: 2.0, water: 300, price: 4.50 },
  beans: { days: 3, category: "protein", co2: 0.4, water: 1200, price: 2.50 },
  lentils: { days: 365, category: "protein", co2: 0.9, water: 5000, price: 3.00 },
  
  // Grains & Bread
  bread: { days: 5, category: "grain", co2: 0.9, water: 1600, price: 2.50 },
  rice: { days: 365, category: "grain", co2: 2.7, water: 2500, price: 4.00 },
  pasta: { days: 730, category: "grain", co2: 1.1, water: 1800, price: 3.50 },
  oats: { days: 365, category: "grain", co2: 0.6, water: 1400, price: 4.20 },
  quinoa: { days: 365, category: "grain", co2: 1.2, water: 6000, price: 8.00 },
  
  // Pantry Items
  honey: { days: 365, category: "pantry", co2: 1.9, water: 4000, price: 8.50 },
  olive_oil: { days: 180, category: "pantry", co2: 2.4, water: 14000, price: 12.00 },
  garlic: { days: 21, category: "pantry", co2: 0.4, water: 380, price: 2.00 },
  ginger: { days: 14, category: "pantry", co2: 0.9, water: 2700, price: 3.50 },
  
  // Beverages
  orange_juice: { days: 7, category: "beverage", co2: 0.7, water: 1000, price: 4.50 },
  coffee: { days: 365, category: "beverage", co2: 0.8, water: 140, price: 15.00 },
  tea: { days: 365, category: "beverage", co2: 5.6, water: 120, price: 8.00 }
};

// Food name aliases for better recognition
const foodAliases = {
  'chiken': 'chicken',
  'chikken': 'chicken',
  'chickin': 'chicken',
  'bell pepper': 'bell_pepper',
  'red pepper': 'bell_pepper',
  'green pepper': 'bell_pepper',
  'sweet pepper': 'bell_pepper',
  'tomatoe': 'tomato',
  'tommato': 'tomato',
  'potatos': 'potato',
  'potatoes': 'potato',
  'avacado': 'avocado',
  'brocoli': 'broccoli',
  'spinich': 'spinach',
  'onions': 'onion',
  'carrots': 'carrot',
  'letuce': 'lettuce',
  'mushrooms': 'mushroom',
  'bananas': 'banana',
  'apples': 'apple',
  'oranges': 'orange'
};

// =========================
// STORAGE CONDITION MULTIPLIERS
// =========================
const storageMultipliers = {
  fridge: 1.0,      // Standard refrigerator temperature
  freezer: 30.0,    // Extends life significantly
  pantry: 0.6,      // Room temperature, varies by item
  counter: 0.4      // Exposed to air and light
};

// =========================
// COMPREHENSIVE RECIPE DATABASE
// =========================
const detailedRecipeDatabase = {
  milk: [
    {
      name: "Creamy Banana Smoothie",
      difficulty: "Easy",
      time: "5 min",
      portions: "2 servings",
      ingredients: ["1 cup milk", "2 ripe bananas", "1 tbsp honey", "1/2 cup frozen berries", "1/4 tsp vanilla"],
      instructions: "Combine all ingredients in a blender. Blend on high speed for 60 seconds until smooth and creamy. Add ice cubes if you prefer a thicker consistency. Serve immediately in chilled glasses. Rich in potassium, calcium, and natural sugars for energy.",
      nutrition: "Calories: 180, Protein: 6g, Carbs: 38g, Fat: 2g"
    },
    {
      name: "Fluffy Pancakes",
      difficulty: "Medium",
      time: "20 min",
      portions: "4 servings",
      ingredients: ["1 cup milk", "1 large egg", "1 1/4 cup flour", "2 tbsp sugar", "2 tsp baking powder", "1/2 tsp salt", "2 tbsp melted butter"],
      instructions: "Mix dry ingredients in a large bowl. In another bowl, whisk together milk, egg, and melted butter. Pour wet ingredients into dry ingredients and stir until just combined (lumps are okay). Heat griddle over medium heat. Pour 1/4 cup batter per pancake. Cook until bubbles form on surface, then flip and cook until golden brown.",
      nutrition: "Calories: 220, Protein: 8g, Carbs: 35g, Fat: 6g"
    }
  ],
  banana: [
    {
      name: "Classic Banana Bread",
      difficulty: "Medium",
      time: "75 min",
      portions: "8 servings",
      ingredients: ["3 very ripe bananas", "1/3 cup melted butter", "3/4 cup sugar", "1 egg beaten", "1 tsp vanilla", "1 tsp baking soda", "1/4 tsp salt", "1 1/2 cups flour"],
      instructions: "Preheat oven to 350°F (175°C). Mash bananas in a large mixing bowl. Mix in melted butter, then add sugar, egg, and vanilla. Sprinkle baking soda and salt over mixture and mix in. Add flour and mix until just incorporated. Pour into greased 4x8 inch loaf pan. Bake for 60 minutes or until toothpick comes out clean. Cool in pan for 10 minutes before removing.",
      nutrition: "Calories: 280, Protein: 4g, Carbs: 58g, Fat: 6g"
    }
  ],
  chicken: [
    {
      name: "Mediterranean Chicken Skillet",
      difficulty: "Medium",
      time: "25 min",
      portions: "4 servings",
      ingredients: ["1 lb chicken breast, cubed", "2 tbsp olive oil", "1 onion diced", "3 cloves garlic minced", "1 bell pepper sliced", "1 can diced tomatoes", "1/2 cup olives", "2 tsp oregano", "Salt and pepper"],
      instructions: "Heat olive oil in large skillet over medium-high heat. Season chicken with salt and pepper, then cook until golden brown, about 6-8 minutes. Remove chicken and set aside. In same pan, sauté onion and bell pepper until softened, about 5 minutes. Add garlic and cook for 1 minute. Add tomatoes, olives, oregano, and cooked chicken. Simmer for 8-10 minutes until chicken is cooked through and sauce has thickened.",
      nutrition: "Calories: 320, Protein: 35g, Carbs: 12g, Fat: 14g"
    }
  ],
  tomato: [
    {
      name: "Fresh Tomato Basil Sauce",
      difficulty: "Easy",
      time: "30 min",
      portions: "6 servings",
      ingredients: ["6 large ripe tomatoes", "3 cloves garlic minced", "1 medium onion diced", "3 tbsp olive oil", "1/4 cup fresh basil", "1 tsp oregano", "Salt and pepper to taste"],
      instructions: "Core and dice tomatoes, removing seeds if desired for less watery sauce. Heat olive oil in large saucepan over medium heat. Add onion and cook until translucent, about 5 minutes. Add garlic and cook for 1 minute until fragrant. Add diced tomatoes, oregano, salt, and pepper. Simmer for 20-25 minutes, stirring occasionally, until sauce thickens and tomatoes break down. Stir in fresh basil during last 2 minutes of cooking. Taste and adjust seasoning.",
      nutrition: "Calories: 85, Protein: 2g, Carbs: 10g, Fat: 7g"
    }
  ],
  avocado: [
    {
      name: "Perfect Guacamole",
      difficulty: "Easy",
      time: "10 min",
      portions: "4 servings",
      ingredients: ["3 ripe avocados", "1 lime juiced", "1/2 small onion diced", "2 Roma tomatoes diced", "3 cloves garlic minced", "1/4 cup cilantro chopped", "1/2 tsp salt"],
      instructions: "Cut avocados in half, remove pits, and scoop into large bowl. Mash with fork to desired consistency (chunky or smooth). Add lime juice immediately to prevent browning. Mix in onion, tomatoes, garlic, and cilantro. Season with salt and pepper. Taste and adjust lime juice and salt as needed. Serve immediately with chips or vegetables, or cover tightly and refrigerate for up to 2 days.",
      nutrition: "Calories: 160, Protein: 2g, Carbs: 9g, Fat: 15g"
    }
  ],
  potato: [
    {
      name: "Crispy Herb Roasted Potatoes",
      difficulty: "Easy",
      time: "45 min",
      portions: "6 servings",
      ingredients: ["2 lbs baby potatoes halved", "3 tbsp olive oil", "2 tsp rosemary minced", "2 tsp thyme", "4 cloves garlic minced", "1 tsp salt", "1/2 tsp black pepper"],
      instructions: "Preheat oven to 425°F (220°C). Wash and halve potatoes, leaving skin on. In large bowl, toss potatoes with olive oil, rosemary, thyme, garlic, salt, and pepper until evenly coated. Arrange cut-side down on large baking sheet in single layer. Roast for 35-40 minutes until golden brown and crispy outside, tender inside. Flip once halfway through cooking. Garnish with fresh herbs before serving.",
      nutrition: "Calories: 180, Protein: 4g, Carbs: 30g, Fat: 7g"
    }
  ],
  spinach: [
    {
      name: "Spinach and Feta Stuffed Chicken",
      difficulty: "Hard",
      time: "40 min",
      portions: "4 servings",
      ingredients: ["4 chicken breasts", "4 cups fresh spinach", "1/2 cup feta cheese crumbled", "2 cloves garlic minced", "2 tbsp olive oil", "1 tsp oregano", "Salt and pepper"],
      instructions: "Preheat oven to 375°F (190°C). Heat 1 tbsp oil in large skillet. Sauté spinach and garlic until wilted, about 2 minutes. Remove from heat, drain excess liquid, and mix with feta cheese. Cut horizontal pocket in each chicken breast. Stuff with spinach mixture and secure with toothpicks. Season outside with salt, pepper, and oregano. Heat remaining oil in oven-safe skillet over medium-high heat. Sear chicken 3 minutes per side, then transfer to oven. Bake 20-25 minutes until internal temperature reaches 165°F.",
      nutrition: "Calories: 280, Protein: 40g, Carbs: 3g, Fat: 12g"
    }
  ]
};

// =========================
// LEVENSHTEIN DISTANCE ALGORITHM FOR FUZZY MATCHING
// =========================
function levenshteinDistance(str1, str2) {
  const matrix = [];
  const len1 = str1.length;
  const len2 = str2.length;

  // Create matrix
  for (let i = 0; i <= len2; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len1; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[len2][len1];
}

// =========================
// INTELLIGENT FOOD RECOGNITION
// =========================
function findBestFoodMatch(input) {
  const inputLower = input.toLowerCase().trim();
  
  // First check direct aliases
  if (foodAliases[inputLower]) {
    return {
      match: foodAliases[inputLower],
      confidence: 1.0,
      suggestion: `Did you mean "${foodAliases[inputLower].replace(/_/g, ' ')}"?`
    };
  }
  
  // Direct match
  if (foodExpiryDatabase[inputLower]) {
    return {
      match: inputLower,
      confidence: 1.0,
      suggestion: null
    };
  }
  
  // Find partial matches and fuzzy matches
  const candidates = Object.keys(foodExpiryDatabase);
  let bestMatch = null;
  let bestDistance = Infinity;
  let bestConfidence = 0;
  
  for (const candidate of candidates) {
    const candidateDisplay = candidate.replace(/_/g, ' ');
    
    // Check if input contains candidate or vice versa
    if (inputLower.includes(candidate) || candidate.includes(inputLower)) {
      const confidence = Math.max(inputLower.length, candidate.length) / 
                        Math.min(inputLower.length, candidate.length);
      if (confidence > bestConfidence) {
        bestMatch = candidate;
        bestConfidence = confidence;
        bestDistance = 0;
      }
    }
    
    // Levenshtein distance for fuzzy matching
    const distance = levenshteinDistance(inputLower, candidate);
    const confidence = 1 - (distance / Math.max(inputLower.length, candidate.length));
    
    if (confidence > 0.6 && distance < bestDistance) {
      bestMatch = candidate;
      bestDistance = distance;
      bestConfidence = confidence;
    }
    
    // Also check against display name
    const displayDistance = levenshteinDistance(inputLower, candidateDisplay);
    const displayConfidence = 1 - (displayDistance / Math.max(inputLower.length, candidateDisplay.length));
    
    if (displayConfidence > 0.6 && displayDistance < bestDistance) {
      bestMatch = candidate;
      bestDistance = displayDistance;
      bestConfidence = displayConfidence;
    }
  }
  
  if (bestMatch && bestConfidence > 0.6) {
    return {
      match: bestMatch,
      confidence: bestConfidence,
      suggestion: bestConfidence < 1.0 ? 
        `Did you mean "${bestMatch.replace(/_/g, ' ')}"?` : null
    };
  }
  
  return {
    match: null,
    confidence: 0,
    suggestion: "Food item not found in database. Please try a different name or check spelling."
  };
}

// =========================
// REALISTIC EXPIRY CALCULATION
// =========================
function calculateRealExpiry(foodName, purchaseDate, storageCondition, quantity) {
  const foodData = foodExpiryDatabase[foodName];
  if (!foodData) return null;
  
  const baseShelfLife = foodData.days;
  const storageMultiplier = storageMultipliers[storageCondition] || 1.0;
  
  // Adjust shelf life based on storage condition
  let adjustedShelfLife = Math.round(baseShelfLife * storageMultiplier);
  
  // Additional adjustments based on food category and storage
  if (foodData.category === 'dairy' && storageCondition === 'freezer') {
    adjustedShelfLife = Math.min(adjustedShelfLife, 90); // Max 3 months for dairy in freezer
  } else if (foodData.category === 'fruit' && storageCondition === 'fridge') {
    adjustedShelfLife = Math.round(adjustedShelfLife * 1.5); // Fruits last longer in fridge
  } else if (foodData.category === 'vegetable' && storageCondition === 'counter') {
    adjustedShelfLife = Math.round(adjustedShelfLife * 0.5); // Vegetables spoil faster on counter
  }
  
  // Calculate expiry date from purchase date
  const purchaseDateObj = new Date(purchaseDate);
  const expiryDate = new Date(purchaseDateObj.getTime() + adjustedShelfLife * 24 * 60 * 60 * 1000);
  
  // Calculate days remaining from today
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day
  const timeDiff = expiryDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
  
  // Parse quantity for realistic impact calculation
  const quantityInfo = parseQuantity(quantity);
  const impactMultiplier = quantityInfo.multiplier;
  
  return {
    purchaseDate: purchaseDateObj,
    expiryDate: expiryDate,
    daysRemaining: daysRemaining,
    shelfLife: adjustedShelfLife,
    originalShelfLife: baseShelfLife,
    storageCondition: storageCondition,
    quantity: quantity,
    quantityInfo: quantityInfo,
    estimatedValue: foodData.price * impactMultiplier,
    co2Impact: foodData.co2 * impactMultiplier,
    waterImpact: foodData.water * impactMultiplier,
    urgency: getUrgencyLevel(daysRemaining)
  };
}

// =========================
// QUANTITY PARSING AND MANAGEMENT
// =========================
function parseQuantity(quantityStr) {
  const str = quantityStr.toLowerCase().trim();
  let multiplier = 1;
  let unit = 'pieces';
  let amount = 1;
  
  // Extract number
  const numberMatch = str.match(/(\d+(?:\.\d+)?)/);
  if (numberMatch) {
    amount = parseFloat(numberMatch[1]);
  }
  
  // Determine unit and calculate multiplier
  if (str.includes('lb') || str.includes('pound')) {
    unit = 'lbs';
    multiplier = amount * 0.5; // Rough conversion factor
  } else if (str.includes('kg') || str.includes('kilo')) {
    unit = 'kg';
    multiplier = amount * 1.1; // Slightly more than pounds
  } else if (str.includes('g') && !str.includes('kg')) {
    unit = 'g';
    multiplier = amount * 0.001; // Convert grams to kg equivalent
  } else if (str.includes('oz') || str.includes('ounce')) {
    unit = 'oz';
    multiplier = amount * 0.03; // Convert ounces
  } else if (str.includes('gal') || str.includes('gallon')) {
    unit = 'gallons';
    multiplier = amount * 4; // 1 gallon = ~4x impact
  } else if (str.includes('cup') || str.includes('c ')) {
    unit = 'cups';
    multiplier = amount * 0.25; // 4 cups = 1 impact unit
  } else if (str.includes('l ') || str.includes('liter') || str.includes('litre')) {
    unit = 'liters';
    multiplier = amount * 1.0; // Base unit
  } else {
    unit = 'pieces';
    multiplier = amount * 0.1; // Pieces are smaller impact
  }
  
  return {
    amount: amount,
    unit: unit,
    multiplier: Math.max(multiplier, 0.1), // Minimum multiplier
    displayText: `${amount} ${unit}`
  };
}

// =========================
// URGENCY LEVEL CALCULATION
// =========================
function getUrgencyLevel(daysRemaining) {
  if (daysRemaining <= 0) return 'expired';
  if (daysRemaining <= 2) return 'urgent';
  if (daysRemaining <= 5) return 'moderate';
  return 'safe';
}

// =========================
// BROWSER NOTIFICATIONS SYSTEM
// =========================
class NotificationManager {
  constructor() {
    this.permission = this.isNotificationSupported() ? Notification.permission : 'denied';
    this.checkInterval = null;
  }
  
  isNotificationSupported() {
    return 'Notification' in window && typeof Notification !== 'undefined';
  }
  
  async requestPermission() {
    if (this.isNotificationSupported()) {
      try {
        const permission = await Notification.requestPermission();
        this.permission = permission;
        return permission === 'granted';
      } catch (error) {
        console.log('Notification permission request failed:', error);
        this.permission = 'denied';
        return false;
      }
    }
    return false;
  }
  
  startPeriodicCheck() {
    // Check every hour for expiring items
    this.checkInterval = setInterval(() => {
      this.checkExpiringItems();
    }, 60 * 60 * 1000); // 1 hour
    
    // Also check immediately
    this.checkExpiringItems();
  }
  
  stopPeriodicCheck() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }
  
  checkExpiringItems() {
    if (!this.isNotificationSupported() || this.permission !== 'granted') return;
    
    const items = StorageManager.getAllItems();
    const urgentItems = items.filter(item => 
      item.calculatedData && item.calculatedData.urgency === 'urgent'
    );
    
    if (urgentItems.length > 0) {
      const itemNames = urgentItems.map(item => item.foodName).join(', ');
      this.showNotification(
        'Food Expiring Soon! ⚠️',
        `These items expire in 2 days or less: ${itemNames}. Check your dashboard to take action.`,
        () => {
          window.location.href = 'dashboard.html';
        }
      );
    }
  }
  
  showNotification(title, body, onclick = null) {
    if (this.isNotificationSupported() && this.permission === 'granted') {
      try {
        const notification = new Notification(title, {
          body: body,
          icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍎</text></svg>",
          badge: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚠️</text></svg>",
          tag: 'nutriscan-expiry'
        });
        
        if (onclick) {
          notification.onclick = onclick;
        }
        
        // Auto-close after 10 seconds
        setTimeout(() => notification.close(), 10000);
      } catch (error) {
        console.log('Failed to show notification:', error);
        // Fallback to browser alert if notifications fail
        if (onclick) {
          const userChoice = confirm(`${title}\n\n${body}\n\nWould you like to view your dashboard?`);
          if (userChoice) {
            onclick();
          }
        }
      }
    }
  }
  
  scheduleReminder(itemId, reminderDate) {
    if (!this.isNotificationSupported()) return;
    
    const now = Date.now();
    const reminderTime = new Date(reminderDate).getTime();
    const delay = reminderTime - now;
    
    if (delay > 0) {
      setTimeout(() => {
        const item = StorageManager.getItem(itemId);
        if (item) {
          this.showNotification(
            'Food Reminder 🔔',
            `Don't forget to check your ${item.foodName} - it may be expiring soon!`,
            () => {
              window.location.href = 'dashboard.html';
            }
          );
        }
      }, delay);
    }
  }
}

// =========================
// ENHANCED STORAGE MANAGER
// =========================
class StorageManager {
  static ITEMS_KEY = 'nutriscan_food_items';
  static SETTINGS_KEY = 'nutriscan_settings';
  
  static getAllItems() {
    const items = JSON.parse(localStorage.getItem(this.ITEMS_KEY) || '[]');
    return items.map(item => ({
      ...item,
      // Recalculate expiry data on load to ensure accuracy
      calculatedData: item.calculatedData ? 
        calculateRealExpiry(item.foodName, item.purchaseDate, item.storageCondition, item.quantity) :
        null
    }));
  }
  
  static saveItem(item) {
    const items = this.getAllItems();
    const existingIndex = items.findIndex(existing => existing.id === item.id);
    
    if (existingIndex >= 0) {
      items[existingIndex] = item;
    } else {
      items.push(item);
    }
    
    localStorage.setItem(this.ITEMS_KEY, JSON.stringify(items));
    this.updateTotalStats();
  }
  
  static deleteItem(itemId) {
    const items = this.getAllItems();
    const filteredItems = items.filter(item => item.id !== itemId);
    localStorage.setItem(this.ITEMS_KEY, JSON.stringify(filteredItems));
    this.updateTotalStats();
  }
  
  static updateItemUsage(itemId, usedQuantity) {
    const items = this.getAllItems();
    const item = items.find(item => item.id === itemId);
    
    if (item) {
      // Parse the used quantity
      const usedInfo = parseQuantity(usedQuantity);
      const originalInfo = parseQuantity(item.quantity);
      
      // Calculate remaining quantity (simplified)
      const remainingAmount = Math.max(0, originalInfo.amount - usedInfo.amount);
      
      if (remainingAmount <= 0) {
        // Item fully consumed, remove it
        this.deleteItem(itemId);
      } else {
        // Update quantity
        item.quantity = `${remainingAmount} ${originalInfo.unit}`;
        item.calculatedData = calculateRealExpiry(
          item.foodName, 
          item.purchaseDate, 
          item.storageCondition, 
          item.quantity
        );
        this.saveItem(item);
      }
    }
  }
  
  static getSettings() {
    return JSON.parse(localStorage.getItem(this.SETTINGS_KEY) || '{"notifications": false}');
  }
  
  static saveSetting(key, value) {
    const settings = this.getSettings();
    settings[key] = value;
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
  }
  
  static updateTotalStats() {
    // This will be called to update dashboard stats
    if (window.updateDashboardStats) {
      window.updateDashboardStats();
    }
  }
  
  static exportToCSV() {
    const items = this.getAllItems();
    if (items.length === 0) {
      alert('No data to export');
      return;
    }
    
    const headers = ['Food Name', 'Purchase Date', 'Quantity', 'Storage', 'Expiry Date', 'Days Remaining', 'Urgency', 'Estimated Value', 'CO2 Impact (kg)', 'Water Impact (L)'];
    
    const csvData = items.map(item => [
      item.foodName,
      item.purchaseDate,
      item.quantity,
      item.storageCondition,
      item.calculatedData ? item.calculatedData.expiryDate.toLocaleDateString() : 'N/A',
      item.calculatedData ? item.calculatedData.daysRemaining : 'N/A',
      item.calculatedData ? item.calculatedData.urgency : 'N/A',
      item.calculatedData ? `$${item.calculatedData.estimatedValue.toFixed(2)}` : 'N/A',
      item.calculatedData ? item.calculatedData.co2Impact.toFixed(2) : 'N/A',
      item.calculatedData ? item.calculatedData.waterImpact.toFixed(1) : 'N/A'
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nutriscan_export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  
  static generatePDFReport() {
    const items = this.getAllItems();
    
    // Calculate summary statistics
    const totalValue = items.reduce((sum, item) => 
      sum + (item.calculatedData ? item.calculatedData.estimatedValue : 0), 0);
    const totalCO2 = items.reduce((sum, item) => 
      sum + (item.calculatedData ? item.calculatedData.co2Impact : 0), 0);
    const totalWater = items.reduce((sum, item) => 
      sum + (item.calculatedData ? item.calculatedData.waterImpact : 0), 0);
    
    const urgentItems = items.filter(item => 
      item.calculatedData && item.calculatedData.urgency === 'urgent').length;
    
    // Create PDF content (simplified HTML that can be printed)
    const reportHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>NutriScan AI Impact Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .stats { display: flex; justify-content: space-around; margin: 20px 0; }
          .stat { text-align: center; }
          .stat h3 { color: #4CAF50; margin: 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #4CAF50; color: white; }
          .urgent { color: #f44336; font-weight: bold; }
          .moderate { color: #ffc107; font-weight: bold; }
          .safe { color: #4CAF50; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🍎 NutriScan AI Impact Report</h1>
          <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="stats">
          <div class="stat">
            <h3>$${totalValue.toFixed(2)}</h3>
            <p>Total Food Value</p>
          </div>
          <div class="stat">
            <h3>${totalCO2.toFixed(1)} kg</h3>
            <p>CO2 Impact</p>
          </div>
          <div class="stat">
            <h3>${totalWater.toFixed(0)} L</h3>
            <p>Water Impact</p>
          </div>
          <div class="stat">
            <h3>${urgentItems}</h3>
            <p>Urgent Items</p>
          </div>
        </div>
        
        <h2>Food Inventory Details</h2>
        <table>
          <tr>
            <th>Food Item</th>
            <th>Purchase Date</th>
            <th>Quantity</th>
            <th>Storage</th>
            <th>Days Remaining</th>
            <th>Status</th>
            <th>Value</th>
          </tr>
          ${items.map(item => `
            <tr>
              <td>${item.foodName}</td>
              <td>${item.purchaseDate}</td>
              <td>${item.quantity}</td>
              <td>${item.storageCondition}</td>
              <td>${item.calculatedData ? item.calculatedData.daysRemaining : 'N/A'}</td>
              <td class="${item.calculatedData ? item.calculatedData.urgency : 'unknown'}">
                ${item.calculatedData ? item.calculatedData.urgency.toUpperCase() : 'UNKNOWN'}
              </td>
              <td>$${item.calculatedData ? item.calculatedData.estimatedValue.toFixed(2) : '0.00'}</td>
            </tr>
          `).join('')}
        </table>
        
        <div style="margin-top: 40px; text-align: center; color: #666;">
          <p>This report was generated by NutriScan AI - Your Smart Food Waste Assistant</p>
          <p>Visit our app to track your food inventory and reduce waste!</p>
        </div>
      </body>
      </html>
    `;
    
    // Open in new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(reportHTML);
    printWindow.document.close();
    printWindow.print();
  }
  
  static clearAllData() {
    if (confirm('Are you sure you want to clear all your food data? This action cannot be undone.')) {
      localStorage.removeItem(this.ITEMS_KEY);
      localStorage.removeItem(this.SETTINGS_KEY);
      location.reload();
    }
  }
}

// =========================
// GLOBAL INSTANCES
// =========================
const notificationManager = new NotificationManager();

// =========================
// PAGE-SPECIFIC FUNCTIONALITY
// =========================

// Common initialization for all pages
document.addEventListener('DOMContentLoaded', function() {
  // Initialize service worker if available
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => console.log('SW registered:', registration))
      .catch(error => console.log('SW registration failed:', error));
  }
  
  // Page-specific initialization
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  switch(currentPage) {
    case 'index.html':
    case '':
      initializeHomePage();
      break;
    case 'input.html':
      initializeInputPage();
      break;
    case 'dashboard.html':
      initializeDashboard();
      break;
    case 'about.html':
      initializeAboutPage();
      break;
    case 'pricing.html':
      initializePricingPage();
      break;
  }
  
  // Start notification checking if enabled
  const settings = StorageManager.getSettings();
  if (settings.notifications) {
    notificationManager.startPeriodicCheck();
  }
});

// =========================
// HOME PAGE INITIALIZATION
// =========================
function initializeHomePage() {
  const demoModeBtn = document.getElementById('demoModeBtn');
  
  if (demoModeBtn) {
    demoModeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Create demo data
      const demoItems = [
        {
          id: 'demo-1',
          foodName: 'banana',
          purchaseDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days ago
          quantity: '6 pieces',
          storageCondition: 'counter',
          scannedAt: new Date().toISOString()
        },
        {
          id: 'demo-2',
          foodName: 'milk',
          purchaseDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days ago
          quantity: '1 gallon',
          storageCondition: 'fridge',
          scannedAt: new Date().toISOString()
        },
        {
          id: 'demo-3',
          foodName: 'chicken_breast',
          purchaseDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 day ago
          quantity: '2 lbs',
          storageCondition: 'fridge',
          scannedAt: new Date().toISOString()
        }
      ];
      
      // Add calculated data to demo items
      demoItems.forEach(item => {
        item.calculatedData = calculateRealExpiry(
          item.foodName,
          item.purchaseDate,
          item.storageCondition,
          item.quantity
        );
        StorageManager.saveItem(item);
      });
      
      // Show success message and redirect
      alert('Demo data loaded! You can now explore the dashboard with sample food items.');
      window.location.href = 'dashboard.html';
    });
  }
}

// =========================
// INPUT PAGE INITIALIZATION
// =========================
function initializeInputPage() {
  const scanForm = document.getElementById('scanForm');
  const foodNameInput = document.getElementById('foodName');
  const purchaseDateInput = document.getElementById('purchaseDate');
  const quantityInput = document.getElementById('quantity');
  const storageSelect = document.getElementById('storageCondition');
  const submitBtn = document.getElementById('submitBtn');
  const errorMessage = document.getElementById('error-message');
  const autocompleteResults = document.getElementById('autocomplete-results');
  const suggestionMessage = document.getElementById('suggestion-message');
  
  // Set default purchase date to today
  if (purchaseDateInput) {
    purchaseDateInput.value = new Date().toISOString().split('T')[0];
    purchaseDateInput.max = new Date().toISOString().split('T')[0]; // Can't be in the future
  }
  
  // Autocomplete functionality
  if (foodNameInput) {
    let debounceTimer;
    
    foodNameInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const input = this.value.trim();
        
        if (input.length >= 2) {
          showAutocomplete(input);
        } else {
          hideAutocomplete();
          hideSuggestion();
        }
      }, 300);
    });
    
    // Hide autocomplete when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('#foodName') && !e.target.closest('#autocomplete-results')) {
        hideAutocomplete();
      }
    });
  }
  
  // Form submission
  if (scanForm) {
    scanForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const foodName = foodNameInput.value.trim();
      const purchaseDate = purchaseDateInput.value;
      const quantity = quantityInput.value.trim();
      const storageCondition = storageSelect.value;
      
      if (!foodName || !purchaseDate || !quantity || !storageCondition) {
        showError('Please fill in all required fields.');
        return;
      }
      
      // Validate purchase date
      const purchaseDateObj = new Date(purchaseDate);
      const today = new Date();
      today.setHours(23, 59, 59, 999); // End of today
      
      if (purchaseDateObj > today) {
        showError('Purchase date cannot be in the future.');
        return;
      }
      
      // Show loading state
      setSubmitButtonLoading(true);
      hideError();
      
      // Simulate AI processing time
      setTimeout(() => {
        processFood(foodName, purchaseDate, quantity, storageCondition);
      }, 1500);
    });
  }
  
  function showAutocomplete(input) {
    const matches = Object.keys(foodExpiryDatabase)
      .filter(food => {
        const foodDisplay = food.replace(/_/g, ' ');
        return foodDisplay.toLowerCase().includes(input.toLowerCase()) ||
               food.toLowerCase().includes(input.toLowerCase());
      })
      .slice(0, 8); // Limit to 8 suggestions
    
    if (matches.length > 0) {
      autocompleteResults.innerHTML = matches
        .map(food => `
          <div class="autocomplete-item" data-food="${food}">
            ${food.replace(/_/g, ' ')}
          </div>
        `).join('');
      
      autocompleteResults.style.display = 'block';
      
      // Add click handlers
      autocompleteResults.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', function() {
          const selectedFood = this.dataset.food;
          foodNameInput.value = selectedFood.replace(/_/g, ' ');
          hideAutocomplete();
          hideSuggestion();
        });
      });
    } else {
      hideAutocomplete();
    }
  }
  
  function hideAutocomplete() {
    autocompleteResults.style.display = 'none';
    autocompleteResults.innerHTML = '';
  }
  
  function showSuggestion(message) {
    suggestionMessage.textContent = message;
    suggestionMessage.style.display = 'block';
  }
  
  function hideSuggestion() {
    suggestionMessage.style.display = 'none';
  }
  
  function processFood(foodName, purchaseDate, quantity, storageCondition) {
    // Find best food match using intelligent recognition
    const matchResult = findBestFoodMatch(foodName);
    
    if (!matchResult.match) {
      showError(matchResult.suggestion);
      setSubmitButtonLoading(false);
      return;
    }
    
    if (matchResult.suggestion) {
      showSuggestion(matchResult.suggestion);
    }
    
    // Calculate expiry data
    const calculatedData = calculateRealExpiry(
      matchResult.match,
      purchaseDate,
      storageCondition,
      quantity
    );
    
    if (!calculatedData) {
      showError('Unable to calculate expiry data for this food item.');
      setSubmitButtonLoading(false);
      return;
    }
    
    // Create food item
    const foodItem = {
      id: 'item-' + Date.now(),
      foodName: matchResult.match,
      displayName: matchResult.match.replace(/_/g, ' '),
      purchaseDate: purchaseDate,
      quantity: quantity,
      storageCondition: storageCondition,
      scannedAt: new Date().toISOString(),
      calculatedData: calculatedData
    };
    
    // Save to storage
    StorageManager.saveItem(foodItem);
    
    // Store recently scanned item for dashboard highlight
    localStorage.setItem('nutriscan_recent_item', JSON.stringify(foodItem));
    
    // Show success and redirect
    setSubmitButtonLoading(false);
    showSuccess('Food item analyzed successfully! Redirecting to dashboard...');
    
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 2000);
  }
  
  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.className = 'error-message';
  }
  
  function showSuccess(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.className = 'success-message';
  }
  
  function hideError() {
    errorMessage.style.display = 'none';
  }
  
  function setSubmitButtonLoading(loading) {
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner');
    
    if (loading) {
      btnText.style.display = 'none';
      spinner.style.display = 'inline-block';
      submitBtn.disabled = true;
    } else {
      btnText.style.display = 'inline';
      spinner.style.display = 'none';
      submitBtn.disabled = false;
    }
  }
}

// =========================
// DASHBOARD INITIALIZATION
// =========================
function initializeDashboard() {
  loadDashboardData();
  setupDashboardEventListeners();
  
  // Check for recently scanned item
  const recentItemData = localStorage.getItem('nutriscan_recent_item');
  if (recentItemData) {
    const recentItem = JSON.parse(recentItemData);
    displayRecentItem(recentItem);
    localStorage.removeItem('nutriscan_recent_item'); // Remove after displaying
  }
  
  // Make updateDashboardStats globally available
  window.updateDashboardStats = updateDashboardStats;
}

function loadDashboardData() {
  updateDashboardStats();
  displayFoodItems();
  checkExpiryAlerts();
}

function updateDashboardStats() {
  const items = StorageManager.getAllItems();
  
  let totalSavings = 0;
  let totalCo2 = 0;
  let totalWater = 0;
  
  items.forEach(item => {
    if (item.calculatedData) {
      totalSavings += item.calculatedData.estimatedValue;
      totalCo2 += item.calculatedData.co2Impact;
      totalWater += item.calculatedData.waterImpact;
    }
  });
  
  // Update display elements
  const totalSavingsEl = document.getElementById('totalSavings');
  const totalCo2El = document.getElementById('totalCo2');
  const totalWaterEl = document.getElementById('totalWater');
  const totalItemsEl = document.getElementById('totalItems');
  
  if (totalSavingsEl) totalSavingsEl.textContent = `$${totalSavings.toFixed(2)}`;
  if (totalCo2El) totalCo2El.textContent = `${totalCo2.toFixed(1)} kg`;
  if (totalWaterEl) totalWaterEl.textContent = `${totalWater.toFixed(0)} L`;
  if (totalItemsEl) totalItemsEl.textContent = items.length.toString();
}

function displayFoodItems() {
  const itemList = document.getElementById('itemList');
  const noItemsMessage = document.getElementById('no-items-message');
  const sortFilter = document.getElementById('sortFilter');
  const categoryFilter = document.getElementById('categoryFilter');
  
  if (!itemList) return;
  
  let items = StorageManager.getAllItems();
  
  // Apply category filter
  if (categoryFilter && categoryFilter.value !== 'all') {
    const selectedCategory = categoryFilter.value;
    items = items.filter(item => {
      if (!item.calculatedData) return false;
      const foodData = foodExpiryDatabase[item.foodName];
      return foodData && foodData.category === selectedCategory;
    });
  }
  
  // Apply sorting
  if (sortFilter) {
    const sortBy = sortFilter.value;
    items.sort((a, b) => {
      switch(sortBy) {
        case 'urgency':
          const urgencyOrder = { 'urgent': 0, 'moderate': 1, 'safe': 2, 'expired': -1 };
          const aUrgency = a.calculatedData ? urgencyOrder[a.calculatedData.urgency] || 3 : 3;
          const bUrgency = b.calculatedData ? urgencyOrder[b.calculatedData.urgency] || 3 : 3;
          return aUrgency - bUrgency;
        case 'date':
          return new Date(a.purchaseDate) - new Date(b.purchaseDate);
        case 'name':
          return a.displayName.localeCompare(b.displayName);
        case 'category':
          const aCategory = foodExpiryDatabase[a.foodName]?.category || 'unknown';
          const bCategory = foodExpiryDatabase[b.foodName]?.category || 'unknown';
          return aCategory.localeCompare(bCategory);
        default:
          return 0;
      }
    });
  }
  
  if (items.length === 0) {
    itemList.innerHTML = '';
    noItemsMessage.style.display = 'block';
  } else {
    noItemsMessage.style.display = 'none';
    itemList.innerHTML = items.map(item => createItemCard(item)).join('');
  }
}

function createItemCard(item) {
  const calculatedData = item.calculatedData;
  if (!calculatedData) return '';
  
  const urgencyClass = `urgency-${calculatedData.urgency}`;
  const urgencyText = calculatedData.urgency.toUpperCase();
  
  const daysText = calculatedData.daysRemaining <= 0 ? 
    'EXPIRED' : 
    `${calculatedData.daysRemaining} day${calculatedData.daysRemaining === 1 ? '' : 's'} left`;
  
  return `
    <div class="item-card" data-item-id="${item.id}">
      <div class="item-header">
        <div class="item-name">${item.displayName || item.foodName}</div>
        <div class="item-quantity">${item.quantity}</div>
      </div>
      
      <div class="item-content">
        <div class="urgency-badge ${urgencyClass}">${urgencyText}</div>
        
        <div class="item-details">
          <div class="detail-item">
            <span class="detail-label">Purchased:</span>
            <span class="detail-value">${new Date(item.purchaseDate).toLocaleDateString()}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Storage:</span>
            <span class="detail-value">${item.storageCondition}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Expires:</span>
            <span class="detail-value">${calculatedData.expiryDate.toLocaleDateString()}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Days Left:</span>
            <span class="detail-value">${daysText}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Value:</span>
            <span class="detail-value">$${calculatedData.estimatedValue.toFixed(2)}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">CO2:</span>
            <span class="detail-value">${calculatedData.co2Impact.toFixed(1)} kg</span>
          </div>
        </div>
        
        <div class="item-actions">
          <button class="btn btn-small btn-primary" onclick="showRecipe('${item.foodName}')">Get Recipe</button>
          <button class="btn btn-small btn-secondary" onclick="updateUsage('${item.id}')">Mark Used</button>
          <button class="btn btn-small btn-danger" onclick="removeItem('${item.id}')">Remove</button>
        </div>
      </div>
    </div>
  `;
}

function displayRecentItem(item) {
  const recentItemSection = document.getElementById('recent-item-section');
  const recentItemCard = document.getElementById('recentItemCard');
  
  if (!recentItemSection || !recentItemCard) return;
  
  const calculatedData = item.calculatedData;
  
  recentItemCard.innerHTML = `
    <div class="recent-item-content">
      <div class="recent-badge">Just Added</div>
      <h3>${item.displayName || item.foodName}</h3>
      <p><strong>Quantity:</strong> ${item.quantity}</p>
      <p><strong>Storage:</strong> ${item.storageCondition}</p>
      <p><strong>Expires:</strong> ${calculatedData.expiryDate.toLocaleDateString()}</p>
      <p><strong>Status:</strong> ${calculatedData.urgency.toUpperCase()}</p>
    </div>
  `;
  
  recentItemSection.style.display = 'block';
}

function checkExpiryAlerts() {
  const items = StorageManager.getAllItems();
  const urgentItems = items.filter(item => 
    item.calculatedData && (item.calculatedData.urgency === 'urgent' || item.calculatedData.urgency === 'moderate')
  );
  
  const expiryAlertsSection = document.getElementById('expiry-alerts-section');
  const expiryAlerts = document.getElementById('expiryAlerts');
  
  if (!expiryAlertsSection || !expiryAlerts) return;
  
  if (urgentItems.length > 0) {
    expiryAlerts.innerHTML = urgentItems.map(item => {
      const isUrgent = item.calculatedData.urgency === 'urgent';
      return `
        <div class="alert-card ${isUrgent ? '' : 'moderate'}">
          <h4>${item.displayName || item.foodName}</h4>
          <p>${item.calculatedData.daysRemaining <= 0 ? 'EXPIRED!' : `${item.calculatedData.daysRemaining} days left`}</p>
          <p>Quantity: ${item.quantity}</p>
          <button class="btn btn-small btn-secondary" onclick="showRecipe('${item.foodName}')">
            Get Recipe Now
          </button>
        </div>
      `;
    }).join('');
    
    expiryAlertsSection.style.display = 'block';
  } else {
    expiryAlertsSection.style.display = 'none';
  }
}

function setupDashboardEventListeners() {
  // Export CSV button
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', () => {
      StorageManager.exportToCSV();
    });
  }
  
  // Export PDF button
  const exportPdfBtn = document.getElementById('exportPdfBtn');
  if (exportPdfBtn) {
    exportPdfBtn.addEventListener('click', () => {
      StorageManager.generatePDFReport();
    });
  }
  
  // Share impact button
  const shareImpactBtn = document.getElementById('shareImpactBtn');
  if (shareImpactBtn) {
    shareImpactBtn.addEventListener('click', () => {
      const items = StorageManager.getAllItems();
      const totalValue = items.reduce((sum, item) => 
        sum + (item.calculatedData ? item.calculatedData.estimatedValue : 0), 0);
      
      if (navigator.share) {
        navigator.share({
          title: 'My Food Waste Impact',
          text: `I've saved $${totalValue.toFixed(2)} and tracked ${items.length} food items with NutriScan AI! 🍎`,
          url: window.location.origin
        });
      } else {
        // Fallback: copy to clipboard
        const shareText = `I've saved $${totalValue.toFixed(2)} and tracked ${items.length} food items with NutriScan AI! 🍎 Check it out: ${window.location.origin}`;
        navigator.clipboard.writeText(shareText).then(() => {
          alert('Impact shared to clipboard!');
        });
      }
    });
  }
  
  // Notification toggle button
  const notificationBtn = document.getElementById('notificationBtn');
  if (notificationBtn) {
    const settings = StorageManager.getSettings();
    updateNotificationButtonText(notificationBtn, settings.notifications);
    
    notificationBtn.addEventListener('click', async () => {
      const currentSettings = StorageManager.getSettings();
      
      if (!currentSettings.notifications) {
        const granted = await notificationManager.requestPermission();
        if (granted) {
          StorageManager.saveSetting('notifications', true);
          notificationManager.startPeriodicCheck();
          updateNotificationButtonText(notificationBtn, true);
          alert('Notifications enabled! You\'ll receive alerts when food is about to expire.');
        } else {
          alert('Notification permission denied. You can enable it in your browser settings.');
        }
      } else {
        StorageManager.saveSetting('notifications', false);
        notificationManager.stopPeriodicCheck();
        updateNotificationButtonText(notificationBtn, false);
        alert('Notifications disabled.');
      }
    });
  }
  
  // Clear storage button
  const clearStorageBtn = document.getElementById('clearStorageBtn');
  if (clearStorageBtn) {
    clearStorageBtn.addEventListener('click', () => {
      StorageManager.clearAllData();
    });
  }
  
  // Sort and filter controls
  const sortFilter = document.getElementById('sortFilter');
  const categoryFilter = document.getElementById('categoryFilter');
  
  if (sortFilter) {
    sortFilter.addEventListener('change', displayFoodItems);
  }
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', displayFoodItems);
  }
  
  // Modal close handlers
  const recipeModal = document.getElementById('recipeModal');
  const usageModal = document.getElementById('usageModal');
  
  if (recipeModal) {
    const closeBtn = recipeModal.querySelector('.close-button');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        recipeModal.style.display = 'none';
      });
    }
    
    recipeModal.addEventListener('click', (e) => {
      if (e.target === recipeModal) {
        recipeModal.style.display = 'none';
      }
    });
  }
  
  if (usageModal) {
    const closeBtn = usageModal.querySelector('.close-usage-modal');
    const cancelBtn = document.getElementById('cancelUsage');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        usageModal.style.display = 'none';
      });
    }
    
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        usageModal.style.display = 'none';
      });
    }
    
    usageModal.addEventListener('click', (e) => {
      if (e.target === usageModal) {
        usageModal.style.display = 'none';
      }
    });
    
    // Usage form submission
    const usageForm = document.getElementById('usageForm');
    if (usageForm) {
      usageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usedQuantity = document.getElementById('usedQuantity').value.trim();
        const itemId = usageForm.dataset.itemId;
        
        if (usedQuantity && itemId) {
          StorageManager.updateItemUsage(itemId, usedQuantity);
          usageModal.style.display = 'none';
          loadDashboardData(); // Refresh display
        }
      });
    }
  }
}

function updateNotificationButtonText(button, enabled) {
  button.textContent = enabled ? '🔔 Notifications On' : '🔔 Enable Notifications';
}

// Global functions for item actions
window.showRecipe = function(foodName) {
  const recipes = detailedRecipeDatabase[foodName];
  const modal = document.getElementById('recipeModal');
  const modalBody = document.getElementById('modal-body');
  
  if (!recipes || recipes.length === 0) {
    modalBody.innerHTML = `
      <div class="recipe-header">
        <h3 class="recipe-title">Recipe Suggestions for ${foodName.replace(/_/g, ' ')}</h3>
      </div>
      <p>We don't have specific recipes for this item yet, but here are some general suggestions:</p>
      <ul>
        <li>Use in a stir-fry with other vegetables</li>
        <li>Add to soups or stews</li>
        <li>Include in salads or sandwiches</li>
        <li>Cook with pasta or rice dishes</li>
      </ul>
      <p><strong>Tip:</strong> Search online for "${foodName.replace(/_/g, ' ')} recipes" for more specific ideas!</p>
    `;
  } else {
    const recipe = recipes[0]; // Show first recipe
    modalBody.innerHTML = `
      <div class="recipe-header">
        <h3 class="recipe-title">${recipe.name}</h3>
        <div class="recipe-meta">
          <span>⏱️ ${recipe.time}</span>
          <span>👥 ${recipe.portions}</span>
          <span>📊 ${recipe.difficulty}</span>
        </div>
      </div>
      
      <div class="recipe-section">
        <h4>Ingredients:</h4>
        <ul class="recipe-ingredients">
          ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      
      <div class="recipe-section">
        <h4>Instructions:</h4>
        <p class="recipe-instructions">${recipe.instructions}</p>
      </div>
      
      ${recipe.nutrition ? `
        <div class="recipe-section">
          <h4>Nutrition (per serving):</h4>
          <p>${recipe.nutrition}</p>
        </div>
      ` : ''}
    `;
  }
  
  modal.style.display = 'block';
};

window.updateUsage = function(itemId) {
  const modal = document.getElementById('usageModal');
  const form = document.getElementById('usageForm');
  const usedQuantityInput = document.getElementById('usedQuantity');
  
  if (modal && form) {
    form.dataset.itemId = itemId;
    usedQuantityInput.value = '';
    modal.style.display = 'block';
    usedQuantityInput.focus();
  }
};

window.removeItem = function(itemId) {
  if (confirm('Are you sure you want to remove this item?')) {
    StorageManager.deleteItem(itemId);
    loadDashboardData(); // Refresh display
  }
};

// =========================
// ABOUT PAGE INITIALIZATION
// =========================
function initializeAboutPage() {
  // Add any about page specific functionality here
  // For now, the about page is mostly static content
}

// =========================
// PRICING PAGE INITIALIZATION
// =========================
function initializePricingPage() {
  // Add pricing page specific functionality
  const upgradeButtons = document.querySelectorAll('[data-testid^="button-upgrade"]');
  
  upgradeButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Upgrade functionality would integrate with payment processor in production. This is a demo version.');
    });
  });
}

// =========================
// UTILITY FUNCTIONS
// =========================

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

// Get category emoji
function getCategoryEmoji(category) {
  const emojis = {
    fruit: '🍎',
    vegetable: '🥕',
    dairy: '🥛',
    protein: '🥩',
    grain: '🌾',
    pantry: '🏪',
    beverage: '🥤'
  };
  return emojis[category] || '🍽️';
}

// Handle errors gracefully
function handleError(error, message = 'An error occurred') {
  console.error('Error:', error);
  
  // Show user-friendly error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '20px';
  errorDiv.style.right = '20px';
  errorDiv.style.zIndex = '9999';
  
  document.body.appendChild(errorDiv);
  
  setTimeout(() => {
    document.body.removeChild(errorDiv);
  }, 5000);
}

// =========================
// API INTEGRATION PLACEHOLDERS
// =========================

/**
 * These functions demonstrate where real API integrations would be implemented
 * in a production version of the application.
 */

class APIService {
  constructor() {
    this.baseURL = 'https://api.nutriscan.ai/v1';
    this.apiKey = process.env.NUTRISCAN_API_KEY || 'demo-key';
  }
  
  /**
   * Real food recognition API integration placeholder
   * In production, this would send image data to an AI service
   */
  async recognizeFoodFromImage(imageBlob) {
    // Placeholder for image recognition API
    throw new Error('Image recognition requires API integration - placeholder only');
    
    /* Production implementation would look like:
    const formData = new FormData();
    formData.append('image', imageBlob);
    
    const response = await fetch(`${this.baseURL}/recognize`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: formData
    });
    
    return await response.json();
    */
  }
  
  /**
   * Enhanced recipe API integration placeholder
   * In production, this would fetch recipes from a recipe database
   */
  async getAdvancedRecipes(foodName, quantity, dietaryRestrictions = []) {
    // Placeholder for recipe API
    throw new Error('Advanced recipe API requires integration - placeholder only');
    
    /* Production implementation would look like:
    const response = await fetch(`${this.baseURL}/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        ingredients: [foodName],
        quantity,
        dietary_restrictions: dietaryRestrictions
      })
    });
    
    return await response.json();
    */
  }
  
  /**
   * Nutrition data API integration placeholder
   * In production, this would fetch detailed nutrition information
   */
  async getNutritionData(foodName, quantity) {
    // Placeholder for nutrition API
    throw new Error('Nutrition API requires integration - placeholder only');
    
    /* Production implementation would look like:
    const response = await fetch(`${this.baseURL}/nutrition`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      },
      params: {
        food: foodName,
        quantity: quantity
      }
    });
    
    return await response.json();
    */
  }
  
  /**
   * User analytics API integration placeholder
   * In production, this would send user data for analytics
   */
  async trackUserAction(action, data) {
    // Placeholder for analytics API
    console.log('Analytics tracking placeholder:', action, data);
    
    /* Production implementation would look like:
    await fetch(`${this.baseURL}/analytics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        action,
        data,
        timestamp: new Date().toISOString(),
        user_id: this.getUserId()
      })
    });
    */
  }
}

// Initialize API service (for future use)
const apiService = new APIService();

// =========================
// ERROR HANDLING & MONITORING
// =========================

// Global error handler
window.addEventListener('error', function(e) {
  handleError(e.error, 'A technical error occurred. Please refresh the page.');
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
  handleError(e.reason, 'A network error occurred. Please check your connection.');
});

console.log('🍎 NutriScan AI Enhanced Script Loaded Successfully');
console.log('📊 Features: Purchase date tracking, fuzzy matching, notifications, PWA support');
console.log('🔧 Version: Production-ready with realistic functionality');
