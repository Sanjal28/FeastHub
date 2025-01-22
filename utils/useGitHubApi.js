import { useState,useEffect } from "react";
import { GITHUB_API } from "./img";

// custom hook
const useGitHubApi = () => {
  const [coninfo, setConInfo] = useState("");
  useEffect(() => {
    fetchUserInfo();
  }, []);
  const fetchUserInfo = async () => {
    const info = await fetch(GITHUB_API);
    const json = await info.json();
    setConInfo(json);
  };
  return coninfo;
};
export default useGitHubApi;