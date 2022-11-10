document.getElementById("currentDate").value = new Date()
        .toISOString()
        .substring(0, 10);

      var price = document.getElementById("price");
      var mini = document.getElementById("mini");

      function miniOption() {
        if (mini.checked) {
          price.value = parseInt(price.value) + 2000;
        } else {
          price.value = parseInt(price.value) - 2000;
        }
      }

      mini.addEventListener("change", miniOption);

      function priceCal() {
        var term = $("#term").val();
        noMini.checked = true;
        mini.checked = false;

        if (term == "일주일") {
          price.value = "7000";
        } else if (term == "2주") {
          price.value = "13000";
        } else if (term == "15일 이상") {
          price.value = "20000";
        }
      }

      document.getElementById("term").addEventListener("change", priceCal);

      $(document).ready(function () {
        emailjs.init("QHRm4EKaGVeosJWZR");
        $("input[name=submit]").click(function (event) {
          event.preventDefault();

          var miniBool;

          if (document.getElementById("mini").checked) {
            miniBool = "추가(+2,000원)";
          } else {
            miniBool = "추가 안 함"
          }

          var templateParams = {
            //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            name: $("input[name=name]").val(),
            phone: $("input[name=phone]").val(),
            email: $("input[name=email]").val(),
            size: $("#size_select").val(),
            cNumber: $("#c_number").val(),
            destination: $("#destination").val(),
            mini: miniBool,
            term: $("#term").val(),
            date_start: $("#currentDate").val(),
            date_end: $("#date_end").val(),
            time: $("#time").val(),
            price: $("#price").val(),
            address: $("#address").val(),
          };

          var name = document.getElementById("username");
          var email = document.getElementById("useremail");
          var phone = document.getElementById("userphone");
          var dateStart = document.getElementById("currentDate");
          var dateEnd = document.getElementById("date_end");
          var address = document.getElementById("address");

          if(name.value == "" || email.value == "" || phone.value == "" || dateEnd.value == "" || address.value == ""){
            swal("필수정보를 입력해주세요", "* 표시는 필수입니다", "error");
          } else {
            emailjs
            .send("carryvilly", "template_4imxwbm", templateParams)
            //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
            .then(
              function (response) {
                // console.log("SUCCESS!", response.status, response.text);
                swal("주문이 완료되었습니다!", "메일함을 확인해주세요!","success").then(okay => {
                    window.close();
                }) ;
              },
              function (error) {
                // console.log("FAILED...", error);
                swal("잠시 후 다시 시도해주세요...", "", "error");
              }
            );
          }
        });
      });

      document.addEventListener("submit", (event)=>{
        event.preventDefault();
      })