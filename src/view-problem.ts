import { problems, selectedProblemIndex } from "./store";
import { renderStudentDashboard } from "./dashboard";

export function renderViewProblemPage(container: HTMLDivElement) {
  if (selectedProblemIndex === null) {
    renderStudentDashboard(container);
    return;
  }

  const problem = problems[selectedProblemIndex];

  container.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg p-6">
        <div class="max-w-4xl mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold text-white">Problem Details</h1>
          <button id="backBtn" class="text-white hover:text-blue-200 font-medium transition">
            ← Back to Dashboard
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-4xl mx-auto mt-8 px-4 pb-8">
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <!-- Status Banner -->
          <div class="mb-6 ${problem.doctorReply ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'} border-2 rounded-xl p-4">
            <div class="flex items-center gap-3">
              <span class="text-3xl">${problem.doctorReply ? '✅' : '⏳'}</span>
              <div>
                <h3 class="font-bold text-lg ${problem.doctorReply ? 'text-green-700' : 'text-yellow-700'}">
                  ${problem.doctorReply ? 'Doctor Has Responded' : 'Waiting for Doctor Review'}
                </h3>
                <p class="text-sm ${problem.doctorReply ? 'text-green-600' : 'text-yellow-600'}">
                  ${problem.doctorReply ? 'Professional advice is available below' : 'A professional will review your concern soon'}
                </p>
              </div>
            </div>
          </div>

          <!-- Problem Details -->
          <div class="space-y-6">
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">${problem.category}</span>
                <span class="px-4 py-2 ${problem.anonymous ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'} rounded-full text-sm font-semibold">
                  ${problem.anonymous ? '🔒 Anonymous' : '👤 Identified'}
                </span>
                ${problem.timestamp ? `<span class="text-sm text-gray-500 ml-auto">📅 ${problem.timestamp}</span>` : ''}
              </div>
            </div>

            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-4">${problem.title}</h2>
            </div>

            <div class="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">${problem.description}</p>
            </div>

            ${problem.doctorReply ? `
              <!-- Doctor's Reply -->
              <div class="mt-8 border-t-2 border-gray-200 pt-8">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl text-green-700">Professional Advice</h3>
                    <p class="text-sm text-gray-600">From a licensed mental health professional</p>
                  </div>
                </div>
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <p class="text-gray-800 leading-relaxed whitespace-pre-wrap">${problem.doctorReply}</p>
                </div>
                <div class="mt-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                  <p class="text-sm text-gray-700">
                    <span class="font-semibold">💡 Remember:</span> This advice is meant to guide you. 
                    If you need ongoing support, consider scheduling a full consultation.
                  </p>
                </div>
              </div>
            ` : `
              <!-- Waiting Message -->
              <div class="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
                <span class="text-5xl mb-3 block">⏰</span>
                <h3 class="font-bold text-xl text-yellow-800 mb-2">Your Concern is Being Reviewed</h3>
                <p class="text-gray-600 mb-4">
                  A mental health professional will provide personalized guidance soon.
                  Typically within 24-48 hours.
                </p>
                <p class="text-sm text-gray-500">
                  We'll notify you when a response is available. Check back here anytime.
                </p>
              </div>
            `}

            <!-- Action Buttons -->
            <div class="flex gap-4 mt-8">
              <button 
                id="backBtnBottom"
                class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold"
              >
                Back to Dashboard
              </button>
              ${!problem.doctorReply ? `
                <button 
                  class="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition font-semibold"
                >
                  Check Status
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Help Resources -->
        <div class="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 class="font-bold text-lg mb-3 text-gray-800">Additional Resources</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <a href="#" class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
              <span class="text-2xl">📚</span>
              <div>
                <p class="font-semibold text-sm text-blue-700">Resource Library</p>
                <p class="text-xs text-gray-600">Self-help articles & guides</p>
              </div>
            </a>
            <a href="#" class="flex items-center gap-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition">
              <span class="text-2xl">🆘</span>
              <div>
                <p class="font-semibold text-sm text-red-700">Emergency Help</p>
                <p class="text-xs text-gray-600">Immediate crisis support</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  setupViewProblemLogic(container);
}

function setupViewProblemLogic(container: HTMLDivElement) {
  document.querySelector("#backBtn")?.addEventListener("click", () => {
    renderStudentDashboard(container);
  });

  document.querySelector("#backBtnBottom")?.addEventListener("click", () => {
    renderStudentDashboard(container);
  });
}