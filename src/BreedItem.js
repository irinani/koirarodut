const BreedItem = ({ breed }) => {
  const name = breed.name.charAt(0).toUpperCase() + breed.name.slice(1);
  let slug = breed.name.replace(/^\s+|\s+$/g, '').toLowerCase();
  slug = slug.replaceAll('ä', 'a').replaceAll('ö', 'o').replaceAll(' ', '-');

  return (
    <li className="breed">
      <h2 className="breed__name">{name}</h2>
      <div className="breed__specs">
        <p className="breed__specs-item">
          <span className="breed__specs-title">FCI-ryhmä:</span>
          <span className="breed__specs-value">{breed.fci}</span>
        </p>
        <p className="breed__specs-item">
          <span className="breed__specs-title">Rekisteröinnit:</span>
          <span className="breed__specs-value">{breed.amount}</span>
        </p>
        <p className="breed__specs-item">
          <span className="breed__specs-title">Koko:</span>
          <span className="breed__specs-value">{breed.size}</span>
        </p>
        <p className="breed__specs-item">
          <span className="breed__specs-title">Lisätietoja:</span>
          <span className="breed__specs-value"><a href={`https://www.hankikoira.fi/koirarodut/${encodeURI(slug)}`}>www.hankikoira.fi</a></span>
        </p>
      </div>
    </li>
  );
};

export default BreedItem;
