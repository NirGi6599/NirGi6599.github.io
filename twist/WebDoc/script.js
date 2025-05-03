// JavaScript for interactivity

// --- Section 1: Station Validation Data ---
// Get the dropdown element
const stationSelect = document.getElementById('station-select');
// Get the div where the data will be displayed
const stationDataArea = document.getElementById('station-data');
const stationTextDataArea = document.getElementById('station-text-data'); // Element for text data
const stationMiniChartArea = document.getElementById('station-mini-chart'); // Element for mini chart


// Define the data for each station based on the provided Word document
const stationValidationData = {
    "הקוממיות": { בוקר: 42, יום: 30, ערב: 27 },
    "העמל": { בוקר: 38, יום: 37, ערב: 24 },
    "כ''ט בנובמבר": { בוקר: 39, יום: 34, ערב: 26 },
    "יוספטל": { בוקר: 38, יום: 34, ערב: 27 },
    "בנימין": { בוקר: 56, יום: 25, ערב: 19 },
    "בלפור": { בוקר: 58, יום: 22, ערב: 19 },
    "ז'בוטינסקי": { בוקר: 51, יום: 25, ערב: 23 },
    "רוטשילד": { בוקר: 53, יום: 26, ערב: 20 },
    "העצמאות": { בוקר: 52, יום: 26, ערב: 21 },
    "מחרוזת": { בוקר: 54, יום: 25, ערב: 20 }, // Corrected name based on select options
    "הבעש''ט": { בוקר: 50, יום: 25, ערב: 24 },
    "איסקוב": { בוקר: 54, יום: 24, ערב: 21 },
    "ארליך": { בוקר: 43, יום: 32, ערב: 24 },
    "אצטדיון בלומפילד": { בוקר: 33, יום: 32, ערב: 28 }, // Corrected name based on select options
    "שלמה": { בוקר: 34, יום: 31, ערב: 30 },
    "אליפלט": { בוקר: 35, יום: 29, ערב: 32 },
    "אלנבי": { בוקר: 26, יום: 31, ערב: 38 },
    "קרליבך": { בוקר: 18, יום: 31, ערב: 48 },
    "יהודית": { בוקר: 20, יום: 29, ערב: 47 },
    "שאול המלך": { בוקר: 17, יום: 30, ערב: 50 },
    "ארלוזורוב": { בוקר: 41, יום: 24, ערב: 33 }, // Corrected name based on select options
    "אבא הלל": { בוקר: 27, יום: 28, ערב: 44 },
    "ביאליק": { בוקר: 50, יום: 22, ערב: 26 },
    "בן גוריון": { בוקר: 28, יום: 28, ערב: 43 },
    "אהרונוביץ'": { בוקר: 43, יום: 27, ערב: 29 },
    "גשר אם המושבות": { בוקר: 16, יום: 32, ערב: 52 },
    "קרית אריה": { בוקר: 69, יום: 14, ערב: 16 }, // Corrected name based on select options
    "שנקר": { בוקר: 35, יום: 26, ערב: 38 },
    "שחם": { בוקר: 33, יום: 26, ערב: 39 }, // Corrected name based on select options
    "בלינסון": { בוקר: 39, יום: 34, ערב: 26 },
    "דנקנר": { בוקר: 67, יום: 16, ערב: 16 }, // Corrected name based on select options
    "קרול": { בוקר: 71, יום: 15, ערב: 14 },
    "פינסקר": { בוקר: 64, יום: 19, ערב: 17 }, // Corrected name based on select options
    "תחנה מרכזית פתח תקווה": { בוקר: 59, יום: 20, ערב: 20 },
};

// Add an event listener to the dropdown
stationSelect.addEventListener('change', function() {
    // Get the selected station's value
    const selectedStation = this.value;

    // Clear previous chart and hide the area
    stationMiniChartArea.innerHTML = '';
    stationMiniChartArea.classList.add('hidden');

    // Check if a station was selected
    if (selectedStation) {
        // Get the data for the selected station
        const data = stationValidationData[selectedStation];

        // Check if data exists for the selected station
        if (data) {
            // Display the text data
            stationTextDataArea.innerHTML = `
                <p class="font-semibold text-lg mb-2">${selectedStation}: התפלגות תיקופים לפי שעות היום</p>
                <div class="data-item"><strong>בוקר:</strong> ${data.בוקר}%</div>
                <div class="data-item"><strong>יום:</strong> ${data.יום}%</div>
                <div class="data-item"><strong>ערב:</strong> ${data.ערב}%</div>
            `;

             // Generate and display mini bar chart
            const total = data.בוקר + data.יום + data.ערב;
            if (total > 0) { // Avoid division by zero
                 stationMiniChartArea.innerHTML = `
                    <div class="mini-bar-container">
                        <span class="mini-bar-label">בוקר:</span>
                        <div class="mini-bar" style="width: ${data.בוקר}%"></div>
                    </div>
                     <div class="mini-bar-container">
                        <span class="mini-bar-label">יום:</span>
                        <div class="mini-bar" style="width: ${data.יום}%"></div>
                    </div>
                    <div class="mini-bar-container">
                        <span class="mini-bar-label">ערב:</span>
                        <div class="mini-bar" style="width: ${data.ערב}%"></div>
                    </div>
                `;
                stationMiniChartArea.classList.remove('hidden'); // Show chart
            }

            // Make the data box visible and use flex layout
            stationDataArea.style.display = 'flex';
        } else {
            // Display a message if data is not available
            stationTextDataArea.innerHTML = `<p>אין נתונים זמינים עבור תחנת "${selectedStation}" כרגע בדוח זה.</p>`;
            stationMiniChartArea.classList.add('hidden'); // Hide chart if no data
             // Make the data box visible and use flex layout
            stationDataArea.style.display = 'flex';
        }
    } else {
        // If "-- בחר תחנה --" is selected, show the default message
        stationTextDataArea.innerHTML = `<p>בחר תחנה מהרשימה למעלה כדי לראות את הנתונים.</p>`;
        stationMiniChartArea.classList.add('hidden'); // Hide chart if no station selected
        stationDataArea.style.display = 'flex';
    }
});

// Ensure the data area is visible initially with the default message
stationDataArea.style.display = 'flex';


// --- Section 2: Speed Data Interactivity ---
const segmentSelect = document.getElementById('segment-select');
const segmentSpeedDataArea = document.getElementById('segment-speed-data');
const segmentTextDataArea = document.getElementById('segment-text-data'); // Element for text data
const speedIndicator = document.getElementById('speed-indicator'); // Element for speed indicator


// Define speed data for each segment (using average or range midpoint for indicator)
const segmentSpeedsData = {
    "עילי בת ים/יפו": { speed: "14-16 קמ''ש", value: 15 }, // Added a numerical value
    "תת קרקעי": { speed: "25-35 קמ''ש", value: 30 },
    "עילי פתח תקווה": { speed: "15-19 קמ''ש", value: 17 },
    "הכי מהיר (פתח תקווה)": { speed: "39 קמ''ש", value: 39 },
    "הכי איתית (כניסה לתת קרע)": { speed: "8 קמ''ש", value: 8 },
};

segmentSelect.addEventListener('change', function() {
    const selectedSegment = this.value;
    speedIndicator.classList.add('hidden'); // Hide indicator initially
    speedIndicator.classList.remove('slow', 'medium', 'fast'); // Reset colors

    if (selectedSegment) {
        const data = segmentSpeedsData[selectedSegment];

        if (data) {
            // Update text data
            segmentTextDataArea.innerHTML = `
                <p class="font-semibold text-lg mb-2">${selectedSegment}:</p>
                <div class="data-item"><strong>מהירות ממוצעת:</strong> ${data.speed}</div>
            `;

            // Update speed indicator color based on value
            if (data.value < 15) {
                speedIndicator.classList.add('slow');
            } else if (data.value >= 15 && data.value < 25) {
                speedIndicator.classList.add('medium');
            } else {
                speedIndicator.classList.add('fast');
            }
            speedIndicator.classList.remove('hidden'); // Show indicator


            segmentSpeedDataArea.style.display = 'flex';
        } else {
            segmentTextDataArea.innerHTML = `<p>אין נתוני מהירות זמינים עבור מקטע "${selectedSegment}" בדוח זה.</p>`;
             speedIndicator.classList.add('hidden'); // Hide indicator if no data
            segmentSpeedDataArea.style.display = 'flex';
        }
    } else {
        segmentTextDataArea.innerHTML = `<p>בחר מקטע מהרשימה למעלה כדי לראות את נתוני המהירות.</p>`;
        speedIndicator.classList.add('hidden'); // Hide indicator if no segment selected
        segmentSpeedDataArea.style.display = 'flex';
    }
});

 // Ensure the speed data area is visible initially with the default message
 segmentSpeedDataArea.style.display = 'flex';


// --- Section 5: Interactive Bar Graph ---
// Removed button reference
const passengersChart = document.getElementById('passengers-per-km-chart');
// Select the bar elements within their new group containers
const chartBars = passengersChart.querySelectorAll('.bar-group .bar');

// Function to animate the bars
function animateBars() {
     chartBars.forEach(bar => {
        const value = parseInt(bar.dataset.value, 10); // Get the data-value attribute
        // Calculate the height based on the value and the chart height
        // Add a small base height so even value 0 is visible (optional, but good practice)
        const maxHeight = 250; // Corresponds to the bar-chart height
        const maxDataValue = 30; // The maximum data value in our set (Jerusalem)
        // Scale value proportionally to the chart height, leaving some room at the top
        const animatedHeight = (value / maxDataValue) * (maxHeight - 40) + 20; // Scale to max 210px, min 20px

        // Set the height using style property to trigger CSS transition
        bar.style.height = `${animatedHeight}px`;
        // The CSS transition property handles the slow build-up animation
    });
}

// Animate the bars when the page finishes loading
window.addEventListener('load', animateBars);

// --- New Interactive Element Logic (Section 4) ---
const distanceRangeSelect = document.getElementById('distance-range');
const feederLineRadios = document.querySelectorAll('input[name="feeder-line"]');
const destinationNearRadios = document.querySelectorAll('input[name="destination-near"]');
const checkPotentialBtn = document.getElementById('check-potential-btn');
const potentialOutput = document.getElementById('potential-output');

checkPotentialBtn.addEventListener('click', function() {
    const distanceRange = distanceRangeSelect.value;
    let feederLine = null;
    feederLineRadios.forEach(radio => {
        if (radio.checked) {
            feederLine = radio.value;
        }
    });
     let destinationNear = null;
    destinationNearRadios.forEach(radio => {
        if (radio.checked) {
            destinationNear = radio.value;
        }
    });


    // Clear previous output and hide the box
    potentialOutput.innerHTML = '';
    potentialOutput.classList.add('hidden');

    if (!distanceRange || !feederLine || !destinationNear) {
        potentialOutput.innerHTML = '<p class="text-red-700 font-semibold">אנא ענה על כל השאלות כדי לקבל הערכה.</p>';
        potentialOutput.classList.remove('hidden');
        return;
    }

    let message = '<strong>הערכת פוטנציאל השימוש ברכבת הקלה עבורך:</strong><br>';

    if (distanceRange === 'close') {
        message += 'מקום מגוריך נמצא בטווח הליכה קצר מאוד מתחנת הרכבת הקלה (עד 500 מטר). <strong>מרבית האנשים ברדיוס זה מגיעים ברגל!</strong> זהו פוטנציאל שימוש גבוה מאוד.';
        if (destinationNear === 'yes') {
             message += ' ויעדך קרוב לתחנה - זהו שילוב אידיאלי לנסיעה ברכבת הקלה.';
         } else {
             message += ' אך יעדך אינו קרוב לתחנה - ייתכן שתצטרך לשלב אמצעי תחבורה נוספים.';
         }
    } else if (distanceRange === 'medium') {
        message += `מקום מגוריך נמצא במרחק בינוני מתחנת הרכבת הקלה (500 מטר עד 5 ק"מ). <strong>הפוטנציאל הגדול ביותר למשתמשים חדשים נמצא בטווח זה.</strong>`;
        if (feederLine === 'yes') {
            message += ' ויש לך קו מזין נוח - זה משפר משמעותית את הנגישות והופך את הרכבת הקלה לאטרקטיבית יותר עבורך, בדומה לתושבי גני תקווה המשתמשים בקו 75.';
            if (destinationNear === 'yes') {
                 message += ' ויעדך קרוב לתחנה - שילוב זה מצביע על פוטנציאל שימוש גבוה.';
             } else {
                 message += ' אך יעדך אינו קרוב לתחנה - ייתכן שהנסיעה תדרוש יותר החלפות.';
             }
        } else {
            message += ' אך אין לך קו מזין נוח. <strong>היעדר קווים מזינים יעילים מאזורים בטווח זה הוא אחת הסיבות המרכזיות לשימוש נמוך ביחס לתחזיות.</strong> פוטנציאל השימוש עבורך קיים, אך פחות ממומש ללא קישוריות טובה.';
             if (destinationNear === 'yes') {
                 message += ' למרות שיעדך קרוב לתחנה.';
             } else {
                 message += '.'; // End sentence
             }
        }
    } else { // distanceRange === 'far'
        message += `מקום מגוריך נמצא במרחק גדול יחסית מתחנת הרכבת הקלה (מעל 5 ק"מ). <strong>מעטים מגיעים לרכבת הקלה ממרחק זה, שם לרוב משתלם יותר לקחת קו תחבורה ציבורית ישיר ליעד.</strong>`;
         if (feederLine === 'yes') {
             message += ' גם אם יש קו מזין, הנסיעה עשויה להיות ארוכה.';
         }
         if (destinationNear === 'yes') {
             message += ' ייתכן שהשימוש יהיה כדאי אם יעדך ספציפית קרוב מאוד לתחנה ואין חלופות ישירות טובות יותר.';
         } else {
             message += ' פוטנציאל השימוש עבורך נמוך יחסית.';
         }
    }

    potentialOutput.innerHTML = `<p>${message}</p>`;
    potentialOutput.classList.remove('hidden'); // Show the output box
});
