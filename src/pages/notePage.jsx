import React from 'react';
import {useQuery,gql} from '@apollo/client'
import Note from '../components/Note';
const GET_NOTE = gql`
query note($id: ID!) {
  note(id: $id) {
    id
    createdAt
    content
    favoriteCount
    author {
      userName
      id
      avatar
    }
  }
}


`
const NotePage = (props) => {

  const id = props.match.params.id;
  const {data,error,loading} = useQuery(GET_NOTE,{variables:{id}});
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
// if there is an error fetching the data, display an error message
  if (error) return <p>Error! Note not found</p>;
//
  return (
<Note note={data.note}/>
  );
};

export default NotePage;