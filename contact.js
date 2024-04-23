
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

      var buttonContainer1 = document.getElementById("buttonContainer1");
      if (buttonContainer1) {
        buttonContainer1.addEventListener("click", function (e) {
          window.location.href = "./ai-projects.html";
        });
      }

      var buttonContainer2 = document.getElementById("buttonContainer2");
      if (buttonContainer2) {
        buttonContainer2.addEventListener("click", function (e) {
          window.location.href = "./tansformation.html";
        });
      }

      var buttonContainer3 = document.getElementById("buttonContainer3");
      if (buttonContainer3) {
        buttonContainer3.addEventListener("click", function (e) {
          window.location.href = "./global-scale.html";
        });
      }

      var buttonContainer4 = document.getElementById("buttonContainer4");
      if (buttonContainer4) {
        buttonContainer4.addEventListener("click", function (e) {
          window.location.href = "./our-company.html";
        });
      }

      var buttonContainer5 = document.getElementById("buttonContainer5");
      if (buttonContainer5) {
        buttonContainer5.addEventListener("click", function (e) {
          window.location.href = "./careers.html";
        });
      }

      var button = document.getElementById("button");
      if (button) {
        button.addEventListener("click", function (e) {
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

      // Function to handle form submission
      function handleFormSubmit() {
        // Get form input values
        var firstName = document.querySelector('.input1').innerText;
        var lastName = document.querySelector('.input3').innerText;
        var email = document.querySelector('.input5').innerText;
        var company = document.querySelector('.input7').innerText;
        var country = document.querySelector('.input9').innerText;
        var phoneNumber = document.querySelector('.input11').innerText;
        var message = document.querySelector('.input13').innerText;

        // Compose the email body
        var emailBody = 'First Name: ' + firstName + '\n' +
                        'Last Name: ' + lastName + '\n' +
                        'Email: ' + email + '\n' +
                        'Company: ' + company + '\n' +
                        'Country: ' + country + '\n' +
                        'Phone Number: ' + phoneNumber + '\n' +
                        'Message: ' + message;

        // Construct the mailto link
        var mailtoLink = 'mailto:info@lifewood.com' +
                         '?subject=Contact Form Submission' +
                         '&body=' + encodeURIComponent(emailBody);

        // Open default email client with pre-populated data
        window.location.href = mailtoLink;
      }

      // Add click event listener to the "Contact Us" button
      var contactButton = document.querySelector('.button432');
      if (contactButton) {
        contactButton.addEventListener('click', handleFormSubmit);
      }
