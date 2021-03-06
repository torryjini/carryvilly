class luggage {
  constructor(summary, price, size, details, status, wheels, password, url, target){
    this.summary = summary;
    this.price = price;
    this.size = size;
    this.details = details;
    this.status = status;
    this.wheels = wheels;
    this.password = password;
    this.url = url;
    this.target = target;
  }
}

const blankUrl = "javascript:return"
const orderUrl = "javascript: return false"

const targetNone = "_self"
const targetBlank = "_blank"

const product = [
    {
        summary : "기내용",
        price : "000",
        size : 20,
        details : "No.2와 같은 제품, 다른 색상입니다. 겉에 스크래치는 있으나 사용에는 전혀 지장 없습니다. 4/23부터 대여가능",
        status : "대여가능",
        wheels : "4",
        password : "000",
        url : orderUrl,
        //target :targetNone
    },
    {
        summary : "기내용",
        price : "000",
        size : 20,
        details : "No.1와 같은 제품, 다른 색상입니다. 겉에 스크래치는 있으나 사용에는 전혀 지장 없습니다.",
        status : "대여가능",
        wheels : "4",
        password : "000",
        url : orderUrl,
        //target :targetBlank        
    },
    {
        summary : "화물용/중형",
        price : "000",
        size : 24,
        details : "No.4와 세트로 나온 제품으로 대형 캐리어입니다. 사용에는 전혀 지장 없습니다.",
        status : "대여가능",
        wheels : "4",
        password : "000",
        url : orderUrl,
        //target :targetBlank
    },
    {
        summary : "기내용",
        price : "000",
        size : 20,
        details : "No.3와 세트로 나온 제품으로 일반형 캐리어입니다. 사용에는 전혀 지장 없습니다.",
        status : "대여가능",
        wheels : "4",
        password : "000",
        url : orderUrl,
        //target :targetBlank
    },
    {
        summary : "기내용",
        price : "000",
        size : 20,
        details : "바퀴 수리한 제품으로 바퀴를 끄는데 살짝 뻑뻑한 감이 있으나 사용에는 지장 없습니다.",
        status : "대여가능",
        wheels : "4",
        password : "000",
        url : orderUrl,
        //target :targetBlank
    },
    {
        summary : "기내용",
        price : "000",
        size : 20,
        details : "생활 스크래치가 있으나 사용에는 지장 없습니다.",
        status : "대여가능",
        wheels : "4",
        password : "243",
        url : orderUrl,
        //target :targetBlank
    },
    {
      summary : "기내용",
      price : "000",
      size : 20,
      details : "비밀번호 잠금장치의 고장으로 잠기지 않습니다. 사용에는 지장 없습니다.",
      status : "대여가능",
      wheels : "2",
      password : "000",
      url : orderUrl,
      //target :targetBlank
  },
  {
    summary : "화물용/중형",
    price : "000",
    size : 24,
    details : "겉에 스크래치가 많고 옆으로 세울시 받침대 한개가 유실되었습니다. 그외 사용에는 지장 없습니다.",
    status : "대여가능",
    wheels : "4",
    password : "000",
    url : orderUrl,
    //target :targetBlank
  },
  {
    summary : "기내용/소형",
    price : "000",
    size : 20,
    details : "사용감 거의 없는 좋은 제품입니다.",
    status : "대여가능",
    wheels : "4",
    password : "000",
    url : orderUrl,
    //target :targetBlank
  },
  {
    summary : "미니캐리어",
    price : "000",
    size : 14,
    details : "새 제품입니다.",
    status : "대여가능",
    wheels : "0",
    password : "000",
    url : orderUrl,
    //target :targetBlank
  },
  {
    summary : "미니캐리어",
    price : "000",
    size : 14,
    details : "새 제품입니다.",
    status : "대여가능",
    wheels : "0",
    password : "000",
    url : orderUrl,
    //target :targetBlank
  },
  {
    summary : "기내용/소형",
    price : "000",
    size : 20,
    details : "살짝 금이 간 부분이 있으나(수리예정) 사용에는 전혀 지장 없습니다.",
    status : "대여가능",
    wheels : "4",
    password : "000",
    url : orderUrl,
    //target :targetBlank
  },
  {
    summary : "화물형/중형",
    price : "000",
    size : 24,
    details : "스크래치가 조금 있으나 사용에는 전혀 지장 없습니다.",
    status : "대여가능",
    wheels : "4",
    password : "000",
    url : orderUrl,
    //target :targetBlank
  },
  {
    summary : "화물형/대형",
    price : "000",
    size : 28,
    details : "겉면에 얼룩이 조금 묻어있으나 사용한 적이 거의 없는 좋은 제품입니다.",
    status : "대여가능",
    wheels : "4",
    password : "906",
    url : orderUrl,
    //target :targetBlank
  },
  {
    summary : "화물형/중형",
    price : "000",
    size : 24,
    details : "아랫 부분에 까진 부분이 조금 있으나 사용에는 전혀 이상없습니다.",
    status : "대여가능",
    wheels : "4",
    password : "613",
    url : orderUrl,
    //target :targetBlank
  },
  {
    summary : "기내용/소형",
    price : "000",
    size : 20,
    details : "사용감이 거의 없는 좋은 제품입니다.",
    status : "대여가능",
    wheels : "4",
    password : "000",
    url : orderUrl,
    //target :targetBlank
  },
  {
    summary : "기내용/소형",
    price : "000",
    size : 20,
    details : "사용감이 거의 없는 좋은 제품입니다.",
    status : "대여가능",
    wheels : "4",
    password : "000",
    url : orderUrl,
    //target :targetBlank
  },
]


// 캐리어 관련

for(let i = 0; i < product.length; i++){
  if(product[i].size == 20){
    document.querySelector("#inch-20-list").innerHTML += `
    <div class="col-lg-4 col-sm-6 mb-4">
    <!-- product item ${i+1}-->
    <div class="product-item">
      <a
        class="product-link"
        data-bs-toggle="modal"
        href="#productModal${i+1}"
      >
        <div class="product-hover">
          <div class="product-hover-content">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <div class="${product[i].status}">${product[i].status}</div>
        <img
          class="img-fluid"
          src="assets/img/product/thumbnail/thumbnail_${i+1}.jpg"
          alt="..."
        />
      </a>
      <div class="product-caption">
        <div class="product-caption-heading">No.${i+1}</div>
        <div class="product-caption-subheading text-muted">
        ${product[i].summary}/${product[i].size}인치
        </div>
      </div>
    </div>
  </div>
    `
  } else if(product[i].size >= 24) {
    document.querySelector("#inch-24-list").innerHTML += `
    <div class="col-lg-4 col-sm-6 mb-4">
    <!-- product item ${i+1}-->
    <div class="product-item">
      <a
        class="product-link"
        data-bs-toggle="modal"
        href="#productModal${i+1}"
      >
        <div class="product-hover">
          <div class="product-hover-content">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <div class="${product[i].status}">${product[i].status}</div>
        <img
          class="img-fluid"
          src="assets/img/product/thumbnail/thumbnail_${i+1}.jpg"
          alt="..."
        />
      </a>
      <div class="product-caption">
        <div class="product-caption-heading">No.${i+1}</div>
        <div class="product-caption-subheading text-muted">
        ${product[i].summary}/${product[i].size}인치
        </div>
      </div>
    </div>
  </div>
    `
  } else {
    document.querySelector("#mini-list").innerHTML += `
    <div class="col-lg-4 col-sm-6 mb-4">
    <!-- product item ${i+1}-->
    <div class="product-item">
      <a
        class="product-link"
        data-bs-toggle="modal"
        href="#productModal${i+1}"
      >
        <div class="product-hover">
          <div class="product-hover-content">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <div class="${product[i].status}">${product[i].status}</div>
        <img
          class="img-fluid"
          src="assets/img/product/thumbnail/thumbnail_${i+1}.jpg"
          alt="..."
        />
      </a>
      <div class="product-caption">
        <div class="product-caption-heading">No.${i+1}</div>
        <div class="product-caption-subheading text-muted">
        ${product[i].summary}/${product[i].size}인치
        </div>
      </div>
    </div>
  </div>
    `
  }
    
    document.querySelector(".modal-list").innerHTML += `
    <!-- product item ${i+1} modal popup-->
    <div
      class="product-modal modal fade"
      id="productModal${i+1}"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-bs-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project summary-->
                  <h3 class="text-uppercase">[${product[i].status}] No.${i+1}_${product[i].summary}</h3>
                  <br>
                  <!--<p class="item-intro text-muted">
                  </p>-->
                  <img
                    class="img-fluid d-block mx-auto"
                    src="assets/img/product/detail_${i+1}.jpg"
                    alt="..."
                  />
                    <h4>제품번호 : No.${i+1}_${product[i].summary}</h4>
                    <h4>대여여부 : ${product[i].status}</h4>
                    <h4>가격 : 일주일 대여 5,000원/일주일 이상 대여 10,000원/2주 이상 대여는 15,000원</h4>
                    <h4>사이즈 : ${product[i].size}인치</h4>
                    <h4>바퀴갯수 : ${product[i].wheels}개</h4>
                    <p><strong>특징 :</strong> ${product[i].details}</p>
                    <br>
                  <a class="order-link" href=${product[i].url}>
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      type="button"
                    >
                      주문하기
                    </button>
                  </a>
                  <button
                    class="btn btn-primary btn-xl text-uppercase"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times me-1"></i>
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}

function sizeTabHandler() {
    const inch20 = document.querySelector("#inch-20")
    const inch24 = document.querySelector("#inch-24")
    const mini = document.querySelector("#mini")

    if(inch20.checked) {
        document.querySelector("#inch-20-list").classList.remove("hidden")
        document.querySelector("#inch-24-list").classList.add("hidden")
        document.querySelector("#mini-list").classList.add("hidden")
    } else if(inch24.checked) {
        document.querySelector("#inch-20-list").classList.add("hidden")
        document.querySelector("#inch-24-list").classList.remove("hidden")
        document.querySelector("#mini-list").classList.add("hidden")
    } else if(mini.checked) {
        document.querySelector("#inch-20-list").classList.add("hidden")
        document.querySelector("#inch-24-list").classList.add("hidden")
        document.querySelector("#mini-list").classList.remove("hidden")
    }
}

window.addEventListener("change", sizeTabHandler)