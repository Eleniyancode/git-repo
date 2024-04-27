import { React } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="mb-0 ml-auto  flex justify-center items-center flex-col h-screen w-screen ">
        <div className="bg-slate-600 w-1/2 h-3/4 ">
          <div className="w-full h-full ">
          <h1 className="mt-5 mb-5 text-xl font-semibold text-center">Repositories Search</h1>
          <SearchBar />
          </div>
          
        </div>{" "}
      </div>
    </>
  );
}

export default App;
