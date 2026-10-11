/* Load one Physics section on demand. Include this file from physics-quiz.html. */
window.physicsQuestionSections = window.physicsQuestionSections || {};
window.physicsSectionFiles = {
  "Units, Measurements & Experimental Skills": {
    "file": "physics/units-measurements.js",
    "count": 1000
  },
  "Kinematics": {
    "file": "physics/kinematics.js",
    "count": 1000
  },
  "Laws of Motion & Friction": {
    "file": "physics/laws-of-motion.js",
    "count": 1000
  },
  "Work, Energy, Momentum & Collisions": {
    "file": "physics/work-energy-momentum.js",
    "count": 1000
  },
  "Rotational Motion & Gravitation": {
    "file": "physics/rotation-gravitation.js",
    "count": 1000
  },
  "Properties of Matter & Fluids": {
    "file": "physics/properties-matter-fluids.js",
    "count": 1000
  },
  "Thermal Physics & Thermodynamics": {
    "file": "physics/thermal-physics.js",
    "count": 1000
  },
  "Oscillations & Waves": {
    "file": "physics/oscillations-waves.js",
    "count": 1000
  },
  "Electrostatics & Capacitance": {
    "file": "physics/electrostatics-capacitance.js",
    "count": 1000
  },
  "Current Electricity": {
    "file": "physics/current-electricity.js",
    "count": 1000
  },
  "Magnetism, EMI & AC": {
    "file": "physics/magnetism-emi-ac.js",
    "count": 1000
  },
  "Optics & Modern Physics": {
    "file": "physics/optics-modern-physics.js",
    "count": 1000
  }
};
window.loadPhysicsSection = function(sectionName) {
  return new Promise(function(resolve, reject) {
    if (window.physicsQuestionSections[sectionName]) {
      resolve(window.physicsQuestionSections[sectionName]);
      return;
    }
    var section = window.physicsSectionFiles[sectionName];
    if (!section) {
      reject(new Error("Unknown Physics section: " + sectionName));
      return;
    }
    var script = document.createElement("script");
    script.src = section.file;
    script.onload = function() {
      var questions = window.physicsQuestionSections[sectionName];
      if (Array.isArray(questions)) resolve(questions);
      else reject(new Error("Section file loaded, but questions were not registered: " + sectionName));
    };
    script.onerror = function() {
      reject(new Error("Could not load Physics section file: " + section.file));
    };
    document.head.appendChild(script);
  });
};


/* Load every section only when the user chooses All Sections. */
window.loadAllPhysicsSections = function() {
  var names = Object.keys(window.physicsSectionFiles);
  return Promise.all(names.map(function(name) {
    return window.loadPhysicsSection(name);
  })).then(function(groups) {
    return groups.reduce(function(all, group) {
      return all.concat(group);
    }, []);
  });
};
