     function goToYoutubeChannel() {
        window.location.href = "https://youtube.com/@LifewoodDataTechnology/videos";
      }
      var lifewood = document.getElementById("lifewood");
      if (lifewood) {
        lifewood.addEventListener("click", function (e) {
          window.location.href = "home-page1.html";
        });
      }

      var buttonContainer = document.getElementById("buttonContainer0");
      if (buttonContainer) {
        buttonContainer.addEventListener("click", function (e) {
          window.location.href = "./ai-data-services.html";
        });
      }

      var button = document.getElementById("button");
      if (button) {
        button.addEventListener("click", function (e) {
          window.location.href = "./ai-projects.html";
        });
      }

      var buttonContainer1 = document.getElementById("buttonContainer1");
      if (buttonContainer1) {
        buttonContainer1.addEventListener("click", function (e) {
          window.location.href = "./tansformation.html";
        });
      }

      var buttonContainer2 = document.getElementById("buttonContainer2");
      if (buttonContainer2) {
        buttonContainer2.addEventListener("click", function (e) {
          window.location.href = "./global-scale.html";
        });
      }

      var buttonContainer3 = document.getElementById("buttonContainer3");
      if (buttonContainer3) {
        buttonContainer3.addEventListener("click", function (e) {
          window.location.href = "./our-company.html";
        });
      }

      var buttonContainer4 = document.getElementById("buttonContainer4");
      if (buttonContainer4) {
        buttonContainer4.addEventListener("click", function (e) {
          window.location.href = "./careers.html";
        });
      }

      var button1 = document.getElementById("button1");
      if (button1) {
        button1.addEventListener("click", function (e) {
          window.location.href = "./contact.html";
        });
      }

      var logo = document.getElementById("logo");
      if (logo) {
        logo.addEventListener("click", function (e) {
          window.location.href = "home-page1.html";
        });
      }

      var buttonContainer = document.getElementById("buttonContainer");
      if (buttonContainer) {
        buttonContainer.addEventListener("click", function (e) {
          window.location.href = "./contact.html";
        });
      }

      var aIDataServices = document.getElementById("aIDataServices");
      if (aIDataServices) {
        aIDataServices.addEventListener("click", function (e) {
          window.location.href = "home-page1.html";
        });
      }

      var aIProjectsText = document.getElementById("aIProjectsText");
      if (aIProjectsText) {
        aIProjectsText.addEventListener("click", function (e) {
          window.location.href = "./ai-projects.html";
        });
      }

      var englishText = document.getElementById("englishText");
      if (englishText) {
        englishText.addEventListener("click", function (e) {
          window.location.href = "/index.html";
        });
      }

      var chineseText = document.getElementById("chineseText");
      if (chineseText) {
        chineseText.addEventListener("click", function (e) {
          window.location.href = "/ch/index.html";
        });
      }

      var transformationText = document.getElementById("transformationText");
      if (transformationText) {
        transformationText.addEventListener("click", function (e) {
          window.location.href = "./tansformation.html";
        });
      }

      var globalScaleText = document.getElementById("globalScaleText");
      if (globalScaleText) {
        globalScaleText.addEventListener("click", function (e) {
          window.location.href = "./global-scale.html";
        });
      }

      var ourCompanyText = document.getElementById("ourCompanyText");
      if (ourCompanyText) {
        ourCompanyText.addEventListener("click", function (e) {
          window.location.href = "./our-company.html";
        });
      }

      var careersText = document.getElementById("careersText");
      if (careersText) {
        careersText.addEventListener("click", function (e) {
          window.location.href = "./careers.html";
        });
      }
      var lanCh = document.getElementById("buttonCh");
      if (lanCh) {
        lanCh.addEventListener("click", function (e) {
          window.location.href = "./ch";
        });
      }

var buttonToPageMap = {
  'readMoreDataExtraction': './data-extraction.html',
  'readMoreMachineLearning': './m-l.html',
  'readMoreGenealogy': './genealogy.html',
  'readMoreNaturalLanguageProcessing': './language-processing.html',
  'readMoreCustomerService': './customer-service.html',
  'readMoreComputerVision': './computer-vision.html',
  'readMoreAutonomousDriving': './autonomous-driving.html',
};

// Adding event listeners for each "Read More" button
Object.keys(buttonToPageMap).forEach(function(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', function() {
      window.location.href = buttonToPageMap[buttonId];
    });
  }
});