import { setCurrentUser } from "./store";
import { renderHomePage } from "./main";
import { renderStudentDashboard } from "./dashboard";
import { renderDoctorDashboard } from "./doctor-dashboard";
import { renderLoginPage } from "./login";

export function renderSignupPage(container: HTMLDivElement) {
  container.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-8">
      <div class="absolute top-4 left-4">
        <button id="backHomeBtn" class="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
          ← Back to Home
        </button>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-5xl">
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-800">Create Your Account</h2>
          <p class="text-gray-600 mt-2">Join MindCare BD and start your wellness journey</p>
        </div>

        <!-- Role Selection -->
        <div id="roleSelection" class="mb-8">
          <h3 class="text-center font-bold text-lg mb-4 text-gray-700">I am signing up as:</h3>
          <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button id="selectStudent" class="role-select-btn border-3 border-blue-300 bg-blue-50 rounded-2xl p-8 text-center hover:border-blue-500 hover:bg-blue-100 transition transform hover:scale-105">
              <span class="text-6xl block mb-3">🎓</span>
              <h4 class="font-bold text-2xl text-gray-800 mb-2">Student</h4>
              <p class="text-gray-600 text-sm">Get mental health support and guidance</p>
            </button>
            <button id="selectDoctor" class="role-select-btn border-3 border-green-300 bg-green-50 rounded-2xl p-8 text-center hover:border-green-500 hover:bg-green-100 transition transform hover:scale-105">
              <span class="text-6xl block mb-3">👨‍⚕️</span>
              <h4 class="font-bold text-2xl text-gray-800 mb-2">Doctor/Therapist</h4>
              <p class="text-gray-600 text-sm">Provide professional mental health care</p>
            </button>
          </div>
        </div>

        <!-- Student Signup Form (Hidden Initially) -->
        <div id="studentForm" class="hidden">
          <div class="mb-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p class="text-sm text-blue-800"><strong>Student Registration</strong> - Choose your plan and get started</p>
          </div>

          <form id="studentSignupForm" class="space-y-5">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Full Name *</label>
                <input type="text" id="studentName" required placeholder="Enter your full name" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                <input type="email" id="studentEmail" required placeholder="your.email@example.com" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Password *</label>
                <input type="password" id="studentPassword" required placeholder="••••••••" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Phone Number *</label>
                <input type="tel" id="studentPhone" required placeholder="+880 1XXX-XXXXXX" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-700">University/Institution</label>
              <input type="text" id="studentInstitution" placeholder="e.g., University of Dhaka" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
            </div>

            <!-- Subscription Plans -->
            <div class="mt-8">
              <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Choose Your Plan</h3>
              <div class="grid md:grid-cols-3 gap-4">
                <!-- Free Plan -->
                <label class="relative cursor-pointer">
                  <input type="radio" name="plan" value="free" checked class="peer sr-only" />
                  <div class="border-3 border-gray-200 rounded-2xl p-6 hover:border-blue-400 peer-checked:border-blue-600 peer-checked:bg-blue-50 transition">
                    <div class="text-center mb-4">
                      <span class="text-4xl block mb-2">🆓</span>
                      <h4 class="font-bold text-xl text-gray-800">Free</h4>
                      <p class="text-3xl font-bold text-gray-800 my-2">৳0<span class="text-sm text-gray-500">/month</span></p>
                    </div>
                    <ul class="space-y-2 text-sm text-gray-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Share problems anonymously</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Text-based replies</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Resource library access</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-gray-400">✗</span>
                        <span class="text-gray-400">Priority responses</span>
                      </li>
                    </ul>
                  </div>
                </label>

                <!-- Premium Plan -->
                <label class="relative cursor-pointer">
                  <input type="radio" name="plan" value="premium" class="peer sr-only" />
                  <div class="border-3 border-purple-200 rounded-2xl p-6 hover:border-purple-400 peer-checked:border-purple-600 peer-checked:bg-purple-50 transition relative overflow-hidden">
                    <div class="absolute top-2 right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">POPULAR</div>
                    <div class="text-center mb-4">
                      <span class="text-4xl block mb-2">⭐</span>
                      <h4 class="font-bold text-xl text-gray-800">Premium</h4>
                      <p class="text-3xl font-bold text-purple-600 my-2">৳499<span class="text-sm text-gray-500">/month</span></p>
                    </div>
                    <ul class="space-y-2 text-sm text-gray-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Everything in Free</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Priority responses (24hrs)</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Voice message support</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>2 video calls/month (30min)</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Mood tracking tools</span>
                      </li>
                    </ul>
                  </div>
                </label>

                <!-- Elite Plan -->
                <label class="relative cursor-pointer">
                  <input type="radio" name="plan" value="elite" class="peer sr-only" />
                  <div class="border-3 border-yellow-200 rounded-2xl p-6 hover:border-yellow-400 peer-checked:border-yellow-600 peer-checked:bg-yellow-50 transition">
                    <div class="text-center mb-4">
                      <span class="text-4xl block mb-2">👑</span>
                      <h4 class="font-bold text-xl text-gray-800">Elite</h4>
                      <p class="text-3xl font-bold text-yellow-600 my-2">৳999<span class="text-sm text-gray-500">/month</span></p>
                    </div>
                    <ul class="space-y-2 text-sm text-gray-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Everything in Premium</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Immediate responses</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Unlimited video calls</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Personal therapist assigned</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Crisis intervention support</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500">✓</span>
                        <span>Family counseling sessions</span>
                      </li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>

            <div class="flex items-start gap-3 mt-6">
              <input type="checkbox" id="studentTerms" required class="w-5 h-5 text-blue-600 rounded mt-1" />
              <label for="studentTerms" class="text-sm text-gray-700">
                I agree to the <a href="#" class="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-bold text-lg">
              Create Student Account
            </button>

            <button type="button" id="backToRoleFromStudent" class="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition font-semibold">
              ← Change Role
            </button>
          </form>
        </div>

        <!-- Doctor Signup Form (Hidden Initially) -->
        <div id="doctorForm" class="hidden">
          <div class="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p class="text-sm text-green-800"><strong>Professional Registration</strong> - Verification required</p>
          </div>

          <form id="doctorSignupForm" class="space-y-5">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Full Name (Dr.) *</label>
                <input type="text" id="doctorName" required placeholder="Dr. Full Name" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                <input type="email" id="doctorEmail" required placeholder="doctor@example.com" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Password *</label>
                <input type="password" id="doctorPassword" required placeholder="••••••••" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Phone Number *</label>
                <input type="tel" id="doctorPhone" required placeholder="+880 1XXX-XXXXXX" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Specialization *</label>
                <select id="doctorSpecialization" required class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition">
                  <option value="">Select specialization</option>
                  <option>Clinical Psychologist</option>
                  <option>Psychiatrist</option>
                  <option>Counseling Psychologist</option>
                  <option>Therapist</option>
                  <option>Social Worker</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Years of Experience *</label>
                <input type="number" id="doctorExperience" required placeholder="e.g., 5" min="0" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-700">License Number *</label>
              <input type="text" id="doctorLicense" required placeholder="BMDC Registration Number" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-700">Current Practice/Hospital *</label>
              <input type="text" id="doctorPractice" required placeholder="e.g., National Institute of Mental Health" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-700">Upload Verification Documents *</label>
              <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition">
                <input type="file" id="doctorDocuments" accept=".pdf,.jpg,.jpeg,.png" multiple class="hidden" />
                <label for="doctorDocuments" class="cursor-pointer">
                  <span class="text-4xl block mb-2">📄</span>
                  <p class="text-sm text-gray-600 mb-1">Click to upload license & certificates</p>
                  <p class="text-xs text-gray-500">PDF, JPG, PNG (Max 5MB each)</p>
                </label>
              </div>
            </div>

            <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p class="text-sm text-amber-800">
                <strong>⚠️ Verification Required:</strong> Your account will be reviewed within 24-48 hours. You'll receive an email once approved.
              </p>
            </div>

            <div class="flex items-start gap-3">
              <input type="checkbox" id="doctorTerms" required class="w-5 h-5 text-green-600 rounded mt-1" />
              <label for="doctorTerms" class="text-sm text-gray-700">
                I certify that all information provided is accurate and agree to the <a href="#" class="text-green-600 hover:underline">Professional Terms</a>
              </label>
            </div>

            <button type="submit" class="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-bold text-lg">
              Submit for Verification
            </button>

            <button type="button" id="backToRoleFromDoctor" class="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition font-semibold">
              ← Change Role
            </button>
          </form>
        </div>

        <!-- Login Link -->
        <div class="mt-6 text-center text-sm text-gray-600">
          <p>Already have an account? <span id="goToLogin" class="text-blue-600 font-semibold cursor-pointer hover:underline">Sign in</span></p>
        </div>
      </div>
    </div>
  `;

  setupSignupLogic(container);
}

function setupSignupLogic(container: HTMLDivElement) {
  const roleSelection = document.getElementById('roleSelection');
  const studentForm = document.getElementById('studentForm');
  const doctorForm = document.getElementById('doctorForm');
  
  const selectStudent = document.getElementById('selectStudent');
  const selectDoctor = document.getElementById('selectDoctor');
  const backToRoleFromStudent = document.getElementById('backToRoleFromStudent');
  const backToRoleFromDoctor = document.getElementById('backToRoleFromDoctor');
  const backHomeBtn = document.getElementById('backHomeBtn');
  const goToLogin = document.getElementById('goToLogin');

  // Role selection
  selectStudent?.addEventListener('click', () => {
    roleSelection!.classList.add('hidden');
    studentForm!.classList.remove('hidden');
  });

  selectDoctor?.addEventListener('click', () => {
    roleSelection!.classList.add('hidden');
    doctorForm!.classList.remove('hidden');
  });

  // Back to role selection
  backToRoleFromStudent?.addEventListener('click', () => {
    studentForm!.classList.add('hidden');
    roleSelection!.classList.remove('hidden');
  });

  backToRoleFromDoctor?.addEventListener('click', () => {
    doctorForm!.classList.add('hidden');
    roleSelection!.classList.remove('hidden');
  });

  // Back to home
  backHomeBtn?.addEventListener('click', () => {
    renderHomePage();
  });

  // Go to login
  goToLogin?.addEventListener('click', () => {
    renderLoginPage(container);
  });

  // Student signup form
  const studentSignupForm = document.getElementById('studentSignupForm') as HTMLFormElement;
  studentSignupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = (document.getElementById('studentName') as HTMLInputElement).value;
    const email = (document.getElementById('studentEmail') as HTMLInputElement).value;
    const password = (document.getElementById('studentPassword') as HTMLInputElement).value;
    const phone = (document.getElementById('studentPhone') as HTMLInputElement).value;
    const institution = (document.getElementById('studentInstitution') as HTMLInputElement).value;
    const plan = (document.querySelector('input[name="plan"]:checked') as HTMLInputElement)?.value || 'free';

    // Set user profile
    setCurrentUser({
      email,
      role: 'student',
      name,
      avatar: '🎓',
      phone,
      institution,
      subscription: plan as 'free' | 'premium' | 'elite',
      password
    });

    // Show success message
    showSuccessMessage(container, 'student', plan);
  });

  // Doctor signup form
  const doctorSignupForm = document.getElementById('doctorSignupForm') as HTMLFormElement;
  doctorSignupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show verification pending message
    showDoctorVerificationMessage(container);
  });
}

function showSuccessMessage(container: HTMLDivElement, role: string, plan?: string) {
  const planNames: any = {
    'free': 'Free',
    'premium': 'Premium',
    'elite': 'Elite'
  };

  container.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-lg text-center">
        <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span class="text-6xl">🎉</span>
        </div>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Welcome to MindCare BD!</h2>
        <p class="text-gray-600 mb-2">Your account has been created successfully.</p>
        ${plan ? `
          <div class="bg-purple-50 rounded-xl p-4 my-6">
            <p class="text-sm text-purple-700">Your selected plan: <strong class="text-lg">${planNames[plan]}</strong></p>
          </div>
        ` : ''}
        <p class="text-sm text-gray-500 mb-8">You can now access all features and start your wellness journey.</p>
        <button 
          id="gotoDashboard"
          class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  `;

  document.getElementById('gotoDashboard')?.addEventListener('click', () => {
    if (role === 'student') {
      renderStudentDashboard(container);
    } else {
      renderDoctorDashboard(container);
    }
  });
}

function showDoctorVerificationMessage(container: HTMLDivElement) {
  container.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4">
      <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-lg text-center">
        <div class="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span class="text-6xl">⏳</span>
        </div>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Verification Pending</h2>
        <p class="text-gray-600 mb-6">
          Thank you for submitting your application! Our team will review your credentials and verify your documents within 24-48 hours.
        </p>
        <div class="bg-blue-50 rounded-xl p-4 mb-6 text-left">
          <p class="text-sm text-blue-800 mb-2"><strong>What's next?</strong></p>
          <ul class="text-sm text-blue-700 space-y-1">
            <li>✓ Check your email for updates</li>
            <li>✓ Ensure your phone is accessible</li>
            <li>✓ We may contact you for additional verification</li>
          </ul>
        </div>
        <button 
          id="backToHome"
          class="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold"
        >
          Back to Home
        </button>
      </div>
    </div>
  `;

  document.getElementById('backToHome')?.addEventListener('click', () => {
    renderHomePage();
  });
}