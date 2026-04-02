export default function Custom() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Custom Designs</h1>
      <div className="mt-10 border-2 border-dashed border-gray-300 p-20">
        <p>Upload your design to start</p>
        <input type="file" className="mt-4" />
      </div>
    </div>
  );
}

