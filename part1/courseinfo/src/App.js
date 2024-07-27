/**
Esto se llama oneliner es decir, una sola línea sirve para definir una función extrayendo las propiedades de un objeto

const Title = ({ course }) => <h1>{course}</h1>;

*/

const Header = ({ course }) => {
  /*Tipos de desestructuración de objetos
    Esto: const course = props.course;
    Esto: const { course } = props;
    Es lo mismo que la linea */

  return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => (
  <div>
    <p>
      {part} {exercises}
    </p>
  </div>
);
const Content = () => (
  <div>
    <Part part="Fundamentals of React" exercises={10} />
    <Part part="Using props to pass data" exercises={7} />
    <Part part="State of a component" exercises={15} />
  </div>
);

const Total = ({ exercises1, exercises2, exercises3 }) => (
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
);

const App = () => {
  const course = "Half Stack application development";

  const exercises1 = 10;

  const exercises2 = 7;

  const exercises3 = 15;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
