// Barney Gym App - Navigation & Data

// Comprehensive exercise library organized by category
const exerciseLibrary = {
  Legs: [
    'Barbell Squats', 'Box Squats', 'Front Squats', 'Sissy Squats', 'Goblet Squats', 'Bulgarian Split Squats',
    'Barbell Deadlifts', 'Romanian Deadlifts', 'Sumo Deadlifts', 'Good Mornings', 'Leg Press',
    'Lying Leg Curls', 'Standing Leg Curls', 'Seated Leg Curls', 'Leg Extensions', 'Hip Thrusts', 'Standing Calf Raises', 'Seated Calf Raises', 'Donkey Calf Raises', 'Eccentric Press Calf Raises'
  ],
  Chest: [
    'Barbell Bench Press', 'Incline Barbell Chest Press', 'Decline Barbell Press', 'Incline Dumbbell Press', 'Decline Dumbbell Press', 'Flat Dumbbell Chest Press', 'Cable Crossovers',
    'Push-Ups', 'Diamond Push-Ups', 'Decline Push-Ups', 'Dips', 'Weighted Dips', 'Chest Flyes',
    'Incline Chest Flyes', 'Decline Chest Flyes', 'Pec Deck', 'Cable Flyes'
  ],
  Back: [
    'Barbell Rows', 'Dumbbell Rows', 'T-Bar Rows', 'Cable Rows', 'Seated Rows', 'Lat Pulldowns', 'Pull-Ups', 'Weighted Pull-Ups', 'Chin-Ups', 'Bodyweight Chin-Ups', 'Dumbbell Pullovers', 'Cable Pullovers', 'Face Pulls', 'Rear Delt Flyes', 'Cable Rear Delt Flyes', 'Single-Arm Rows'
  ],
  Shoulders: [
    'Standing Overhead Barbell Press', 'Dumbbell Shoulder Press', 'Arnold Press', 'Military Press',
    'Lateral Raise', 'Front Raise', 'Rear Delt Flyes', 'Barbell Upright Rows', 'Cable Lateral Raises',
    'Face Pulls', 'Shrugs', 'Barbell Shrugs', 'Standing Dumbbell Shrugs', 'Seated Dumbbell Shrugs'
  ],
  Arms: [
    'Barbell Curls', 'Dumbbell Curls', 'Hammer Curls', 'Dumbbell Hammer Curls', 'Preacher Curls',
    'Concentration Curls', 'Dumbbell Supinating Curls', 'Cable Curls', 'Hammer Cable Curls', 'Barbell Skull Crushers', 'Dumbbell Overhead Tricep Extension', 'Tricep Pressdowns',
    'Rope Tricep Pressdowns', 'Diamond Push-Ups', 'Close-Grip Bench Press', 'Dips'
  ],
  Core: [
    'Weighted Decline Sit-Ups', 'Bodyweight Decline Sit-Ups', 'Hanging Leg Raises', 'Crunches', 'Planks', 'Russian Twists', 'Mountain Climbers', 'Bicycle Crunches', 'Leg Raises',
    'Ab Wheel Rollouts', 'Cable Woodchoppers', 'Pallof Press'
  ]
};

const workouts = {
  1: {
    name: 'Phase I',
    color: 'red-400',
    days: {
      1: [
        { name: 'Box Squats', sets: '1 x 10' },
        { name: 'Barbell Squats', sets: '4-6 x 1-4' },
        { name: 'Barbell Bench Press', sets: '4-6 x 1-4' },
        { name: 'Weighted Pull-Ups', sets: '2 x 1-6' },
        { name: 'Barbell Shrugs', sets: '3 x 3-6' },
        { name: 'Barbell Curls', sets: '2 x 6-8' },
        { name: 'Barbell Skull Crushers', sets: '2 x 6-8' },
        { name: 'Weighted Decline Sit-Ups', sets: '5 x 8-12' },
        { name: 'Standing Calf Raises', sets: '5 x 8-20' },
      ],
      2: [
        { name: 'Good Mornings', sets: '1 x 10' },
        { name: 'Barbell Deadlifts', sets: '4-6 x 1-4' },
        { name: 'Standing Overhead Barbell Press', sets: '4-6 x 1-4' },
        { name: 'Rear Delt Flyes', sets: '2 x 6-8' },
        { name: 'Standing Dumbbell Shrugs', sets: '2 x 6-8' },
        { name: 'Dumbbell Hammer Curls', sets: '2 x 6-8' },
        { name: 'Dumbbell Overhead Tricep Extension', sets: '2 x 6-8' },
        { name: 'Hanging Leg Raises', sets: '5 x 8-20' },
        { name: 'Seated Calf Raises', sets: '3 x 8-20' },
      ],
    },
  },
  2: {
    name: 'Phase II',
    color: 'blue-400',
    days: {
      1: [
        { name: 'Barbell Squats', sets: '3 x 8' },
        { name: 'Incline Barbell Chest Press', sets: '3 x 8' },
        { name: 'Barbell Rows', sets: '3 x 8' },
        { name: 'Standing Dumbbell Shrugs', sets: '3 x 8' },
        { name: 'Rear Delt Flyes', sets: '2 x 8' },
        { name: 'Lateral Raise', sets: '2 x 8' },
        { name: 'Dumbbell Supinating Curls', sets: '3 x 8' },
        { name: 'Weighted Dips', sets: '3 x 8' },
        { name: 'Seated Calf Raises', sets: '3 x 8' },
        { name: 'Hanging Leg Raises', sets: '3 x 8' },
      ],
      2: [
        { name: 'Barbell Deadlifts', sets: '3 x 4' },
        { name: 'Lying Leg Curls', sets: '1 x 8' },
        { name: 'Barbell Shrugs', sets: '3 x 8' },
        { name: 'Flat Dumbbell Chest Press', sets: '3 x 8' },
        { name: 'Dumbbell Pullover', sets: '1 x 8' },
        { name: 'Bodyweight Chin-Ups', sets: '2 x 6' },
        { name: 'Dumbbell Shoulder Press', sets: '3 x 8' },
        { name: 'Barbell Curls', sets: '3 x 8' },
        { name: 'Tricep Pressdowns', sets: '3 x 8' },
        { name: 'Standing Calf Raises', sets: '3 x 8' },
        { name: 'Bodyweight Decline Sit-Ups', sets: '3 x 30-100' },
      ],
    },
  },
  3: {
    name: 'Phase III',
    color: 'green-400',
    days: {
      1: [
        { name: 'Barbell Squats', sets: '3 x 8' },
        { name: 'Sissy Squats', sets: '2 x 12' },
        { name: 'Incline Barbell Chest Press', sets: '2 x 12' },
        { name: 'Cable Crossovers', sets: '2 x 12' },
        { name: 'Dumbbell Rows', sets: '2 x 8' },
        { name: 'Dumbbell Pullovers', sets: '2 x 12' },
        { name: 'Seated Dumbbell Shrugs', sets: '5 x 12' },
        { name: 'Cable Rear Delt Flyes', sets: '2 x 12' },
        { name: 'Barbell Upright Rows', sets: '2 x 12' },
        { name: 'SUPERSET: Dumbbell Supinating Curls', sets: '2 x 12' },
        { name: 'SUPERSET: Dumbbell Overhead Tricep Extension', sets: '2 x 12' },
        { name: 'SUPERSET: Hammer Cable Curls', sets: '2 x 12' },
        { name: 'SUPERSET: Rope Tricep Pressdowns', sets: '2 x 12' },
        { name: 'Seated Calf Raises', sets: '2 x 12' },
        { name: 'Standing Calf Raises', sets: '2 x 12' },
        { name: 'Hanging Leg Raises', sets: '5 x 15' },
      ],
      2: [],
    },
  },
};

function getVideoKey(phase, day, exerciseName) {
  return `video_${phase}_${day}_${exerciseName.replace(/[^a-zA-Z0-9]/g, '_')}`;
}
function saveVideo(phase, day, exerciseName, videoBlob) {
  const key = getVideoKey(phase, day, exerciseName);
  localStorage.setItem(key, URL.createObjectURL(videoBlob));
}
function getVideo(phase, day, exerciseName) {
  const key = getVideoKey(phase, day, exerciseName);
  return localStorage.getItem(key);
}
function deleteVideo(phase, day, exerciseName) {
  const key = getVideoKey(phase, day, exerciseName);
  const videoUrl = localStorage.getItem(key);
  if (videoUrl) {
    URL.revokeObjectURL(videoUrl);
    localStorage.removeItem(key);
  }
}

// Exercise replacement functions
function replaceExercise(phase, day, exerciseIndex, newExercise) {
  workouts[phase].days[day][exerciseIndex].name = newExercise;
  renderExercises();
}

function showExerciseReplacementModal(phase, day, exerciseIndex, currentExercise) {
  // Create modal HTML
  const modalHTML = `
    <div id="exercise-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div class="bg-gray-100 px-6 py-3 border-b">
          <h3 class="text-xl font-bold">Change Workout</h3>
          <p class="text-gray-600">Current: ${currentExercise}</p>
        </div>
        <div class="p-6 overflow-y-auto max-h-[60vh]">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${Object.entries(exerciseLibrary).map(([category, exercises]) => `
              <div class="border rounded-lg p-4">
                <h4 class="font-bold text-lg mb-3 text-blue-600">${category}</h4>
                <div class="space-y-2">
                  ${exercises.map(exercise => `
                    <button 
                      class="w-full text-left p-2 hover:bg-blue-50 transition-colors ${exercise === currentExercise ? 'bg-blue-100 font-semibold' : ''}"
                      onclick="selectReplacementExercise('${phase}', ${day}, ${exerciseIndex}, '${exercise}')"
                    >
                      ${exercise}
                    </button>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="bg-gray-100 px-6 py-3 border-t">
          <button onclick="closeExerciseModal()" class="bg-gray-50 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function selectReplacementExercise(phase, day, exerciseIndex, newExercise) {
  replaceExercise(phase, day, exerciseIndex, newExercise);
  closeExerciseModal();
}

function closeExerciseModal() {
  const modal = document.getElementById('exercise-modal');
  if (modal) {
    modal.remove();
  }
}

// Track completed exercises in sessionStorage
function getCompletedKey(phase, day, index) {
  return `completed_${phase}_${day}_${index}`;
}
function isExerciseCompleted(phase, day, index) {
  return sessionStorage.getItem(getCompletedKey(phase, day, index)) === 'true';
}
function setExerciseCompleted(phase, day, index, value) {
  sessionStorage.setItem(getCompletedKey(phase, day, index), value ? 'true' : 'false');
}
// Track weight in sessionStorage
function getWeightKey(phase, day, index) {
  return `weight_${phase}_${day}_${index}`;
}
function getExerciseWeight(phase, day, index) {
  return sessionStorage.getItem(getWeightKey(phase, day, index)) || '';
}
function setExerciseWeight(phase, day, index, value) {
  sessionStorage.setItem(getWeightKey(phase, day, index), value);
}

const startScreen = document.getElementById('start-screen');
const phaseScreen = document.getElementById('phase-screen');
const dayScreen = document.getElementById('day-screen');
const exerciseScreen = document.getElementById('exercise-screen');
const exerciseList = document.getElementById('exercise-list');

let selectedPhase = null;
let selectedDay = null;

function showScreen(screen) {
  [startScreen, phaseScreen, dayScreen, exerciseScreen].forEach(s => s.classList.add('hidden'));
  screen.classList.remove('hidden');
}

const startBtn = document.getElementById('start-btn');
if (startBtn) {
  startBtn.onclick = () => showScreen(phaseScreen);
}
Array.from(document.getElementsByClassName('phase-select')).forEach(btn => {
  btn.onclick = () => {
    selectedPhase = btn.getAttribute('data-phase');
    showScreen(dayScreen);
  };
});
Array.from(document.getElementsByClassName('day-select')).forEach(btn => {
  btn.onclick = () => {
    selectedDay = btn.getAttribute('data-day');
    renderExercises();
    showScreen(exerciseScreen);
  };
});
Array.from(document.getElementsByClassName('back-btn')).forEach(btn => {
  btn.onclick = () => {
    if (exerciseScreen && !exerciseScreen.classList.contains('hidden')) {
      showScreen(dayScreen);
    } else if (dayScreen && !dayScreen.classList.contains('hidden')) {
      showScreen(phaseScreen);
    }
  };
});
Array.from(document.getElementsByClassName('home-btn')).forEach(btn => {
  btn.onclick = () => showScreen(startScreen);
});

function renderExercises() {
  exerciseList.innerHTML = '';
  if (!selectedPhase || !selectedDay) return;
  const phase = workouts[selectedPhase];
  const day = phase.days[selectedDay];
  const gradients = {
    1: 'bg-gradient-to-r from-red-500 to-red-600',
    2: 'bg-gradient-to-r from-blue-500 to-blue-600',
    3: 'bg-gradient-to-r from-green-500 to-green-600',
  };
  day.forEach((ex, index) => {
    const completed = isExerciseCompleted(selectedPhase, selectedDay, index);
    const weight = getExerciseWeight(selectedPhase, selectedDay, index);
    const card = document.createElement('div');
    card.className = `exercise-card ${gradients[selectedPhase]} text-white p-6 shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col items-center ${completed ? 'opacity-60 bg-green-500' : ''}`;
    const videoUrl = getVideo(selectedPhase, selectedDay, ex.name);
    const hasVideo = !!videoUrl;
    card.innerHTML = `
      <div class="flex items-center justify-center mb-3 w-full">
        <div class="text-xl font-semibold text-center flex-1">${ex.name}</div>
        <button class="ml-2 check-complete-btn ${completed ? 'bg-green-600' : 'bg-white bg-opacity-20'} hover:bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 border-2 border-white" data-index="${index}" title="Mark Complete">
          ${completed ? '✔️' : '⬜'}
        </button>
      </div>
      <div class="text-lg font-bold bg-white bg-opacity-20 px-4 py-2 rounded-full mb-2">Sets/Reps: ${ex.sets}</div>
      <div class="flex items-center mb-4 w-full">
        <label for="weight-input-${index}" class="mr-2 text-white text-sm">Weight (lbs):</label>
        <input id="weight-input-${index}" type="number" min="0" step="1" class="w-20 px-2 py-1 rounded text-gray-900 text-center" value="${weight}" placeholder="0" />
      </div>
      <div class="flex space-x-2 mb-2">
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition-colors duration-200 place-exercise-btn" data-phase="${selectedPhase}" data-day="${selectedDay}" data-index="${index}" data-exercise="${ex.name}">
          🔄 Change Workout
        </button>
      </div>
      ${hasVideo ? `
        <video id="video-${index}" class="w-full max-w-xs rounded-lg mb-3" controls>
          <source src="${videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="flex space-x-2">
          <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors duration-200 delete-video-btn" data-exercise="${ex.name}">
            🗑️ Delete Video
          </button>
        </div>
      ` : `
        <div class="flex space-x-2">
          <input type="file" id="video-input-${index}" accept="video/*" class="hidden" data-exercise="${ex.name}">
          <button class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded text-sm transition-colors duration-200 upload-video-btn" data-exercise="${ex.name}" data-index="${index}">
            📹 Upload Video
          </button>
        </div>
      `}
    `;
    exerciseList.appendChild(card);
    // Add check mark event
    const checkBtn = card.querySelector('.check-complete-btn');
    checkBtn.onclick = () => {
      setExerciseCompleted(selectedPhase, selectedDay, index, !completed);
      renderExercises();
    };
    // Add weight input event
    const weightInput = card.querySelector(`#weight-input-${index}`);
    weightInput.onchange = (e) => {
      setExerciseWeight(selectedPhase, selectedDay, index, e.target.value);
    };
    
    // Add event listeners
    const replaceBtn = card.querySelector('.place-exercise-btn');
    replaceBtn.onclick = () => {
      const phase = replaceBtn.getAttribute('data-phase');
      const day = replaceBtn.getAttribute('data-day');
      const idx = replaceBtn.getAttribute('data-index');
      const exercise = replaceBtn.getAttribute('data-exercise');
      showExerciseReplacementModal(phase, day, idx, exercise);
    };
    
    if (hasVideo) {
      const deleteBtn = card.querySelector('.delete-video-btn');
      deleteBtn.onclick = () => {
        deleteVideo(selectedPhase, selectedDay, ex.name);
        renderExercises();
      };
    } else {
      const uploadBtn = card.querySelector('.upload-video-btn');
      const fileInput = card.querySelector('input[type="file"]');
      uploadBtn.onclick = () => fileInput.click();
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          saveVideo(selectedPhase, selectedDay, ex.name, file);
          renderExercises();
        }
      };
    }
  });
}

showScreen(startScreen); 