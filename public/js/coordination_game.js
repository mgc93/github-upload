/** to do list */


// couldn't make nice border as feedback after choice :(
// add validation only every 30 trials
// look at IRB for minimum payment

// payoffs list
payoff = [
    2.66666666666667,3.66666666666667,4.66666666666667,5.66666666666667,4.33333333333333,5.33333333333333,6.33333333333333,6,7,7.66666666666667,2.50000000000000,3.50000000000000,4.50000000000000,5.50000000000000,4,5,6,5.50000000000000,6.50000000000000,7,2.33333333333333,3.33333333333333,4.33333333333333,5.33333333333333,3.66666666666667,4.66666666666667,5.66666666666667,5,6,6.33333333333333,2.25000000000000,3.25000000000000,4.25000000000000,5.25000000000000,3.50000000000000,4.50000000000000,5.50000000000000,4.75000000000000,5.75000000000000,6,2.20000000000000,3.20000000000000,4.20000000000000,5.20000000000000,3.40000000000000,4.40000000000000,5.40000000000000,4.60000000000000,5.60000000000000,5.80000000000000,2.16666666666667,3.16666666666667,4.16666666666667,5.16666666666667,3.33333333333333,4.33333333333333,5.33333333333333,4.50000000000000,5.50000000000000,5.66666666666667,2.14285714285714,3.14285714285714,4.14285714285714,5.14285714285714,3.28571428571429,4.28571428571429,5.28571428571429,4.42857142857143,5.42857142857143,5.57142857142857,2.12500000000000,3.12500000000000,4.12500000000000,5.12500000000000,3.25000000000000,4.25000000000000,5.25000000000000,4.37500000000000,5.37500000000000,5.50000000000000,2.11111111111111,3.11111111111111,4.11111111111111,5.11111111111111,3.22222222222222,4.22222222222222,5.22222222222222,4.33333333333333,5.33333333333333,5.44444444444445,2.66666666666667,3.66666666666667,4.66666666666667,5.66666666666667,4.33333333333333,5.33333333333333,6.33333333333333,6,7,7.66666666666667,2.50000000000000,3.50000000000000,4.50000000000000,5.50000000000000,4,5,6,5.50000000000000,6.50000000000000,7,2.33333333333333,3.33333333333333,4.33333333333333,5.33333333333333,3.66666666666667,4.66666666666667,5.66666666666667,5,6,6.33333333333333,2.25000000000000,3.25000000000000,4.25000000000000,5.25000000000000,3.50000000000000,4.50000000000000,5.50000000000000,4.75000000000000,5.75000000000000,6,2.20000000000000,3.20000000000000,4.20000000000000,5.20000000000000,3.40000000000000,4.40000000000000,5.40000000000000,4.60000000000000,5.60000000000000,5.80000000000000,2.16666666666667,3.16666666666667,4.16666666666667,5.16666666666667,3.33333333333333,4.33333333333333,5.33333333333333,4.50000000000000,5.50000000000000,5.66666666666667,2.14285714285714,3.14285714285714,4.14285714285714,5.14285714285714,3.28571428571429,4.28571428571429,5.28571428571429,4.42857142857143,5.42857142857143,5.57142857142857,2.12500000000000,3.12500000000000,4.12500000000000,5.12500000000000,3.25000000000000,4.25000000000000,5.25000000000000,4.37500000000000,5.37500000000000,5.50000000000000,2.11111111111111,3.11111111111111,4.11111111111111,5.11111111111111,3.22222222222222,4.22222222222222,5.22222222222222,4.33333333333333,5.33333333333333,5.44444444444445,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,2,3,4,5,3,4,5,4,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5,2,2,2,2,3,3,3,4,4,5
];

// r list
r = [
    0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.600000000000000,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.666666666666667,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.750000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.800000000000000,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.833333333333333,0.857142857142857,0.857142857142858,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.857142857142857,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.875000000000000,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.888888888888889,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000,0.900000000000000
];

// eu list
eu = [
    2,2.60000000000000,3.20000000000000,3.80000000000000,3,3.60000000000000,4.20000000000000,4.00000000000000,4.60000000000000,5,2,2.66666666666667,3.33333333333333,4,3,3.66666666666667,4.33333333333333,4,4.66666666666667,5.00000000000000,2,2.75000000000000,3.50000000000000,4.25000000000000,3.00000000000000,3.75000000000000,4.50000000000000,4,4.75000000000000,5.00000000000000,2,2.80000000000000,3.60000000000000,4.40000000000000,3,3.80000000000000,4.60000000000000,4,4.80000000000000,5.00000000000000,2,2.83333333333333,3.66666666666667,4.50000000000000,3,3.83333333333333,4.66666666666667,4.00000000000000,4.83333333333333,5,2,2.85714285714286,3.71428571428571,4.57142857142857,3.00000000000000,3.85714285714286,4.71428571428571,4.00000000000000,4.85714285714286,5.00000000000000,2,2.87500000000000,3.75000000000000,4.62500000000000,3,3.87500000000000,4.75000000000000,4.00000000000000,4.87500000000000,5,2,2.88888888888889,3.77777777777778,4.66666666666667,3,3.88888888888889,4.77777777777778,4,4.88888888888889,5,2,2.90000000000000,3.80000000000000,4.70000000000000,3,3.90000000000000,4.80000000000000,4,4.90000000000000,5
];



/**************/
/** Constants */
/**************/
// const nrating = 5;
// const nchoices = 5;
// const fixation_duration = 500;
// const nprac = 3;
const nImageInst = 2;
const debugModeCaliDot = 1;
const realCaliDot = 5;

// const feedback_duration = 3000;
const maxTimeChoice = 3000;
const feedbackDuration = 2000;

var subject_id = jsPsych.randomization.randomID(7);

/** load instructions images */
var instructions_images = [];
for (var i = 1; i < 22; i++) {
    instructions_images.push('img/instructions/Slide' + i + '.png');
}

/** control questions images */
var control_images = [];
for (var i = 1; i < 2; i++){
    control_images.push('img/control/control_img_' + i + '.png');
}

/** load all the images, and remember to preload before starting the egitxperiment */
var instruct_img = [];
for (var i = 0; i < nImageInst; i++) {
    instruct_img.push('img/instruct' + i + '.png');
}






function makeSurveyCode(status) {
    uploadSubjectStatus(status);
    var prefix = { 'success': 'cg', 'failed': 'sb' }[status]
    return `${prefix}${subject_id}`;
}

function uploadSubjectStatus(status) {
    $.ajax({
        type: "POST",
        url: "/subject-status",
        data: JSON.stringify({ subject_id, status }),
        contentType: "application/json"
    });
}


//preassign a probability string

/***********************/
/******** Trials *******/
/***********************/


var start_exp_survey_trial = {
    type: 'survey-text',
    questions: [
        { prompt: "What's your worker ID?", rows: 2, columns: 50, required: true },
        { prompt: "What's your age?", rows: 1, columns: 50, required: true },
        { prompt: "What's your gender? (Female/Male/Other/Prefer not to say)", rows: 1, columns: 50, require: true },
    ],
    preamble: `<div>Thanks for choosing our experiment! Please answer the following questions to begin today's study. </div>`,
};



/** full screen */
var fullscreenEnter = {
    type: 'fullscreen',
    message: `<div> Before we begin, please close any unnecessary programs or applications on your computer. <br/>
    This will help the study run more smoothly.    <br/>
    Also, please close any browser tabs that could produce popups or alerts that would interfere with the study.    <br/>
    Finally, once the study has started, <b>DO NOT EXIT</b> fullscreen mode or you will terminate the study and not receive any payment. <br/>   
    <br><br/>
    The study will switch to full screen mode when you press the button below.  <br/>
    When you are ready to begin, press the button.</div>`,
    fullscreen_mode: true,
    on_finish: function () {
        document.body.style.cursor = 'none'
    }
};


var eyeTrackingInstruction1 = {
    type: 'html-keyboard-response',
    stimulus: `<div> <font size=120%; font color = 'green';>Calibration & Validation </font><br/>
                                             <br><br/>
                Before we begin with the study, we need to turn on and adjust your webcam for eye-tracking.   <br/>
                
                There are two parts to this process. The first part is calibration and the second part is validation.<br/>
                <br><br/>
                During calibration, you will see a series of dots like this <span id="calibration_dot_instruction"></span> appear on the screen, each for 3 seconds.<br/>
                Your task is simply to look directly at each dot until it disappears.<br/>
                Then, quickly move your eyes to the next dot and repeat.<br/>
                <br><br/>
                Validation is basically the same as calibration. You simply need to look at each dot until it turns <b><font color='green'>green</font></b> and disappears.<br/>
                During validation, the dot may turn <b><font color='yellow'>yellow</font></b>, indicating that you don’t seem to be staring directly at it.  <br/>
                Try to keep this from happening! 
                <br><br/>
                When you are ready, press the SPACE BAR to continue. </div>`,
    post_trial_gap: 500,
    choices: ['spacebar'],

}

var eyeTrackingInstruction2 = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Calibration & Validation </font><br/>
                                                                          <br><br/>
      When the calibration begins, you will see a video feed with your face at the top left corner of your screen like this:  <br/>
        <br><br/>
         <img height="220px" width="270px" src="${instruct_img[0]}"><br/>
       <br><br/>
                         Try to keep your entire face within the box. When your face is in a good position, the box will turn <b><font color='green'>green</font></b>. <br/>
                         <font size=5px; font color = 'red';> <b>NOTE</b>: the video feed only appears during calibration.</font><br/>
                         <br><br/>
                         <font size=5px; >When you are ready, press the  <b>SPACE BAR</b> to continue.</font>
              
                         </div>`,
    post_trial_gap: 500,
    choices: ['spacebar'],

}

var eyeTrackingNote = {

    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';> Calibration & Validation</font><br/>
                                                                          <br><br/>
             <font size = 5px font color = "yellow">There are several <b>IMPORTANT</b> tips that are useful for passing the calibration task:<br/></font>
             <img height="200px" width="1000px" src="${instruct_img[1]}"><br/>
             <br><br/>
             <div style="text-align-last:left">
            In addition to the tips in the figure: <br/>
            (1). Use your eyes to look around the screen and try to avoid moving your head. <br/>
            (2). Try to keep lights in front of you rather than behind you so that the webcam can clearly see your face. Avoid sitting with a window behind you. <br/>
            (3). After you have made these adjustments, check again that your face fits nicely within the box on the video feed and that the box is green. <br/></div>
             <br><br/>
             <font size=5px; font color = 'red';> <b>NOTE</b>:  <br/>
            If you are back on this page, it means the calibration and validation did not work as well as we would like.  <br/>
            Please read the tips above again, make any adjustments, and try again.  <br/>
            There are only <b>THREE</b> chances to get this right.  <br/>
            Otherwise, the study cannot proceed and you will only receive 50 cents for participating.  </font><br/>
            <br><br/>
             <font size=5px; >When you are ready, press the <b>SPACE BAR</b> to bring up the video feed and make these adjustments. </font></div>`,
    post_trial_gap: 500,
    choices: ['spacebar'],

}


//eye tracking parameters
var calibrationMax = 3;
var calibrationAttempt = 0;
var success = false; //update if there's a success
var eye_calibration_state = {
    doInit: true
};

var init_flag = function () {
    if (calibrationAttempt == 0) {
        return true;
    } else return false;
};

var validationTols = [130, 165, 200];
var validationAccuracys = [0.8, 0.7, 0.6];

/** first we need a calibration and validation step before entering into the main choice task */
var inital_eye_calibration = {
    timeline: [
        eyeTrackingNote,
        {
            type: "eye-tracking",
            doInit: () => init_flag(),
            doCalibration: true,
            doValidation: true,
            calibrationDots: realCaliDot, // change to 12
            calibrationDuration: 3, //change to 5
            doValidation: true,
            validationDots: realCaliDot, //change to 12
            validationDuration: 2,
            validationTol: validationTols[calibrationAttempt],
            // showPoint: true,
            on_finish: function (data) {
                console.log(JSON.parse(data.validationPoints)[0].hitRatio == null);
                if (JSON.parse(data.validationPoints)[0].hitRatio == null) {
                    jsPsych.endExperiment('The study has ended. You may have exited full screen mode, or your browser may not be compatible with our study.');
                } else {
                    calibrationAttempt++;
                    if (data.accuracy >= validationAccuracys[calibrationAttempt - 1]) success = true;
                    if (!success && calibrationAttempt == calibrationMax) {
                        survey_code = makeSurveyCode('failed');
                        closeFullscreen();
                        jsPsych.endExperiment(`Sorry, unfortunately the webcam calibration has failed.  We can't proceed with the study.  </br> You will receive 50 cents for making it this far. Your survey code is: ${survey_code}. Thank you for signing up!`);
                    }
                }
            }
        }
    ],
    loop_function: () => (calibrationAttempt < calibrationMax) && (!success),
};

var experimentOverview = {
    type: 'html-keyboard-response',
    on_start: function () {
        webgazer.pause(),
            webgazer.clearData()
    },
    stimulus: `<div> <font size=120%; font color = 'green';>Experiment Overview </font><br/>
                                                     <br><br/>
                         Success! The calibration and validation were successful. <br/>
                          Now, we will begin with the study.<br/>
                                                        <br><br/>
                          When you are ready, press the  <b>SPACE BAR</b> to continue. </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
}








// recalibration
var recalibrationInstruction = {
    type: "html-keyboard-response",
    on_start: function () {
        webgazer.resume(),
            document.body.style.cursor = 'none'
    },
    stimulus: `<div>We need to redo the calibration and validation before you begin with the choice task. </br>
    As before, make sure you look at each dot until it disappears and make sure you don’t move your head.</br>
    <br></br>
    Please press <b>SPACE BAR</b> when you are ready to begin.</div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
};

var recalibration = {
    timeline: [
        recalibrationInstruction,
        {
            type: "eye-tracking",
            doCalibration: true,
            calibrationDots: realCaliDot, // change to 12
            calibrationDuration: 3,
            doValidation: true,
            validationDots: realCaliDot,// change to 12
            validationDuration: 2,
            validationTol: 200
        }
    ],
};




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var binary_choice_states = {
    //set the default 
    doCalibration: false,
    calibrationDots: 10,
    dovalidation: true,
    validationDots: 2
};

var validate_counter = 0;
validationAccuracy = 0.6;

function binary_choice_state_logger(finish_data_accuracy) {
    // ...TODO
    if (finish_data_accuracy >= validationAccuracy) {
        binary_choice_states = {
            doCalibration: false,
            dovalidation: true,
            validationDots: 2
        },
            validate_counter = 0;
    }
    if (finish_data_accuracy < validationAccuracy & validate_counter <= 2) {
        binary_choice_states = {
            doCalibration: false,
            dovalidation: true,
            validationDots: 2
        },
            validate_counter += 1;
    }
    if (validate_counter == 3) {
        binary_choice_states = {
            //set the default 
            doCalibration: true,
            calibrationDots: 12, ///change to 12
            dovalidation: false,
        }
        validate_counter = 0;
    }
};

var binary_state_updater = function () {
    return binary_choice_states;
};



/** choices */
var choice_count = 0;
var belief_count = 0;


var fixation = {
    type: "eye-tracking",
    doInit: false,
    // doCalibration: () => binary_state_updater().doCalibration,
    doCalibration: false,
    //calibrationDots: () => binary_state_updater().calibrationDots,
    // doValidation: () => binary_state_updater().dovalidation,
    doValidation: true,
    // validationDots: () => binary_state_updater().validationDots,
    validationDots: 3,
    validationTol: 130,
    validationDuration: 2,
    //  calibrationDuration: 5,
    on_finish: (data) => binary_choice_state_logger(data.accuracy)
};

var fixation1 = {
    type: 'html-keyboard-response',
    on_start: () => document.body.style.cursor = 'none',
    stimulus: '<span id="calibration_dot_instruction"></span>',
    choices: jsPsych.NO_KEYS,
    trial_duration: getRandomFixDur(0.5,1.5)*1000
};


var fixation2 = {
    type: 'html-keyboard-response',
    on_start: () => document.body.style.cursor = 'none',
    stimulus: '<span id="calibration_dot_instruction"></span>',
    choices: jsPsych.NO_KEYS,
    trial_duration: getRandomFixDur(0.5,1.0)*1000
};




var if_node1 = {
    timeline: [fixation],
    conditional_function: function () {
        if (Math.round(choice_count % 5) === 0) {
            return true;
        } else {
            return false;
        }
    }
}

var if_node2 = {
    timeline: [fixation1],
    conditional_function: function () {
        if (Math.round(choice_count % 5) !== 0) {
            return true;
        } else {
            return false;
        }
    }
}


// reshape the list of payoffs to 8 columns of payoffs
function getGameMatrices(payoff){
    var reshapedPayoff = [];
    var nGames = payoff.length/8;
    while(payoff.length){
        reshapedPayoff.push(payoff.splice(0,nGames))
    }
    return reshapedPayoff;
}

var GameMatrices = getGameMatrices(payoff);

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}

// randomize order of games
var n = GameMatrices[0].length;
function getRandomGameOrder(n){
    var nList = [];
    for (var i = 0; i < n; i++) {
        nList.push(i);
    }
    var randInd = jsPsych.randomization.shuffle(nList);
    return randInd;
}

var randInd = getRandomGameOrder(n);

// shuffle game matrices based on random order
function getShuffledGameMatrices(GameMatrices,randInd){
    var GameMatricesShuffled = [];
    for (var i = 0; i < 8; i++){
        for (var j = 0; j < randInd.length; j++){
            GameMatricesShuffled.push(GameMatrices[i][randInd[j]])
        }
    }
    var GameMatricesShuffled = listToMatrix(GameMatricesShuffled,n);
    return GameMatricesShuffled;
}

var GameMatricesShuffledChoice = getShuffledGameMatrices(GameMatrices,randInd);
var GameMatricesShuffledBelief = getShuffledGameMatrices(GameMatrices,randInd);

// randomize display of eeach action
function getRandDisplay(n){
    var multiplier = Math.ceil(n/4);
    var displayOrder = Array(multiplier).fill([0,1,2,3]).flat();
    var randDisplayOrder = jsPsych.randomization.shuffle(displayOrder);
    var selectedrandDisplayOrder = randDisplayOrder.slice(0, n);

    return selectedrandDisplayOrder
}

var randDisplayOrder = getRandDisplay(n);

// get game matrix for a specific trial
function getGameMatrixTrial(choice_count, reshapedPayoff, randDisplayOrder){
    // 1 2 3 4 5 6 7 8 9
    // [aVec, aVec, cVec, bVec(b), bVec(b), cVec, dVec(d), dVec(d)]
    // var reshapedPayoffFinal = [];
    // var aTLSelf = [];
    // var aTLOther = [];
    // var cTRSelf = [];
    // var bTROther = [];
    // var bBLSelf = []; 
    // var cBLOther = [];
    // var dBRSelf = [];
    // var dBROther = [];
    // var GameMatrices = [];
    //     aTLSelf.push(reshapedPayoff[0][i]);
    //     aTLOther.push(reshapedPayoff[1][i]);
    //     cTRSelf.push(reshapedPayoff[2][i]);
    //     bTLOther.push(reshapedPayoff[3][i]);
    //     bBLSelf.push(reshapedPayoff[4][i]);
    //     cBLOther.push(reshapedPayoff[5][i]);
    //     dBRSelf.push(reshapedPayoff[6][i]);
    //     dBROther.push(reshapedPayoff[7][i]);
    var gameMatrix = [];
    var curPay = [];
    switch(randDisplayOrder[choice_count]) {
        case 0:
            var orderPayoffs = [1, 2, 3, 4, 5, 6, 7, 8]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(reshapedPayoff[orderPayoffs[i]-1][choice_count].toFixed(2))
            }
            break;
        case 1:
            var orderPayoffs = [5, 6, 7, 8, 1, 2, 3, 4]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(reshapedPayoff[orderPayoffs[i]-1][choice_count].toFixed(2))
            }
            break;
        case 2:
            var orderPayoffs = [7, 8, 5, 6, 3, 4, 1, 2]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(reshapedPayoff[orderPayoffs[i]-1][choice_count].toFixed(2))
            }
            break;
        case 3:
            var orderPayoffs = [3, 4, 1, 2, 7, 8, 5, 6]
            for (var i = 0; i < 8; i++){
                gameMatrix.push(reshapedPayoff[orderPayoffs[i]-1][choice_count].toFixed(2))
            }
            break;
      }

    return gameMatrix;
}

// number of correct answers for control questions - choice task
function getAnswersChoiceQuiz(choice_quiz_data){
    var nCorrect = 0;
    var responses = choice_quiz_data[0].responses.slice(1,choice_quiz_data[0].responses.length-1).split(',');
    var correctAnswers = ["6.5","6.5","4","1","3","TRUE","TRUE"];
    for(var i = 0; i < responses.length; i++){
        if(responses[i].includes(correctAnswers[i])){
            nCorrect = nCorrect + 1;
        } else {
            nCorrect = nCorrect + 0;
        }
    }
    return nCorrect;
}

// number of correct answers for control questions - belief task
function getAnswersBeliefQuiz(belief_quiz_data){
    var nCorrect = 0;
    var responses = belief_quiz_data[0].responses.slice(1,belief_quiz_data[0].responses.length-1).split(',');
    var correctAnswers = ["$0","$3","FALSE"];
    for(var i = 0; i < responses.length; i++){
        if(responses[i].includes(correctAnswers[i])){
            nCorrect = nCorrect + 1;
        } else {
            nCorrect = nCorrect + 0;
        }
    }
    return nCorrect;
}


function getRandomFixDur(min,max) {
    return Math.random() * max + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getImgHTML(instructions){
    var imgHTMLInstructions = [];
    var startString = [`<img class = 'img_instructions' src="`];
    var endString = [`"></img>`];
    var elements = [];
    for (var i = 1; i < instructions.length; i++){
        elements[i] = startString.concat(instructions[i],endString);
        imgHTMLInstructions.push(elements[i].join(' '));
    }
    return imgHTMLInstructions;
}

imgHTMLInstructions = getImgHTML(instructions_images);

// display instructions choice task
var choiceInstructions = {
    type: 'instructions',
    pages: imgHTMLInstructions.slice(0,8),
    show_clickable_nav: true,
    on_finish: function () {
        document.body.style.cursor = 'pointer'
    }
}

// quiz about the choice task
var question_choice_1_options = ["6.5",
                        "1",
                        "3",
                        "4"];
var question_choice_2_options = ["6.5",
                        "1",
                        "3",
                        "4"];
var question_choice_3_options = ["6.5",
                        "1",
                        "3",
                        "4"];
var question_choice_4_options = ["6.5",
                        "1",
                        "3",
                        "4"];
var question_choice_5_options = ["6.5",
                        "1",
                        "3",
                        "4"];
var question_choice_6_options = ["TRUE",
                        "FALSE"];
var question_choice_7_options = ["TRUE",
                        "FALSE"];

// still to finish
var choice_quiz_data = [];
var controlQuestionsChoice = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: If the COLUMN CHOOSER selects the column i and you select the row I, how many dollars will you earn?", name: 'Q1', options: question_choice_1_options, required: true },
        { prompt: "Question 2: If the COLUMN CHOOSER selects the column i and you select the row I, how many dollars will your counterpart earn?", name: 'Q2', options: question_choice_2_options, required: true },
        { prompt: "Question 3: If the COLUMN CHOOSER selects the column i and you select the row II, how many dollars will you earn?", name: 'Q3', options: question_choice_3_options, required: true },
        { prompt: "Question 4: If the COLUMN CHOOSER selects the column i and you select the row II, how many dollars will your counterpart earn?", name: 'Q4', options: question_choice_4_options, required: true },
        { prompt: "Question 5: If the COLUMN CHOOSER selects the column ii and you select the row II, how many dollars will you earn?", name: 'Q5', options: question_choice_5_options, required: true },
        { prompt: "Question 6: The participant with whom you are paired will be determined randomly.", name: 'Q6', options: question_choice_6_options, required: true },
        { prompt: "Question 7: When you make your choice, you will be able to see what your counterpart has chosen.", name: 'Q7', options: question_choice_7_options, required: true }
    ],
    preamble: `<div> 
        <br><br/>
        Thanks for choosing our experiment! Please answer the following questions to begin today's study.</div>
        <br><br/>
        <div>The following questionnaire is meant to test your understanding of the instructions.</div>
        <br><br/>
        <div>If you answer less than 4 of the 6 questions correct, you will not be able to participate in the study and will receive a payment of $0.50.</div>
        <br><br/>
        <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <br><br/>`,
    on_finish: function (data) {
        choice_quiz_data.push(data);
        document.body.style.cursor = 'none';
        nCorrectChoice = getAnswersChoiceQuiz(choice_quiz_data);
        if(nCorrectChoice<4){
            survey_code = makeSurveyCode('failed');
            closeFullscreen();
            jsPsych.endExperiment(`We are sorry! Unfortunately, you have answered only ${nCorrectChoice} questions correctly.  </br> You will receive 50 cents for making it this far. Your survey code is: ${survey_code}. Thank you for signing up!`);
        }
    }
};





// choice overview
var choiceOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Part 1 Task </font><br/>
                                        <br><br/>
            Each round, you will see a table on the screen. <br/>      
            To select the top row of the table, press the <b><font color='green'>UP</font></b> key. <br/>
            To select the bottom row of the table, press  the <b><font color='green'>DOWN</font></b> key. <br/>
            After each choice, look at the red circle at the center of the screen.  <br/>
            <br><br/>
            When you are ready, press the  <b>SPACE BAR</b> to continue.  </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500
}


// trial - coordination game
var choice_data = [];
var game_choice = {
    timeline: [
        if_node1,
        if_node2,
        // fixation1,
        {
            type: "binary-choice-game",
            stimulus: () => getGameMatrixTrial(choice_count, GameMatricesShuffledChoice,randDisplayOrder), // list of 8 payoffs
            choices: ["uparrow", "downarrow"],
            stimulus_order: randInd[belief_count],
            stimulus_display: randDisplayOrder[belief_count],
            realOrPrac: false,
            // stimulus_duration: 3000,
            on_finish: function (data) {
                choice_data.push(data);
                choice_count++;
            }
        }      
    ],
    loop_function: () => choice_count < 10, // change this to 90 after uploading
};

// break
var breaktime = {
    type: "html-keyboard-response",
    stimulus: `<div>You are about halfway done! Now you can take a short break if you want. You can move your head from now on.</br>
                <br></br>
                When you are ready to continue the study, press the <b>SPACE BAR</b>.</div>`,
    choices: ['spacebar'],
    on_start: function () {
        webgazer.pause(),
            webgazer.clearData()
    },
    post_trial_gap: 500,
};


// display instructions belief task
var beliefInstructions = {
    type: 'instructions',
    pages: imgHTMLInstructions.slice(8,15),
    show_clickable_nav: true,
    on_finish: function () {
        document.body.style.cursor = 'pointer'
    }
}

// quiz about the belief task
var question_belief_1_options = ["$6",
                        "$3",
                        "$1.5",
                        "$0"];
var question_belief_2_options = ["$6",
                        "$3",
                        "$1.5",
                        "$0"];
var question_belief_3_options = ["TRUE",
                         "FALSE"];

// still to finish
var belief_quiz_data = [];
var controlQuestionsBelief = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: Suppose you estimate that 70% of other participants select action i in the table above. What will your earnings be if this decision is selected for payment?", name: 'Q1', options: question_belief_1_options, required: true },
        { prompt: "Question 2: Suppose you estimate that 35% of other participants select action i in the table above. What will your earnings be if this decision is selected for payment?", name: 'Q2', options: question_belief_2_options, required: true },
        { prompt: "Question 3: You will receive your payment for this part of the experiment immediately.", name: 'Q3', options: question_belief_3_options, required: true }
    ],
    preamble: `<div> 
        <br><br/>
        Please answer the following questions to begin today's study.</div>
        <br><br/>
        <div>The following questionnaire is meant to test your understanding of the instructions.</div>
        <br><br/>
        <div>If you answer less than 2 of the 3 questions correct, you will not be able to participate in the study and will receive a payment of $3.</div>
        <br><br/>
        <div>Consider the following table.</div>
    </div>
    <br><br/>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <br><br/>
    <div>Suppose that 30% of the participants in the study selected action i in the table above.</div>
    <br><br/>
    <div>Recall that the rule used to calculate your earnings for this part of the study is the following.</div>
    <div>
            <div>If your estimate is within 3% of the correct answer you earn $6</div>
            <div>If your estimate is within 5% of the correct answer you earn $3</div>
            <div>If your estimate is within 10% of the correct answer you earn $1.5</div>
            <div>Otherwise you earn $0</div>
    </div>
    <br><br/>`,
    on_finish: function (data) {
        belief_quiz_data.push(data);
        document.body.style.cursor = 'none';
        nCorrectBelief = getAnswersBeliefQuiz(belief_quiz_data);
        if(nCorrectBelief<2){
            survey_code = makeSurveyCode('failed');
            closeFullscreen();
            jsPsych.endExperiment(`We are sorry! Unfortunately, you have answered only ${nCorrectBelief} questions correctly.  </br> You will receive  3 dollars for making it this far. Your survey code is: ${survey_code}. Thank you for signing up!`);
        }
    }
};



// belief overview
var beliefOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Part 2 Task </font><br/>
                                        <br><br/>
            Each round, you will see a table on the screen and a slider bar. <br/>  
            You can make your response by clicking on the slider bar. <br/>
            When you are sure of your response, you can click the <b><font color='green'>CONTINUE</font></b> button. <br/>
            After each choice, look at the red dot at the center of the screen.  <br/>
            <br><br/>
            When you are ready, press the  <b>SPACE BAR</b> to continue.  </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}


// belief elicitation
var belief_data = [];
var game_belief = {
    timeline: [
        fixation2,
        {
            type: "table-slider-response",
            stimulus: () => getGameMatrixTrial(belief_count, GameMatricesShuffledBelief,randDisplayOrder), // list of 8 payoffs
            labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%','100%'],
            stimulus_order: randInd[belief_count],
            stimulus_display: randDisplayOrder[belief_count],
            min: 0,
            max: 100,
            prompt: 'What percentage of participants choose action i ?',
            require_movement: true,
            start: () => getRandomInt(0, 100),
            response_ends_trial: true,
            on_finish: function (data) {
                belief_data.push(data);
                belief_count++;
            }
        }      
    ],
    loop_function: () => belief_count < 10, // change this to length of array: 105 
};


// get risk task payments
function getPayRiskTask(risk_data){
    // concatenae all options into one array
    // var responselength = risk_data[0].responses.length;
    var responses = risk_data[0].responses;
    // var answers = [];
    var options = question_risk_1_options.concat(question_risk_2_options,
                                                question_risk_3_options,
                                                question_risk_4_options,
                                                question_risk_5_options,
                                                question_risk_6_options,
                                                question_risk_7_options,
                                                question_risk_8_options,
                                                question_risk_9_options,
                                                question_risk_10_options);      
    // select random choice to be paid
    var c = getRandomInt(1,10);
    var choiceOptions = [options[(c-1) + c], options[c + c]];
    var answersChoice = [];
    for(var i = 0; i < 2; i++){
        if(responses.includes(choiceOptions[i])){
            answersChoice.push(i+1);
        }
    }
    // select random outcome to be paid
    var p = getRandomInt(1,10);
    var amountPay = [];
    if(answersChoice[0]===1){
        // var posPay = [2, 1.6];
        if(p<=c){
            amountPay = 2;
        } else {
            amountPay = 1.6;
        }
    } else {
        // var posPay = [3.85, 0.10];
        if(p<=c){
            amountPay = 3.85;
        } else {
            amountPay = 0.10;
        }
    }
    return amountPay;
}

// display instructions risk task
var riskInstructions = {
    type: 'instructions',
    pages: imgHTMLInstructions.slice(15,20),
    show_clickable_nav: true,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}

// risk task overview
var riskOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div> <br><br/>
            In this experiment you will be presented with a series of lottery choices. </br>
            <br><br/>
            Your job is to indicate which option you would prefer for each of the ten paired lottery choices.</div>
            <br><br/>
            At the end of the experiment, one of your choice will be randomly selected and the your payment will be determined. </br>
            <br><br/>
            When you are ready, press the  <b>SPACE BAR</b> to continue.  </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}

var question_risk_1_options = ["10% chance of $2.00 and 90% chance of $1.60",
                          "10% chance of $3.85 and 90% chance of $0.10"];
var question_risk_2_options = ["20% chance of $2.00 and 80% chance of $1.60",
                          "20% chance of $3.85 and 80% chance of $0.10"];
var question_risk_3_options = ["30% chance of $2.00 and 70% chance of $1.60",
                          "30% chance of $3.85 and 70% chance of $0.10"];
var question_risk_4_options = ["40% chance of $2.00 and 60% chance of $1.60",
                          "40% chance of $3.85 and 60% chance of $0.10"];
var question_risk_5_options = ["50% chance of $2.00 and 50% chance of $1.60",
                          "50% chance of $3.85 and 50% chance of $0.10"];
var question_risk_6_options = ["60% chance of $2.00 and 40% chance of $1.60",
                          "60% chance of $3.85 and 40% chance of $0.10"];
var question_risk_7_options = ["70% chance of $2.00 and 30% chance of $1.60",
                          "70% chance of $3.85 and 30% chance of $0.10"];
var question_risk_8_options = ["80% chance of $2.00 and 20% chance of $1.60",
                          "80% chance of $3.85 and 20% chance of $0.10"];
var question_risk_9_options = ["90% chance of $2.00 and 10% chance of $1.60",
                          "90% chance of $3.85 and 10% chance of $0.10"];
var question_risk_10_options = ["100% chance of $2.00 and 0% chance of $1.60",
                          "100% chance of $3.85 and 0% chance of $0.10"];

// risk-aversion survey
var risk_data = [];
var risk_pay = []
var riskSurvey = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Q1: Please indicate your preference between each of the pairs of gambles.", name: 'Q1', options: question_risk_1_options, required: true },
        { prompt: "Q2: Please indicate your preference between each of the pairs of gambles.", name: 'Q2', options: question_risk_2_options, required: true },
        { prompt: "Q3: Please indicate your preference between each of the pairs of gambles.", name: 'Q3', options: question_risk_3_options, required: true },
        { prompt: "Q4: Please indicate your preference between each of the pairs of gambles.", name: 'Q4', options: question_risk_4_options, required: true },
        { prompt: "Q5: Please indicate your preference between each of the pairs of gambles.", name: 'Q5', options: question_risk_5_options, required: true },
        { prompt: "Q6: Please indicate your preference between each of the pairs of gambles.", name: 'Q6', options: question_risk_6_options, required: true },
        { prompt: "Q7: Please indicate your preference between each of the pairs of gambles.", name: 'Q7', options: question_risk_7_options, required: true },
        { prompt: "Q8: Please indicate your preference between each of the pairs of gambles.", name: 'Q8', options: question_risk_8_options, required: true },
        { prompt: "Q9: Please indicate your preference between each of the pairs of gambles.", name: 'Q9', options: question_risk_9_options, required: true },
        { prompt: "Q10: Please indicate your preference between each of the pairs of gambles.", name: 'Q10', options: question_risk_10_options, required: true }
    ],
    on_finish: function (data) {
        risk_data.push(data);
        risk_pay = getPayRiskTask(risk_data);
    }
};









// var recalibrationInstruction2 = {
//     type: "html-keyboard-response",
//     on_start: () => webgazer.resume(),
//     stimulus: `<div>We need to redo the calibration and validation before you return to the study.  </br>
//   As before, make sure you stare at each dot until it disappears and make sure you don’t move your head.</br>
//    <br></br>
//    Press the <b>SPACE BAR</b> when you are ready to begin.</div>`,
//     choices: ['spacebar'],
//     post_trial_gap: 500,
// };



// var recalibration2 = {
//     timeline: [
//         recalibrationInstruction2,
//         {
//             type: "eye-tracking",
//             doCalibration: true,
//             calibrationDots: realCaliDot, ///change to 12
//             calibrationDuration: 3,
//             doValidation: true,
//             validationDots: 8, ///change to 6
//             validationDuration: 2,
//         }
//     ],
// };






// var select_trial = {
//   type: "",
//   charity: [],
//   donation: 5
// }
// var randomselector = function () {
//     var trials = jsPsych.data.get().filterCustom(function (trial) {
//         return trial.rating > 0 || (trial.trial_type == "binary-choice" && trial.realtrial)
//     })
//     selectedtrialindex = getRandomInt(0, trials.count() - 1);
//     selectedtrial = JSON.parse(trials.json())[selectedtrialindex];

//     select_trial.type = selectedtrial.trial_type;
//     //console.log(JSON.parse(trials.json())[selectedtrialindex]);

//     if (select_trial.type === "image-slider-response") {
//         select_trial.type = "Willingness to Donate"
//         select_trial.donation = selectedtrial.rating;
//         select_trial.charity = selectedtrial.stimulus;
//     } else {
//         select_trial.type = "Donating Preference"
//         select_trial.donation = 5;
//         if (selectedtrial.key_press == 70) {
//             select_trial.charity = selectedtrial.stimulus[0];
//         } else {
//             select_trial.charity = selectedtrial.stimulus[1];
//         }
//     }
//     html = ` <div> One trial from the <b><font color='red'>${select_trial.type}</font></b> task has been selected for donation! </br>
//     The charity you donate to is: </br>
//     <br></br>
//     <img height="300px" width="500px" src="${select_trial.charity}"/> </br>
//      <br></br>
//      We will donate  <b><font color='red'>$${select_trial.donation}</font></b> to this charity on your behalf.</br>
//      <br></br>
//      Thank you for participating! The webcam will turn off when you close the browser tab.</br>
//      Your quiz score is ${(quiz_correct_count / 5) * 100}, we will add ${quiz_correct_count * 10} cents to your final payment.</br>
//      Your survey code is: ${makeSurveyCode('success')}
//      </div>`;
//     return html
// }


var successExp = false
var success_guard = {
    type: 'call-function',
    func: () => { successExp = true }
}



// // `<p>You have completed the task. The webcam will be closed when you close our browser.</p>`
//  var end = {
//    on_start: () => closeFullscreen(),
//   type: "html-keyboard-response",
//   stimulus: `<div>Thank you for your participation! You can close the browser to end the experiment now. </br>
//                   The webcam will turn off when you close the browser. </br>
//                   Your survey code is: ${makeSurveyCode('success')}. </br>
//                   We will send you $7 as your participant fee soon! </br> </div>`,

//  };

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}


var on_finish_callback = function () {
    // jsPsych.data.displayData();
    jsPsych.data.addProperties({
        browser_name: bowser.name,
        browser_type: bowser.version,
        subject: subject_id,
        subject: subject_id,
        interaction: jsPsych.data.getInteractionData().json(),
        //quiz: quiz_correct_count,
        windowWidth: screen.width,
        windowHight: screen.height
    });
    var data = JSON.stringify(jsPsych.data.get().values());
    $.ajax({
        type: "POST",
        url: "/data",
        data: data,
        contentType: "application/json"
    })
        .done(function () {
            // alert("your data has been saved!")
        })
        .fail(function () {
            //alert("problem occured while writing data to box.");
        })
}

var trialcounter;






function startExperiment() {
    jsPsych.init({
        timeline: [
            start_exp_survey_trial,
            fullscreenEnter,
            eyeTrackingInstruction1, eyeTrackingInstruction2, inital_eye_calibration,
            experimentOverview,
            choiceInstructions,
            controlQuestionsChoice,
            recalibration,
            choiceOverview,
            game_choice,
            breaktime,
            beliefInstructions,
            controlQuestionsBelief,
            beliefOverview,
            game_belief,
            riskInstructions,
            riskOverview,
            riskSurvey,
            success_guard
        ],
        on_trial_finish: function () {
            trialcounter = jsPsych.data.get().count();
            if (successExp) {
                closeFullscreen()
                document.body.style.cursor = 'pointer'
                jsPsych.endExperiment(`<div>
                Thank you for your participation! You can close the browser to end the experiment now. </br>
                The webcam will turn off when you close the browser. </br>
                Your survey code is: ${makeSurveyCode('success')}. </br>
                For Part 3 your earnings are $ ${risk_pay} </br> 
                We will send you $ ${risk_pay} for Part 3 and your $2 participant fee soon! </br> 
                We will send you the bonus payments for Part 1 and Part 2 in approximately 2 weeks. </br>
                </div>`);
            }
            if (trialcounter == 40) { 
                on_finish_callback();
                jsPsych.data.reset();
            }
        },
        preload_images: [instructions_images, control_images, instruct_img],
        on_finish: () => on_finish_callback(),
        on_close: () => on_finish_callback()

    });
};

function saveData() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data.php'); // change 'write_data.php' to point to php script.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            //   console.log(response.success);
        }
    };
    xhr.send(jsPsych.data.get().json());
}