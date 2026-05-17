import { problems, saveProblems } from "./store";
import { renderStudentDashboard } from "./dashboard";

export function renderShareProblemPage(container: HTMLDivElement) {
  container.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg p-6">
        <div class="max-w-3xl mx-auto flex justify-between items-center">
          <h1 class="text-3xl font-bold text-white">Share Your Concern</h1>
          <button id="backBtn" class="text-white hover:text-blue-200 font-medium transition">
            ← Back to Dashboard
          </button>
        </div>
      </div>

      <div class="max-w-3xl mx-auto mt-8 px-4 pb-8">
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <div class="mb-6">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-2xl">💬</span>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-800">You're Taking a Brave Step</h2>
                <p class="text-gray-600 text-sm">Share what's on your mind - we're here to help</p>
              </div>
            </div>
          </div>

          <form id="problemForm" class="space-y-6">
            <div>
              <label class="block text-sm font-bold mb-2 text-gray-700">
                📂 Category
              </label>
              <select id="category" class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-700 font-medium">
                <option>😰 Stress</option>
                <option>😔 Depression</option>
                <option>😨 Anxiety</option>
                <option>🎯 Career</option>
                <option>👨‍👩‍👧 Family</option>
                <option>💔 Relationship</option>
                <option>📚 Academic</option>
                <option>💭 Other</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-bold mb-2 text-gray-700">
                📝 Title
              </label>
              <input 
                type="text" 
                id="title" 
                placeholder="Brief summary of your concern" 
                class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                required 
              />
              <p class="text-xs text-gray-500 mt-1">Keep it short and clear</p>
            </div>

            <div>
              <label class="block text-sm font-bold mb-2 text-gray-700">
                ✍️ Describe Your Situation
              </label>
              <textarea 
                id="description" 
                rows="8" 
                placeholder="Take your time to express what you're feeling... Remember, this is a safe space."
                class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none" 
                required
              ></textarea>
              <p class="text-xs text-gray-500 mt-1">Share as much or as little as you're comfortable with</p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <div class="flex items-center gap-3">
                <input type="checkbox" id="anonymous" class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <label for="anonymous" class="text-sm font-medium text-gray-700 cursor-pointer">
                  🔒 Post Anonymously
                </label>
              </div>
              <p class="text-xs text-gray-600 ml-8 mt-1">Your identity will remain completely private</p>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
              <div class="flex items-start gap-3">
                <span class="text-xl">✓</span>
                <div class="text-sm text-gray-700">
                  <p class="font-semibold mb-1">What happens next?</p>
                  <ul class="list-disc list-inside space-y-1 text-xs text-gray-600">
                    <li>A licensed professional will review your concern</li>
                    <li>You'll receive personalized advice within 24-48 hours</li>
                    <li>Your information is kept confidential and secure</li>
                  </ul>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-xl transition transform hover:-translate-y-0.5 font-bold text-lg"
            >
              Submit Your Concern
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-sm text-gray-500">
              Need immediate help? <a href="#" class="text-red-600 font-semibold hover:underline">Contact Emergency Services</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  setupShareProblemLogic(container);
}

function setupShareProblemLogic(container: HTMLDivElement) {
  const form = document.querySelector<HTMLFormElement>("#problemForm")!;
  const backBtn = document.querySelector("#backBtn");

  backBtn?.addEventListener("click", () => {
    renderStudentDashboard(container);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const category = (document.querySelector("#category") as HTMLSelectElement).value;
    const title = (document.querySelector("#title") as HTMLInputElement).value;
    const description = (document.querySelector("#description") as HTMLTextAreaElement).value;
    const anonymous = (document.querySelector("#anonymous") as HTMLInputElement).checked;

    const problemData = {
      category,
      title,
      description,
      anonymous,
      timestamp: new Date().toLocaleDateString()
    };

    problems.push(problemData);
    saveProblems();

    // Show success message
    container.innerHTML = `
      <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
        <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-md text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="text-5xl">✅</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Thank You for Sharing</h2>
          <p class="text-gray-600 mb-8">
            Your concern has been submitted successfully. A professional will review it soon and provide guidance.
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
      renderStudentDashboard(container);
    });
  });
}