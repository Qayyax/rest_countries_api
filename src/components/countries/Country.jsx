export default function Country({data}) {

  return (
  <div>
      <img src={data.flags.png} alt={data.flags.alt}/>
      <div>
        <h2>{data.name}</h2>
        <div>
          <p><span>Population</span>: {data.population}</p>
          <p><span>Region</span>: {data.region}</p>
          <p><span>Capital</span>: {data.capital}</p>
        </div>
      </div>
    </div>
  )
}
