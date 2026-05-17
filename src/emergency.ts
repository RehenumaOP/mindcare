import { renderHomePage } from './main';
import { currentUser } from './store';
import { renderStudentDashboard } from './dashboard';
import { renderDoctorDashboard } from './doctor-dashboard';
import { renderResourcesPage } from './resources';

export function renderEmergencyPage(container: HTMLDivElement) {
  container.innerHTML = `
    <nav class="bg-red-600 shadow-lg px-6 py-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold text-white cursor-pointer" id="backHome">
          MindCare BD
        </div>
        <ul class="flex space-x-8 items-center">
          <li id="nav-home" class="text-white hover:text-red-200 cursor-pointer transition font-medium">Home</li>
          <li id="nav-resources" class="text-white hover:text-red-200 cursor-pointer transition font-medium">Resources</li>
          <li class="text-red-200 font-semibold flex items-center gap-1">
            <span class="animate-pulse">●</span> Emergency
          </li>
          ${currentUser ? `
            <li id="nav-dashboard" class="bg-white text-red-600 px-6 py-2 rounded-full hover:bg-red-50 cursor-pointer transition shadow-md font-semibold">
              Dashboard
            </li>
          ` : ''}
        </ul>
      </div>
    </nav>

    <section class="bg-gradient-to-br from-red-50 to-white py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Warning Banner -->
        <div class="bg-red-100 border-l-4 border-red-600 p-6 mb-8 rounded-lg">
          <div class="flex items-start">
            <span class="text-4xl mr-4">⚠️</span>
            <div>
              <h2 class="text-2xl font-bold text-red-800 mb-2">Crisis Support Available 24/7</h2>
              <p class="text-red-700">
                If you're in immediate danger or having thoughts of self-harm, please reach out now.
              </p>
            </div>
          </div>
        </div>

        <!-- Emergency Contacts -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold mb-6 text-gray-800">Emergency Helplines</h2>
          
          <div class="space-y-4">
            <div class="border-l-4 border-red-500 pl-4 py-3 hover:bg-red-50 transition rounded">
              <h3 class="font-bold text-xl text-red-600">National Emergency Helpline</h3>
              <p class="text-3xl font-bold text-gray-800 my-2">16123</p>
              <p class="text-gray-600">24/7 Mental Health Crisis Support</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4 py-3 hover:bg-blue-50 transition rounded">
              <h3 class="font-bold text-xl text-blue-600">Kaan Pete Roi (কান পেতে রই)</h3>
              <p class="text-2xl font-bold text-gray-800 my-2">+880 2 5810 6163</p>
              <p class="text-gray-600">Emotional support helpline (Daily 6 PM - 10 PM)</p>
            </div>

            <div class="border-l-4 border-green-500 pl-4 py-3 hover:bg-green-50 transition rounded">
              <h3 class="font-bold text-xl text-green-600">Moner Bondhu Foundation</h3>
              <p class="text-2xl font-bold text-gray-800 my-2">+880 1779 554391</p>
              <p class="text-gray-600">Mental health support and counseling</p>
            </div>

            <div class="border-l-4 border-purple-500 pl-4 py-3 hover:bg-purple-50 transition rounded">
              <h3 class="font-bold text-xl text-purple-600">National Emergency (Police)</h3>
              <p class="text-2xl font-bold text-gray-800 my-2">999</p>
              <p class="text-gray-600">For immediate physical danger</p>
            </div>
          </div>
        </div>

        <!-- Warning Signs -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Warning Signs - When to Seek Help Immediately</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-red-500 text-xl">•</span>
              <span class="text-gray-700">Thoughts of harming yourself or others</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-500 text-xl">•</span>
              <span class="text-gray-700">Feeling hopeless or having no reason to live</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-500 text-xl">•</span>
              <span class="text-gray-700">Severe anxiety or panic attacks</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-500 text-xl">•</span>
              <span class="text-gray-700">Unable to care for yourself or complete daily activities</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-500 text-xl">•</span>
              <span class="text-gray-700">Experiencing severe mood swings or psychotic symptoms</span>
            </li>
          </ul>
        </div>

        <!-- Immediate Actions -->
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">What You Can Do Right Now</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-lg">
              <h3 class="font-bold text-lg mb-2">🤝 Reach Out</h3>
              <p class="text-gray-600 text-sm">Call a helpline or talk to someone you trust</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h3 class="font-bold text-lg mb-2">🏥 Get Medical Help</h3>
              <p class="text-gray-600 text-sm">Visit the nearest emergency room if needed</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h3 class="font-bold text-lg mb-2">🧘 Practice Grounding</h3>
              <p class="text-gray-600 text-sm">Focus on your breath and immediate surroundings</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h3 class="font-bold text-lg mb-2">👨‍👩‍👧 Stay With Someone</h3>
              <p class="text-gray-600 text-sm">Don't isolate - be around safe people</p>
            </div>
          </div>
        </div>

        <!-- Additional Resources -->
        <div class="mt-8 text-center">
          <p class="text-gray-600 mb-4">Remember: You are not alone, and help is available.</p>
          <button id="backToHome" class="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-semibold">
            Return to Home
          </button>
        </div>
      </div>
    </section>
  `;

  setupEmergencyLogic(container);
}

function setupEmergencyLogic(container: HTMLDivElement) {
  const backHome = document.querySelector('#backHome');
  const navHome = document.querySelector('#nav-home');
  const backToHome = document.querySelector('#backToHome');
  const navResources = document.querySelector('#nav-resources');
  const navDashboard = document.querySelector('#nav-dashboard');

  backHome?.addEventListener('click', () => renderHomePage());
  navHome?.addEventListener('click', () => renderHomePage());
  backToHome?.addEventListener('click', () => renderHomePage());
  navResources?.addEventListener('click', () => renderResourcesPage(container));

  navDashboard?.addEventListener('click', () => {
    if (currentUser?.role === 'doctor') {
      renderDoctorDashboard(container);
    } else {
      renderStudentDashboard(container);
    }
  });
}