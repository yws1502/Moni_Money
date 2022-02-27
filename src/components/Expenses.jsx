function Expenses(props) {
  return (
    <div role="main">
      <section style={{ height: "100px", backgroundColor: "pink" }}>
        <h2 className="a11y-hidden">지출 내역 생성 폼</h2>
        지출 내역 생성 폼
      </section>
      <section style={{ backgroundColor: "rgb(163,204,163)" }}>
        <h2 className="a11y-hidden">지출 내역 정보 조회</h2>
        지출 내역 정보 조회
        <div>지출내역 filter</div>
        <div>지출 내역 그래프</div>
        <div>
          지출 내역
          <ul>
            <li>지출 내역 아이템</li>
            <li>지출 내역 아이템</li>
            <li>지출 내역 아이템</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Expenses;
