import { problems, setSelectedProblemIndex, currentUser, logout } from "./store";
import { renderShareProblemPage } from "./share-problem";
import { renderViewProblemPage } from "./view-problem";
import { renderHomePage } from "./main";
import { renderResourcesPage } from "./resources";
import { renderEmergencyPage } from "./emergency";

export function renderEliteDashboard(container: HTMLDivElement) {
  const userName = currentUser?.name || 'Student';
  const userAvatar = currentUser?.avatar || '🎓';
  const nextTherapySession = 'Jan 28, 2026 at 3:00 PM';
  const personalTherapist = 'Dr. Sarah Rahman';

  container.innerHTML = `
    <nav class="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 shadow-lg px-6 py-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-white flex items-center gap-2">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
          </svg>
          MindCare BD 👑 Elite
        </h1>

        <div class="flex gap-8 items-center">
          <span id="nav-home" class="text-white hover:text-yellow-200 cursor-pointer font-medium transition">Home</span>
          <span id="nav-dashboard" class="text-yellow-200 font-semibold">Dashboard</span>
          <span id="nav-resources" class="text-white hover:text-yellow-200 cursor-pointer font-medium transition">Resources</span>
          <span id="nav-emergency" class="text-white hover:text-yellow-200 cursor-pointer font-medium transition flex items-center gap-1">
            <span class="animate-pulse text-red-300">●</span> Emergency
          </span>
          <div class="flex items-center gap-3 ml-4 bg-white bg-opacity-20 rounded-full px-4 py-2">
            <span class="text-2xl">${userAvatar}</span>
            <span class="text-white font-medium">${userName}</span>
            <span id="logoutBtn" class="text-red-300 hover:text-red-100 cursor-pointer ml-2 transition">Logout</span>
          </div>
        </div>
      </div>
    </nav>

    <div class="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-6">
      <div class="max-w-7xl mx-auto space-y-6">
        
        <!-- Elite Welcome Banner -->
        <div class="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-5xl">👑</span>
              <span class="px-4 py-2 bg-white bg-opacity-30 rounded-full text-sm font-bold animate-pulse">
                ELITE MEMBER - VIP ACCESS
              </span>
            </div>
            <h2 class="text-4xl font-bold mb-2">Welcome back, ${userName}!</h2>
            <p class="text-yellow-100 text-lg">You have unlimited access to all premium features and personalized care</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 gap-6">
          <!-- Main Content - Left Column -->
          <div class="lg:col-span-2 space-y-6">
            
            <!-- Personal Therapist Card -->
            <div class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <div class="flex items-start justify-between mb-6">
                <div>
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-4xl">👨‍⚕️</span>
                    <div>
                      <h3 class="text-2xl font-bold">Your Personal Therapist</h3>
                      <p class="text-indigo-200">Dedicated mental health professional</p>
                    </div>
                  </div>
                  <div class="bg-white bg-opacity-20 rounded-xl p-4 mt-4">
                    <p class="text-sm text-indigo-100 mb-1">Assigned Therapist</p>
                    <p class="text-2xl font-bold">${personalTherapist}</p>
                    <p class="text-sm text-indigo-200 mt-2">Specialization: Clinical Psychology</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <button class="bg-white bg-opacity-20 hover:bg-opacity-30 py-3 px-4 rounded-xl font-semibold transition">
                  📞 Call Now
                </button>
                <button class="bg-white bg-opacity-20 hover:bg-opacity-30 py-3 px-4 rounded-xl font-semibold transition">
                  📅 Schedule
                </button>
              </div>
            </div>

            <!-- Elite Features Grid -->
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Unlimited Video Calls -->
              <div class="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition cursor-pointer transform hover:scale-105" id="videoCallBtn">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span class="text-3xl">📹</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl">Unlimited Video Calls</h3>
                    <p class="text-sm text-blue-100">Connect anytime</p>
                  </div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-lg px-4 py-3 text-center">
                  <p class="text-sm font-semibold">∞ UNLIMITED ACCESS</p>
                </div>
              </div>

              <!-- 24/7 Crisis Support -->
              <div class="bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition cursor-pointer transform hover:scale-105" id="crisisBtn">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span class="text-3xl">🚨</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl">24/7 Crisis Support</h3>
                    <p class="text-sm text-red-100">Immediate help</p>
                  </div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-lg px-4 py-3 text-center">
                  <p class="text-sm font-semibold">ALWAYS AVAILABLE</p>
                </div>
              </div>

              <!-- Family Counseling -->
              <div class="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition cursor-pointer transform hover:scale-105" id="familyBtn">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span class="text-3xl">👨‍👩‍👧</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl">Family Counseling</h3>
                    <p class="text-sm text-green-100">Involve loved ones</p>
                  </div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-lg px-4 py-3 text-center">
                  <p class="text-sm font-semibold">BOOK SESSION</p>
                </div>
              </div>

              <!-- Voice & Advanced Tools -->
              <div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition cursor-pointer transform hover:scale-105" id="advancedBtn">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span class="text-3xl">🎤</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl">Advanced Tools</h3>
                    <p class="text-sm text-purple-100">Voice & analytics</p>
                  </div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-lg px-4 py-3 text-center">
                  <p class="text-sm font-semibold">EXPLORE NOW</p>
                </div>
              </div>
            </div>

            <!-- Consultations -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <div class="flex justify-between items-center mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl">💬</span>
                  </div>
                  <h2 class="font-bold text-2xl text-gray-800">Your Consultations</h2>
                </div>
                <button
                  id="shareProblemBtn"
                  class="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold flex items-center gap-2"
                >
                  <span>+</span> New Consultation
                </button>
              </div>

              ${problems.length === 0 ? `
                <div class="text-center py-12">
                  <span class="text-6xl mb-4 block">👑</span>
                  <p class="text-gray-500 text-lg mb-4">No consultations yet</p>
                  <p class="text-gray-400 text-sm">Start your VIP consultation with immediate priority support</p>
                </div>
              ` : `
                <div class="space-y-3">
                  ${problems.map((p, index) => `
                    <div class="border-2 ${p.doctorReply ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'} rounded-xl p-5 hover:shadow-lg transition">
                      <div class="flex justify-between items-start">
                        <div class="flex-1">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-xs font-semibold">${p.category}</span>
                            <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold flex items-center gap-1">
                              👑 ELITE
                            </span>
                            ${p.doctorReply 
                              ? '<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">✓ Replied</span>' 
                              : '<span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold animate-pulse">⚡ IMMEDIATE</span>'}
                          </div>
                          <h3 class="font-bold text-lg text-gray-800 mb-1">${p.title}</h3>
                          <p class="text-gray-600 text-sm line-clamp-2">${p.description}</p>
                        </div>
                        <button 
                          class="text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition view-problem-btn ml-4 px-4 py-2 bg-yellow-100 rounded-lg hover:bg-yellow-200" 
                          data-index="${index}"
                        >
                          View →
                        </button>
                      </div>
                    </div>
                  `).join("")}
                </div>
              `}
            </div>
          </div>

          <!-- Right Sidebar -->
          <div class="space-y-6">
            <!-- Elite Plan Card -->
            <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-6 text-white">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-lg">Your Plan</h3>
                <span class="text-4xl">👑</span>
              </div>
              <p class="text-3xl font-bold mb-1">Elite</p>
              <p class="text-sm text-yellow-100 mb-4">৳999/month</p>
              <div class="bg-white bg-opacity-20 rounded-lg p-3 mb-4">
                <p class="text-xs font-semibold">Active until Feb 26, 2026</p>
              </div>
              <button class="w-full bg-white text-orange-600 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition">
                Manage Subscription
              </button>
            </div>

            <!-- Next Therapy Session -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-xl">📅</span>
                </div>
                <h3 class="font-bold text-lg text-gray-800">Upcoming Session</h3>
              </div>
              <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 border-2 border-blue-200">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    SR
                  </div>
                  <div>
                    <p class="font-bold text-gray-800">${personalTherapist}</p>
                    <p class="text-xs text-gray-600">Clinical Psychologist</p>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-3 mb-3">
                  <p class="text-sm text-gray-600 mb-1">📅 Next Session</p>
                  <p class="font-bold text-gray-800">${nextTherapySession}</p>
                </div>
                <button class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition">
                  📹 Join Video Call
                </button>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <h3 class="font-bold text-lg mb-4 text-gray-800">Your Progress</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Sessions Completed</span>
                  <span class="font-bold text-2xl text-yellow-600">${problems.filter(p => p.doctorReply).length}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Video Calls</span>
                  <span class="font-bold text-2xl text-blue-600">∞</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Active Support</span>
                  <span class="font-bold text-xl text-green-600">24/7</span>
                </div>
              </div>
            </div>

            <!-- Mood Tracker -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span class="text-xl">😊</span>
                </div>
                <h3 class="font-bold text-lg text-gray-800">Mood Check</h3>
              </div>
              <div class="flex gap-2 text-3xl mb-4 justify-center">
                <button class="moodBtn hover:scale-125 transition transform">😊</button>
                <button class="moodBtn hover:scale-125 transition transform">😐</button>
                <button class="moodBtn hover:scale-125 transition transform">😔</button>
                <button class="moodBtn hover:scale-125 transition transform">😢</button>
                <button class="moodBtn hover:scale-125 transition transform">😠</button>
              </div>
              <p id="moodResult" class="text-sm text-gray-600 italic text-center min-h-[20px]"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setupEliteDashboardLogic(container);
}

function setupEliteDashboardLogic(container: HTMLDivElement) {
  // Mood tracking
  const moodButtons = document.querySelectorAll<HTMLButtonElement>(".moodBtn");
  const moodResult = document.querySelector<HTMLParagraphElement>("#moodResult")!;

  moodButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      moodResult.innerText = `Elite mood logged: ${btn.innerText} - Your therapist will be notified`;
    });
  });

  // Navigation
  document.querySelector("#nav-home")?.addEventListener("click", () => renderHomePage());
  document.querySelector("#nav-resources")?.addEventListener("click", () => renderResourcesPage(container));
  document.querySelector("#nav-emergency")?.addEventListener("click", () => renderEmergencyPage(container));

  // Elite Features
  document.querySelector("#videoCallBtn")?.addEventListener("click", () => {
    alert("📹 Unlimited Video Calls - Connecting to your personal therapist...");
  });

  document.querySelector("#crisisBtn")?.addEventListener("click", () => {
    alert("🚨 24/7 Crisis Support - Emergency support team standing by...");
  });

  document.querySelector("#familyBtn")?.addEventListener("click", () => {
    alert("👨‍👩‍👧 Family Counseling - Schedule a family therapy session...");
  });

  document.querySelector("#advancedBtn")?.addEventListener("click", () => {
    alert("🎤 Advanced Tools - Access voice messages, mood analytics & more...");
  });

  // Share problem
  document.querySelector("#shareProblemBtn")?.addEventListener("click", () => renderShareProblemPage(container));

  // Logout
  document.querySelector("#logoutBtn")?.addEventListener("click", () => {
    logout();
    renderHomePage();
  });

  // View problems
  document.querySelectorAll(".view-problem-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const indexStr = (e.target as HTMLElement).getAttribute("data-index");
      if (indexStr !== null) {
        setSelectedProblemIndex(parseInt(indexStr));
        renderViewProblemPage(container);
      }
    });
  });
}