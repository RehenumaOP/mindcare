import { problems, selectedProblemIndex, saveProblems } from "./store";
import { renderDoctorDashboard } from "./doctor-dashboard";

export function renderDoctorViewProblem(container: HTMLDivElement) {
  if (selectedProblemIndex === null) {
    renderDoctorDashboard(container);
    return;
  }

  const problem = problems[selectedProblemIndex];

  container.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg p-6">
        <div class="max-w-4xl mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold text-white">Review Patient Concern</h1>
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
                  ${problem.doctorReply ? 'Already Responded' : 'Awaiting Your Review'}
                </h3>
                <p class="text-sm ${problem.doctorReply ? 'text-green-600' : 'text-yellow-600'}">
                  ${problem.doctorReply ? 'You can update your response below if needed' : 'Please provide professional guidance to this student'}
                </p>
              </div>
            </div>
          </div>

          <!-- Patient Information -->
          <div class="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 class="font-bold text-lg mb-3 text-blue-900">Patient Information</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600">Category</p>
                <p class="font-semibold text-gray-800">${problem.category}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Privacy</p>
                <p class="font-semibold text-gray-800">${problem.anonymous ? '🔒 Anonymous' : '👤 Identified'}</p>
              </div>
              ${problem.timestamp ? `
                <div>
                  <p class="text-sm text-gray-600">Submitted</p>
                  <p class="font-semibold text-gray-800">📅 ${problem.timestamp}</p>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Problem Details -->
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">${problem.title}</h2>
            <div class="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
              <label class="block text-sm font-bold text-gray-700 mb-2">Patient's Description:</label>
              <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">${problem.description}</p>
            </div>
          </div>

          <!-- Guidelines for Doctor -->
          <div class="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4 mb-6">
            <h4 class="font-bold text-purple-900 mb-2">💡 Professional Guidelines</h4>
            <ul class="text-sm text-purple-800 space-y-1">
              <li>• Be empathetic and non-judgmental</li>
              <li>• Provide actionable, practical advice</li>
              <li>• Consider cultural context (Bangladesh)</li>
              <li>• If urgent, recommend immediate professional help</li>
            </ul>
          </div>

          <!-- Doctor's Response Section -->
          <div class="space-y-4">
            <div>
              <label class="block font-bold text-lg mb-2 text-gray-800">
                👨‍⚕️ Your Professional Advice
              </label>
              <p class="text-sm text-gray-600 mb-3">
                Provide clear, compassionate guidance. Your response will help this person navigate their challenge.
              </p>
              <textarea 
                id="reply" 
                rows="10" 
                placeholder="Write your professional advice here...

Consider:
• Validating their feelings
• Offering specific coping strategies
• Suggesting next steps or resources
• When to seek additional help"
                class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              >${problem.doctorReply || ""}</textarea>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-4">
              <button 
                id="replyBtn" 
                class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-bold text-lg"
              >
                ${problem.doctorReply ? '✓ Update Response' : '✓ Submit Response'}
              </button>
              <button 
                id="backBtnBottom"
                class="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>

          ${problem.doctorReply ? `
            <!-- Current Response Preview -->
            <div class="mt-8 border-t-2 border-gray-200 pt-6">
              <h4 class="font-bold text-lg mb-3 text-gray-700">Current Response:</h4>
              <div class="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">${problem.doctorReply}</p>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Additional Resources Card -->
        <div class="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 class="font-bold text-lg mb-3 text-gray-800">Quick Reference Resources</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-blue-50 rounded-lg p-3">
              <p class="font-semibold text-sm text-blue-700 mb-1">Crisis Lines</p>
              <p class="text-xs text-gray-600">16123, Kaan Pete Roi</p>
            </div>
            <div class="bg-green-50 rounded-lg p-3">
              <p class="font-semibold text-sm text-green-700 mb-1">Common Issues</p>
              <p class="text-xs text-gray-600">Anxiety, Depression, Stress</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-3">
              <p class="font-semibold text-sm text-purple-700 mb-1">Treatment Options</p>
              <p class="text-xs text-gray-600">Therapy, Medication, Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setupDoctorReplyLogic(container);
}

function setupDoctorReplyLogic(container: HTMLDivElement) {
  const replyBtn = document.querySelector<HTMLButtonElement>("#replyBtn")!;
  const replyInput = document.querySelector<HTMLTextAreaElement>("#reply")!;
  const backBtn = document.querySelector<HTMLButtonElement>("#backBtn")!;
  const backBtnBottom = document.querySelector<HTMLButtonElement>("#backBtnBottom")!;

  replyBtn.addEventListener("click", () => {
    if (selectedProblemIndex !== null) {
      const replyText = replyInput.value.trim();
      
      if (!replyText) {
        alert("Please write a response before submitting.");
        return;
      }

      // Save reply
      problems[selectedProblemIndex].doctorReply = replyText;
      saveProblems();

      // Show success message
      container.innerHTML = `
        <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
          <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-md text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-5xl">✅</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Response Submitted!</h2>
            <p class="text-gray-600 mb-8">
              Your professional advice has been sent to the student. They will be notified and can view your response.
            </p>
            <button 
              id="returnBtn"
              class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-semibold"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      `;

      document.querySelector("#returnBtn")?.addEventListener("click", () => {
        renderDoctorDashboard(container);
      });
    }
  });

  backBtn.addEventListener("click", () => {
    renderDoctorDashboard(container);
  });

  backBtnBottom?.addEventListener("click", () => {
    renderDoctorDashboard(container);
  });
}