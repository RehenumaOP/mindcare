import { problems, setSelectedProblemIndex, currentUser, logout } from "./store";
import { renderShareProblemPage } from "./share-problem";
import { renderViewProblemPage } from "./view-problem";
import { renderHomePage } from "./main";
import { renderResourcesPage } from "./resources";
import { renderEmergencyPage } from "./emergency";

export function renderPremiumDashboard(container: HTMLDivElement) {
  const userName = currentUser?.name || 'Student';
  const userAvatar = currentUser?.avatar || '🎓';
  const subscription = currentUser?.subscription || 'free';
  const isElite = subscription === 'elite';

  // Mock data for premium features
  const videoCallsUsed = 1;
  const videoCallsLimit = isElite ? '∞' : 2;
  const nextTherapySession = 'Jan 25, 2026 at 3:00 PM';

  container.innerHTML = `
    <nav class="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg px-6 py-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-white flex items-center gap-2">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
          </svg>
          MindCare BD ${isElite ? '👑 Elite' : '⭐ Premium'}
        </h1>

        <div class="flex gap-8 items-center">
          <span id="nav-home" class="text-white hover:text-purple-200 cursor-pointer font-medium transition">Home</span>
          <span id="nav-dashboard" class="text-purple-200 font-semibold">Dashboard</span>
          <span id="nav-resources" class="text-white hover:text-purple-200 cursor-pointer font-medium transition">Resources</span>
          <span id="nav-emergency" class="text-white hover:text-purple-200 cursor-pointer font-medium transition flex items-center gap-1">
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

    <div class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div class="max-w-7xl mx-auto space-y-6">
        
        <!-- Premium Welcome Banner -->
        <div class="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-3xl">${isElite ? '👑' : '⭐'}</span>
              <span class="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-bold">
                ${isElite ? 'ELITE MEMBER' : 'PREMIUM MEMBER'}
              </span>
            </div>
            <h2 class="text-3xl font-bold mb-2">Welcome back, ${userName}!</h2>
            <p class="text-purple-100">You have access to priority support and premium features</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 gap-6">
          <!-- Left Column - Main Features -->
          <div class="lg:col-span-2 space-y-6">
            
            <!-- Quick Actions Grid -->
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Video Call Card -->
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition cursor-pointer" id="videoCallBtn">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span class="text-2xl">📹</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg">Video Consultation</h3>
                    <p class="text-sm text-blue-100">Connect face-to-face</p>
                  </div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-center">
                  <p class="text-sm font-semibold">${videoCallsUsed}/${videoCallsLimit} calls used this month</p>
                </div>
              </div>

              <!-- Voice Message Card -->
              <div class="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition cursor-pointer" id="voiceMessageBtn">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span class="text-2xl">🎤</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg">Voice Messages</h3>
                    <p class="text-sm text-green-100">Send voice notes</p>
                  </div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-center">
                  <p class="text-sm font-semibold">Record & Share</p>
                </div>
              </div>

              <!-- Priority Support Card -->
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition cursor-pointer" id="prioritySupportBtn">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span class="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg">Priority Support</h3>
                    <p class="text-sm text-purple-100">Fast responses</p>
                  </div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-center">
                  <p class="text-sm font-semibold">${isElite ? 'Immediate' : '24hr'} Response Time</p>
                </div>
              </div>

              <!-- Mood Tracker Card -->
              <div class="bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition cursor-pointer" id="moodTrackerBtn">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span class="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg">Mood Tracker</h3>
                    <p class="text-sm text-orange-100">Track your progress</p>
                  </div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-center">
                  <p class="text-sm font-semibold">View Analytics</p>
                </div>
              </div>
            </div>

            ${isElite ? `
              <!-- Elite-Only Features -->
              <div class="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-6">
                <div class="flex items-center gap-3 mb-4">
                  <span class="text-3xl">👑</span>
                  <h3 class="font-bold text-xl text-white">Elite Benefits</h3>
                </div>
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-white bg-opacity-20 rounded-xl p-4 text-white">
                    <p class="text-2xl mb-2">👨‍⚕️</p>
                    <p class="font-semibold text-sm">Personal Therapist</p>
                    <p class="text-xs text-white text-opacity-80">Dedicated care</p>
                  </div>
                  <div class="bg-white bg-opacity-20 rounded-xl p-4 text-white">
                    <p class="text-2xl mb-2">🚨</p>
                    <p class="font-semibold text-sm">Crisis Support</p>
                    <p class="text-xs text-white text-opacity-80">24/7 availability</p>
                  </div>
                  <div class="bg-white bg-opacity-20 rounded-xl p-4 text-white">
                    <p class="text-2xl mb-2">👨‍👩‍👧</p>
                    <p class="font-semibold text-sm">Family Sessions</p>
                    <p class="text-xs text-white text-opacity-80">Involve loved ones</p>
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- Your Problems Section -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <div class="flex justify-between items-center mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span class="text-xl">💬</span>
                  </div>
                  <h2 class="font-bold text-2xl text-gray-800">Your Consultations</h2>
                </div>
                <button
                  id="shareProblemBtn"
                  class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold flex items-center gap-2"
                >
                  <span>+</span> New Consultation
                </button>
              </div>

              ${problems.length === 0 ? `
                <div class="text-center py-12">
                  <span class="text-6xl mb-4 block">📝</span>
                  <p class="text-gray-500 text-lg mb-4">No consultations yet</p>
                  <p class="text-gray-400 text-sm">Start your first consultation with priority support</p>
                </div>
              ` : `
                <div class="space-y-3">
                  ${problems.map((p, index) => `
                    <div class="border-2 ${p.doctorReply ? 'border-green-200 bg-green-50' : 'border-purple-200 bg-purple-50'} rounded-xl p-5 hover:shadow-md transition">
                      <div class="flex justify-between items-start">
                        <div class="flex-1">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-xs font-semibold">${p.category}</span>
                            ${p.doctorReply 
                              ? '<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">✓ Replied</span>' 
                              : '<span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold flex items-center gap-1"><span class="animate-pulse">⚡</span> Priority</span>'}
                          </div>
                          <h3 class="font-bold text-lg text-gray-800 mb-1">${p.title}</h3>
                          <p class="text-gray-600 text-sm line-clamp-2">${p.description}</p>
                        </div>
                        <button 
                          class="text-purple-600 font-semibold text-sm hover:text-purple-700 transition view-problem-btn ml-4 px-4 py-2 bg-purple-100 rounded-lg hover:bg-purple-200" 
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

          <!-- Right Column - Stats & Info -->
          <div class="space-y-6">
            <!-- Subscription Card -->
            <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-lg">Your Plan</h3>
                <span class="text-3xl">${isElite ? '👑' : '⭐'}</span>
              </div>
              <p class="text-2xl font-bold mb-1">${isElite ? 'Elite' : 'Premium'}</p>
              <p class="text-sm text-purple-100 mb-4">Active until Feb 22, 2026</p>
              <button class="w-full bg-white bg-opacity-20 hover:bg-opacity-30 py-2 rounded-lg text-sm font-semibold transition">
                Manage Subscription
              </button>
            </div>

            <!-- Next Session -->
            ${isElite ? `
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-xl">📅</span>
                  </div>
                  <h3 class="font-bold text-lg text-gray-800">Next Session</h3>
                </div>
                <div class="bg-blue-50 rounded-xl p-4">
                  <p class="text-sm text-gray-600 mb-2">With Dr. Rahman</p>
                  <p class="font-bold text-gray-800">${nextTherapySession}</p>
                  <button class="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                    Join Video Call
                  </button>
                </div>
              </div>
            ` : ''}

            <!-- Stats Card -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <h3 class="font-bold text-lg mb-4 text-gray-800">Your Stats</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Total Consultations</span>
                  <span class="font-bold text-2xl text-purple-600">${problems.length}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Replied</span>
                  <span class="font-bold text-2xl text-green-600">${problems.filter(p => p.doctorReply).length}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">This Month</span>
                  <span class="font-bold text-2xl text-blue-600">${problems.length}</span>
                </div>
              </div>
            </div>

            <!-- Mood Log -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span class="text-xl">😊</span>
                </div>
                <h3 class="font-bold text-lg text-gray-800">Quick Mood</h3>
              </div>
              <div class="flex gap-3 text-3xl mb-4 justify-center">
                <button class="moodBtn hover:scale-125 transition transform">😊</button>
                <button class="moodBtn hover:scale-125 transition transform">😐</button>
                <button class="moodBtn hover:scale-125 transition transform">😔</button>
                <button class="moodBtn hover:scale-125 transition transform">😢</button>
                <button class="moodBtn hover:scale-125 transition transform">😠</button>
              </div>
              <p id="moodResult" class="text-sm text-gray-600 italic text-center"></p>
            </div>

            <!-- Upgrade CTA (for Premium users) -->
            ${!isElite ? `
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-6 text-white">
                <span class="text-4xl mb-3 block">👑</span>
                <h3 class="font-bold text-xl mb-2">Upgrade to Elite</h3>
                <p class="text-sm text-white text-opacity-90 mb-4">
                  Get unlimited video calls, personal therapist, and family counseling
                </p>
                <button class="w-full bg-white text-orange-600 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition">
                  Upgrade Now
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `;

  setupPremiumDashboardLogic(container);
}

function setupPremiumDashboardLogic(container: HTMLDivElement) {
  // Mood selection
  const moodButtons = document.querySelectorAll<HTMLButtonElement>(".moodBtn");
  const moodResult = document.querySelector<HTMLParagraphElement>("#moodResult")!;

  moodButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      moodResult.innerText = `Mood logged: ${btn.innerText} - Keep tracking your emotions!`;
    });
  });

  // Navigation
  document.querySelector("#nav-home")?.addEventListener("click", () => renderHomePage());
  document.querySelector("#nav-resources")?.addEventListener("click", () => renderResourcesPage(container));
  document.querySelector("#nav-emergency")?.addEventListener("click", () => renderEmergencyPage(container));

  // Premium Features
  document.querySelector("#videoCallBtn")?.addEventListener("click", () => {
    alert("📹 Video Call feature - Opening video consultation interface...");
  });

  document.querySelector("#voiceMessageBtn")?.addEventListener("click", () => {
    alert("🎤 Voice Message feature - Opening audio recorder...");
  });

  document.querySelector("#prioritySupportBtn")?.addEventListener("click", () => {
    alert("⚡ Priority Support - Your messages get immediate attention!");
  });

  document.querySelector("#moodTrackerBtn")?.addEventListener("click", () => {
    alert("📊 Mood Tracker - Opening detailed mood analytics...");
  });

  // Share problem button
  document.querySelector("#shareProblemBtn")?.addEventListener("click", () => renderShareProblemPage(container));

  // Logout
  document.querySelector("#logoutBtn")?.addEventListener("click", () => {
    logout();
    renderHomePage();
  });

  // View problem buttons
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