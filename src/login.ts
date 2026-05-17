import { renderDoctorDashboard } from "./doctor-dashboard";
import { renderStudentDashboard } from "./dashboard";
import { setCurrentUser, authenticateUser } from "./store";
import { renderHomePage } from "./main";
import { renderSignupPage } from "./signup";

export function renderLoginPage(container: HTMLDivElement) {
  container.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <div class="absolute top-4 left-4">
        <button id="backHomeBtn" class="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
          ← Back to Home
        </button>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p class="text-gray-600 mt-2">Sign in to continue your journey</p>
        </div>

        <form id="loginForm" class="space-y-5">
          <div>
            <label class="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Enter your name"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="your.email@example.com"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold mb-2 text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="••••••••"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold mb-3 text-gray-700">I am a:</label>
            <div class="grid grid-cols-2 gap-4">
              <label class="relative cursor-pointer">
                <input type="radio" name="role" value="student" checked class="peer sr-only" />
                <div class="border-2 border-gray-200 rounded-xl p-4 text-center hover:border-blue-400 peer-checked:border-blue-600 peer-checked:bg-blue-50 transition">
                  <span class="text-3xl block mb-2">🎓</span>
                  <span class="font-semibold text-gray-700 peer-checked:text-blue-600">Student</span>
                </div>
              </label>
              <label class="relative cursor-pointer">
                <input type="radio" name="role" value="doctor" class="peer sr-only" />
                <div class="border-2 border-gray-200 rounded-xl p-4 text-center hover:border-blue-400 peer-checked:border-blue-600 peer-checked:bg-blue-50 transition">
                  <span class="text-3xl block mb-2">👨‍⚕️</span>
                  <span class="font-semibold text-gray-700 peer-checked:text-blue-600">Doctor</span>
                </div>
              </label>
            </div>
          </div>

          <!-- Student Subscription Selection (Hidden by default) -->
          <div id="subscriptionSection" class="space-y-3">
            <label class="block text-sm font-semibold mb-3 text-gray-700">Select Your Plan:</label>
            <div class="space-y-3">
              <!-- Free Plan -->
              <label class="relative cursor-pointer">
                <input type="radio" name="subscription" value="free" checked class="peer sr-only" />
                <div class="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-400 peer-checked:border-blue-600 peer-checked:bg-blue-50 transition flex items-center gap-4">
                  <div class="flex-shrink-0">
                    <span class="text-3xl">🆓</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <h4 class="font-bold text-gray-800">Free</h4>
                      <span class="text-sm font-semibold text-gray-600">৳0/month</span>
                    </div>
                    <p class="text-xs text-gray-600">Basic text support & resources</p>
                  </div>
                </div>
              </label>

              <!-- Premium Plan -->
              <label class="relative cursor-pointer">
                <input type="radio" name="subscription" value="premium" class="peer sr-only" />
                <div class="border-2 border-purple-200 rounded-xl p-4 hover:border-purple-400 peer-checked:border-purple-600 peer-checked:bg-purple-50 transition flex items-center gap-4">
                  <div class="flex-shrink-0">
                    <span class="text-3xl">⭐</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <h4 class="font-bold text-gray-800">Premium</h4>
                      <span class="text-sm font-semibold text-purple-600">৳499/month</span>
                      <span class="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">POPULAR</span>
                    </div>
                    <p class="text-xs text-gray-600">Priority support + 2 video calls + voice messages</p>
                  </div>
                </div>
              </label>

              <!-- Elite Plan -->
              <label class="relative cursor-pointer">
                <input type="radio" name="subscription" value="elite" class="peer sr-only" />
                <div class="border-2 border-yellow-200 rounded-xl p-4 hover:border-yellow-400 peer-checked:border-yellow-600 peer-checked:bg-yellow-50 transition flex items-center gap-4">
                  <div class="flex-shrink-0">
                    <span class="text-3xl">👑</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <h4 class="font-bold text-gray-800">Elite</h4>
                      <span class="text-sm font-semibold text-yellow-600">৳999/month</span>
                    </div>
                    <p class="text-xs text-gray-600">Unlimited calls + personal therapist + family sessions</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold text-lg"
          >
            Sign In
          </button>

          <div class="text-center">
            <a href="#" class="text-sm text-blue-600 hover:underline font-medium">
              Forgot Password?
            </a>
          </div>
        </form>

        <div class="mt-6 text-center text-sm text-gray-600">
          <p>Don't have an account? <span id="goToSignup" class="text-blue-600 font-semibold cursor-pointer hover:underline">Sign up</span></p>
        </div>
      </div>
    </div>
  `;

  setupLoginLogic(container);
}

function setupLoginLogic(container: HTMLDivElement) {
  const form = document.querySelector<HTMLFormElement>("#loginForm")!;
  const backHomeBtn = document.querySelector("#backHomeBtn");
  const goToSignup = document.querySelector("#goToSignup");
  const subscriptionSection = document.querySelector("#subscriptionSection") as HTMLElement;
  const roleInputs = document.querySelectorAll<HTMLInputElement>('input[name="role"]');

  backHomeBtn?.addEventListener("click", () => {
    renderHomePage();
  });

  goToSignup?.addEventListener("click", () => {
    renderSignupPage(container);
  });

  // Show/hide subscription selection based on role
  roleInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.value === 'student') {
        subscriptionSection.style.display = 'block';
      } else {
        subscriptionSection.style.display = 'none';
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = (document.querySelector("#email") as HTMLInputElement).value;
    const password = (document.querySelector("#password") as HTMLInputElement).value;
    const roleInput = document.querySelector<HTMLInputElement>('input[name="role"]:checked');
    const role = (roleInput ? roleInput.value : "student") as 'student' | 'doctor';

    // Try to authenticate existing user
    const existingUser = authenticateUser(email, password);
    
    if (existingUser) {
      // User exists - login with their saved subscription
      setCurrentUser(existingUser);
      
      // Navigate based on role
      if (existingUser.role === "doctor") {
        renderDoctorDashboard(container);
      } else {
        renderStudentDashboard(container);
      }
    } else {
      // New user - create account
      const name = (document.querySelector("#name") as HTMLInputElement).value;
      let subscription: 'free' | 'premium' | 'elite' = 'free';
      
      // Get subscription only if student
      if (role === 'student') {
        const subscriptionInput = document.querySelector<HTMLInputElement>('input[name="subscription"]:checked');
        subscription = (subscriptionInput ? subscriptionInput.value : 'free') as 'free' | 'premium' | 'elite';
      }

      // Set user profile
      setCurrentUser({
        email,
        role,
        name,
        avatar: role === 'doctor' ? '👨‍⚕️' : '🎓',
        subscription: role === 'student' ? subscription : undefined,
        password
      });

      // Navigate based on role
      if (role === "doctor") {
        renderDoctorDashboard(container);
      } else {
        renderStudentDashboard(container);
      }
    }
  });
}