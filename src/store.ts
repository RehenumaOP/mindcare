export interface Problem {
  category: string;
  title: string;
  description: string;
  anonymous: boolean;
  doctorReply?: string;
  timestamp?: string;
}

export interface UserProfile {
  email: string;
  role: 'student' | 'doctor';
  name?: string;
  avatar?: string;
  phone?: string;
  institution?: string;
  subscription?: 'free' | 'premium' | 'elite';
  specialization?: string;
  experience?: string;
  license?: string;
  practice?: string;
  verified?: boolean;
  password?: string; // For authentication
  [key: string]: any;
}

// Load problems from LocalStorage
export const problems: Problem[] = JSON.parse(
  localStorage.getItem("problems") || "[]"
);

export let selectedProblemIndex: number | null = null;

// Current user profile
export let currentUser: UserProfile | null = JSON.parse(
  localStorage.getItem("currentUser") || "null"
);

export function setSelectedProblemIndex(index: number | null) {
  selectedProblemIndex = index;
}

export function saveProblems() {
  localStorage.setItem("problems", JSON.stringify(problems));
}

export function setCurrentUser(user: UserProfile | null) {
  currentUser = user;
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    // Also save to users database
    saveUserToDatabase(user);
  } else {
    localStorage.removeItem("currentUser");
  }
}

// Save user to database (indexed by email)
function saveUserToDatabase(user: UserProfile) {
  const users = getUsersDatabase();
  users[user.email] = user;
  localStorage.setItem("usersDatabase", JSON.stringify(users));
}

// Get all users
function getUsersDatabase(): { [email: string]: UserProfile } {
  return JSON.parse(localStorage.getItem("usersDatabase") || "{}");
}

// Get user by email
export function getUserByEmail(email: string): UserProfile | null {
  const users = getUsersDatabase();
  return users[email] || null;
}

// Authenticate user
export function authenticateUser(email: string, password: string): UserProfile | null {
  const user = getUserByEmail(email);
  if (user && user.password === password) {
    return user;
  }
  return null;
}

export function logout() {
  setCurrentUser(null);
}

// Helper function to check if user has premium features
export function hasPremiumAccess(): boolean {
  return currentUser?.subscription === 'premium' || currentUser?.subscription === 'elite';
}

export function hasEliteAccess(): boolean {
  return currentUser?.subscription === 'elite';
}