function ExpenseForm(props) {
  return (
    <section>
      <h2 className="a11y-hidden">지출 생성 영역</h2>
      <form>
        <fieldset>
          <label>Title</label>
          <input type="text" placeholder="지출 내역을 입력하세요" />
        </fieldset>
        <fieldset>
          <label>Price</label>
          <input
            type="number"
            min="0"
            step="100"
            placeholder="숫자만 입력 가능합니다."
          />
        </fieldset>
        <fieldset>
          <label>Date</label>
          <input type="date" />
        </fieldset>
      </form>
      <div>
        <button type="submit">지출💰</button>
      </div>
    </section>
  );
}

export default ExpenseForm;
