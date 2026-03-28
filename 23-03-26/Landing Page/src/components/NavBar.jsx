function NavBar() {
  return (
    <>
    
    <div className="flex justify-between px-9 py-9">
      <div className="flex gap-5">
        <div>SkyExplorer</div>
      </div>

      <div className="flex gap-6">
        <div>Features</div>
        <div>Method</div>
        <div>Price</div>
        <div>Changelog</div>
      </div>

      <div className="flex">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Login
        </button>
      </div>
      </div>
      
    </>
  );
}
export default NavBar;
