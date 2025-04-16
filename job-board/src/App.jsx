import { useState, useEffect } from "react";

const ID_URL = "https://hacker-news.firebaseio.com/v0/jobstories.json";
const ITEMS_PER_PAGE = 6;

function JobPosting({ title, by, time, url }) {

  const formatTime = new Date(time*1000).toLocaleString();

  return (
    <div>
      <div><a href={url}>{title}</a></div>
      <span>By: {by} ・ {formatTime}</span>
    </div>
  );
}

export default function App() {
  const [jobIds, setJobIds] = useState([]);
  const [jobDetails, setJobDetails] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [fetchingDetails, setFetchingDetails] = useState(false);

  const fetchJobs = async () => {
    const response = await fetch(ID_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const jobs = await response.json();
    setJobIds(jobs);

  };

  const fetchJobDetails = async () => {
    setFetchingDetails(true);

    const jobIdsforPage = jobIds.slice(0, pageCount * ITEMS_PER_PAGE);

      const fetchJobDetail = async (id) => {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );
        return response.json();
      };

      const jobDetailsArray = await Promise.all(
        jobIdsforPage.map(async (jobId) => fetchJobDetail(jobId)),
      );
      setJobDetails(jobDetailsArray);

      setFetchingDetails(false);
    }

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (jobIds.length > 0) {
      fetchJobDetails();
    }
  }, [jobIds, pageCount])

  const jobLengthCheck = jobIds.length > pageCount * ITEMS_PER_PAGE;

  return (
    <div>
      <h1>Hacker News Job Board</h1>
      {jobDetails.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          {jobDetails.map((job) => (
            <JobPosting {...job} />
          ))}
          {jobLengthCheck && 
          <button
            onClick={()=>setPageCount(pageCount + 1)}
          >{fetchingDetails ? "Loading" : "Load more jobs"}</button>
          }
        </div>
      )}
    </div>
  );
}
