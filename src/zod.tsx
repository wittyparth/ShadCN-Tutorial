import { z } from 'zod';

// =============================================================================
// EXERCISE: E-COMMERCE PLATFORM VALIDATION SYSTEM
// =============================================================================
// You need to create comprehensive validation for an e-commerce platform
// This exercise covers ALL Zod concepts: basic types, objects, arrays, unions, 
// custom validation, async validation, error handling, and TypeScript integration

// =============================================================================
// PART 1: USER REGISTRATION SYSTEM
// =============================================================================

// TODO 1: Create a user registration schema with the following requirements:
// - username: string, 3-20 characters, only letters/numbers/underscores, must be unique (async check)
// - email: valid email format, must end with approved domains (.com, .org, .net)
// - password: min 8 chars, must contain: uppercase, lowercase, number, special char
// - confirmPassword: must match password
// - age: number, must be 13 or older
// - phoneNumber: string, must match format: +1-XXX-XXX-XXXX or XXX-XXX-XXXX
// - terms: boolean, must be true
// - newsletter: optional boolean, defaults to false

// Simulated database check for unique username
async function checkUsernameAvailable(username : string) {
  const takenUsernames = ['admin', 'test', 'user123', 'john_doe'];
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return !takenUsernames.includes(username.toLowerCase());
}

const userRegistrationSchema = z.object({
  username : z.string().min(3,"username must be atlest 3 characters").max(20,"username must be atmost 20 characters").refine(val => /^[A-Za-z0-9_]+$/.test(val),"Invalid username").refine(async(val) => {
      let exists = await checkUsernameAvailable(val)
      return !exists
  },"Username already taken"),
  email : z.email().refine(
    val => val.endsWith(".com") | val.endsWith(".org") | val.endsWith(".net")
  ,"email must be from approved domains"),
  password : z.string().min(8).refine(
    (val) => /[A-Z]/.test(val),
    { message: "Must contain at least one uppercase letter" }
  )
  .refine(
    (val) => /[0-9]/.test(val),
    { message: "Must contain at least one number" }
  )
  .refine(
    (val) => /[!@#$%^&*]/.test(val),
    { message: "Must contain at least one special character" }
  ),
  age : z.number().min(13),
  phoneNumber : z.string().refine((val)=>/^(?:\+1-)?\d{3}-\d{3}-\d{4}$/.test(val)),
  terms : z.boolean().refine(val => val===true),
  newsletter : z.boolean().optional().default(false)
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"]
})

// =============================================================================
// PART 2: PRODUCT MANAGEMENT SYSTEM
// =============================================================================

// TODO 2: Create schemas for different product types using discriminated unions
// Product types:
// 1. Physical Product: { type: "physical", name, price, weight, dimensions: {length, width, height}, inStock }
// 2. Digital Product: { type: "digital", name, price, fileSize, downloadUrl, licenseType: "single"|"multi" }
// 3. Service Product: { type: "service", name, price, duration (in minutes), isRemote }

// All products should have:
// - name: string, 2-100 characters
// - price: positive number, max 999999.99
// - category: enum of ["electronics", "clothing", "books", "software", "services"]
// - tags: array of strings, max 10 tags, each tag 1-20 characters

const baseProductSchema = z.object({
  name : z.string().min(2).max(100),
  price : z.number().positive().max(999999.99),
  category : z.enum(["electronics", "clothing", "books", "software", "services"]),
  tags : z.array(z.string().min(1).max(20)).max(10)
});

const productSchema = z.discriminatedUnion("type", [
  baseProductSchema.extend(z.object({
    type : z.literal("physical"),
    weight : z.number(),
    dimensions : z.object({
      length : z.number(),
      breadth : z.number(),
      height : z.number()
    }),
    inStock : z.boolean().default(false)
  })),
  baseProductSchema.extend(z.object({
    type : "digital",
    fileSize : z.number(),
    downloadUrl : z.string().url(),
    licenseType : z.enum(["single","multi"])
  })),
  baseProductSchema.extend(z.object({
    type : "service",
    duration : z.number(),
    isRemote : z.boolean()
  })),
]);

// =============================================================================
// PART 3: ORDER PROCESSING SYSTEM
// =============================================================================

// TODO 3: Create order validation with complex business rules
// Order schema requirements:
// - orderId: string or number (union)
// - customerId: string UUID format
// - items: array of order items (productId, quantity, priceAtTime)
//   * quantity must be positive integer
//   * priceAtTime must match current product price (custom validation)
// - shippingAddress: complete address object
// - paymentMethod: union of different payment types
// - orderDate: date, cannot be in the future
// - totalAmount: number, must equal sum of (quantity × priceAtTime) for all items
// - discountCode: optional string, if provided must be valid format (SAVE10, WELCOME20, etc.)
// - status: enum ["pending", "processing", "shipped", "delivered", "cancelled"]

// Payment method types (discriminated union):
// - Credit Card: { type: "credit_card", cardNumber (16 digits), expiryMonth (1-12), expiryYear (current year+), cvv (3-4 digits) }
// - PayPal: { type: "paypal", email }
// - Bank Transfer: { type: "bank_transfer", routingNumber (9 digits), accountNumber (string) }

// Mock product price database
const productPrices = {
  "prod_001": 29.99,
  "prod_002": 149.50,
  "prod_003": 9.99
};

// Mock valid discount codes
const validDiscountCodes = ["SAVE10", "WELCOME20", "STUDENT15", "HOLIDAY25"];

const orderSchema = z.object({
  // TODO: Implement complete order schema with all validations
})
.refine(/* TODO: Add total amount calculation validation */)
.refine(/* TODO: Add discount code validation */)
.refine(/* TODO: Add any other business rule validations */);

// =============================================================================
// PART 4: SEARCH AND FILTERING SYSTEM
// =============================================================================

// TODO 4: Create flexible search query validation
// Search can be:
// - Simple string search: "laptop"
// - Advanced object search: { query: string, filters: {...}, sort: {...}, pagination: {...} }
// - ID-based search: number or string ID
// - Category search: { category: string, subcategory?: string }

const searchQuerySchema = z.union([
  // TODO: Define all possible search types
]);

// =============================================================================
// PART 5: API RESPONSE VALIDATION
// =============================================================================

// TODO 5: Create API response schemas with nested validation
// Response types:
// - Success response: { success: true, data: T, timestamp, requestId }
// - Error response: { success: false, error: { code, message, details? }, timestamp, requestId }
// - Paginated response: { success: true, data: T[], pagination: { page, limit, total, hasNext }, timestamp, requestId }

function createApiResponseSchema(dataSchema) {
  // TODO: Implement generic API response wrapper
}

// =============================================================================
// PART 6: CONFIGURATION AND SETTINGS VALIDATION
// =============================================================================

// TODO 6: Create a complex settings schema with conditional validation
// Settings should include:
// - theme: "light" | "dark" | "auto"
// - language: ISO language code (2 letters)
// - notifications: object with email, sms, push preferences
// - privacy: object with various privacy settings
// - preferences: object that changes structure based on user role
//   * admin: { adminPanel: boolean, systemAlerts: boolean, userManagement: boolean }
//   * user: { recommendations: boolean, saveHistory: boolean }
//   * merchant: { salesReports: boolean, inventoryAlerts: boolean, customerMessages: boolean }

const settingsSchema = z.object({
  // TODO: Implement settings with conditional validation based on user role
});

// =============================================================================
// PART 7: REAL-WORLD USAGE AND ERROR HANDLING
// =============================================================================

// TODO 7: Create comprehensive validation functions with proper error handling
// Implement these functions:

async function validateUserRegistration(data) {
  // TODO: Validate registration data and return detailed error information
  // Should handle both sync and async validations
  // Return: { success: boolean, data?: ValidatedData, errors?: ErrorDetails[] }
}

function validateProduct(data) {
  // TODO: Validate product data with detailed error paths
}

function validateOrder(data) {
  // TODO: Validate order with all business rules
}

function validateSearchQuery(data) {
  // TODO: Validate search query and transform if needed
}

// =============================================================================
// PART 8: ADVANCED FEATURES
// =============================================================================

// TODO 8: Implement advanced Zod features:

// A. Transform and preprocess data
const preprocessedSchema = z.string()
  .transform(/* TODO: Add data transformation */);

// B. Create a schema that validates file upload metadata
const fileUploadSchema = z.object({
  // TODO: Validate file uploads with custom rules
  // - fileName: string, valid filename format
  // - fileSize: number, max 10MB for images, 100MB for videos
  // - fileType: must match allowed types based on upload context
  // - checksum: string, for file integrity
});

// C. Create a recursive schema for nested comments
const commentSchema = z.object({
  // TODO: Create recursive comment structure
  // id, content, author, timestamp, replies (array of comments)
});

// =============================================================================
// TESTING SECTION
// =============================================================================

// TODO 9: Test your implementations with these test cases:

const testCases = {
  validUser: {
    username: "john_smith",
    email: "john@example.com",
    password: "SecurePass123!",
    confirmPassword: "SecurePass123!",
    age: 25,
    phoneNumber: "+1-555-123-4567",
    terms: true,
    newsletter: false
  },
  
  invalidUser: {
    username: "ab", // too short
    email: "invalid-email",
    password: "weak", // doesn't meet requirements
    confirmPassword: "different",
    age: 12, // too young
    phoneNumber: "123", // invalid format
    terms: false // must be true
  },
  
  validPhysicalProduct: {
    type: "physical",
    name: "Wireless Headphones",
    price: 99.99,
    category: "electronics",
    tags: ["audio", "wireless", "bluetooth"],
    weight: 250,
    dimensions: { length: 20, width: 18, height: 8 },
    inStock: true
  },
  
  validOrder: {
    orderId: "ORDER_12345",
    customerId: "550e8400-e29b-41d4-a716-446655440000",
    items: [
      { productId: "prod_001", quantity: 2, priceAtTime: 29.99 },
      { productId: "prod_002", quantity: 1, priceAtTime: 149.50 }
    ],
    shippingAddress: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "USA"
    },
    paymentMethod: {
      type: "credit_card",
      cardNumber: "4111111111111111",
      expiryMonth: 12,
      expiryYear: 2025,
      cvv: "123"
    },
    orderDate: new Date(),
    totalAmount: 209.48, // (29.99 * 2) + 149.50
    status: "pending"
  }
};

// Run tests
async function runTests() {
  console.log("🧪 Running Zod Validation Tests...\n");
  
  // TODO: Implement test runners for each schema
  // Test valid and invalid cases
  // Log results with proper error handling
}

// Uncomment to run tests:
// runTests();

// =============================================================================
// BONUS CHALLENGES
// =============================================================================

// TODO 10: BONUS - Implement these advanced scenarios:
// 1. Multi-step form validation where later steps depend on earlier ones
// 2. Conditional schema that changes completely based on a field value
// 3. Schema composition where you merge multiple schemas with overlap resolution
// 4. Custom error messages with internationalization support
// 5. Schema versioning system for API backward compatibility

console.log("🎯 Complete all TODOs to master Zod validation!");
console.log("💡 This exercise covers: basic types, objects, arrays, unions,");
console.log("   custom validation, async validation, discriminated unions,");
console.log("   error handling, transforms, recursive schemas, and more!");