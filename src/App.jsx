
import "./index.css"
// import Hoya from "./images/hoya.png";
function App() {
  return (
    <div className="bg-red-100 min-h-screen"> 
         <header className = "bg-blue-100 h-12 md:h-20">
                 <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
                  <div>hoya's portfolio</div>
                  {/* <img className="w-11" src={Hoya}/>; */}
                       <ul class="flex gap-2 md:get-8 text-xs sm:text-sm md:text-base">
                          <li className ="bg-indigo-300 btn-style">Introduce</li>
                          <li className ="bg-purple-300 btn-style">Portfolio</li>
                          <li className ="bg-blue-300 btn-style">contact Me</li>
                       </ul>
                 </div> 
         </header>
         <main>
          {/* {introduce} */}
          <div className = "bg-green-300 max-w-screen-xl mx-auto h-96 flex justify-center items-center" > 여기에 나를 소개하는 내용을 적으면 됩니다.</div>
              
               <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center gap-8 py-8">
               {/* grid-cols-1 그리드로 정렬되면 세로로 나타나는데 가로에 몇개를 넣을지 정하는 거*/}
                  <li className = "bg-purple-300 w-60 h-72 rounded-xl">
                     <div className ="bg-yellow-100 w-full h-1/2 rounded-t-xl"> 프로젝트 이미지</div>
                     {/* object-fit : cover 이미지 사용시 적용 */}
                     <div className="text-xl font-bold mt-2 mx-2"> 프로젝트 제목</div>
                     <div className=" mt-2 mx-2 "> 프로젝트 간략한 설명</div>
                  </li>
                  <li className = "bg-purple-300 w-60 h-72 rounded-xl">
                     <div className ="bg-yellow-100 w-full h-1/2 rounded-t-xl"> 프로젝트 이미지</div>
                     {/* object-fit : cover 이미지 사용시 적용 */}
                     <div className="text-xl font-bold mt-2 mx-2"> 프로젝트 제목</div>
                     <div className=" mt-2 mx-2 "> 프로젝트 간략한 설명</div>
                  </li>
                  <li className = "bg-purple-300 w-60 h-72 rounded-xl">
                     <div className ="bg-yellow-100 w-full h-1/2 rounded-t-xl"> 프로젝트 이미지</div>
                     {/* object-fit : cover 이미지 사용시 적용 */}
                     <div className="text-xl font-bold mt-2 mx-2"> 프로젝트 제목</div>
                     <div className=" mt-2 mx-2 "> 프로젝트 간략한 설명</div>
                  </li>
                  <li className = "bg-purple-300 w-60 h-72 rounded-xl">
                     <div className ="bg-yellow-100 w-full h-1/2 rounded-t-xl"> 프로젝트 이미지</div>
                     {/* object-fit : cover 이미지 사용시 적용 */}
                     <div className="text-xl font-bold mt-2 mx-2"> 프로젝트 제목</div>
                     <div className=" mt-2 mx-2 "> 프로젝트 간략한 설명</div>
                  </li>
                  <li className = "bg-purple-300 w-60 h-72 rounded-xl">
                     <div className ="bg-yellow-100 w-full h-1/2 rounded-t-xl"> 프로젝트 이미지</div>
                     {/* object-fit : cover 이미지 사용시 적용 */}
                     <div className="text-xl font-bold mt-2 mx-2"> 프로젝트 제목</div>
                     <div className=" mt-2 mx-2 "> 프로젝트 간략한 설명</div>
                  </li>
                  <li className = "bg-purple-300 w-60 h-72 rounded-xl">
                     <div className ="bg-yellow-100 w-full h-1/2 rounded-t-xl"> 프로젝트 이미지</div>
                     {/* object-fit : cover 이미지 사용시 적용 */}
                     <div className="text-xl font-bold mt-2 mx-2"> 프로젝트 제목</div>
                     <div className=" mt-2 mx-2 "> 프로젝트 간략한 설명</div>
                  </li>
                  <li className = "bg-purple-300 w-60 h-72 rounded-xl">
                     <div className ="bg-yellow-100 w-full h-1/2 rounded-t-xl"> 프로젝트 이미지</div>
                     {/* object-fit : cover 이미지 사용시 적용 */}
                     <div className="text-xl font-bold mt-2 mx-2"> 프로젝트 제목</div>
                     <div className=" mt-2 mx-2 "> 프로젝트 간략한 설명</div>
                  </li>
                  <li className = "bg-purple-300 w-60 h-72 rounded-xl">
                     <div className ="bg-yellow-100 w-full h-1/2 rounded-t-xl"> 프로젝트 이미지</div>
                     {/* object-fit : cover 이미지 사용시 적용 */}
                     <div className="text-xl font-bold mt-2 mx-2"> 프로젝트 제목</div>
                     <div className=" mt-2 mx-2 "> 프로젝트 간략한 설명</div>
                  </li>

              </ul>
              
         </main>
    </div>
  );
}
export default App;
