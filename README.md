# Moni Money

배포 URL : https://yws1502.github.io/moni_money/

## 뭐니뭐니해도 Moni Money
<div align="center">
  <img src="https://user-images.githubusercontent.com/77317312/155909795-5e68632d-53f4-4100-97ad-49f6a041f3fb.png" />
</div>


## 소개 🙋‍♂️
react를 활용한 간단한 가계부 앱

로컬 스토리지를 통해 지출 내역 저장

해를 기준으로 필터 기능 구현

데이터의 값을 계산해 차트 그래프 구현


## 회고, 배운점

리액트의 state관리에 대해 배울 수 있었으며, react로 구현을 했지만 차후 next와 같은 SSR을 구현할 때를 대비해 시멘틱한 마크업과 메타 태그의 신경을 쓰면서 코드를 작성했다. 

Moni Money를 구현하면서 `useState`의 set함수는 비동기로 일을 수행한다는 점을 새로 알게 되었다.

유저가 새로운 지출 내역을 작성한 후 제출된 데이터를 저장하는 로직을 `/src/components/ExpenseForm.jsx`에 코드를 작성했다.

새로운 지출 데이터가 제출이 되면 로컬 스토리지에 담고 `/src/App.js`에서 빼오는 식으로 코드를 작성했다.

하지만 직접적으로 refresh를 해줘야 화면에 보여지게 되는 문제가 발생했다.(상태를 정의하지 않아 바뀐 상태가 없으므로 재렌더링을 안한 것으로 추정). 
`useState`의 set함수로 상태를 바꾸는 식으로 생각을 했지만 이번에는 다른 문제가 발생했다.

값을 바꾸고 새로 갱신된 상태를 localStorage에 넣었지만 localStorage에 저장되는 값이 자꾸 최신 상태가 아닌 이전 상태가 저장이 되었다. 디버깅을 하는 과정에서 set함수 안에 있는 친구들은 마지막에 console이 찍힌다는 것을 보고 값을 localStorage에 담는 작업 이후에 set함수가 실행되어 비동기 처리처럼 일을 한다는 것을 알게 되었다.

딥다이브를 읽으면서 자바스크립트의 작동원리에 대해 배워둔 것이 큰 도움이 됐다.

결과적으로 set함수 안에 콜백함수를 만들고 콜백함수에서 localStorage에 저장하는 로직으로 코드를 작성했다.
