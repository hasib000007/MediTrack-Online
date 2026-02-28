
    (function() {
      // DOM elements
      const heightInput = document.getElementById('heightInput');
      const weightInput = document.getElementById('weightInput');
      const calculateBtn = document.getElementById('calculateBtn');
      const bmiDisplay = document.getElementById('bmiDisplay');
      const categoryDisplay = document.getElementById('categoryDisplay');
      const rangeHint = document.getElementById('rangeHint');

      // helper: calculate BMI and update UI
      function computeAndUpdate() {
        // get values (replace comma with dot, parseFloat)
        let h = parseFloat(heightInput.value.replace(',', '.'));
        let w = parseFloat(weightInput.value.replace(',', '.'));

        // validation: if not a number or empty, fallback to empty fields?
        if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
          bmiDisplay.textContent = '?';
          categoryDisplay.textContent = 'INVALID';
          rangeHint.textContent = 'enter positive numbers';
          return;
        }

        // height in meters
        const hInMeters = h / 100;
        const bmi = w / (hInMeters * hInMeters);
        // round to 1 decimal
        const bmiRounded = Math.round(bmi * 10) / 10;

        // display bmi
        bmiDisplay.textContent = bmiRounded;

        // determine category & healthy range
        let category = '';
        let rangeMsg = '';
        let healthyMin = (18.5 * hInMeters * hInMeters).toFixed(1);
        let healthyMax = (24.9 * hInMeters * hInMeters).toFixed(1);

        if (bmi < 16.0) {
          category = 'SEVERE THINNESS';
          rangeMsg = `⬆️ gain to ${healthyMin}–${healthyMax} kg`;
        } else if (bmi >= 16.0 && bmi < 17.0) {
          category = 'MODERATE THINNESS';
          rangeMsg = `aim for ${healthyMin}–${healthyMax} kg`;
        } else if (bmi >= 17.0 && bmi < 18.5) {
          category = 'MILD THINNESS';
          rangeMsg = `ideal range: ${healthyMin}–${healthyMax} kg`;
        } else if (bmi >= 18.5 && bmi < 25.0) {
          category = 'NORMAL';
          rangeMsg = `✅ healthy! maintain ${healthyMin}–${healthyMax} kg`;
        } else if (bmi >= 25.0 && bmi < 30.0) {
          category = 'OVERWEIGHT';
          rangeMsg = `⬇️ aim for ${healthyMin}–${healthyMax} kg`;
        } else if (bmi >= 30.0 && bmi < 35.0) {
          category = 'OBESE (I)';
          rangeMsg = `healthy weight: ${healthyMin}–${healthyMax} kg`;
        } else if (bmi >= 35.0 && bmi < 40.0) {
          category = 'OBESE (II)';
          rangeMsg = `healthy range: ${healthyMin}–${healthyMax} kg`;
        } else {
          category = 'OBESE (III)';
          rangeMsg = `consult professional (target ${healthyMin}–${healthyMax} kg)`;
        }

        categoryDisplay.textContent = category;
        rangeHint.textContent = `Healthy weight range: ${healthyMin} – ${healthyMax} kg`;
      }

      // initial call (show with default values 170/70)
      computeAndUpdate();

      // event listener for button click
      calculateBtn.addEventListener('click', function(e) {
        e.preventDefault();  
        computeAndUpdate();
      });

      // optional: also compute on pressing Enter (better UX)
      [heightInput, weightInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            computeAndUpdate();
          }
        });
      });

  
    })();
 