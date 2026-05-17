import { renderHomePage } from './main';
import { currentUser } from './store';
import { renderStudentDashboard } from './dashboard';
import { renderDoctorDashboard } from './doctor-dashboard';
import { renderEmergencyPage } from './emergency';

export function renderResourcesPage(container: HTMLDivElement) {
  container.innerHTML = `
    <nav class="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg px-6 py-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold text-white cursor-pointer" id="backHome">
          MindCare BD
        </div>
        <ul class="flex space-x-8 items-center">
          <li id="nav-home" class="text-white hover:text-blue-200 cursor-pointer transition font-medium">Home</li>
          <li class="text-blue-200 font-semibold">Resources</li>
          <li id="nav-emergency" class="text-white hover:text-blue-200 cursor-pointer transition font-medium">Emergency</li>
          ${currentUser ? `
            <li id="nav-dashboard" class="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 cursor-pointer transition shadow-md font-semibold">
              Dashboard
            </li>
          ` : ''}
        </ul>
      </div>
    </nav>

    <section class="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-4 text-gray-800">Mental Health Resources</h1>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore helpful resources, articles, and tools to support your mental wellbeing
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Resource Card 1 -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">📚</span>
            </div>
            <h3 class="font-bold text-xl mb-2">Understanding Anxiety</h3>
            <p class="text-gray-600 mb-4">Learn about anxiety symptoms and coping strategies</p>
            <a href="#" class="text-blue-600 font-medium hover:underline">Read More →</a>
          </div>

          <!-- Resource Card 2 -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🧘</span>
            </div>
            <h3 class="font-bold text-xl mb-2">Meditation Guide</h3>
            <p class="text-gray-600 mb-4">Simple meditation techniques for stress relief</p>
            <a href="#" class="text-blue-600 font-medium hover:underline">Read More →</a>
          </div>

          <!-- Resource Card 3 -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">💪</span>
            </div>
            <h3 class="font-bold text-xl mb-2">Building Resilience</h3>
            <p class="text-gray-600 mb-4">Develop mental strength and emotional resilience</p>
            <a href="#" class="text-blue-600 font-medium hover:underline">Read More →</a>
          </div>

          <!-- Resource Card 4 -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">😴</span>
            </div>
            <h3 class="font-bold text-xl mb-2">Sleep Better</h3>
            <p class="text-gray-600 mb-4">Tips for improving sleep quality and routine</p>
            <a href="#" class="text-blue-600 font-medium hover:underline">Read More →</a>
          </div>

          <!-- Resource Card 5 -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">❤️</span>
            </div>
            <h3 class="font-bold text-xl mb-2">Self-Care Tips</h3>
            <p class="text-gray-600 mb-4">Daily practices for mental and physical health</p>
            <a href="#" class="text-blue-600 font-medium hover:underline">Read More →</a>
          </div>

          <!-- Resource Card 6 -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6">
            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🎓</span>
            </div>
            <h3 class="font-bold text-xl mb-2">Academic Stress</h3>
            <p class="text-gray-600 mb-4">Managing pressure and exam anxiety effectively</p>
            <a href="#" class="text-blue-600 font-medium hover:underline">Read More →</a>
          </div>
        </div>

        <!-- Helpful Videos Section -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800">Helpful Videos</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <span class="text-6xl">▶️</span>
              </div>
              <div class="p-4">
                <h3 class="font-bold mb-2">5-Minute Breathing Exercise</h3>
                <p class="text-gray-600 text-sm">Quick relaxation technique for anxiety relief</p>
              </div>
            </div>
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <span class="text-6xl">▶️</span>
              </div>
              <div class="p-4">
                <h3 class="font-bold mb-2">Understanding Depression</h3>
                <p class="text-gray-600 text-sm">Learn the signs and when to seek help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  setupResourcesLogic(container);
}

function setupResourcesLogic(container: HTMLDivElement) {
  const backHome = document.querySelector('#backHome');
  const navHome = document.querySelector('#nav-home');
  const navEmergency = document.querySelector('#nav-emergency');
  const navDashboard = document.querySelector('#nav-dashboard');

  backHome?.addEventListener('click', () => renderHomePage());
  navHome?.addEventListener('click', () => renderHomePage());
  navEmergency?.addEventListener('click', () => renderEmergencyPage(container));

  navDashboard?.addEventListener('click', () => {
    if (currentUser?.role === 'doctor') {
      renderDoctorDashboard(container);
    } else {
      renderStudentDashboard(container);
    }
  });
}