import './style.css'
import { renderLoginPage } from './login.ts';
import { renderResourcesPage } from './resources.ts';
import { renderEmergencyPage } from './emergency.ts';
import { renderSignupPage } from './signup.ts';

const app = document.querySelector<HTMLDivElement>('#app')!

export function renderHomePage() {
  app.innerHTML = `
    <nav class="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg px-6 py-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold text-white cursor-pointer flex items-center gap-2" id="home-logo">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
          </svg>
          MindCare BD
        </div>
        <ul class="flex space-x-8 items-center">
          <li id="nav-home" class="text-white hover:text-blue-200 cursor-pointer transition font-medium">Home</li>
          <li id="nav-resources" class="text-white hover:text-blue-200 cursor-pointer transition font-medium">Resources</li>
          <li id="nav-emergency" class="text-white hover:text-blue-200 cursor-pointer transition font-medium flex items-center gap-1">
            <span class="animate-pulse text-red-300">●</span> Emergency
          </li>
          <li id="signup-btn" class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg cursor-pointer transition font-semibold">
            Sign Up
          </li>
          <li id="login-btn" class="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 cursor-pointer transition shadow-md font-semibold">
            Login
          </li>
        </ul>
      </div>
    </nav>

    <section class="relative bg-gradient-to-br from-blue-50 to-white py-24 px-4 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-5">
        <div class="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div class="relative max-w-5xl mx-auto text-center">
        <div class="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
          🇧🇩 Supporting Bangladeshi Students
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          You are not alone.<br/>Help is here.
        </h1>

        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          A safe, confidential space for students to share stress, anxiety, and life
          problems – and receive professional mental health support.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button id="cta-signup" class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-xl transition transform hover:-translate-y-1 font-semibold text-lg">
            Get Started Free
          </button>

          <button id="cta-plans" class="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition transform hover:-translate-y-1 font-semibold text-lg shadow-md">
            View Plans
          </button>
        </div>

        <div class="flex flex-wrap justify-center gap-8 text-gray-700">
          <div class="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
            <span class="font-medium">100% Anonymous</span>
          </div>
          <div class="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
            <span class="font-medium">Free Support</span>
          </div>
          <div class="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <svg class="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
            <span class="font-medium">Trusted Care</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Preview Section -->
    <section class="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-4 text-gray-800">Choose Your Support Level</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Start free or upgrade for premium features like video calls and priority support
        </p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 class="text-2xl font-bold mb-2">Free</h3>
            <p class="text-4xl font-bold text-gray-800 mb-4">৳0<span class="text-sm text-gray-500">/mo</span></p>
            <ul class="space-y-3 mb-6 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Text-based support</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Anonymous sharing</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Resource library</li>
            </ul>
            <button class="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition font-semibold">
              Get Started
            </button>
          </div>
          <div class="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-xl p-8 transform scale-105 relative">
            <div class="absolute -top-4 right-4 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
              POPULAR
            </div>
            <h3 class="text-2xl font-bold mb-2">Premium</h3>
            <p class="text-4xl font-bold mb-4">৳499<span class="text-sm opacity-75">/mo</span></p>
            <ul class="space-y-3 mb-6 text-sm">
              <li class="flex items-center gap-2"><span class="text-yellow-300">✓</span> Everything in Free</li>
              <li class="flex items-center gap-2"><span class="text-yellow-300">✓</span> Priority responses</li>
              <li class="flex items-center gap-2"><span class="text-yellow-300">✓</span> 2 video calls/month</li>
              <li class="flex items-center gap-2"><span class="text-yellow-300">✓</span> Voice messages</li>
            </ul>
            <button class="w-full bg-white text-purple-600 py-3 rounded-xl hover:bg-gray-50 transition font-bold shadow-lg">
              Start Premium
            </button>
          </div>
          <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 class="text-2xl font-bold mb-2">Elite</h3>
            <p class="text-4xl font-bold text-gray-800 mb-4">৳999<span class="text-sm text-gray-500">/mo</span></p>
            <ul class="space-y-3 mb-6 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Everything in Premium</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Unlimited video calls</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Personal therapist</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Family counseling</li>
            </ul>
            <button class="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-xl hover:shadow-lg transition font-bold">
              Go Elite
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">📝</span>
            </div>
            <h3 class="font-bold text-xl mb-2">Share Your Story</h3>
            <p class="text-gray-600">Express your feelings anonymously in a safe environment</p>
          </div>
          <div class="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">👨‍⚕️</span>
            </div>
            <h3 class="font-bold text-xl mb-2">Expert Review</h3>
            <p class="text-gray-600">Licensed professionals review and respond to your concerns</p>
          </div>
          <div class="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">💚</span>
            </div>
            <h3 class="font-bold text-xl mb-2">Get Support</h3>
            <p class="text-gray-600">Receive personalized advice and ongoing support</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-gray-800 text-white py-8 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-gray-400">© 2026 MindCare BD. Your mental health matters.</p>
        <p class="text-sm text-gray-500 mt-2">If you're in crisis, please call the National Helpline: 16123</p>
      </div>
    </footer>
  `;

  setupHomePageLogic();
}

function setupHomePageLogic() {
  const loginBtn = document.querySelector('#login-btn');
  const signupBtn = document.querySelector('#signup-btn');
  const homeLogo = document.querySelector('#home-logo');
  const navHome = document.querySelector('#nav-home');
  const navResources = document.querySelector('#nav-resources');
  const navEmergency = document.querySelector('#nav-emergency');
  const ctaSignup = document.querySelector('#cta-signup');
  const ctaPlans = document.querySelector('#cta-plans');

  loginBtn?.addEventListener('click', () => renderLoginPage(app));
  signupBtn?.addEventListener('click', () => renderSignupPage(app));
  ctaSignup?.addEventListener('click', () => renderSignupPage(app));
  ctaPlans?.addEventListener('click', () => renderSignupPage(app));
  homeLogo?.addEventListener('click', () => renderHomePage());
  navHome?.addEventListener('click', () => renderHomePage());
  navResources?.addEventListener('click', () => renderResourcesPage(app));
  navEmergency?.addEventListener('click', () => renderEmergencyPage(app));
}

renderHomePage();