import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  async () => (await import("../components/comp2")).Comp2
);

function Page2() {
  return (
    <div>
      <DynamicComponent />
    </div>
  );
}

export default Page2;
