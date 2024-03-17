interface CardProps {
  company: string;
  logo: string;
}

const Card = ({ company, logo }: CardProps) => {
  return (
    <div className="card">
      <img src={logo} alt={company} />
      <p>{company}</p>
    </div>
  );
};

export default Card;
