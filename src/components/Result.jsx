import React from "react";

function Result(props) {
  const { repo } = props;
  console.log(repo.data);

  const listRepo =
    repo.length !== 0 ? (
      repo.data.map((item) => <li className="list-disc list-inside " key={item.id}><a href={item.html_url}>{item.name}</a></li>)
    ) : (
      <li className="list-disc list-inside hidden">no repo found</li>
    );

  return (
    <>
      <div className="flex flex-row flex-nowrap m-3">
        <ul className="list-disc list-inside">{listRepo}</ul>
      </div>
    </>
  );
}

export default Result;
