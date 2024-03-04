import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";
import img from './Cloud.png';
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
const App = () => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [uploading, setUploading] = useState(false);
  const [copy,setCopy] = useState('')
  const changeFile = (e) => {
    setFile(e.target.files[0]);
  };
  const onUpload = () => {
    fileInput.current.click();
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(()=>{
      setCopy("'Link Copied to Clipboard'");
      setTimeout(()=>{
        setCopy('')
      },3000)
    })
  }; 
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);
        setUploading(true); // Start uploading
        const response = await uploadFile(data);
        setResult(response.path);
        setUploading(false); // Upload complete
      }
    };
    getImage();
  }, [file]);
  return (
    <div id="box" className="lg:flex justify-center items-center gap-2 m-auto w-1/2 mt-36 sm:block ">
      <div className="flex justify-center items-center m-auto h-1/2 w-1/2  ">
        <img src={img} alt="img" />
      </div>
      <div className="block justify-center items-center m-auto h-1/2 w-1/2 text-center pr-4">
        <h1 className="text-4xl font-semibold text-black py-2">File Sharing App</h1>
        <p className="text-xl font-normal py-2">Upload and share Your Files</p>
        <div className="flex justify-center items-center m-auto">
        <button onClick={onUpload} className="flex justify-center items-center  gap-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" ><FaCloudUploadAlt className="text-2xl" />Upload</button>
        </div>
        <input type="file" ref={fileInput} style={{ display: "none" }}  onChange={changeFile}/>
        {uploading && <p id="loader" className="text-center">Uploading...</p>}
        {result && (
          <div className="">
            <p>Here your link is: </p>
            <div className="flex items-center bg-white py-2 px-2 rounded-md">
              <a href={result} target="_blank" className="truncate max-w-full">{result}</a>
              <span onClick={copyToClipboard} className="cursor-pointer ml-2"><MdOutlineContentCopy /></span>
            </div>
            {copy && <p className="my-2 py-1 px-1 bg-white text-green-500 rounded-md">{copy}</p>}
          </div>
        )}
        <p id="p" className="my-2 mx-2 py-2 text-sm">
          🛈 By uploading you are agreeing to our Terms & services and Privacy
          Policy
        </p>
      </div>
    </div>
  );
};

export default App;
