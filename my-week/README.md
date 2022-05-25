## 내 일주일 평점 남기기 🟡🟡🟡🟡🟡


### 1. 구현 기능 🤔
- **1) 메인 페이지**
    - [ ]  일주일 평점 보여주기
        - 평점은 1~5까지 숫자 중 랜덤한 정수로, 새로고침 할 때마다 다름
        - 각 요일 옆 삼각형 버튼을 누르면 요일 평점 남기기 페이지로 이동하기
- **2) 평점 남기기 페이지**
    - [ ]  선택한 요일 보여주기
    - [ ]  동그라미를 눌러서 평점 입력하기 (1번째 동그라미 누르면 1점, 3번째 동그라미 누르면 3점)
    - [ ]  남기기 버튼을 누르면 이전 페이지로 이동하기
- **3) 평균 평점 보여주기 (메인 페이지 컴포넌트에 구성 or 하위 컴포넌트인 평균 평점 컴포넌트에 구성)**
    - [ ]  각 요일별 랜덤 정수로 구성된 점수의 평균을 구하기
    - [ ]  Reset 버튼을 누르면 평점 평균을 0으로 상태변화 시키기
    
### 2. 사용 기술 🛠
- **언어**
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> 
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">

- **라이브러리**
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

- **호스팅**
<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white">

### 3. 실행화면 💻
- **메인 화면**

![](https://velog.velcdn.com/images/hongsoom/post/ed02a20e-01a5-49cf-a0ca-4e89c23674e8/image.PNG)

- **상세 화면**

![](https://velog.velcdn.com/images/hongsoom/post/60e41dd1-5884-494d-a158-f8799425b418/image.PNG)

- **배포 사이트**
[내 일주일 평점 남기기 (클릭)](http://my-week.s3-website.ap-northeast-2.amazonaws.com)

### 4. 스스로에게 질문
- **Q1. 평균 평점 state를 메인 컴포넌트에?, 하위 컴포넌트인 평균 평점 컴포넌트에?**

    이 질문에 답을 할 수가 없다. 왜냐하면 나는 평균 평점 state를 사용하지 않았기 때문이다. 나는 랜덤 정수 state를 사용했다.
    내가 한 것에 대해 얘기를 해보겠다.
    우선 나는 랜덤 정수를 요일 수 만큼 보여줘야 하기 때문에 랜덤 정수를 state객체에 넣어주었다.
    그 후, 평균을 구하는 함수를 작성을 하고 거기 안에 조건을 걸어주었다. 랜덤 정수객체의 길이가 0이 된다면 0을 반환하는 조건.
    그리고 랜덤정수 상태변화 함수 안에서는 filter함수를 통해 랜덤 정수 객체에 0을 넣어주었다. 그래서 reset버튼을 누를 때 마다 랜덤 정수의 모든 값들은 0으로 변하고(상태변화) 평균 점수가 나오는 곳에 0이 출력된다.
    이걸 메인 컴포넌트에 작성하고 하위 컴포넌트인 평균 평점 컴포넌트에 넘겨 주었다. 평균 평점 컴포넌트는 props로 이 값들을 받고 화면에 출력 했다.
    즉, 평균 컴포넌트에 입장에서는 구현은 메인 컴포넌트에서 사용은 평균 컴포넌트에서 했다.

- **Q2. 과제 구현 간, 상태관리를 위해 useState를 사용해보고 배운 점**

    객체를 수정할 때는 예를들면 inputs[name] = value 처럼 직접 수정하면 안되고 spread 문법을 사용하여 기존 객체를 복사하여 새로운 객체를 만들고, 이 새로운 객체에서 상태를 업데이트를 해줘야한다. ex) ...inputs, [name]:value 
    이렇게 기존 객체를 복사하여 새로운 객체에 업데이트 작업을 하는 것을 불변성을 지킨다는 것이다. 불변성을 지켜줘야만 리액트가 컴포넌트의 상태가 업데이트 됐음을 감지할 수 있고 필요한 부분만을 리렌더링 할 수 있기 때문이다. 기존 상태를 직접 수정하는 경우 리렌더링 되지 않는다.

- **Q3. 랜덤 숫자가 아닌 평점 남기기 페이지에서 입력한 숫자를 반영하기 위해서는 어떻게 해야 할까?**
    
