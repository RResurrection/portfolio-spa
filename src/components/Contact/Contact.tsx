import Form from "./Form";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[932px] mx-auto">
      <div className="flex flex-col justify-center items-center mb-[48px]">
        <h2 className="text-[30px] sm:text-6xl mb-[15px]">
          Lets Design Together
        </h2>
        <p className="text-[21px]">Unleash Your Creativity and Collaborate</p>
      </div>

      <Form />
    </div>
  );
};

export default Contact;
