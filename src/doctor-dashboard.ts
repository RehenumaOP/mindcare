import { problems, setSelectedProblemIndex, currentUser, logout } from "./store";
import { renderDoctorViewProblem } from "./doctor-view-problem";
import { renderHomePage } from "./main";
import { renderResourcesPage } from "./resources";
import { renderEmergencyPage } from "./emergency";

export function renderDoctorDashboard(container: HTMLDivElement) {
  const doctorName = currentUser?.name || 'Doctor';
  const userAvatar = currentUser?.avatar || '👨‍⚕️';

  const pendingProblems = problems.filter(p => !p.doctorReply);
  const repliedProblems = problems.filter(p => p.doctorReply);

  container.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <nav class="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg px-6 py-4 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold text-white flex items-center gap-2">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
            </svg>
            Doctor Panel
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
              <span class="text-white font-medium">Dr. ${doctorName}</span>
              <span id="logoutBtn" class="text-red-300 hover:text-red-100 cursor-pointer ml-2 transition">Logout</span>
            </div>
          </div>
        </div>
      </nav>

      <div class="p-6 max-w-7xl mx-auto">
        <!-- Welcome Banner -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 class="text-3xl font-bold mb-2">Welcome, Dr. ${doctorName}</h2>
          <p class="text-blue-100">Review and respond to student concerns with professional care</p>
        </div>

        <!-- Stats Grid -->
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-2xl">📋</span>
              </div>
              <div>
                <p class="text-gray-600 text-sm">Total Cases</p>
                <p class="text-3xl font-bold text-gray-800">${problems.length}</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <span class="text-2xl">⏳</span>
              </div>
              <div>
                <p class="text-gray-600 text-sm">Pending</p>
                <p class="text-3xl font-bold text-yellow-600">${pendingProblems.length}</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-2xl">✅</span>
              </div>
              <div>
                <p class="text-gray-600 text-sm">Completed</p>
                <p class="text-3xl font-bold text-green-600">${repliedProblems.length}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Problems Section -->
        ${pendingProblems.length > 0 ? `
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span class="text-xl">⏳</span>
              </div>
              <h2 class="font-bold text-2xl text-gray-800">Pending Reviews</h2>
              <span class="ml-auto px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-sm">
                ${pendingProblems.length} waiting
              </span>
            </div>

            <div class="space-y-3">
              ${pendingProblems.map((p, actualIndex) => {
                const index = problems.indexOf(p);
                return `
                  <div class="border-2 border-yellow-200 bg-yellow-50 rounded-xl p-5 hover:border-yellow-400 hover:shadow-md transition">
                    <div class="flex justify-between items-start">
                      <div class="flex-1">
                        <div class="flex items-center gap-2 mb-2">
                          <span class="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-xs font-semibold uppercase">${p.category}</span>
                          <span class="text-xs text-gray-500">${p.anonymous ? '👤 Anonymous' : '👤 Identified'}</span>
                        </div>
                        <h3 class="font-bold text-lg text-gray-800 mb-2">${p.title}</h3>
                        <p class="text-gray-600 text-sm line-clamp-2">${p.description}</p>
                      </div>
                      <button
                        class="text-white bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm hover:shadow-lg transition view-btn ml-4 px-6 py-3 rounded-xl transform hover:-translate-y-0.5"
                        data-index="${index}"
                      >
                        Review →
                      </button>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        ` : ''}

        <!-- All Student Problems -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span class="text-xl">📊</span>
            </div>
            <h2 class="font-bold text-2xl text-gray-800">All Cases</h2>
          </div>

          ${problems.length === 0 ? `
            <div class="text-center py-12">
              <span class="text-6xl mb-4 block">📋</span>
              <p class="text-gray-500 text-lg">No student problems yet</p>
              <p class="text-gray-400 text-sm mt-2">Cases will appear here when students share their concerns</p>
            </div>
          ` : `
            <div class="space-y-3">
              ${problems.map((p, index) => `
                <div class="border-2 ${p.doctorReply ? 'border-green-200 bg-green-50' : 'border-gray-200'} rounded-xl p-5 hover:shadow-md transition">
                  <div class="flex justify-between items-start">
                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="px-3 py-1 ${p.doctorReply ? 'bg-green-200 text-green-800' : 'bg-blue-100 text-blue-700'} rounded-full text-xs font-semibold uppercase">${p.category}</span>
                        ${p.doctorReply 
                          ? '<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">✓ Replied</span>' 
                          : '<span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">⏳ Pending</span>'}
                      </div>
                      <h3 class="font-bold text-lg text-gray-800 mb-2">${p.title}</h3>
                      <p class="text-gray-600 text-sm line-clamp-2">${p.description}</p>
                    </div>
                    <button
                      class="text-blue-600 font-semibold text-sm hover:text-blue-700 transition view-btn ml-4 px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100"
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

  setupDoctorDashboardLogic(container);
}

function setupDoctorDashboardLogic(container: HTMLDivElement) {
  // Navigation
  document.querySelector("#nav-home")?.addEventListener("click", () => renderHomePage());
  document.querySelector("#nav-resources")?.addEventListener("click", () => renderResourcesPage(container));
  document.querySelector("#nav-emergency")?.addEventListener("click", () => renderEmergencyPage(container));

  // View buttons
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const indexStr = (e.target as HTMLElement).getAttribute("data-index");
      if (indexStr !== null) {
        setSelectedProblemIndex(parseInt(indexStr));
        renderDoctorViewProblem(container);
      }
    });
  });

  // Logout
  document.querySelector("#logoutBtn")?.addEventListener("click", () => {
    logout();
    renderHomePage();
  });
}