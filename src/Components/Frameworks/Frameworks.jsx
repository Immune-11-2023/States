
const Frameworks = ( { info }) => {

  const { name, description, url, logo } = info;


  return (
    <div>
      <p>Render</p>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url}>Enlace</a>
      <img style={{ width: '100px' }} src={logo} alt={`logo_${name}`} />
    </div>
  );
};

export default Frameworks;
