import { problems, setSelectedProblemIndex, currentUser, logout, hasPremiumAccess, hasEliteAccess } from "./store";
import { renderShareProblemPage } from "./share-problem";
import { renderViewProblemPage } from "./view-problem";
import { renderHomePage } from "./main";
import { renderResourcesPage } from "./resources";
import { renderEmergencyPage } from "./emergency";
import { renderPremiumDashboard } from "./premium-dashboard";
import { renderSignupPage } from "./signup";
import { renderEliteDashboard } from "./elite-dashboard";

export function renderStudentDashboard(container: HTMLDivElement) {
  // Route to appropriate dashboard based on subscription
  if (hasEliteAccess()) {
    renderEliteDashboard(container);
    return;
  }
  
  if (hasPremiumAccess()) {
    renderPremiumDashboard(container);
    return;
  }

  // Free tier dashboard
  const userName = currentUser?.name || 'Student';
  const userAvatar = currentUser?.avatar || '🎓';

  container.innerHTML = `
    <nav class="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg px-6 py-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-white flex items-center gap-2">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
          </svg>
          MindCare BD
        </h1>

        <div class="flex gap-8 items-center">
          <span id="nav-home" class="text-white hover:text-blue-200 cursor-pointer font-medium transition">Home</span>
          <span id="nav-dashboard" class="text-blue-200 font-semibold">Dashboard</span>
          <span id="nav-resources" class="text-white hover:text-blue-200 cursor-pointer font-medium transition">Resources</span>
          <span id="nav-emergency" class="text-white hover:text-blue-200 cursor-pointer font-medium transition flex items-center gap-1">
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

    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div class="max-w-6xl mx-auto space-y-6">
        
        <!-- Welcome Banner -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8">
          <h2 class="text-3xl font-bold mb-2">Welcome back, ${userName}!</h2>
          <p class="text-blue-100">How are you feeling today? We're here to support you.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <!-- Mood Tracker Card -->
          <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-xl">😊</span>
              </div>
              <h2 class="font-bold text-xl text-gray-800">Mood Today</h2>
            </div>
            <div class="flex gap-3 text-3xl mb-4">
              <button class="moodBtn hover:scale-125 transition transform">😊</button>
              <button class="moodBtn hover:scale-125 transition transform">😐</button>
              <button class="moodBtn hover:scale-125 transition transform">😔</button>
              <button class="moodBtn hover:scale-125 transition transform">😢</button>
              <button class="moodBtn hover:scale-125 transition transform">😠</button>
            </div>
            <p id="moodResult" class="text-sm text-gray-600 italic"></p>
          </div>

          <!-- Quick Stats -->
          <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-xl">📊</span>
              </div>
              <h2 class="font-bold text-xl text-gray-800">Your Stats</h2>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Total Problems</span>
                <span class="font-bold text-2xl text-blue-600">${problems.length}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Replied</span>
                <span class="font-bold text-2xl text-green-600">${problems.filter(p => p.doctorReply).length}</span>
              </div>
            </div>
          </div>

          <!-- Quick Action -->
          <div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition cursor-pointer" id="quickShareBtn">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                <span class="text-xl">💬</span>
              </div>
              <h2 class="font-bold text-xl">Need Help?</h2>
            </div>
            <p class="mb-4 text-purple-100">Share what you're feeling with our professionals</p>
            <div class="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-center font-semibold">
              Share Problem →
            </div>
          </div>
        </div>

        <!-- Premium Upgrade Banner -->
        <div class="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div class="relative z-10 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-3xl">⭐</span>
                <span class="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-bold">
                  UPGRADE TODAY
                </span>
              </div>
              <h3 class="text-2xl font-bold mb-2">Unlock Premium Features</h3>
              <p class="text-purple-100 mb-4">Get video calls, voice messages, priority support & more</p>
              <button id="upgradeBtn" class="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
                View Plans →
              </button>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-white bg-opacity-20 rounded-xl p-4">
                <p class="text-2xl mb-2">📹</p>
                <p class="font-semibold text-sm">Video Calls</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-xl p-4">
                <p class="text-2xl mb-2">🎤</p>
                <p class="font-semibold text-sm">Voice Messages</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-xl p-4">
                <p class="text-2xl mb-2">⚡</p>
                <p class="font-semibold text-sm">Priority Support</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-xl p-4">
                <p class="text-2xl mb-2">📊</p>
                <p class="font-semibold text-sm">Mood Tracker</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Problems -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="flex justify-between items-center mb-6">
            <h2 class="font-bold text-2xl text-gray-800">Your Problems</h2>
            <button
              id="shareProblemBtn"
              class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold"
            >
              + Share New Problem
            </button>
          </div>

          ${problems.length === 0 ? `
            <div class="text-center py-12">
              <span class="text-6xl mb-4 block">📝</span>
              <p class="text-gray-500 text-lg mb-4">No problems shared yet</p>
              <p class="text-gray-400 text-sm">Share your concerns and get professional support</p>
            </div>
          ` : `
            <div class="space-y-3">
              ${problems.map((p, index) => `
                <div class="border-2 border-gray-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition">
                  <div class="flex justify-between items-start">
                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">${p.category}</span>
                        ${p.doctorReply ? '<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">✓ Replied</span>' : '<span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">⏳ Pending</span>'}
                      </div>
                      <h3 class="font-bold text-lg text-gray-800 mb-1">${p.title}</h3>
                      <p class="text-gray-600 text-sm line-clamp-2">${p.description}</p>
                    </div>
                    <button 
                      class="text-blue-600 font-semibold text-sm hover:text-blue-700 transition view-problem-btn ml-4 px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100" 
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
    </div>
  `;

  setupDashboardLogic(container);
}

function setupDashboardLogic(container: HTMLDivElement) {
  // Mood selection
  const moodButtons = document.querySelectorAll<HTMLButtonElement>(".moodBtn");
  const moodResult = document.querySelector<HTMLParagraphElement>("#moodResult")!;

  moodButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      moodResult.innerText = `You selected: ${btn.innerText} - Thank you for sharing!`;
    });
  });

  // Navigation
  document.querySelector("#nav-home")?.addEventListener("click", () => renderHomePage());
  document.querySelector("#nav-resources")?.addEventListener("click", () => renderResourcesPage(container));
  document.querySelector("#nav-emergency")?.addEventListener("click", () => renderEmergencyPage(container));

  // Upgrade button
  document.querySelector("#upgradeBtn")?.addEventListener("click", () => {
    renderSignupPage(container);
  });

  // Share problem buttons
  document.querySelector("#shareProblemBtn")?.addEventListener("click", () => renderShareProblemPage(container));
  document.querySelector("#quickShareBtn")?.addEventListener("click", () => renderShareProblemPage(container));

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