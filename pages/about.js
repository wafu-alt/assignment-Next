const storesCall = async () => {
  const res = await fetch("api/stores");
  const data = await res.json();
  console.log(data);
};
storesCall();
export default function About() {
  return <div>About</div>;
}
