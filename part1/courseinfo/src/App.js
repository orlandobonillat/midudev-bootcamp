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

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((part, index) => (
      <Part key={index} name={part.name} exercises={part.exercises} />
    ))}
  </div>
);

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
