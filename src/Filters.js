const Filters = ({ filterBreeds, orderBreeds }) => {
  return (
    <section className="filters container">
      <div className="filters__container">
        <div className="filters__item">
          <label htmlFor="word" className="filters__label">Etsi rotua</label>
          <input id="word" type="text" className="filters__input" onChange={filterBreeds} />
        </div>
        <div className="filters__item">
          <label htmlFor="order" className="filters__label">Järjestä</label>
          <select id="order" className="filters__input" onChange={orderBreeds}>
            <option value="popular-desc">Suosituin ensin</option>
            <option value="popular-asc">Vähiten suosittu ensin</option>
            <option value="alphabet-asc">Aakkosjärjestys A-Ö</option>
            <option value="alphabet-desc">Aakkosjärjestys Ö-Ä</option>
          </select>
        </div>
        <div className="filters__item filters__radios filters__item--wide" role="radiogroup">
          <h2 className="filters__label filters__heading">Suodata rotuja</h2>
          <ul className="filters__radios-list">
            <li className="filters__radios-item">
              <input id="pieni" className="filters__radios-input" type="radio" name="show" value="pieni" />
              <label className="filters__label filters__radios-label" htmlFor="pieni">Pienet rodut</label>
            </li>
            <li className="filters__radios-item">
              <input id="keskikokoinen" className="filters__radios-input" type="radio" name="show" value="keskikokoinen" />
              <label className="filters__label filters__radios-label" htmlFor="keskikokoinen">Keskikokoiset rodut</label>
            </li>
            <li className="filters__radios-item">
              <input id="suuri" className="filters__radios-input" type="radio" name="show" value="suuri" />
              <label className="filters__label filters__radios-label" htmlFor="suuri">Suuret rodut</label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Filters;