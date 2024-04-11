
const Form = ({ children, title }) => {
  return (
    <div className="hero my-5">
      <div className="hero-content flex-col lg:flex-row justify-around w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{title} Now!</h1>
          <p className="py-6 max-w-[600px]">
            Are you dreaming of wide-open spaces, building your dream home from
            the ground up, or investing in the future potential of undeveloped
            land? Look no further than Acre Dreams, your trusted resource for
            all things land real estate.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
            {children}
            
        </div>
      </div>
    </div>
  );
};

export default Form;
