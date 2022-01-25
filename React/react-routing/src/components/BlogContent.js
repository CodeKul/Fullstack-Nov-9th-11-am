import React from 'react';
import { useMatch, useParams } from 'react-router-dom';

export default function BlogContent({topics}) {


    const result = useMatch()

    const {topicId} = useParams()

    const topicContent = topics.find((t)=> t.id === Number(topicId))
  return <div>


      <h2>{topicContent.topicName}</h2>

      <p>{topicContent.description}</p>

      {topicContent.content.map(()=>{

      })}
  </div>;
}
